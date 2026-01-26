import { IoIosArrowDown } from 'react-icons/io'
import type { FC } from 'react'
import { twMerge } from 'tw-merge'

type SelectProps = {
  title?: string
  options: Array<number>
  className?: string
  defaultValue?: number | string
}
const Select: FC<SelectProps> = ({
  title,
  options,
  className,
  defaultValue,
}) => {
  return (
    <div className="relative dark:text-black">
      <select
        defaultValue={defaultValue || ''}
        className={twMerge(
          `w-24 cursor-pointer appearance-none border border-gray-300 bg-white p-4 dark:text-black ${className}`,
        )}
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
