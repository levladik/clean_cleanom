import Image from 'next/image'

export const CarouselItem = ({ pics }) => {
  return (
    <figure
      className="diff aspect-16/7 rounded-xl"
      tabIndex={0}
    >
      <div
        className="diff-item-1 relative"
        role="img"
        tabIndex={0}
      >
        <Image
          alt="daisy"
          className="object-cover rounded-xl"
          height={100}
          quality={50}
          src={pics.before}
          width={100}
        />
      </div>
      <div
        className="diff-item-2 relative"
        role="img"
      >
        <Image
          alt="daisy"
          className="object-cover rounded-xl"
          height={100}
          src={pics.after}
          width={100}
          unoptimized
        />
      </div>
      <div className="diff-resizer"></div>
    </figure>
  )
}

export default CarouselItem
