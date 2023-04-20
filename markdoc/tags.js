import { Button } from '@/components/Button'
import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import {
  TableCoursesAndStudents,
  TablePoints,
  TablePrizeDraw,
  TableSquads,
} from '@/components/Tables'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  tableSquads: {
    selfClosing: true,
    render: TableSquads,
  },
  tableCourses: {
    selfClosing: true,
    render: TableCoursesAndStudents,
  },
  tablePrizeDraw: {
    selfClosing: true,
    render: TablePrizeDraw,
  },
  tablePoints: {
    selfClosing: true,
    render: TablePoints,
  },
  button: {
    selfClosing: true,
    attributes: {
      href: { type: String },
      text: { type: String },
    },
    render: ({ href, text }) => (
      <button
        onClick={() => window.open(href, '_blank')}
        className="rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
      >
        {text}
      </button>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
