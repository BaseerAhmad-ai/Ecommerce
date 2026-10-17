import { motion, useReducedMotion } from 'framer-motion'
import { ButtonLink } from '../ui/Button'
import { ProductImage } from '../ui/ProductImage'
import { store } from '../../config/store'

const heroImage =
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden bg-beige/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.6fr] lg:py-20">
        <div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.22em] text-forest uppercase"
          >
            Handmade in small batches
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.55 }}
            className="mt-3 max-w-xl font-serif text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl"
          >
            Quiet care for everyday skin & hair rituals.
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.55 }}
            className="mt-4 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg"
          >
            {store.brandName} organics is a handmade soap and natural oils store serving customers in Pakistan.
            Browse thoughtfully selected bars and oils, then send your order on WhatsApp.
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
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(23,63,43,0.12)]">
            <ProductImage
              src={heroImage}
              alt="Handmade soap bars arranged with botanicals on a linen cloth"
              className=" w-full object-cover h-48 sm:h-64 md:h-80 lg:h-120"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
