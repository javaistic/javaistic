"use client";

import { useState } from "react";
import { CodeEditor } from "./cd";
import { SVGText, TerminalIcon } from "./icons";

// add a welcome message

const sampleCode = `class BinarySearch {
	int binarySearch(int arr[], int l, int r, int x)
	{
		if (r >= l) {
			int mid = l + (r - l) / 2;

      if (arr[mid] == x)
				return mid;

      if (arr[mid] > x)
				return binarySearch(arr, l, mid - 1, x);

			return binarySearch(arr, mid + 1, r, x);
		}
		return -1;
	}
	public static void main(String args[])
	{
		BinarySearch ob = new BinarySearch();
		int arr[] = { 2, 3, 4, 10, 40 };
		int n = arr.length;
		int x = 10;
		int result = ob.binarySearch(arr, 0, n - 1, x);
		if (result == -1)
			System.out.println("Element not present");
		else
			System.out.println("Element found at index " + result);
	}
}
`;

const outputSample = `Element to Search : 3
Element found at index : 1`;

export default function PyodideRunner() {
  const [code, setCode] = useState(sampleCode);

  return (
    <div className="mx-auto max-w-5xl">
      <CodeEditor code={code} setCode={setCode} outputText={outputSample} />
    </div>
  );
}
