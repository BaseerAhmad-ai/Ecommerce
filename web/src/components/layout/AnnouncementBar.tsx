import { store } from '../../config/store'

export function AnnouncementBar() {
  return (
    <p className="bg-forest px-4 py-2 text-center text-xs tracking-[0.18em] text-cream uppercase sm:text-sm">
      {store.announcement}
    </p>
  )
}
