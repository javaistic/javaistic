import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting started': [
    pages['installation'],
  ],
  'Java Introduction': [
    pages['introduction'],
    pages['hello-world'],
    pages['jvm-jre-jdk'],
    pages['variables-and-literals'],
    pages['variables-primitive-data-types'],
    pages['operators'],
    pages['basic-input-output'],
  ],
}
