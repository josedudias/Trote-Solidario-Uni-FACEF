import { Fragment } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'

const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json', isActive: false },
]

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-200 dark:bg-slate-800">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-slate-800  via-sky-400 to-slate-400 bg-clip-text font-display text-5xl tracking-tight text-transparent dark:from-slate-200 dark:via-sky-400 dark:to-slate-200">
                Trote Solidário 2023
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-800 dark:text-slate-200">
                Uma jornada de união e solidariedade
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button
                  href="/docs/integracao-dos-estudantes"
                  className="dark:text-slate-800"
                >
                  Mais informações
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative">
              <Image
                className="absolute -right-64 -top-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
              <iframe
                width="100%"
                height="315"
                className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur"
                src="https://www.youtube.com/embed/r92bsr2fReI"
                title="YouTube video player"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
