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

// export default function AirlineCard() {
//   return itineraries.map((itinerary, index) => {
//     return (
//       <li
//         key={itinerary.imgTitle}
//         className={`flex flex-col py-[15px] px-4 bg-neutrail-0 border border-neutral-700/[.12] sm:mb-4 sm:last:mb-0 rounded-xl ${
//           index === 2 || index === 3 ? 'md:hidden sm:flex' : ''
//         }`}
//       >
//         <div className="mb-4 flex items-center">
//           <Image
//             src={`/images/airlines/${itinerary.imgTitle}.webp`}
//             alt={itinerary.imgTitle}
//             width={64}
//             height={64}
//             className="mr-3 rounded lg:shrink"
//           />
//           <div className="flex flex-col">
//             <div className="flex items-center mb-2 text-p-md-sb text-neutral-700">
//               <span>{itinerary.fromPlace}</span>
//               <Image
//                 src={'/images/icons/round-arrow.svg'}
//                 alt={'round trip arrow'}
//                 width={20}
//                 height={20}
//                 className="mx-2"
//               />
//               <span>{itinerary.toPlace}</span>
//             </div>
//             <span className="mb-1 text-p-xs text-neutral-500">
//               {itinerary.period}
//             </span>
//             <span className="text-p-xs text-neutral-500 sm:hidden">
//               {itinerary.cabin}
//             </span>
//           </div>
//         </div>
//         <div className="self-end">
//           <span className="mr-2 text-p-xs text-neutral-500 sm:hidden">
//             來回票價
//           </span>
//           <span className="text-p-md-sb text-primary-500">
//             NT${itinerary.price}
//           </span>
//         </div>
//       </li>
//     );
//   });
// }

export default function AirlineCard({
  imgTitle,
  fromPlace,
  toPlace,
  period,
  cabin,
  price,
  index
}: AirlineCardProps) {
  return (
    <li
      key={imgTitle}
      className={`flex flex-col py-[15px] px-4 bg-neutrail-0 border border-neutral-700/[.12] sm:mb-4 sm:last:mb-0 rounded-xl ${
        index === 2 || index === 3 ? 'md:hidden sm:flex' : ''
      }`}
    >
      <div className="mb-4 flex items-center">
        <Image
          src={`/images/airlines/${imgTitle}.webp`}
          alt={imgTitle}
          width={64}
          height={64}
          className="mr-3 rounded lg:shrink"
        />
        <div className="flex flex-col">
          <div className="flex items-center mb-2 text-p-md-sb text-neutral-700">
            <span>{fromPlace}</span>
            <Image
              src={'/images/icons/round-arrow.svg'}
              alt={'round trip arrow'}
              width={20}
              height={20}
              className="mx-2"
            />
            <span>{toPlace}</span>
          </div>
          <span className="mb-1 text-p-xs text-neutral-500">{period}</span>
          <span className="text-p-xs text-neutral-500 sm:hidden">{cabin}</span>
        </div>
      </div>
      <div className="self-end">
        <span className="mr-2 text-p-xs text-neutral-500 sm:hidden">
          來回票價
        </span>
        <span className="text-p-md-sb text-primary-500">{`NT$${price}`}</span>
      </div>
    </li>
  );
}
