// src/app/api/run-java/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        script: code,
        language: 'java',
        versionIndex: '3', // Java 11
        clientId: '' ,// ← replace with your actual clientId
        clientSecret: '', // ← replace with your actual clientSecret
      }),
    });

    const data = await response.json();

    return new NextResponse(JSON.stringify({
      run: {
        output: data.output || 'No output',
      },
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ error: 'Execution failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
