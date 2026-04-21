import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { Article, BreadcrumbList, WithContext } from "schema-dts";
import { baseUrl } from "@/lib/metadata";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  const _owner = "javaistic";
  const _repo = "javaistic";

  if (!page) notFound();

  const MDXContent = page.data.body;

  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.data.title,
    description: page.data.description,
    image: `${baseUrl}/og.png`,
    author: {
      "@type": "Organization",
      name: "Javaistic",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Javaistic",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}${page.url}`,
    },
  };

  const breadcrumbsJsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Docs",
        item: `${baseUrl}/docs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.data.title,
        item: `${baseUrl}${page.url}`,
      },
    ],
  };

  return (
    <>
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
      </DocsPage>
      <Script
        id="json-ld-docs"
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="json-ld-breadcrumbs"
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
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
  { params, searchParams: _searchParams }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const page = source.getPage(slug);

  if (!page) notFound();

  return {
    title: `${page.data.title} | Java Tutorial - Javaistic`,
    description: page.data.description,
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      title: `${page.data.title} | Java Tutorial - Javaistic`,
      description: page.data.description,
      siteName: "Javaistic",
      url: `${baseUrl}${page.url}`,
      images: `https://og-javaistic.vercel.app/og?title=${page.data.title}`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@javaistic",
      creator: "@arghyaxcodes",
    },
  };
}
