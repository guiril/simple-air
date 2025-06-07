import Image from 'next/image';

interface AirlineCardProps {
  imgTitle: string;
  fromPlace: string;
  toPlace: string;
  period: string;
  cabin: string;
  price: string;
  index: number;
}

export default function AirlineCard({
  imgTitle,
  fromPlace,
  toPlace,
  period,
  cabin,
  price,
  index
}: AirlineCardProps) {
  const imageEl = (
    <Image
      src={`/images/airlines/${imgTitle}.webp`}
      alt={imgTitle}
      width={64}
      height={64}
      className="mr-3 rounded lg:shrink"
    />
  );

  const arrowEl = (
    <Image
      src={'/images/icons/round-arrow.svg'}
      alt={'round trip arrow'}
      width={20}
      height={20}
      className="mx-2"
    />
  );

  const placeEl = (
    <div className="flex items-center mb-2 text-p-md-sb text-neutral-700">
      <span>{fromPlace}</span>
      {arrowEl}
      <span>{toPlace}</span>
    </div>
  );

  const periodEl = (
    <span className="mb-1 text-p-xs text-neutral-500">{period}</span>
  );

  const cabinEl = (
    <span className="text-p-xs text-neutral-500 sm:hidden">{cabin}</span>
  );

  const priceEl = (
    <>
      <span className="mr-2 text-p-xs text-neutral-500 sm:hidden">
        來回票價
      </span>
      <span className="text-p-md-sb text-primary-500">{`NT$${price}`}</span>
    </>
  );

  return (
    <li
      key={imgTitle}
      className={`flex flex-col py-[15px] px-4 bg-neutrail-0 border border-neutral-700/[.12] sm:mb-4 sm:last:mb-0 rounded-xl ${
        index === 2 || index === 3 ? 'md:hidden sm:flex' : ''
      }`}
    >
      <div className="mb-4 flex items-center">
        {imageEl}
        <div className="flex flex-col">
          {placeEl}
          {periodEl}
          {cabinEl}
        </div>
      </div>
      <div className="self-end">{priceEl}</div>
    </li>
  );
}
