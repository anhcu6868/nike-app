import CartItem from './CartItem'

type CartProps = {
  cartItems: {
    product: {
      id: number
      src: string
      className: string
      title: string
      description: string
      price: number
    }
    qty: number
    size: number
  }[]
  onDeleteCartItem: (id: number) => void
}

const Cart = ({ cartItems, onDeleteCartItem }: CartProps) => {
  return (
    <>
      <h2 className="mb-5 text-2xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem onDeleteCartItem={onDeleteCartItem} item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Cart
