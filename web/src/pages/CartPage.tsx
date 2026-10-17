import { CartItemRow } from '../components/cart/CartItem'
import { CartSummary } from '../components/cart/CartSummary'
import { ButtonLink } from '../components/ui/Button'
import { store } from '../config/store'
import { useCart } from '../hooks/useCart'

export function CartPage() {
  const { resolved, itemCount } = useCart()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <title>{`Cart — ${store.brandName}`}</title>
      <h1 className="font-serif text-4xl text-forest">Your cart</h1>
      {resolved.length === 0 ? (
        <div className="mt-10 rounded-2xl bg-white px-6 py-16 text-center">
          <p className="font-serif text-2xl text-forest">Your cart is empty</p>
          <p className="mt-2 text-ink/70">Add a soap or oil to get started.</p>
          <ButtonLink to="/shop" className="mt-6">
            Continue shopping
          </ButtonLink>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]">
          <div className="rounded-2xl bg-white px-4 sm:px-6">
            <p className="pt-4 text-sm text-ink/70">{itemCount} items in this browser</p>
            <ul className="divide-y divide-forest/10">
              {resolved.map((line) => (
                <li key={line.product.id}>
                  <CartItemRow productId={line.product.id} />
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl bg-white p-5">
            <h2 className="font-serif text-2xl text-forest">Summary</h2>
            <div className="mt-4">
              <CartSummary />
            </div>
            <ButtonLink to="/checkout" className="mt-5 w-full">
              Proceed to checkout
            </ButtonLink>
            <ButtonLink to="/shop" variant="ghost" className="mt-2 w-full">
              Continue shopping
            </ButtonLink>
            <p className="mt-3 text-xs text-ink/55">
              Cart items are saved in this browser only. They are not a shared store inventory.
            </p>
          </aside>
        </div>
      )}
    </div>
  )
}
