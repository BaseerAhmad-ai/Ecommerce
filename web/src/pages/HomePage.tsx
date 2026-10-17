import { ContactForm } from '../components/home/ContactForm'
import { AboutPreview } from '../components/home/AboutPreview'
import { Categories } from '../components/home/Categories'
import { FAQAccordion } from '../components/home/FAQAccordion'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { Hero } from '../components/home/Hero'
import { WhyChoose } from '../components/home/WhyChoose'
import { FadeIn } from '../components/ui/FadeIn'
import { store } from '../config/store'

export function HomePage() {
  return (
    <>
      <title>{`${store.brandName} — Handmade soaps and natural oils`}</title>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <AboutPreview />
      <WhyChoose />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="home-faq">
        <FadeIn>
          <h2 id="home-faq" className="font-serif text-3xl text-forest sm:text-4xl">
            Frequently asked questions
          </h2>
        </FadeIn>
        <FadeIn delay={0.06} className="mt-6">
          <FAQAccordion />
        </FadeIn>
      </section>
      <section className="bg-white/60 py-16" aria-labelledby="home-contact">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 id="home-contact" className="font-serif text-3xl text-forest sm:text-4xl">
              Contact
            </h2>
            <p className="mt-2 max-w-xl text-ink/70">Questions about a product or an order? Send a demo message or WhatsApp.</p>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-8">
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
