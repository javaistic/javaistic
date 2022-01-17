import { Title } from '@/components/Title'
import twitterDocs from '@/img/twitter-docs.png'
import { SidebarLayout } from '@/layouts/SidebarLayout'
import { documentationNav } from '@/navs/documentation'
import Head from 'next/head'
import { useRouter } from 'next/router'

export function DocumentationLayout(props) {
  const router = useRouter()

  return (
    <>
      <Title suffix={router.pathname === '/' ? undefined : 'Javaistic'}>
        {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      </Title>
      <Head>
        <meta name="description" content={props.layoutProps.meta.metaDescription || props.layoutProps.meta.description} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="og:image" property="og:image" content={router.pathname === '/docs' ? `https://javaistic-og-image.vercel.app/.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fjavaistic-assets.vercel.app%2Flogo%2Fjavaistic-docs-main.svg`:`https://javaistic-og-image.vercel.app/**${props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}**.png?theme=light&md=1&fontSize=120px&images=https%3A%2F%2Fjavaistic-assets.vercel.app%2Flogo%2Fjavaistic-docs-main.svg`} />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={router.pathname === '/docs' ? `https://javaistic-og-image.vercel.app/.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fjavaistic-assets.vercel.app%2Flogo%2Fjavaistic-docs-main.svg` : `https://javaistic-og-image.vercel.app/**${props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}**.png?theme=light&md=1&fontSize=120px&images=https%3A%2F%2Fjavaistic-assets.vercel.app%2Flogo%2Fjavaistic-docs-main.svg`}
        />
      </Head>
      <SidebarLayout nav={documentationNav} {...props} />
    </>
  )
}
