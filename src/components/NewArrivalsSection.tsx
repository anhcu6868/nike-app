import Card from './Card'
type NewArrivalsSectionProps = {
  items: {
    id: number
    src: string
    className: string
    title: string
    description: string
    price: number
  }[]
  onClickCard: (item: {
    id: number
    src: string
    className: string
    title: string
    description: string
    price: number
  }) => void
}

const NewArrivalsSection = ({
  items,
  onClickCard,
}: NewArrivalsSectionProps) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,30%)]">
        {items.map((item) => (
          <Card key={item.id} item={item} onClickCard={onClickCard} />
        ))}
      </div>
    </div>
  )
}

export default NewArrivalsSection
