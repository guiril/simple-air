import Image from 'next/image';
import type { ProductInfo } from '@/types/product-info';

export default function ImageCard({
  labelText,
  imgTitle,
  remaingNumber,
  location,
  price
}: ProductInfo) {
  const labelTextEl = labelText && (
    <span
      className="absolute top-3 right-3 py-1 px-2
        text-p-xs text-neutral-700 bg-neutral-0 rounded"
    >
      {labelText}
    </span>
  );

  const imageEl = (
    <Image
      src={`/images/${imgTitle}.webp`}
      alt={imgTitle}
      width={410}
      height={348}
      className="rounded-xl w-full"
    />
  );

  const remaingNumberEl = remaingNumber && (
    <span
      className="absolute bottom-3 left-3 py-1 px-2
        text-p-xs text-neutral-100 bg-[#0AA4E7] rounded"
    >
      {`剩 ${remaingNumber} 張`}
    </span>
  );

  const locationEl = (
    <span className="text-title-md-sb text-neutral-700">{location}</span>
  );

  const priceEl = (
    <span className="text-title-md-sb text-primary-500">{`NT$ ${price}`}</span>
  );

  return (
    <li
      key={location}
      className="md:last:hidden sm:last:block sm:mb-8 sm:last:mb-0"
    >
      <div className="relative mb-6 sm:mb-[10px]">
        {labelTextEl}
        {imageEl}
        {remaingNumberEl}
      </div>
      <div className="flex justify-between items-center">
        {locationEl}
        <div className="flex items-center">
          <span className="mr-3 text-p-sm-r-2 text-neutral-500 sm:hidden">
            最低價
          </span>
          {priceEl}
        </div>
      </div>
    </li>
  );
}
