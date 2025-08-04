import { NextResponse } from "next/server";
import { type DocumentRecord } from "fumadocs-core/search/algolia";
import { source, programsSource } from "@/lib/source";

export const revalidate = false;

// Helper function to map pages to DocumentRecord format
function mapPageToDocumentRecord(page: any, tag: string): DocumentRecord {
  return {
    _id: page.url,
    structured: page.data.structuredData,
    url: page.url,
    title: page.data.title,
    description: page.data.description || "",
    tag,
  };
}

// Helper function to safely get pages and map them
function mapPagesToDocuments(
  sourceInstance: typeof source,
  tag: string,
): DocumentRecord[] {
  try {
    return sourceInstance
      .getPages()
      .map((page) => mapPageToDocumentRecord(page, tag));
  } catch (error) {
    console.error(`Error mapping ${tag} pages:`, error);
    return [];
  }
}

export function GET() {
  try {
    // Process both sources efficiently with better error handling
    const docsPages = mapPagesToDocuments(source, "docs");
    const programPages = mapPagesToDocuments(programsSource, "programs");

    // Combine arrays efficiently
    const results: DocumentRecord[] = [...docsPages, ...programPages];

    // Add cache headers for better performance
    return new NextResponse(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating static.json:", error);
    return NextResponse.json(
      { error: "Failed to generate search data" },
      { status: 500 },
    );
  }
}

