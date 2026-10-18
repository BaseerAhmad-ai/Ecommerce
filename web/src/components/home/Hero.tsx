import { motion, useReducedMotion } from 'framer-motion'
import { ButtonLink } from '../ui/Button'
import { ProductImage } from '../ui/ProductImage'
import { store } from '../../config/store'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#f7f3eb_0%,#eee2d9_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
        <div className="relative z-10 py-2 lg:py-8">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-brass uppercase"
          >
            <span className="h-px w-8 bg-brass" />
            Thoughtfully made in small batches
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.55 }}
            className="mt-5 max-w-xl font-serif text-[2.65rem] leading-[1.08] tracking-[-0.035em] text-forest sm:text-6xl lg:text-[4.4rem]"
          >
            A little more nature in your daily ritual.
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.55 }}
            className="mt-5 max-w-lg text-base leading-8 text-ink/70 sm:text-lg"
          >
            {store.brandName} brings together handmade soaps and natural oils, thoughtfully chosen
            to make your everyday care feel a little more considered.
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.24, duration: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink to="/shop?category=soaps">Shop soaps</ButtonLink>
            <ButtonLink to="/shop?category=oils" variant="ghost">
              Explore natural oils
            </ButtonLink>
          </motion.div>
        </div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-2xl lg:pl-2"
        >
          <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-brass/35 sm:-inset-4 sm:translate-x-4 sm:translate-y-4" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-cream shadow-[0_24px_70px_rgba(38,59,49,0.18)] sm:rounded-[2rem]">
            <ProductImage
              src="/hero_normal.webp"
              alt="U&M handmade soap bars and natural oil arranged with botanical ingredients"
              loading="eager"
              className="aspect-video w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
