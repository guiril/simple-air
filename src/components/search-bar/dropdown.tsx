import { ReactNode, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

const Trigger = ({
  iconSrc,
  iconAlt,
  text,
  children,
  showSelector
}: {
  iconSrc: string;
  iconAlt: string;
  text: string;
  children: ReactNode;
  showSelector: () => void;
}) => {
  const container = useRef<HTMLLIElement>(null);
  const [isSelectorShowing, setIsSelectorShowing] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (container.current?.contains(e.target as Node)) return;

      setIsSelectorShowing(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <li
      className="relative flex items-center mr-3 last:mr-0 sm:mr-0"
      ref={container}
    >
      <button
        type="button"
        className="flex items-center py-2 px-1 text-neutral-600 rounded ease-linear hover:bg-neutral-200"
        onClick={() => {
          showSelector();
          setIsSelectorShowing(!isSelectorShowing);
        }}
      >
        <Image
          src={`/images/icons/${iconSrc}.svg`}
          alt={iconAlt}
          width={20}
          height={20}
          className="mr-1"
        />
        <span className="mr-1 text-p-sm-r">{text}</span>
        <Image
          src="/images/icons/arrow-down.svg"
          alt="arrow"
          width={20}
          height={20}
        />
      </button>
      {isSelectorShowing && children}
    </li>
  );
};

const OptionContainer = ({ children }: { children: ReactNode }) => (
  <ul className="absolute top-[100%] left-0 w-[116px] py-4 px-1 rounded-lg bg-neutral-0 border border-neutral-700/[.12]">
    {children}
  </ul>
);

const Option = ({
  label,
  currentOption,
  handleClick
}: {
  label: string;
  currentOption: string;
  handleClick: () => void;
}) => {
  return (
    <li
      className={`py-2 px-3 h-[36px] mb-4 last:mb-0 cursor-pointer ${
        currentOption === label
          ? 'text-p-sm-sb text-primary-500 bg-primary-50'
          : 'text-p-sm-r hover:text-p-sm-sb hover:text-primary-500 hover:bg-primary-50'
      }`}
      onClick={handleClick}
    >
      {label}
    </li>
  );
};

export default function Dropdown() {
  const [activeDropdown, setActiveDropdown] = useState('');

  const [currentWay, setCurrentWay] = useState('來回');
  const [currentCabin, setCurrentCabin] = useState('經濟艙');

  const [currentAdultsNumber, setCurrentAdultsNumber] = useState(1);
  const [currentChildrenNumber, setCurrentChildrenNumber] = useState(0);
  const [currentPassengers, setCurrentPassengers] = useState(
    `${currentAdultsNumber} 位成人${
      currentChildrenNumber ? '，' + currentChildrenNumber + ' 位兒童' : ''
    }`
  );

  const wayOptions = [
    { id: 0, label: '單程', value: 'one way' },
    { id: 1, label: '來回', value: 'round' }
  ];

  const cabinOptions = [
    { id: 0, label: '經濟艙', value: 'CABIN_CLASS_ECONOMY' },
    { id: 1, label: '高端經濟艙', value: 'CABIN_CLASS_PREMIUM_ECONOMY' },
    { id: 2, label: '商務艙', value: 'CABIN_CLASS_BUSINESS' },
    { id: 3, label: '頭等艙', value: 'CABIN_CLASS_FIRST' }
  ];

  return (
    <>
      <Trigger
        iconSrc={'way'}
        iconAlt={'round or one way'}
        text={currentWay}
        showSelector={() => setActiveDropdown('way')}
      >
        {activeDropdown === 'way' && (
          <OptionContainer>
            {wayOptions.map((option) => (
              <Option
                key={option.id}
                label={option.label}
                currentOption={currentWay}
                handleClick={() => {
                  setActiveDropdown('');
                  setCurrentWay(option.label);
                }}
              />
            ))}
          </OptionContainer>
        )}
      </Trigger>
      <Trigger
        iconSrc={'passenger'}
        iconAlt={'passenger'}
        text={currentPassengers}
        showSelector={() => setActiveDropdown('passenger')}
      >
        {activeDropdown === 'passenger' && (
          <div
            className="w-[274px] absolute top-[100%] left-0 pt-5 px-4 pb-[14px]
              rounded-lg bg-neutral-0 border border-neutral-700/[.12]"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <span className="text-p-sm-md text-neutral-600">大人</span>
                <span className="text-p-xs text-neutral-500">年滿 16 歲</span>
              </div>
              <div className="flex justify-between items-center w-[90px]">
                <button
                  type="button"
                  className={`w-6 h-6 flex flex-col justify-center items-center border-[1.5px] rounded-full ${
                    currentAdultsNumber === 1
                      ? 'text-neutral-400 border-neutral-400'
                      : 'text-primary-500 border-primary-500'
                  }`}
                  onClick={() => {
                    setCurrentAdultsNumber(currentAdultsNumber - 1);
                  }}
                  disabled={currentAdultsNumber === 1}
                >
                  <span>-</span>
                </button>
                <span className="text-p-md-body text-neutral-600">
                  {currentAdultsNumber}
                </span>
                <button
                  type="button"
                  className={`w-6 h-6 flex flex-col justify-center items-center border-[1.5px] border-neutral-400 rounded-full ${
                    currentAdultsNumber === 8
                      ? 'text-neutral-400 border-neutral-400'
                      : 'text-primary-500 border-primary-500'
                  }`}
                  onClick={() => {
                    setCurrentAdultsNumber(currentAdultsNumber + 1);
                  }}
                  disabled={currentAdultsNumber === 8}
                >
                  <span>+</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col">
                <span className="text-p-sm-md text-neutral-600">兒童</span>
                <span className="text-p-xs text-neutral-500">0 ~ 15 歲</span>
              </div>
              <div className="flex justify-between items-center w-[90px]">
                <button
                  type="button"
                  className={`w-6 h-6 flex flex-col justify-center items-center border-[1.5px] rounded-full ${
                    currentChildrenNumber === 0
                      ? 'text-neutral-400 border-neutral-400'
                      : 'text-primary-500 border-primary-500'
                  }`}
                  onClick={() => {
                    setCurrentChildrenNumber(currentChildrenNumber - 1);
                  }}
                  disabled={currentChildrenNumber === 0}
                >
                  <span>-</span>
                </button>
                <span className="text-p-md-body text-neutral-600">
                  {currentChildrenNumber}
                </span>
                <button
                  type="button"
                  className={`w-6 h-6 flex flex-col justify-center items-center border-[1.5px] rounded-full ${
                    currentChildrenNumber === 8
                      ? 'text-neutral-400 border-neutral-400'
                      : 'text-primary-500 border-primary-500'
                  }`}
                  onClick={() => {
                    setCurrentChildrenNumber(currentChildrenNumber + 1);
                  }}
                  disabled={currentChildrenNumber === 8}
                >
                  <span>+</span>
                </button>
              </div>
            </div>
            <button
              type="button"
              className="block py-2 px-3 ml-auto text-p-xs-md text-neutral-0 bg-primary-700 rounded
                hover:text-neutral-100 hover:bg-primary-500"
              onClick={() => {
                setActiveDropdown('');
                setCurrentPassengers(
                  `${currentAdultsNumber} 位成人${
                    currentChildrenNumber
                      ? '，' + currentChildrenNumber + ' 位兒童'
                      : ''
                  }`
                );
              }}
            >
              確認
            </button>
          </div>
        )}
      </Trigger>
      <Trigger
        iconSrc={'cabin'}
        iconAlt={'cabin'}
        text={currentCabin}
        showSelector={() => setActiveDropdown('cabin')}
      >
        {activeDropdown === 'cabin' && (
          <OptionContainer>
            {cabinOptions.map((option) => (
              <Option
                key={option.id}
                label={option.label}
                currentOption={currentCabin}
                handleClick={() => {
                  setActiveDropdown('');
                  setCurrentCabin(option.label);
                }}
              />
            ))}
          </OptionContainer>
        )}
      </Trigger>
    </>
  );
}
