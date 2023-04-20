import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { NavLink } from './NavLink'
import { ThemeSelector } from './ThemeSelector'
import Pontuacao from '@/pages/pontuacao'

const navigation = [
  {
    title: 'Introdução',
    links: [{ title: 'A nossa história', href: '/' }],
  },
  {
    title: 'Objetivo',
    links: [
      {
        title: 'Integração dos estudantes',
        href: '/docs/integracao-dos-estudantes',
      },
    ],
  },
  {
    title: 'Formato',
    links: [
      { title: 'Etapas', href: '/docs/etapas' },
      { title: 'Equipes', href: '/docs/equipes' },
      {
        title: 'Alimentos e Suplementos',
        href: '/docs/alimentos-e-suplementos',
      },
      { title: 'Sorteio', href: '/docs/sorteio' },
    ],
  },
  {
    title: 'Integração e Envolvimento',
    links: [
      {
        title: 'Ação social em entidades de Franca/SP',
        href: '/docs/acao-social-em-entidades-de-franca-sp',
      },
      { title: 'Noite do Encerramento', href: '/docs/noite-do-encerramento' },
    ],
  },
  {
    title: 'Observações Finais',
    links: [{ title: 'Regras', href: '/docs/regras' }],
  },
  {
    title: 'Resultados',
    links: [{ title: '2023', href: '/docs/2023' }],
  },
  {
    title: 'Portal',
    links: [
      { title: 'Ambiente Virtual', href: 'http://ava-grad.unifacef.com.br/' },
      {
        title: 'Portal WEB',
        href: 'http://sga.unifacef.com.br/EddydataApp-war/pages/system/portal.jsf',
      },
      { title: 'Biblioteca', href: 'http://biblioteca.unifacef.com.br/' },
    ],
  },
]

function Header({ navigation }) {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logomark className="h-9 w-9 lg:hidden" />
              <Logo className="hidden h-10 w-auto fill-[#1E1A64] dark:fill-[#ffffff] lg:block" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#">Sobre</NavLink>
              <NavLink href="#">Cursos</NavLink>
              <NavLink href="#">Extensão</NavLink>
              <NavLink href="#">Notícias</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="http://ava-grad.unifacef.com.br/">
                Ambiente Virtual
              </NavLink>
              <NavLink href="http://sga.unifacef.com.br/EddydataApp-war/pages/system/portal.jsf">
                Portal WEB
              </NavLink>
              <NavLink href="https://accounts.google.com/AccountChooser/signinchooser?flowName=GlifWebSignIn&flowEntry=AccountChooser&continue=https://mail.google.com/">
                Webmail
              </NavLink>
            </div>
            <ThemeSelector className="relative z-10" />

            <div className="-mr-1 md:hidden">
              <MobileNavigation navigation={navigation} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

export function Layout({ children, title, tableOfContents }) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let isCalculator = router.pathname === '/pontuacao'
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  let currentSection = useTableOfContents(tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <Header navigation={navigation} />

      {isHomePage && <Hero />}
      {isCalculator ? (
        <Pontuacao />
      ) : (
        <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
              <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
              <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
              <Navigation
                navigation={navigation}
                className="w-64 pr-8 xl:w-72 xl:pr-16"
              />
            </div>
          </div>
          <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
            <article>
              {(title || section) && (
                <header className="mb-9 space-y-1">
                  {section && (
                    <p className="font-display text-sm font-medium text-sky-500">
                      {section.title}
                    </p>
                  )}
                  {title && (
                    <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                      {title}
                    </h1>
                  )}
                </header>
              )}
              <Prose>{children}</Prose>
            </article>
            <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
              {previousPage && (
                <div>
                  <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                    Anterior
                  </dt>
                  <dd className="mt-1">
                    <Link
                      href={previousPage.href}
                      className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      <span aria-hidden="true">&larr;</span>{' '}
                      {previousPage.title}
                    </Link>
                  </dd>
                </div>
              )}
              {nextPage && (
                <div className="ml-auto text-right">
                  <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                    Próximo
                  </dt>
                  <dd className="mt-1">
                    <Link
                      href={nextPage.href}
                      className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                      {nextPage.title} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
            <nav aria-labelledby="on-this-page-title" className="w-56">
              {tableOfContents.length > 0 && (
                <>
                  <h2
                    id="on-this-page-title"
                    className="font-display text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Nesta página
                  </h2>
                  <ol role="list" className="mt-4 space-y-3 text-sm">
                    {tableOfContents.map((section) => (
                      <li key={section.id}>
                        <h3>
                          <Link
                            href={`#${section.id}`}
                            className={clsx(
                              isActive(section)
                                ? 'text-sky-500'
                                : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                            )}
                          >
                            {section.title}
                          </Link>
                        </h3>
                        {section.children.length > 0 && (
                          <ol
                            role="list"
                            className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                          >
                            {section.children.map((subSection) => (
                              <li key={subSection.id}>
                                <Link
                                  href={`#${subSection.id}`}
                                  className={
                                    isActive(subSection)
                                      ? 'text-sky-500'
                                      : 'hover:text-slate-600 dark:hover:text-slate-300'
                                  }
                                >
                                  {subSection.title}
                                </Link>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
