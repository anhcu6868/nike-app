import { CiTrash } from 'react-icons/ci'
import Select from './Select'
import { QTY, SIZES } from '../constants'
type CartItemProps = {
  item: {
    src: string
    title: string
    description: string
    price: number
  }
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="cursor-pointer space-y-2 bg-gray-50 hover:bg-[#DAFFA2]">
      <div className="flex space-x-2 p-2">
        {/* Image */}
        <img className="h-24" src={item.src} />
        <div className="space-y-2">
          {/* Title & Description */}
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold">{item.price}$</div>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <div className="font-bold">SIZE</div>
            <Select title="" options={SIZES} className={'w-16 p-1'} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select title="" options={QTY} className={'w-16 p-1'} />
          </div>
        </div>
        <button>
          <CiTrash />
        </button>
      </div>
    </div>
  )
}

export default CartItem
