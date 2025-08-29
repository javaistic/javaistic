import { visit } from "unist-util-visit";

// Cached regex patterns for better performance
const PLAY_PATTERNS = new Set(["java play", "java-play", "java:play"]);

// Pre-compile regex for meta parsing
const PLAY_META_REGEX = /\bplay\b/;

// looser-typed plugin: converts ```java play blocks to <CodePlayground code={...} language="java" />
export default function remarkCodePlayground() {
  return (tree: any) => {
    visit(tree as any, "code", (node: any, index: any, parent: any) => {
      if (!node || typeof node.lang !== "string") return;

      const info = (node.lang || "").trim();
      const meta = node.meta || null;

      // Fast path: check Set first for common patterns
      let isPlay = PLAY_PATTERNS.has(info);

      // Only do complex meta checking if not already matched
      if (!isPlay && info === "java" && typeof meta === "string") {
        isPlay = PLAY_META_REGEX.test(meta);
      }

      if (!isPlay) return;

      // Build a JS expression for the attribute and include a small ESTree so
      // the MDX compiler emits a valid JS literal. We use JSON.stringify to
      // produce a safely-escaped string literal as the expression value.
      const raw = node.value || "";
      const exprValue = JSON.stringify(raw);

      const mdxNode: any = {
        type: "mdxJsxFlowElement",
        name: "CodePlayground",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "code",
            value: {
              type: "mdxJsxAttributeValueExpression",
              // the textual JS expression that will be inlined (e.g. "\"line\\n...\"")
              value: exprValue,
              // provide a minimal ESTree so downstream transformers/serializers
              // can rely on it when generating the final JS output
              data: {
                estree: {
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "Literal",
                        value: raw,
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            type: "mdxJsxAttribute",
            name: "language",
            value: "java",
          },
        ],
        // Keep the original code node as a child so rehype/highlighters
        // still see and process it (this preserves syntax highlighting).
        children: [
          {
            type: "code",
            lang: "java",
            meta: node.meta ?? null,
            value: raw,
          },
        ],
      };

      if (parent && typeof index === "number") {
        parent.children.splice(index, 1, mdxNode);
      }
    });
  };
}
