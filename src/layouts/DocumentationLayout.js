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
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://javaistic.vercel.app${twitterDocs}`}
        />
      </Head>
      <SidebarLayout nav={documentationNav} {...props} />
    </>
  )
}
