import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Article, WithContext } from "schema-dts";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  const owner = "javaistic";
  const repo = "javaistic";

  if (!page) notFound();

  const MDXContent = page.data.body;

  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.data.title,
    description: page.data.description,
    author: {
      "@type": "Organization",
      name: "Javaistic",
    },
    publisher: {
      "@type": "Organization",
      name: "Javaistic",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://javaistic.vercel.app${page.url}`,
    },
  };

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-3">
        {page.data.description}
      </DocsDescription>

      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

type Props = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const page = source.getPage(slug);

  if (!page) notFound();

  return {
    title: `${page.data.title} - Javaistic`,
    description: page.data.description,
    openGraph: {
      title: `${page.data.title} - Javaistic`,
      description: page.data.description,
      siteName: "Javaistic",
      url: `https://javaistic.vercel.app${page.url}`,
      images: `https://og-javaistic.vercel.app/og?title=${page.data.title}`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@javaistic",
      creator: "@arghyaxcodes",
    },
  };
}
