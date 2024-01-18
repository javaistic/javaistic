import { Title } from '@/components/Title'
import { SidebarLayout } from '@/layouts/SidebarLayout'
import { programsNav } from '@/navs/program'
import Head from 'next/head'
import { useRouter } from 'next/router'

export function ProgramsLayout(props) {
  const router = useRouter()

  return (
    <>
      <Title suffix={router.pathname === '/' ? undefined : 'Javaistic'}>
        {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      </Title>
      <Head>
        <meta
          name="description"
          content={props.layoutProps.meta.metaDescription || props.layoutProps.meta.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={
            router.pathname === '/programs'
              ? `https://og-image-javaistic.vercel.app/og?title=${
                  props.layoutProps.meta.metaTitle || props.layoutProps.meta.title
                }`
              : `https://og-image-javaistic.vercel.app/og?title=${
                  props.layoutProps.meta.metaTitle || props.layoutProps.meta.title
                }`
          }
        />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={
            router.pathname === '/programs'
              ? `https://og-image-javaistic.vercel.app/og?title=${
                  props.layoutProps.meta.metaTitle || props.layoutProps.meta.title
                }`
              : `https://og-image-javaistic.vercel.app/og?title=${
                  props.layoutProps.meta.metaTitle || props.layoutProps.meta.title
                }`
          }
        />
      </Head>
      <SidebarLayout nav={programsNav} {...props} />
    </>
  )
}
