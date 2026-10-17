import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { AnnouncementBar } from './AnnouncementBar'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }: { children: ReactNode }) {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])

  return (
    <div className="flex min-h-svh flex-col bg-cream text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
