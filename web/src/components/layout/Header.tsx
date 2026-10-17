import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
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

function linkClass({ isActive }: { isActive: boolean }) {
  return `rounded-full px-3 py-2 text-md transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
    isActive ? 'text-forest font-medium' : 'text-ink/80 hover:text-forest'
  }`
}

export function Header() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const closeMenu = () => setMenuOpen(false)
// fgfdgdfgfdg
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="font-serif text-xl text-forest sm:text-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          {store.brandName}
        </NavLink>

        <nav className="ml-32 hidden items-center lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to + item.label} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
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

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-forest/10 lg:hidden"
          >
            <ul className="flex flex-col px-4 py-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className="block min-h-11 rounded-xl px-3 py-3 text-base text-forest hover:bg-white"
                    end={item.to === '/'}
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
