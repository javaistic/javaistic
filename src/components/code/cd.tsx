"use client";

import { java } from "@codemirror/lang-java";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import CodeMirror from "@uiw/react-codemirror";
import {
  BlocksIcon,
  CheckIcon,
  CircleUserRoundIcon,
  CoffeeIcon,
  CopyIcon,
  FilesIcon,
  FullscreenIcon,
  GitForkIcon,
  PlayIcon,
  SearchIcon,
  SettingsIcon,
  TerminalIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { SVGText } from "./icons";

type Props = {
  code: string;
  setCode: (val: string) => void;
  outputText?: string;
};

export function CodeEditor({ code, setCode, outputText }: Props) {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState("");

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runCode = async () => {
    if (setOutput) {
      setOutput("Running code...");

      // Simulate running code
      setTimeout(() => {
        setOutput("✅ Code executed successfully!");

        // Render the actual sample output after a short delay
        setTimeout(() => {
          setOutput(`✅ Code executed successfully!\n\n${outputText}`);
        }, 1000); // Wait 1 second after showing success
      }, 2000); // Simulate 2 seconds code execution
    }
  };

  return (
    <div className="h-full w-full rounded-2xl border border-zinc-700 bg-zinc-950">
      <div className="flex items-center justify-between px-4 pt-3 pb-0.5">
        <span className="flex items-center gap-x-1">
          <span className="size-2.5 rounded-full bg-red-500"></span>
          <span className="size-2.5 rounded-full bg-yellow-500"></span>
          <span className="size-2.5 rounded-full bg-green-500"></span>
        </span>
        <div className="flex items-center">
          <h2 className="text-sm font-medium text-zinc-400">
            Javaistic Code Editor
          </h2>
        </div>
        <button
          onClick={handleCopyCode}
          className="h-3.5 w-3.5 text-xs text-zinc-400 hover:text-white"
        >
          <FullscreenIcon className="size-4" />
        </button>
      </div>
      <div className="m-1 grid grid-cols-1 rounded-xl border border-y border-zinc-700 sm:grid-cols-12">
        <div className="col-span-8 flex">
          <div className="flex w-10 flex-col items-center justify-between py-4">
            <div className="flex flex-col items-center gap-y-4">
              <FilesIcon className="inline-block size-4 text-zinc-400" />
              <SearchIcon className="inline-block size-4 text-zinc-400" />
              <GitForkIcon className="inline-block size-4 text-zinc-400" />
              <BlocksIcon className="inline-block size-4 text-zinc-400" />
              <TerminalIcon className="inline-block size-4 text-zinc-400" />
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <CircleUserRoundIcon className="inline-block size-4 text-zinc-400" />
              <SettingsIcon className="inline-block size-4 text-zinc-400" />
            </div>
          </div>
          <div className="relative w-full">
            <div className="flex items-center justify-between border-l border-zinc-700 pr-4">
              <div className="flex items-center border-r bg-neutral-900 pt-2 pb-1.5">
                <CoffeeIcon className="mx-2 size-3.5 text-zinc-400" />
                <h2 className="text-xs font-normal text-zinc-400">
                  BinarySearch.java
                </h2>
                <XIcon className="mx-1.5 size-3 text-zinc-400" />
              </div>
              <button
                onClick={handleCopyCode}
                className="h-3.5 w-3.5 text-xs text-zinc-400 hover:text-white"
              >
                {copied ? (
                  <CheckIcon className="h-3.5 w-3.5" />
                ) : (
                  <CopyIcon className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
            <div className="h-[500px] border-t border-l border-zinc-700">
              <CodeMirror
                value={code}
                theme={tokyoNight}
                extensions={[java()]}
                onChange={(val) => setCode(val)}
                basicSetup={{
                  lineNumbers: true,
                  foldGutter: false,
                  highlightActiveLine: true,
                  syntaxHighlighting: true,
                  tabSize: 2,
                }}
                className="[&_.cm-scroller]:scrollbar-none h-full text-white [&_.cm-scroller]:[scrollbar-width:none] [&_.cm-scroller::-webkit-scrollbar]:hidden"
                placeholder="Write your Java code here..."
                autoFocus
              />
            </div>
            <SVGText className="absolute right-11 bottom-10 h-12 text-emerald-400" />
            <button
              onClick={runCode}
              className="absolute right-3 bottom-3 inline-flex h-6 shrink-0 cursor-pointer items-center justify-center gap-1 rounded-sm bg-gradient-to-tl from-emerald-600 to-emerald-500 px-2 text-xs font-medium whitespace-nowrap shadow-xs transition-all outline-none hover:bg-indigo-400 active:scale-95"
            >
              <PlayIcon className="size-3" />
              Run Code
            </button>
          </div>
        </div>
        <div className="col-span-4 h-full rounded-r-2xl border-l border-zinc-700 bg-zinc-950">
          <div className="flex items-center gap-x-1 px-4 pt-2 pb-1.5">
            <TerminalIcon className="inline-block size-3.5 text-zinc-400" />
            <h2 className="text-xs font-medium text-zinc-400">Terminal</h2>
          </div>
          <div className="scrollbar-none h-[400px] overflow-y-auto border-t border-zinc-700 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <pre className="h-full rounded-r-xl p-3 text-xs text-emerald-400">
              <code className="font-mono">{`${
                output || ">>> Output will appear here..."
              }`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
