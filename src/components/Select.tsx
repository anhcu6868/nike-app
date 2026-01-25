import { IoIosArrowDown } from 'react-icons/io'
import type { FC } from 'react'

type SelectProps = {
  title?: string
  options: Array<number>
}
const Select: FC<SelectProps> = ({ title, options }) => {
  return (
    <div className="relative">
      <select
        defaultValue={''}
        className="w-24 appearance-none border border-gray-300 bg-white p-4"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default Select
