import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { store } from '../../config/store'
import { useCart } from '../../hooks/useCart'
import { CartDrawer } from '../cart/CartDrawer'
import { SearchDialog } from './SearchDialog'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=soaps', label: 'Soaps' },
  { to: '/shop?category=oils', label: 'Natural Oils' },
  { to: '/about', label: 'About' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
]

function linkClass(isActive: boolean) {
  return `rounded-full px-3 py-2 text-md transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
    isActive ? 'text-forest font-medium' : 'text-ink/80 hover:text-forest'
  }`
}

export function Header() {
  const { itemCount } = useCart()
  const { pathname, search } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    const onPopState = () => setMenuOpen(false)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const isItemActive = (to: string, isActive: boolean) => {
    if (to === '/shop') return isActive && !search
    if (to.startsWith('/shop?category=')) {
      return pathname === '/shop' && search === to.slice('/shop'.length)
    }
    return isActive
  }

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-4">
        <NavLink
          to="/"
          className="shrink-0 rounded-sm font-serif text-xl text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:text-3xl"
        >
          {store.brandName}
        </NavLink>

        <nav className="ml-auto hidden items-center lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to + item.label}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) => linkClass(isItemActive(item.to, isActive))}
              end={item.to === '/' || item.to === '/shop'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-0.5 sm:gap-1 lg:ml-6">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            aria-label="Search products"
          >
            <Search size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            aria-label={`Open cart, ${itemCount} items`}
          >
            <ShoppingBag size={20} aria-hidden="true" />
            <AnimatePresence>
              {itemCount > 0 ? (
                <motion.span
                  key={itemCount}
                  initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-forest px-1 text-[10px] text-cream"
                >
                  {itemCount}
                </motion.span>
              ) : null}
            </AnimatePresence>
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile primary"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-forest/10 bg-white/70 lg:hidden"
          >
            <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1.5 px-3 py-3 sm:px-6 sm:py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex min-h-11 items-center rounded-xl px-4 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                        isItemActive(item.to, isActive)
                          ? 'bg-sage/50 font-medium text-forest'
                          : 'text-ink/80 hover:bg-cream hover:text-forest'
                      }`
                    }
                    end={item.to === '/' || item.to === '/shop'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      {searchOpen ? <SearchDialog onClose={() => setSearchOpen(false)} /> : null}
    </header>
  )
}
