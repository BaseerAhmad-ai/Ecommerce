import { Link } from 'react-router'
import { store } from '../../config/store'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl">{store.brandName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">{store.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-wide uppercase">Quick links</h2>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-wide uppercase">Shop</h2>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li>
              <Link to="/shop?category=soaps" className="hover:text-white">
                Handmade Soaps
              </Link>
            </li>
            <li>
              <Link to="/shop?category=oils" className="hover:text-white">
                Natural Oils
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium tracking-wide uppercase">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-cream/85">
            <li>{store.addressLine}</li>
            <li>
              <a href={`mailto:${store.contactEmail}`} className="hover:text-white">
                {store.contactEmailDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${store.whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {store.phoneDisplay}
              </a>
            </li>
          </ul>
          <SocialLinks className="mt-4 text-cream" />
        </div>
      </div>
      <p className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/70">
        © {year} {store.brandName}. All rights reserved.
      </p>
    </footer>
  )
}
