import { store } from '../../config/store'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.2-1.3H17V3h-2.1C12.3 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
    </svg>
  )
}

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      <li>
        <a
          href={store.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 bg-gray-100 items-center justify-center rounded-full border border-forest/15 text-forest transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          <span className="sr-only">Instagram</span>
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a
          href={store.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 bg-gray-100  items-center justify-center rounded-full border border-forest/15 text-forest transition hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          <span className="sr-only">Facebook</span>
          <FacebookIcon />
        </a>
      </li>
    </ul>
  )
}
