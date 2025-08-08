'use client';

import React, { useEffect, useRef, useState } from 'react';
import { baseOptions } from '@/app/layout.config';
import { Footer } from '@/components/footer';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

export default function PlayGround(): JSX.Element {
  const DEFAULT_CODE = `public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}`;

  const [code, setCode] = useState<string>(() => {
    try {
      if (typeof window === 'undefined') return DEFAULT_CODE;
      return localStorage.getItem('javaistic_code') || DEFAULT_CODE;
    } catch {
      return DEFAULT_CODE;
    }
  });

  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<string>('');
  const [examplesOpen, setExamplesOpen] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('javaistic_code', code);
      }
    } catch {}
  }, [code]);

  const showToast = (msg: string, ms = 1800): void => {
    setToast(msg);
    const id = window.setTimeout(() => setToast(''), ms);
    return () => clearTimeout(id);
  };

  const runCode = async (): Promise<void> => {
    setLoading(true);
    setOutput('');
    try {
      const res = await fetch('/api/playground', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const text = await res.text();
        setOutput(`Error: ${res.status} ${text}`);
      } else {
        const data = await res.json();
        setOutput((data && data.run && (data.run.output as string)) || 'No output');
      }
    } catch {
      setOutput('Error executing code');
    } finally {
      setLoading(false);
    }
  };

  const clearCode = (): void => {
    setCode(DEFAULT_CODE);
    showToast('Reset to default template');
  };

  const copyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      showToast('Code copied to clipboard');
    } catch {
      showToast('Unable to copy');
    }
  };

  const downloadCode = (): void => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Main.java';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast('Downloaded Main.java');
  };

  const EXAMPLES: Record<string, string> = {
    'Hello World': `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello,Welcome to Javaistic PlayGround");
    }
}`,
    'For Loop': `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`,
    'Sum of Two nums': `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        System.out.println("Sum = " + (a + b));
    }
}`,
    'Prime Number Check': `public class Main {
    public static void main(String[] args) {
        int num = 17;
        boolean isPrime = num > 1;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        System.out.println(num + (isPrime ? " is Prime" : " is Not Prime"));
    }
}`,
    'Odd Even Check': `public class Main {
    public static void main(String[] args) {
        int num = 24;
        System.out.println(num + (num % 2 == 0 ? " is Even" : " is Odd"));
    }
}`,
};

  const loadExample = (key: string): void => {
    setCode(EXAMPLES[key]);
    setExamplesOpen(false);
    showToast(`${key} loaded`);
  };

  const clearOutput = (): void => setOutput('');

  const getLineNumbers = (text: string): string =>
    Array.from({ length: Math.max(1, text.split('\n').length) }, (_, i) => i + 1).join('\n');

  useEffect(() => {
    const t = textareaRef.current;
    const l = lineRef.current;
    if (!t || !l) return;
    const sync = () => {
      l.scrollTop = t.scrollTop;
    };
    t.addEventListener('scroll', sync);
    return () => t.removeEventListener('scroll', sync);
  }, []);

  return (
    <>
      <HomeLayout
        {...baseOptions}
        style={{ ['--spacing-fd-container' as any]: '1280px' } as React.CSSProperties}
      >
        <div className="space-y-6">
          <header className="text-center -mt-10 mb-6  py-3 border-b border-gray-300 dark:border-gray-700">
<h1 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">JAVAISTIC PLAYGROUND</h1>          </header>

          <div className="flex flex-col lg:flex-row gap-6 m-auto px-4">
            <div className="bg-black dark:bg-gray-800 border rounded-xl shadow-lg p-3 flex-1 min-h-[70vh]">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-1">
                <span className="text-sm text-white font-mono">Main.java</span>
                <div className="flex flex-wrap gap-1">
                  <button onClick={runCode} className="px-3 py-1 rounded-md bg-green-500 hover:bg-green-600 text-white shadow cursor-pointer text-sm">
                    {loading ? '▶️.....' : '▶️ Run'}
                  </button>
                  <button onClick={clearCode} className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-black dark:text-white shadow cursor-pointer text-sm">🔄 Clear</button>
                  <button onClick={copyCode} className="px-3 py-1 rounded-md bg-blue-400 hover:bg-blue-500 text-white shadow cursor-pointer text-sm">📋 Copy</button>
                  <button onClick={downloadCode} className="px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-400 text-black shadow cursor-pointer text-sm">📥 Download</button>
                  <div className="relative">
                  <button onClick={() => setExamplesOpen((s) => !s)} className="px-3 py-1 rounded-md bg-purple-400 hover:bg-purple-500 text-white shadow cursor-pointer text-sm"> Examples ▾</button>
                 {examplesOpen && ( <ul className="absolute mt-2 w-56 rounded-md shadow bg-white dark:bg-gray-700 border p-2 z-10">
                 {Object.keys(EXAMPLES).map((key) => (
                 <li key={key}>
                 <button onClick={() => loadExample(key)} className="w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-600">{key}</button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button onClick={clearOutput} className="px-3 py-1 rounded-md bg-red-400 hover:bg-red-500 text-white shadow cursor-pointer text-sm">🔄 Clear Output</button>
                </div>
              </div>

    
              <div className="relative h-[60vh] rounded border overflow-hidden flex m-2">
                <pre ref={lineRef as React.RefObject<HTMLElement>}className="select-none text-right px-3 py-3 text-sm overflow-hidden"style={{width: 50,}}>{getLineNumbers(code)}</pre>

                <textarea ref={textareaRef} value={code} onChange={(e) => setCode(e.target.value)}spellCheck={false}className="flex-1 p-3 text-sm resize-none outline-none h-full font-mono overflow-auto bg-white dark:bg-[#0c1116] text-black dark:text-[#ffaa00]"/>
              </div>
            </div>


            <div className="bg-gray-900 dark:bg-gray-900 border rounded-xl shadow-lg p-3 flex-1 flex flex-col min-h-[70vh] m-2">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-white dark:text-gray-500">Output</span>
              </div>
              <pre className="h-[60vh] overflow-y-auto whitespace-pre-wrap text-sm rounded p-3 flex-1 bg-white dark:bg-black text-blue-800 dark:text-green-300">
                {output || 'Program output will appear here...'}
              </pre>
            </div>
          </div>

          {toast && (<div className="fixed right-6 bottom-6 bg-black/80 text-white px-4 py-2 rounded-md shadow">{toast}</div>)}
        </div>
      </HomeLayout>
      <Footer />

      <style>
        {`
          :root {
            --editor-bg: #cde7ff;
            --editor-text: #002b5c;
            --line-bg: #b9dbff;
            --line-text: #555;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --editor-bg: #00264d;
              --editor-text: #b3d9ff;
              --line-bg: #001933;
              --line-text: #8899aa;
            }
          }
        `}
      </style>
    </>
  );
}