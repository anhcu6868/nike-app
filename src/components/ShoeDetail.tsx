import Select from './Select'
import { SIZES, QTY } from '../constants'

type ShoeDetailProps = {
  shoe: {
    id: number
    src: string
    title: string
    description: string
    price: number
  }
}

const ShoeDetail = ({ shoe }: ShoeDetailProps) => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse dark:text-white">
      {/* Shoe image */}
      <div className="animate-float flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-linear-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={shoe.src} alt="" />
        </div>
      </div>
      {/* Shoe text details and btns */}
      <div className="flex-1 space-y-6">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        {/* Dollars, QTY & SIZE Select */}
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">
            {shoe.price}$
          </div>
          <Select title={'QTY'} options={QTY} />
          <Select title={'SIZE'} options={SIZES} />
        </div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button className="h-14 w-44 cursor-pointer bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-amber-50 dark:active:bg-amber-100">
            Add to bag
          </button>
          <a
            target="_blank"
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  )
}

export default ShoeDetail
