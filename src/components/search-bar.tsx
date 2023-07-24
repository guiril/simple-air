'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Dropdown = () => {
  const items = [
    {
      iconSrc: 'round',
      iconAlt: 'round or one way',
      text: '來回'
    },
    {
      iconSrc: 'passenger',
      iconAlt: 'round or one way',
      text: '1 位成人'
    },
    {
      iconSrc: 'cabin',
      iconAlt: 'cabin',
      text: '經濟艙'
    }
  ];

  const list = items.map((el) => (
    <li className="flex items-center mr-3 last:mr-0 sm:mr-0" key={el.iconSrc}>
      <button
        type="button"
        className="flex items-center py-2 px-1 text-neutral-600 rounded ease-linear hover:bg-neutral-200"
      >
        <Image
          src={`/images/icons/${el.iconSrc}.svg`}
          alt={el.iconAlt}
          width={20}
          height={20}
          className="mr-1"
        />
        <span className="mr-1 text-p-sm-r">{el.text}</span>
        <Image
          src="/images/icons/arrow-down.svg"
          alt="arrow down"
          width={20}
          height={20}
        />
      </button>
    </li>
  ));

  return list;
};

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [originPlace, setOriginPlace] = useState(
    searchParams.get('originPlace') || ''
  );
  const [destinationPlace, setDestinationPlace] = useState(
    searchParams.get('destinationPlace') || ''
  );
  const [departDate, setFromDate] = useState(
    searchParams.get('departDate') || ''
  );
  const [returnDate, setReturnDate] = useState(
    searchParams.get('returnDate') || ''
  );

  const handleExchanging = () => {
    setOriginPlace(destinationPlace);
    setDestinationPlace(originPlace);
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
          <div
            className="w-full flex flex-col p-4 mr-4
              rounded-[8px] bg-neutral-0 border border-neutral-700/[.12]
              sm:mb-4"
          >
            <label htmlFor="fromPlace" className="mb-2 text-p-sm-r-2">
              出發地
            </label>
            <input
              type="text"
              id="originPlace"
              placeholder="從哪裡出發？"
              value={originPlace}
              onChange={(e) => setOriginPlace(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button
            type="button"
            className="absolute top-[22px] left-[calc(50%-20px)] w-[40px] h-[40px]
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
          <div
            className="w-full flex flex-col p-4 mr-4
            rounded-lg bg-neutral-0 border border-neutral-700/[.12]"
          >
            <label htmlFor="toPlace" className="mb-2 text-p-sm-r-2">
              目的地
            </label>
            <input
              type="text"
              id="toPlace"
              placeholder="想要去哪裡？"
              value={destinationPlace}
              onChange={(e) => setDestinationPlace(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
        <div
          className="grow grid grid-cols-2 gap-4 mr-4
          bg-neutral-0 border border-neutral-700/[.12] rounded-lg
            lg:mr-3 md:mr-0 md:mb-4 sm:mb-3"
        >
          <div
            className="relative w-full flex flex-col p-4
              rounded-l-lg bg-neutral-0
              after:block after:w-[1px] after:h-[32px]
              after:absolute after:right-[-8px] after:top-[23px]
            after:bg-neutral-700/[.18]"
          >
            <label htmlFor="fromDate" className="mb-2 text-p-sm-r-2">
              出發
            </label>
            <input
              type="text"
              id="fromDate"
              placeholder="7月13日 週三"
              value={departDate}
              onChange={(e) => setFromDate(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="w-full flex flex-col p-4 mr-4 rounded-r-lg bg-neutral-0">
            <label htmlFor="toDate" className="mb-2 text-p-sm-r-2">
              回程
            </label>
            <input
              type="text"
              name=""
              id="toDate"
              placeholder="7月19日 週二"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
        <button
          type="button"
          className="grow-0 shrink-0 flex justify-center items-center py-[12px] px-[20px] bg-primary-700 rounded-[8px]
          hover:bg-primary-500"
          onClick={() =>
            router.push(
              `/search?originPlace=${originPlace}&destinationPlace=${destinationPlace}&departDate=${departDate}&returnDate=${returnDate}`
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
