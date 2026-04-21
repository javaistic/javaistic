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
import type { BreadcrumbList, HowTo, WithContext } from "schema-dts";
import { baseUrl } from "@/lib/metadata";
import { programsSource } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = programsSource.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  const jsonLd: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: page.data.title,
    description: page.data.description,
    image: `${baseUrl}/og.png`,
    provider: {
      "@type": "Organization",
      name: "Javaistic",
      url: baseUrl,
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
        name: "Programs",
        item: `${baseUrl}/programs`,
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
        }}
        full={page.data.full}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(programsSource, page),
            })}
          />
        </DocsBody>
      </DocsPage>
      <Script
        id="json-ld-programs"
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
  return programsSource.generateParams();
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
  const page = programsSource.getPage(slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} | Java Program Example - Javaistic`,
    description: page.data.description,
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      title: `${page.data.title} | Java Program Example - Javaistic`,
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
