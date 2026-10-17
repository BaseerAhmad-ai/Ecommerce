export type FAQItem = {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: 'How do I place an order?',
    answer:
      'Add products to your cart, go to checkout, and send the prepared message on WhatsApp. Opening WhatsApp does not confirm the order until you send the message and the store replies.',
  },
  {
    question: 'Are the prices final?',
    answer:
      'Product prices are listed in Pakistani Rupees. Your order total, including delivery, is shown at checkout. We will confirm your order after you send the WhatsApp message and the store replies.',
  },
  {
    question: 'What can I expect from product details?',
    answer:
      'Each listing includes size or volume, a short description, and availability. Handmade batches can vary in colour and scent. Ask the store for a current ingredient list if you need it.',
  },
  {
    question: 'Do you deliver in Pakistan?',
    answer:
      'This storefront is set up for customers in Pakistan. Delivery fees and a free-delivery threshold are configured in the store settings. Actual delivery times should be confirmed on WhatsApp.',
  },
  {
    question: 'How can I contact the store?',
    answer:
      'Send a message using the contact form, email us, or reach out on WhatsApp. Our contact details are listed on the Contact page.',
  },
]
