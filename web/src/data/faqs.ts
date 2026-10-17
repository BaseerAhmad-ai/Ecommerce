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
      'Prices shown in this demo are sample values in Pakistani Rupees. Replace them in the product data file before taking live orders.',
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
      'Use the contact form for a frontend demo response, email the placeholder address, or message the configured WhatsApp number once it is replaced.',
  },
]
