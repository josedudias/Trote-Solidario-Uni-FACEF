import { Fence } from '@/components/Fence'
import { nodes as defaultNodes } from '@markdoc/markdoc'

const nodes = {
  document: {
    render: undefined,
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: 'col',
      },
    },
  },
  tr: {
    ...defaultNodes.tr,
    attributes: {
      ...defaultNodes.tr.attributes,
      scope: {
        type: String,
        default: 'row',
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
}

export default nodes
