import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting started': [pages['installation']],
  'Java Introduction': [
    pages['introduction'],
    pages['hello-world'],
    pages['jvm-jre-jdk'],
    pages['variables-and-literals'],
    pages['variables-primitive-data-types'],
    pages['operators'],
    pages['basic-input-output'],
    pages['expressions-statements-blocks'],
    pages['comments'],
  ],
  'Java Flow Control': [
    pages['if-else-statement'],
    pages['switch-statement'],
    pages['for-loop'],
    pages['enhanced-for-loop'],
    pages['while-and-do-while-loop'],
    pages['break-statement'],
    pages['continue-statement'],
  ],
  'Java Arrays': [pages['arrays'], pages['multidimensional-arrays']],
  'Java OOPS(I)': [pages['class-objects'], pages['methods'], pages['method-overloading'], pages['static-keyword'], pages['this-keyword']],
}
