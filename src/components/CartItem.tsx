import { CiTrash } from 'react-icons/ci'
import Select from './Select'
import { QTY, SIZES } from '../constants'
type CartItemProps = {
  item: {
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
  }
}

const CartItem = ({ item: { product, qty, size } }: CartItemProps) => {
  return (
    <div className="dark:hover:bg-night-50 cursor-pointer space-y-2 bg-gray-50 hover:bg-[#DAFFA2] dark:bg-transparent">
      <div className="flex space-x-2 p-2">
        {/* Image */}
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          {/* Title & Description */}
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              value={size}
              title=""
              options={SIZES}
              className={'w-16 p-1 pl-2'}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              value={qty}
              title=""
              options={QTY}
              className={'w-16 p-1 pl-2'}
            />
          </div>
        </div>
        <button className="cursor-pointer text-black dark:text-white">
          <CiTrash size={25} />
        </button>
      </div>
    </div>
  )
}

export default CartItem
