"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  Play,
  Loader2,
  RotateCw,
  Copy,
  DownloadCloud,
  ChevronDown,
  Trash2,
  ZoomIn,
  ZoomOut,
  FileText,
  Code,
  Terminal,
  Settings,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

const DEFAULT_CODE = `public class HelloWorld {
    public static void main(String[] args) {
        // Welcome to Javaistic Code Compiler
        // Write your Java code here and click Run to execute

        System.out.println("Hello, World!");
        System.out.println("Welcome to Java programming!");

        // Try some basic operations
        int x = 10;
        int y = 20;
        System.out.println("Sum: " + (x + y));
    }
}`;

const EXAMPLES: Record<string, string> = {
  "Hello World": `public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Welcome to Javaistic Code Compiler!");
        System.out.println("Start coding your Java programs here.");
        System.out.println("This compiler supports full Java syntax.");
    }
}`,
  "Variables & Data Types": `public class DataTypes {
    public static void main(String[] args) {
        // Primitive data types
        int age = 25;
        double salary = 50000.75;
        boolean isEmployee = true;
        char grade = 'A';
        String name = "John Doe";

        System.out.println("Employee Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
        System.out.println("Is Employee: " + isEmployee);
        System.out.println("Performance Grade: " + grade);
    }
}`,
  "For Loop": `public class Main {
    public static void main(String[] args) {
        System.out.println("Counting from 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            System.out.println("Count: " + i);
        }

        System.out.println("\\nEven numbers from 2 to 20:");
        for (int i = 2; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
    }
}`,
  Arrays: `public class Main {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};
        String[] colors = {"red", "blue", "green", "yellow"};

        System.out.println("Numbers array:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        System.out.println("\\n\\nColors array:");
        for (String color : colors) {
            System.out.println("- " + color);
        }
    }
}`,
  Methods: `public class Main {
    public static void main(String[] args) {
        int result = addNumbers(15, 25);
        System.out.println("Sum: " + result);

        greetUser("Developer");

        double area = calculateCircleArea(5.0);
        System.out.println("Circle area (radius 5): " + area);
    }

    public static int addNumbers(int a, int b) {
        return a + b;
    }

    public static void greetUser(String name) {
        System.out.println("Hello, " + name + "! Welcome to Java programming.");
    }

    public static double calculateCircleArea(double radius) {
        return Math.PI * radius * radius;
    }
}`,
  "Prime Number Check": `public class Main {
    public static void main(String[] args) {
        int[] testNumbers = {2, 17, 25, 29, 100};

        System.out.println("Prime Number Checker:");
        System.out.println("====================");

        for (int num : testNumbers) {
            boolean isPrime = checkPrime(num);
            System.out.println(num + " is " + (isPrime ? "Prime" : "Not Prime"));
        }
    }

    public static boolean checkPrime(int num) {
        if (num <= 1) return false;
        if (num == 2) return true;
        if (num % 2 == 0) return false;

        for (int i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}`,
  "Classes & Objects": `class Student {
    private String name;
    private int age;
    private double gpa;

    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    public void displayInfo() {
        System.out.println("Student: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Status: " + (gpa >= 3.5 ? "Honor Student" : "Regular Student"));
        System.out.println("---");
    }
}

public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Alice", 20, 3.8);
        Student student2 = new Student("Bob", 19, 3.2);

        student1.displayInfo();
        student2.displayInfo();
    }
}`,
};

type ExecutionStatus = "idle" | "compiling" | "running" | "success" | "error";

interface CompileResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime?: number;
  memoryUsed?: number;
}

const EDITOR_HEIGHT = "h-[calc(70vh)]";
const DEFAULT_FONT_SIZE = 12;

export default function JavaCompiler(): React.JSX.Element {
  const [code, setCode] = useState<string>(() => {
    try {
      if (typeof window === "undefined") return DEFAULT_CODE;
      return localStorage.getItem("javaistic_code") || DEFAULT_CODE;
    } catch {
      return DEFAULT_CODE;
    }
  });

  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<ExecutionStatus>("idle");
  const [executionTime, setExecutionTime] = useState<number>(0);
  const [compileTimeMs, setCompileTimeMs] = useState<number | null>(null);
  const [runTimeMs, setRunTimeMs] = useState<number | null>(null);
  const [exitCode, setExitCode] = useState<number | null>(null);
  const [memoryKb, setMemoryKb] = useState<number | null>(null);
  const [remoteStage, setRemoteStage] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<number>(() => {
    try {
      if (typeof window === "undefined") return DEFAULT_FONT_SIZE;
      const raw = localStorage.getItem("javaistic_fontSize");
      const n = raw ? parseInt(raw, 10) : NaN;
      return Number.isFinite(n) ? n : DEFAULT_FONT_SIZE;
    } catch {
      return DEFAULT_FONT_SIZE;
    }
  });
  const [toast, setToast] = useState<string>("");
  const [examplesOpen, setExamplesOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [outputInfoOpen, setOutputInfoOpen] = useState<boolean>(false);
  const [toastType, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("info");
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineRef = useRef<HTMLPreElement>(null);
  const runCodeRef = useRef<() => Promise<void>>(() => Promise.resolve());

  // Debounce saving to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    let id: number | undefined;
    try {
      id = window.setTimeout(() => {
        try {
          localStorage.setItem("javaistic_code", code);
        } catch {}
      }, 400);
    } catch {}
    return () => {
      if (id) window.clearTimeout(id);
    };
  }, [code]);

  // Persist font size (debounced)
  useEffect(() => {
    if (typeof window === "undefined") return;
    let id: number | undefined;
    try {
      id = window.setTimeout(() => {
        try {
          localStorage.setItem("javaistic_fontSize", String(fontSize));
        } catch {}
      }, 300);
    } catch {}
    return () => {
      if (id) window.clearTimeout(id);
    };
  }, [fontSize]);

  // Helper function to get color class based on time performance
  const getTimeColorClass = (
    timeMs: number,
    type: "compile" | "runtime" | "total",
  ): string => {
    if (type === "compile") {
      // Compile time color coding
      if (timeMs < 500) return "text-emerald-600 dark:text-emerald-400"; // Fast
      if (timeMs < 1000) return "text-blue-600 dark:text-blue-400"; // Normal
      if (timeMs < 2000) return "text-amber-600 dark:text-amber-400"; // Slow
      return "text-red-600 dark:text-red-400"; // Very slow
    } else if (type === "runtime") {
      // Runtime color coding
      if (timeMs < 100) return "text-emerald-600 dark:text-emerald-400"; // Very fast
      if (timeMs < 500) return "text-blue-600 dark:text-blue-400"; // Fast
      if (timeMs < 1000) return "text-amber-600 dark:text-amber-400"; // Normal
      if (timeMs < 2000) return "text-orange-600 dark:text-orange-400"; // Slow
      return "text-red-600 dark:text-red-400"; // Very slow
    } else {
      // Total execution time color coding
      if (timeMs < 200) return "text-emerald-600 dark:text-emerald-400"; // Very fast
      if (timeMs < 1000) return "text-blue-600 dark:text-blue-400"; // Fast
      if (timeMs < 2000) return "text-amber-600 dark:text-amber-400"; // Normal
      if (timeMs < 3000) return "text-orange-600 dark:text-orange-400"; // Slow
      return "text-red-600 dark:text-red-400"; // Very slow
    }
  };

  // Helper function to get performance label
  const getPerformanceLabel = (
    timeMs: number,
    type: "compile" | "runtime" | "total",
  ): string => {
    if (type === "compile") {
      if (timeMs < 500) return "Excellent";
      if (timeMs < 1000) return "Good";
      if (timeMs < 2000) return "Slow";
      return "Very Slow";
    } else if (type === "runtime") {
      if (timeMs < 100) return "Instant";
      if (timeMs < 500) return "Fast";
      if (timeMs < 1000) return "Normal";
      if (timeMs < 2000) return "Slow";
      return "Very Slow";
    } else {
      if (timeMs < 200) return "Instant";
      if (timeMs < 1000) return "Fast";
      if (timeMs < 2000) return "Normal";
      if (timeMs < 3000) return "Slow";
      return "Very Slow";
    }
  };

  // Helper function to get performance icon
  const getPerformanceIcon = (
    timeMs: number,
    type: "compile" | "runtime" | "total",
  ): React.ReactNode => {
    const getIconClass = () => {
      if (type === "compile") {
        if (timeMs < 500) return "text-emerald-600 dark:text-emerald-400";
        if (timeMs < 1000) return "text-blue-600 dark:text-blue-400";
        if (timeMs < 2000) return "text-amber-600 dark:text-amber-400";
        return "text-red-600 dark:text-red-400";
      } else if (type === "runtime") {
        if (timeMs < 100) return "text-emerald-600 dark:text-emerald-400";
        if (timeMs < 500) return "text-blue-600 dark:text-blue-400";
        if (timeMs < 1000) return "text-amber-600 dark:text-amber-400";
        if (timeMs < 2000) return "text-orange-600 dark:text-orange-400";
        return "text-red-600 dark:text-red-400";
      } else {
        if (timeMs < 200) return "text-emerald-600 dark:text-emerald-400";
        if (timeMs < 1000) return "text-blue-600 dark:text-blue-400";
        if (timeMs < 2000) return "text-amber-600 dark:text-amber-400";
        if (timeMs < 3000) return "text-orange-600 dark:text-orange-400";
        return "text-red-600 dark:text-red-400";
      }
    };

    return (
      <div
        className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${getIconClass()} ml-1`}
      >
        {timeMs <
        (type === "compile" ? 500 : type === "runtime" ? 100 : 200) ? (
          <CheckCircle className="h-3 w-3" />
        ) : timeMs <
          (type === "compile" ? 1000 : type === "runtime" ? 500 : 1000) ? (
          <div className="h-2 w-2 rounded-full bg-current"></div>
        ) : timeMs <
          (type === "compile" ? 2000 : type === "runtime" ? 2000 : 3000) ? (
          <div className="h-2 w-2 rounded-full bg-current opacity-75"></div>
        ) : (
          <AlertCircle className="h-3 w-3" />
        )}
      </div>
    );
  };

  const showToast = (
    msg: string,
    type: "success" | "error" | "info" | "warning" = "info",
    ms = 3000,
  ): void => {
    setToast(msg);
    setToastType(type);
    setToastVisible(true);

    // Auto-dismiss after specified time
    setTimeout(() => {
      setToastVisible(false);
      // Clear the message after animation completes
      setTimeout(() => setToast(""), 300);
    }, ms);
  };

  const dismissToast = (): void => {
    setToastVisible(false);
    setTimeout(() => setToast(""), 300);
  };

  const runCode = useCallback(async (): Promise<void> => {
    if (!code.trim()) {
      showToast("Please write some code first!", "error");
      return;
    }

    setLoading(true);
    setStatus("compiling");
    // reset previous run metadata
    setCompileTimeMs(null);
    setRunTimeMs(null);
    setExitCode(null);
    setMemoryKb(null);
    setRemoteStage(null);
    const startTime = Date.now();

    try {
      const res = await fetch("/api/playground", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ code: code.trim() }),
      });

      const endTime = Date.now();
      setExecutionTime(endTime - startTime);

      if (!res.ok) {
        const errorText = await res.text();
        setStatus("error");
        setOutput(
          `Compilation/Execution Error (${res.status}):\n${errorText || "Unknown error occurred"}`,
        );
        showToast("Code execution failed", "error");
        return;
      }

      const data = await res.json();

      // Support two shapes:
      // 1) { status: 'success'|'error', output: string, stage?: 'compile'|'run' }
      // 2) New runner shape: { status, stage, compile_time_ms, execution_time_ms, exit_code, stdout, stderr, memory_kb }
      if (data && typeof data === "object") {
        // New runner shape detection
        const hasRunnerFields =
          "stdout" in data ||
          "stderr" in data ||
          "compile_time_ms" in data ||
          "execution_time_ms" in data;

        if (hasRunnerFields) {
          // Map and display runner fields
          const statusField =
            data.status || (data.exit_code === 0 ? "success" : "error");
          const stageField = data.stage || null;
          setRemoteStage(stageField);
          setCompileTimeMs(data.compile_time_ms ?? null);
          setRunTimeMs(data.execution_time_ms ?? null);
          setExitCode(
            typeof data.exit_code === "number" ? data.exit_code : null,
          );
          setMemoryKb(
            typeof data.memory_kb === "number" ? data.memory_kb : null,
          );
          setExecutionTime(data.execution_time_ms ?? Date.now() - startTime);

          if (statusField === "error") {
            setStatus("error");
            // Prefer stderr for errors, otherwise show stdout or generic message
            const errText =
              (data.stderr && String(data.stderr).trim()) ||
              (data.stdout && String(data.stdout).trim()) ||
              data.output ||
              "Compilation/Runtime error occurred.";
            setOutput(errText);
            showToast("Code execution failed", "error");
          } else {
            setStatus("success");
            const outText =
              (data.stdout && String(data.stdout)) || data.output || "";
            setOutput(outText);
            showToast("Code executed successfully!", "success");
          }
        } else {
          // Legacy shape - be tolerant: prefer stdout/stderr if present and fill metadata when available
          const legacyStdout = data && (data.stdout ?? data.output ?? "");
          const legacyStderr = data && (data.stderr ?? data.output ?? "");

          if (data.status === "error") {
            setStatus("error");
            const errText =
              String(legacyStderr || "").trim() ||
              "Compilation/Runtime error occurred.";
            setOutput(errText);
            if (typeof data.compile_time_ms === "number")
              setCompileTimeMs(data.compile_time_ms);
            if (typeof data.execution_time_ms === "number")
              setRunTimeMs(data.execution_time_ms);
            if (typeof data.exit_code === "number") setExitCode(data.exit_code);
            if (typeof data.memory_kb === "number") setMemoryKb(data.memory_kb);
            showToast("Code execution failed", "error");
          } else if (data.status === "success") {
            setStatus("success");
            const outText = String(legacyStdout || "").trim();
            setOutput(outText);
            // if server returned executionTime use it
            if (typeof data.executionTime === "number")
              setExecutionTime(data.executionTime);
            if (typeof data.compile_time_ms === "number")
              setCompileTimeMs(data.compile_time_ms);
            if (typeof data.execution_time_ms === "number")
              setRunTimeMs(data.execution_time_ms);
            if (typeof data.exit_code === "number") setExitCode(data.exit_code);
            if (typeof data.memory_kb === "number") setMemoryKb(data.memory_kb);
            showToast("Code executed successfully!", "success");
          } else {
            setStatus("error");
            setOutput(JSON.stringify(data));
            showToast("Unexpected response from server", "error");
          }
        }
      } else {
        setStatus("error");
        setOutput("Invalid response from server");
        showToast("Unexpected response from server", "error");
      }
    } catch (error) {
      console.error("Execution error:", error);
      setStatus("error");
      setOutput(
        "Failed to connect to the execution server. Please check your internet connection and try again.",
      );
      showToast("Network error occurred", "error");
      setExecutionTime(0);
    } finally {
      setLoading(false);
    }
  }, [code]);

  // Update the ref whenever runCode changes
  useEffect(() => {
    runCodeRef.current = runCode;
  }, [runCode]);

  const clearCode = (): void => {
    setCode(DEFAULT_CODE);
    setOutput("");
    setStatus("idle");
    setExecutionTime(0);
    showToast("Code reset to default template", "info");
  };

  const copyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      showToast("Code copied to clipboard!", "success");
    } catch {
      showToast("Failed to copy code", "error");
    }
  };

  const downloadCode = (): void => {
    const blob = new Blob([code], { type: "text/java" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Main.java";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("Main.java downloaded successfully!", "success");
  };

  const copyOutput = async (): Promise<void> => {
    if (!output) {
      showToast("No output to copy", "error");
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      showToast("Output copied to clipboard!", "success");
    } catch {
      showToast("Failed to copy output", "error");
    }
  };

  const changeFontSize = (delta: number): void => {
    setFontSize((s) => Math.max(10, Math.min(24, s + delta)));
  };

  const loadExample = useCallback((key: string): void => {
    setCode(EXAMPLES[key]);
    setExamplesOpen(false);
    setOutput("");
    setStatus("idle");
    setExecutionTime(0);
    showToast(`${key} example loaded`, "success");
  }, []);

  const clearOutput = (): void => {
    setOutput("");
    setStatus("idle");
    setExecutionTime(0);
  };

  const lineNumbers = useMemo(() => {
    const lines = Math.max(1, code.split("\n").length);
    return Array.from({ length: lines }, (_, i) => i + 1).join("\n");
  }, [code]);

  useEffect(() => {
    const t = textareaRef.current;
    const l = lineRef.current;
    if (!t || !l) return;
    const sync = () => {
      l.scrollTop = t.scrollTop;
    };
    t.addEventListener("scroll", sync);
    return () => t.removeEventListener("scroll", sync);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Enter to run code
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        if (!loading) {
          runCode();
        }
      }

      // Ctrl/Cmd + C to copy code (when editor is focused)
      if ((event.ctrlKey || event.metaKey) && event.key === "c") {
        const activeElement = document.activeElement;
        if (activeElement === textareaRef.current && code) {
          event.preventDefault();
          copyCode();
        }
      }

      // Ctrl/Cmd + L to clear output
      if ((event.ctrlKey || event.metaKey) && event.key === "l") {
        event.preventDefault();
        if (output) {
          clearOutput();
        }
      }

      // Escape to close dropdowns
      if (event.key === "Escape") {
        setExamplesOpen(false);
        setSettingsOpen(false);
        setOutputInfoOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [loading, code, output]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      {/* <div className="sticky top-0 z-40 border-b border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-blue-600 p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                  Java Code Compiler
                </h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Write, compile, and run Java code online
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {status !== "idle" && (
                <div className="flex items-center space-x-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm dark:border-neutral-700 dark:bg-neutral-800">
                  {status === "compiling" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                      <span className="text-blue-600 dark:text-blue-400">
                        Compiling...
                      </span>
                    </>
                  )}
                  {status === "running" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-amber-600" />
                      <span className="text-amber-600 dark:text-amber-400">
                        Running...
                      </span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 dark:text-green-400">
                        Success
                      </span>
                      {executionTime > 0 && (
                        <span className={`ml-1 rounded-full px-2 py-0.5 text-xs font-medium flex items-center space-x-1 ${
                          executionTime < 200 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' :
                          executionTime < 1000 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                          executionTime < 2000 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' :
                          executionTime < 3000 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                          <span>{executionTime}ms</span>
                          <div className="inline-flex items-center justify-center w-3 h-3">
                            {executionTime < 200 ? (
                              <CheckCircle className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                            ) : executionTime < 1000 ? (
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                            ) : executionTime < 2000 ? (
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400"></div>
                            ) : executionTime < 3000 ? (
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400"></div>
                            ) : (
                              <AlertCircle className="w-2.5 h-2.5 text-red-600 dark:text-red-400" />
                            )}
                          </div>
                        </span>
                      )}
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span className="text-red-600 dark:text-red-400">
                        Error
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Code Editor Panel */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            {/* Editor Header */}
            <div className="border-b border-neutral-200 p-3 dark:border-neutral-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-white" />
                  <div>
                    <span className="font-mono text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      Main.java
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearCode}
                    className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    title="Reset code"
                  >
                    <RotateCw className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </button>

                  <button
                    onClick={copyCode}
                    className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    title="Copy code"
                  >
                    <Copy className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </button>

                  <button
                    onClick={downloadCode}
                    className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    title="Download code"
                  >
                    <DownloadCloud className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </button>

                  {/* Examples Dropdown */}
                  <div className="dropdown-container relative">
                    <button
                      onClick={() => setExamplesOpen(!examplesOpen)}
                      className="flex items-center space-x-1 rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                      title="Load examples"
                    >
                      <ChevronDown
                        className={`h-4 w-4 text-neutral-600 dark:text-neutral-400 ${examplesOpen ? "rotate-180" : ""}`}
                      />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Examples
                      </span>
                    </button>
                    {examplesOpen && (
                      <div className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                        <div className="py-3">
                          <div className="px-4 py-2 text-xs font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                            Code Examples
                          </div>
                          <div className="max-h-64 overflow-y-auto">
                            {Object.keys(EXAMPLES).map((key, index) => (
                              <button
                                key={key}
                                onClick={() => loadExample(key)}
                                className="w-full px-4 py-3 text-left text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                    {key}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Settings Dropdown */}
                  <div className="dropdown-container relative">
                    <button
                      onClick={() => setSettingsOpen(!settingsOpen)}
                      className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                      title="Settings"
                    >
                      <Settings className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    </button>
                    {settingsOpen && (
                      <div className="absolute right-0 z-50 mt-2 w-64 rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                        <div className="py-3">
                          <div className="px-4 py-2 text-xs font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                            Editor Settings
                          </div>

                          {/* Font Size Controls */}
                          <div className="px-4 py-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Font Size
                              </span>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => changeFontSize(-1)}
                                  className="rounded-lg p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                  title="Decrease font size"
                                >
                                  <ZoomOut className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
                                </button>
                                <span className="min-w-[35px] px-2 text-center text-xs text-neutral-500 dark:text-neutral-400">
                                  {fontSize}px
                                </span>
                                <button
                                  onClick={() => changeFontSize(1)}
                                  className="rounded-lg p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                  title="Increase font size"
                                >
                                  <ZoomIn className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Keyboard Shortcuts */}
                          <div className="border-t border-neutral-200/60 px-4 py-3 dark:border-neutral-700/60">
                            <div className="mb-2 text-xs font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                              Keyboard Shortcuts
                            </div>
                            <div className="space-y-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-neutral-600 dark:text-neutral-400">
                                  Run Code
                                </span>
                                <kbd className="rounded-lg bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                                  Ctrl+Enter
                                </kbd>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-neutral-600 dark:text-neutral-400">
                                  Copy Code
                                </span>
                                <kbd className="rounded-lg bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                                  Ctrl+C
                                </kbd>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div
              className={`${EDITOR_HEIGHT} relative overflow-hidden rounded-b-xl bg-neutral-50 dark:bg-neutral-900`}
            >
              <div className="flex h-full">
                <pre
                  ref={lineRef}
                  className="border-r border-neutral-200/60 bg-neutral-50/80 px-4 py-5 text-right text-xs text-neutral-500 select-none dark:border-neutral-700/60 dark:bg-neutral-900/80 dark:text-neutral-400"
                  style={{ width: 55 }}
                  aria-hidden="true"
                >
                  {lineNumbers}
                </pre>

                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  aria-label="Java code editor"
                  className="h-full flex-1 resize-none bg-transparent p-5 font-mono text-neutral-800 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-blue-500/20 dark:text-neutral-200 dark:placeholder-neutral-500"
                  style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
                  placeholder="Write your Java code here..."
                />
              </div>
            </div>

            {/* Editor Footer */}
            <div className="p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="mt-1 flex items-center space-x-2">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {code.split("\n").length} lines
                      </span>
                      <span className="text-xs text-neutral-400">•</span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {code.length} chars
                      </span>
                      {code.trim() && (
                        <>
                          <span className="text-xs text-neutral-400">•</span>
                          <div className="flex items-center space-x-1">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                code.length > 1000
                                  ? "bg-amber-500"
                                  : code.length > 500
                                    ? "bg-blue-500"
                                    : "bg-green-500"
                              }`}
                            ></div>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                              {code.length > 1000
                                ? "Large"
                                : code.length > 500
                                  ? "Medium"
                                  : "Small"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearCode}
                    className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    title="Reset code"
                  >
                    <span className="sr-only">Reset code</span>
                    <RotateCw className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </button>
                  <button
                    onClick={runCode}
                    disabled={loading}
                    className="flex items-center space-x-2 rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700 disabled:opacity-60"
                    title="Run Code (Ctrl/Cmd+Enter)"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    <span>Run Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            {/* Output Header */}
            <div className="border-b border-neutral-200 p-3 dark:border-neutral-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    Console Output
                  </span>
                  {executionTime > 0 && (
                    <span
                      className={`rounded-lg px-2 py-1 text-xs font-medium ${
                        executionTime < 200
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                          : executionTime < 1000
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            : executionTime < 2000
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                              : executionTime < 3000
                                ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                      }`}
                    >
                      {executionTime}ms
                    </span>
                  )}
                </div>

                {/* Output Info Dropdown */}
                {(compileTimeMs !== null ||
                  runTimeMs !== null ||
                  exitCode !== null ||
                  memoryKb !== null ||
                  remoteStage) && (
                  <div className="relative">
                    <button
                      onClick={() => setOutputInfoOpen(!outputInfoOpen)}
                      className="p-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                      title="Execution details"
                    >
                      <Info className="h-4 w-4" />
                    </button>
                    {outputInfoOpen && (
                      <div className="absolute right-0 z-50 mt-2 w-72 rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                        <div className="p-3">
                          <div className="mb-3 text-xs font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                            Execution Details
                          </div>
                          <div className="space-y-2 px-3 py-2">
                            {remoteStage && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                  Stage:
                                </span>
                                <span className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                                  {remoteStage}
                                </span>
                              </div>
                            )}
                            {compileTimeMs !== null && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                  Compile Time:
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span
                                    className={`font-mono text-sm font-medium ${getTimeColorClass(compileTimeMs, "compile")}`}
                                  >
                                    {compileTimeMs}ms
                                  </span>
                                  {getPerformanceIcon(compileTimeMs, "compile")}
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-xs ${
                                      compileTimeMs < 500
                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                        : compileTimeMs < 1000
                                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                          : compileTimeMs < 2000
                                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                    }`}
                                  >
                                    {getPerformanceLabel(
                                      compileTimeMs,
                                      "compile",
                                    )}
                                  </span>
                                </div>
                              </div>
                            )}
                            {runTimeMs !== null && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                  Run Time:
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span
                                    className={`font-mono text-sm font-medium ${getTimeColorClass(runTimeMs, "runtime")}`}
                                  >
                                    {runTimeMs}ms
                                  </span>
                                  {getPerformanceIcon(runTimeMs, "runtime")}
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-xs ${
                                      runTimeMs < 100
                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                        : runTimeMs < 500
                                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                          : runTimeMs < 1000
                                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                            : runTimeMs < 2000
                                              ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                    }`}
                                  >
                                    {getPerformanceLabel(runTimeMs, "runtime")}
                                  </span>
                                </div>
                              </div>
                            )}
                            {exitCode !== null && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                  Exit Code:
                                </span>
                                <span
                                  className={`font-mono text-sm ${exitCode === 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                                >
                                  {exitCode}
                                </span>
                              </div>
                            )}
                            {memoryKb !== null && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                  Memory Used:
                                </span>
                                <span className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                                  {memoryKb} KB
                                </span>
                              </div>
                            )}
                            {executionTime > 0 && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                  Total Time:
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span
                                    className={`font-mono text-sm font-medium ${getTimeColorClass(executionTime, "total")}`}
                                  >
                                    {executionTime}ms
                                  </span>
                                  {getPerformanceIcon(executionTime, "total")}
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-xs ${
                                      executionTime < 200
                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                        : executionTime < 1000
                                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                          : executionTime < 2000
                                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                            : executionTime < 3000
                                              ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                    }`}
                                  >
                                    {getPerformanceLabel(
                                      executionTime,
                                      "total",
                                    )}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyOutput}
                    disabled={!output}
                    className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
                    title="Copy output"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  <button
                    onClick={clearOutput}
                    disabled={!output}
                    className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-red-400"
                    title="Clear output"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Output Content */}
            <div
              className={`${EDITOR_HEIGHT} overflow-y-auto rounded-b-xl bg-neutral-50 dark:bg-neutral-900`}
            >
              <pre className="h-full bg-transparent p-5 font-mono text-sm leading-relaxed whitespace-pre-wrap text-neutral-700 dark:text-neutral-300">
                {loading ? (
                  <div className="flex h-full items-center justify-center">
                    <div className="space-y-4 text-center">
                      <div className="relative">
                        <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <div className="font-semibold text-blue-600 dark:text-blue-400">
                          Executing your Java code...
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          This may take a few seconds
                        </div>
                      </div>
                    </div>
                  </div>
                ) : output ? (
                  <div className="space-y-3">
                    {status === "error" && (
                      <div className="mb-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                        <div className="mb-2 flex items-center space-x-2">
                          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                          <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                            Compilation/Runtime Error
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="rounded-lg border border-neutral-200/30 bg-white/50 p-4 dark:border-neutral-700/30 dark:bg-neutral-800/50">
                      {output}
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="space-y-4 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                        <Terminal className="h-8 w-8 text-neutral-600 dark:text-neutral-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="font-medium text-neutral-700 dark:text-neutral-300">
                          Ready to run your Java code
                        </div>
                        <div className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
                          <p>• Write your Java code in the editor</p>
                          <p>
                            • Click "Run Code" or press{" "}
                            <kbd className="rounded-lg bg-neutral-200 px-2 py-0.5 text-xs dark:bg-neutral-700">
                              Ctrl+Enter
                            </kbd>
                          </p>
                          <p>• View compilation and runtime output here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed right-6 bottom-6 z-50">
          <div
            className={`${
              toastVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
          >
            <div
              className={`relative max-w-sm rounded-xl border p-5 pr-14 shadow-2xl backdrop-blur-xl ${
                toastType === "success"
                  ? "border-green-200 bg-green-50/95 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200"
                  : toastType === "error"
                    ? "border-red-200 bg-red-50/95 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200"
                    : toastType === "warning"
                      ? "border-amber-200 bg-amber-50/95 text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
                      : "border-blue-200 bg-blue-50/95 text-blue-800 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="mt-0.5 flex-shrink-0">
                  {toastType === "success" && (
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  )}
                  {toastType === "error" && (
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  )}
                  {toastType === "warning" && (
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  )}
                  {toastType === "info" && (
                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-6 font-semibold">{toast}</p>
                  <p className="mt-1 text-xs opacity-75">
                    {toastType === "success" && "Code executed successfully"}
                    {toastType === "error" && "Check your code and try again"}
                    {toastType === "warning" && "Please review the warning"}
                    {toastType === "info" && "Information"}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={dismissToast}
                className={`absolute top-4 right-4 rounded-full p-1.5 hover:bg-black/10 dark:hover:bg-white/10 ${
                  toastType === "success"
                    ? "text-green-600 dark:text-green-400"
                    : toastType === "error"
                      ? "text-red-600 dark:text-red-400"
                      : toastType === "warning"
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-blue-600 dark:text-blue-400"
                }`}
                aria-label="Dismiss notification"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Progress Bar */}
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                <div
                  className={`h-full rounded-full ${
                    toastType === "success"
                      ? "bg-green-500 dark:bg-green-400"
                      : toastType === "error"
                        ? "bg-red-500 dark:bg-red-400"
                        : toastType === "warning"
                          ? "bg-amber-500 dark:bg-amber-400"
                          : "bg-blue-500 dark:bg-blue-400"
                  }`}
                  style={{
                    width: "100%",
                    animation: "shrink 3s linear forwards",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }

        .dark ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }

        .dark ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Focus styles */
        textarea:focus {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
}
