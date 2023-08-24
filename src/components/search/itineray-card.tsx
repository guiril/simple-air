import Image from 'next/image';

const OneWayOfItinerary = ({
  departureTime,
  arrivalTime,
  departureLocation,
  destination
}: {
  departureTime: string;
  arrivalTime: string;
  departureLocation: string;
  destination: string;
}) => {
  return (
    <div className="flex justify-between h-12">
      <div className="flex justify-between basis-[320px] xs:basis-auto xs:w-full">
        <div className="flex flex-col basis-[160px]">
          <div className="flex items-center mb-1 text-title-md-sb text-neutral-600 sm:text-p-md-sb">
            <span>{departureTime}</span>
            <span className="mx-2 sm:mx-1">~</span>
            <div className="relative">
              <span>{arrivalTime}</span>
              <span className="absolute top-0 right-[-24px] text-[12px] font-medium leading-none tracking-normal text-[#FF385C]">
                +1d
              </span>
            </div>
          </div>
          <div className="flex items-center text-p-xs text-neutral-500">
            <span>{departureLocation}</span>
            <span className="mx-1">-</span>
            <span>{destination}</span>
          </div>
        </div>
        <div className="flex flex-col basis-[110px] shrink-0 hidden-flight-time xs:text-right">
          <span className="mb-2 text-p-sm-sb text-neutral-600 xs:text-[12px] xs:font-medium">
            14 小時 10 分鐘
          </span>
          <span className="text-p-xs text-warning-600">直飛</span>
        </div>
      </div>
      <div className="flex justify-end items-start self-center pr-[60px] shrink-0 hidden-luggage xs:hidden">
        <Image
          src="/images/icons/checked-luggage.svg"
          alt="checked luggage"
          width={20}
          height={20}
          className="mr-3"
        />
        <Image
          src="/images/icons/carry-on-luggage.svg"
          alt="carry-on luggage"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default function ItineraryCard() {
  return (
    <li
      className="grid grid-cols-[1fr_246px] border border-neutral-700/[.12] rounded-xl
      sm:grid-cols-[1fr_160px] xs:flex xs:flex-col"
    >
      <div
        className="relative grid grid-cols-[84px_1fr] gap-8 pt-9 pb-8 pl-6
          before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0
          before:border-r before:border-dashed before:border-neutral-400 xs:before:hidden
          sm:grid-cols-[40px_1fr] sm:gap-4 sm:pl-5 xs:grid-cols-[28px_1fr] xs:pt-5 xs:px-4 xs:pb-4 xs:gap-4"
      >
        <Image
          src="/images/airlines/logos/eva.svg"
          alt="EVA AIR"
          width={84}
          height={48}
          className="self-center"
        />
        <div className="flex flex-col justify-between">
          <OneWayOfItinerary
            departureTime={'23:40'}
            arrivalTime={'07:50'}
            departureLocation={'TPE'}
            destination={'CDG'}
          />
          <OneWayOfItinerary
            departureTime={'11:20'}
            arrivalTime={'07:10'}
            departureLocation={'CDG'}
            destination={'TPE'}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-9 xs:py-3 xs:px-4">
        <div
          className="flex flex-col items-start mr-6
          sm:mr-0 xs:w-full xs:flex-row-reverse xs:justify-between xs:items-center"
        >
          <span
            className="text-[24px] font-semibold leading-[1.35em] tracking-[0.02em] text-neutral-700
            sm:mb-2 sm:text-[18px] sm:font-semibold sm:tracking-normal"
          >
            NT$50,342
          </span>
          <span className="mb-6 text-p-sm-r text-neutral-500 sm:hidden xs:block xs:mb-0">
            來回價格
          </span>
          <button
            type="button"
            className="w-full py-3 text-p-md-sb-btn text-neutral-0 bg-primary-700 rounded-lg hover:bg-primary-500 xs:hidden"
          >
            選擇航班
          </button>
        </div>
        <Image
          src="/images/icons/ticket-down-arrow.svg"
          alt="arrow"
          width={28}
          height={28}
          className="sm:hidden"
        />
      </div>
    </li>
  );
}
