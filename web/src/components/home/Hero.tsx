import { motion, useReducedMotion } from 'framer-motion'
import { ButtonLink } from '../ui/Button'
import { ProductImage } from '../ui/ProductImage'
import { store } from '../../config/store'

const heroImage =
  'https://images.unsplash.com/photo-1600857544200-b2f666a9e2ce?auto=format&fit=crop&crop=center&w=1800&q=88'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden bg-[#f0ede5]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-20">
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
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-brass/30 sm:-inset-4 sm:translate-x-4 sm:translate-y-4" />
          <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_24px_70px_rgba(38,59,49,0.18)] sm:rounded-[2rem]">
            <ProductImage
              src={heroImage}
              alt="Handmade soap bars styled for a natural self-care ritual"
              loading="eager"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
            />
          </div>
          <div className="absolute -bottom-5 left-4 max-w-[15rem] rounded-xl border border-forest/5 bg-cream px-5 py-4 shadow-[0_12px_35px_rgba(38,59,49,0.12)] sm:bottom-6 sm:-left-8">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-brass uppercase">The everyday edit</p>
            <p className="mt-1 font-serif text-lg text-forest">Simple care, made with intention.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
