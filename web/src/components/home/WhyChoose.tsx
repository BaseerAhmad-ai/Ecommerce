import { HandHeart, Leaf, Package, Sparkles } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'

const items = [
  {
    title: 'Thoughtfully selected ingredients',
    copy: 'We describe what each product is for, without unverified certifications or clinical claims.',
    icon: Leaf,
  },
  {
    title: 'Handmade with care',
    copy: 'Soap bars are prepared in small batches, so colour and scent can vary slightly.',
    icon: HandHeart,
  },
  {
    title: 'Simple skincare choices',
    copy: 'A focused catalog of soaps, oils, and a few essentials — easy to browse and compare.',
    icon: Sparkles,
  },
  {
    title: 'Easy ordering',
    copy: 'Build a cart in the browser, then send a readable order summary on WhatsApp.',
    icon: Package,
  },
]

export function WhyChoose() {
  return (
    <section className="bg-beige/35 py-16" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 id="why-heading" className="font-serif text-3xl text-forest sm:text-4xl">
            Why choose us
          </h2>
        </FadeIn>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.title} as="li" delay={index * 0.06} className="rounded-2xl bg-white p-5">
              <item.icon className="h-6 w-6 text-forest" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl text-forest">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.copy}</p>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
