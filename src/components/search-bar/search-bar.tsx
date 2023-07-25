'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Dropdown from './dropdown';
import Input from './input';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [departureLocation, setDepartureLocation] = useState(
    searchParams.get('departureLocation') || ''
  );
  const [destination, setDestination] = useState(
    searchParams.get('destination') || ''
  );
  const [departureDate, setDepartureDate] = useState(
    searchParams.get('departureDate') || ''
  );
  const [returnDate, setReturnDate] = useState(
    searchParams.get('returnDate') || ''
  );

  const [isOnFocusDepartureLocation, setIsOnFocusDepartureLocation] =
    useState(false);
  const [isOnFocusDestination, setIsOnFocusDestination] = useState(false);
  const [isOnFocusDepartureDate, setIsOnFocusDepartureDate] = useState(false);
  const [isOnFocusReturnDate, setIsOnFocusReturnDate] = useState(false);

  const handleExchanging = () => {
    setDepartureLocation(destination);
    setDestination(departureLocation);
  };

  return (
    <div
      className="relative flex flex-col p-4 rounded-xl border border-neutral-700/[.08]
        before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-0
        before:block before:bg-neutral-100/[.84] before:rounded-xl before:blur-[1px] sm:p-3"
    >
      <ul className="relative z-10 flex items-center mb-1 sm:justify-between sm:mb-3">
        <Dropdown />
      </ul>
      <div className="relative z-10 flex items-center md:flex-col md:items-stretch">
        <div
          className="relative grow grid grid-cols-2 gap-4 mr-4
            lg:mr-3 md:mr-0 md:mb-4 sm:block sm:mb-3"
        >
          <div className="relative z-10 w-full mr-4 sm:mb-4">
            <Input
              id={'departureLocation'}
              label={'出發地'}
              placeholder={'從哪裡出發？'}
              value={departureLocation}
              setValue={(e) => setDepartureLocation(e.target.value)}
              isBorder={true}
              handleFocus={() =>
                setIsOnFocusDepartureLocation(!isOnFocusDepartureLocation)
              }
              isShowingResetButton={
                !!(departureLocation && isOnFocusDepartureLocation)
              }
              resetValue={() => {
                setDepartureLocation('');
              }}
            />
          </div>
          <button
            type="button"
            className="absolute top-[22px] left-[calc(50%-20px)] z-20 w-[40px] h-[40px]
              sm:top-[72px] sm:right-4 sm:left-auto"
            tabIndex={-1}
            onClick={handleExchanging}
          >
            <Image
              src={'/images/icons/change.svg'}
              alt={'change'}
              width={40}
              height={40}
            />
          </button>
          <div className="relative z-10 w-full mr-4">
            <Input
              id={'destination'}
              label={'目的地'}
              placeholder={'想要去哪裡？'}
              value={destination}
              setValue={(e) => setDestination(e.target.value)}
              isBorder={true}
              handleFocus={() =>
                setIsOnFocusDestination(!isOnFocusDepartureLocation)
              }
              isShowingResetButton={!!(destination && isOnFocusDestination)}
              resetValue={() => {
                setDestination('');
              }}
            />
          </div>
        </div>
        <div
          className={`grow grid grid-cols-2 gap-4 mr-4 bg-neutral-0 rounded-lg lg:mr-3 md:mr-0 md:mb-4 sm:mb-3 ${
            isOnFocusDepartureDate || isOnFocusReturnDate
              ? 'm-[-0.6px] border-[1.6px] border-primary-400'
              : 'border border-neutral-700/[.12] hover:border-neutral-600'
          }`}
        >
          <div
            className="relative w-full rounded-l-lg bg-neutral-0
              after:block after:w-[1px] after:h-[32px]
              after:absolute after:right-[-8px] after:top-[23px]
            after:bg-neutral-700/[.18]"
          >
            <Input
              id={'departureDate'}
              label={'出發'}
              placeholder={'7月13日 週三'}
              value={departureDate}
              setValue={(e) => setDepartureDate(e.target.value)}
              isBorder={false}
              handleFocus={() =>
                setIsOnFocusDepartureDate(!isOnFocusDepartureDate)
              }
              isShowingResetButton={!!(departureDate && isOnFocusDepartureDate)}
              resetValue={() => {
                setDepartureDate('');
              }}
            />
          </div>
          <div className="relative w-full mr-4 rounded-r-lg bg-neutral-0">
            <Input
              id={'returnDate'}
              label={'回程'}
              placeholder={'7月19日 週二'}
              value={returnDate}
              setValue={(e) => setReturnDate(e.target.value)}
              isBorder={false}
              handleFocus={() => setIsOnFocusReturnDate(!isOnFocusReturnDate)}
              isShowingResetButton={!!(returnDate && isOnFocusReturnDate)}
              resetValue={() => {
                setReturnDate('');
              }}
            />
          </div>
        </div>
        <button
          type="button"
          className="grow-0 shrink-0 flex justify-center items-center py-[12px] px-[20px] bg-primary-700 rounded-[8px]
          hover:bg-primary-500"
          onClick={() =>
            router.push(
              `/search?originPlace=${departureLocation}&destinationPlace=${destination}&departDate=${departureDate}&returnDate=${returnDate}`
            )
          }
        >
          <Image
            src="/images/icons/search.svg"
            alt="search"
            width={24}
            height={24}
            className="mr-[8px]"
          />
          <span className="text-p-md-sb font-semibold text-neutral-0">
            搜尋
          </span>
        </button>
      </div>
    </div>
  );
}
