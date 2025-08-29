// Java Code Compilation and Execution API
// Uses HuggingFace Spaces endpoint for Java compilation

import { NextRequest, NextResponse } from "next/server";

interface ExecutionRequest {
  code: string;
}

// The remote runner may return multiple shapes. Use a permissive any for pass-through.
type RemoteRunnerResponse = Record<string, unknown>;

const HUGGINGFACE_ENDPOINT = "https://uiuxarghya-test-jv.hf.space/run";

// Polling config
const POLL_INITIAL_DELAY_MS = 500;
const POLL_MAX_DELAY_MS = 3000;
const POLL_TIMEOUT_MS = 30_000; // overall timeout for polling

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

function resultUrlFromRunEndpoint(runEndpoint: string, jobId: string) {
  // runEndpoint may end with /run. Build <base>/result/<jobId>
  try {
    const url = new URL(runEndpoint);
    // remove trailing /run if present
    url.pathname = url.pathname.replace(/\/run\/?$/, "");
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    url.pathname += `result/${jobId}`;
    return url.toString();
  } catch (e) {
    // fallback
    return runEndpoint.replace(/\/run\/?$/, "") + `/result/${jobId}`;
  }
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();

  try {
    const body: ExecutionRequest = await req.json();

    if (!body.code || typeof body.code !== "string") {
      return NextResponse.json(
        { status: "error", output: "No code provided" },
        { status: 400 },
      );
    }

    const code = body.code.trim();
    if (!code) {
      return NextResponse.json(
        { status: "error", output: "Empty code provided" },
        { status: 400 },
      );
    }

    // Send request to HuggingFace /run endpoint
    const runResponse = await fetch(HUGGINGFACE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ code }),
    });

    if (!runResponse.ok) {
      const errorMessage = `Compilation service error: ${runResponse.status} - ${runResponse.statusText}`;
      console.error(
        "HuggingFace /run error:",
        runResponse.status,
        runResponse.statusText,
      );
      return NextResponse.json(
        {
          status: "error",
          output: errorMessage,
        },
        { status: 502 },
      );
    }

    const runData: RemoteRunnerResponse = await runResponse.json();

    // If the run returned an immediate result (not queued), forward it.
    // Some HF Spaces may return the actual run output directly.
    const runStatus = (runData as Record<string, unknown>).status;
    if (runData && runStatus && runStatus !== "queued") {
      const executionTime = Date.now() - startTime;
      return NextResponse.json({
        ...(runData as Record<string, unknown>),
        executionTime,
      });
    }

    // Otherwise expect a queued job with job_id
    const jobId = (runData as Record<string, unknown>)?.job_id as
      | string
      | undefined;
    if (!jobId) {
      // If no job id, return the runData as-is for debugging
      const executionTime = Date.now() - startTime;
      return NextResponse.json({
        ...(runData as Record<string, unknown>),
        executionTime,
      });
    }

    // Poll /result/{jobId} until finished or timeout
    const resultUrl = resultUrlFromRunEndpoint(HUGGINGFACE_ENDPOINT, jobId);
    let elapsed = 0;
    let delay = POLL_INITIAL_DELAY_MS;
    let finalData: Record<string, unknown> | null = null;

    while (elapsed < POLL_TIMEOUT_MS) {
      try {
        const res = await fetch(resultUrl, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!res.ok) {
          // treat non-200 as transient and retry
          console.warn("Result fetch non-ok, status:", res.status);
        } else {
          const data = (await res.json()) as Record<string, unknown>;

          // Sample shape: { status: 'finished', result: { status: 'success', stdout: '...', stderr: '', ... } }
          const status =
            (data.status as string) ||
            (data.result &&
              ((data.result as Record<string, unknown>).status as string));

          if (status === "finished" || status === "success") {
            // Prefer nested result if present
            const nested =
              data.result && typeof data.result === "object"
                ? (data.result as Record<string, unknown>)
                : data;
            finalData = { ...(nested as Record<string, unknown>) };
            // attach top-level status if available
            if (!finalData.status && typeof data.status === "string") {
              finalData.status = data.status;
            }
            break;
          }
          // Some endpoints return status: 'queued' or 'running' -> keep polling
        }
      } catch (err) {
        console.warn("Error polling /result:", err);
        // continue to retry until timeout
      }

      await sleep(delay);
      elapsed += delay;
      delay = Math.min(delay * 1.5, POLL_MAX_DELAY_MS);
    }

    const executionTime = Date.now() - startTime;

    if (!finalData) {
      // Timed out waiting for result
      return NextResponse.json(
        {
          status: "error",
          output: "Compilation service did not return a result in time.",
          job_id: jobId,
          executionTime,
        },
        { status: 504 },
      );
    }

    // Flatten finalData into a UI-friendly payload so existing UI doesn't need changes.
    // Common fields: status, stdout, stderr, exit_code, compile_time_ms, execution_time_ms
    const payload: Record<string, unknown> = {
      ...(finalData as Record<string, unknown>),
      executionTime,
      job_id: jobId,
      // keep raw runner response for debugging
      raw: finalData,
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error("API route error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { status: "error", output: "Invalid request JSON" },
        { status: 400 },
      );
    }

    // Network or other errors
    const isNetworkError =
      error instanceof TypeError && error.message.includes("fetch");
    const errorMessage = isNetworkError
      ? "Failed to connect to compilation service. Please check your internet connection."
      : "Internal server error. Please try again later.";

    return NextResponse.json(
      { status: "error", output: errorMessage },
      { status: 500 },
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    {
      status: "error",
      output: "Method not allowed. Use POST to execute Java code.",
    },
    { status: 405 },
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
