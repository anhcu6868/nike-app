export type CardProps = {
  item: {
    id: number
    src: string
    className: string
    title: string
    description: string
    price: number
  }
  onClickCard: (item: {
    id: number
    src: string
    className: string
    title: string
    description: string
    price: number
  }) => void
}

const Card = ({ item, onClickCard }: CardProps) => {
  return (
    <div
      className="relative max-w-xl cursor-pointer"
      onClick={() => onClickCard(item)}
    >
      {/* scale wrapper */}
      <div className="transition hover:scale-105">
        {/* Card content */}
        <div className={`${item.className}`}>
          {/* Title SHOP NOW Image Shoe  */}
          <div className="p-8">
            <div className="text-2xl font-bold">{item.title}</div>
            <div className="mt-10 font-semibold underline underline-offset-4">
              SHOP NOW +
            </div>
          </div>
          {/* Image of shoe */}
          <img
            className="absolute top-0 left-[40%] h-40 w-56"
            src={item.src}
            alt={`image of ${item.title}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
