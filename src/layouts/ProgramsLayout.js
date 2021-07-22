import { Title } from '@/components/Title'
import twitterPrograms from '@/img/twitter-programs.png'
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
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://javaistic.vercel.app${twitterPrograms}`}
        />
      </Head>
      <SidebarLayout nav={programsNav} {...props} />
    </>
  )
}
