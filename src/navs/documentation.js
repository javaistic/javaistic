import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting started': [
    pages['installation'],
    pages['introduction'],
    pages['hello-world'],
    pages['jvm-jre-jdk'],
  ],
}
