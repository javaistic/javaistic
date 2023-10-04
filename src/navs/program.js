import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/programs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'programs'
)

export const programsNav = {
  'Getting started': [pages['introduction']],
  Introduction: [
    pages['print-an-integer'],
    pages['add-two-integers'],
    pages['check-even-or-odd'],
    pages['java-program-to-add-two-binary-numbers'],
    pages['java-program-to-add-two-complex-numbers'],
    pages['multiply-two-numbers'],
    pages['java-program-to-check-Leap-year'],
    pages['calculate-simple-interest'],
    pages['java-program-to-check-divisbility'],
  ],
}
