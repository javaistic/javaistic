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
              ? `https://og-image-javaistic.vercel.app/.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.javaistic.ml%2Flogo%2Fjavaistic-programs-main.svg`
              : `https://og-image-javaistic.vercel.app/**${
                  props.layoutProps.meta.metaTitle || props.layoutProps.meta.title
                }**.png?theme=light&md=1&fontSize=120px&images=https%3A%2F%2Fassets.javaistic.ml%2Flogo%2Fjavaistic-programs-main.svg`
          }
        />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={
            router.pathname === '/programs'
              ? `https://og-image-javaistic.vercel.app/.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.javaistic.ml%2Flogo%2Fjavaistic-programs-main.svg`
              : `https://og-image-javaistic.vercel.app/**${
                  props.layoutProps.meta.metaTitle || props.layoutProps.meta.title
                }**.png?theme=light&md=1&fontSize=120px&images=https%3A%2F%2Fassets.javaistic.ml%2Flogo%2Fjavaistic-programs-main.svg`
          }
        />
      </Head>
      <SidebarLayout nav={programsNav} {...props} />
    </>
  )
}
