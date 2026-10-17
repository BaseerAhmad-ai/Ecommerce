import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/layout/Layout'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import { AboutPage } from './pages/AboutPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { ContactPage } from './pages/ContactPage'
import { FAQPage } from './pages/FAQPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ShopPage } from './pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faqs" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
