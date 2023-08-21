'use client';

import { use, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { stopHashHrefNavigation } from '@/utils';

import Slider from 'rc-slider';

import Image from 'next/image';
import Header from '@/components/header';
import SearchBar from '@/components/search-bar/search-bar';
import Footer from '@/layouts/footer';

import FilterTitle from '@/components/filter/filter-title';
import TimeSlider from '@/components/filter/time-slider';
import ToggleSwitch from '@/components/filter/toggle-switch';
import Checkbox from '@/components/filter/checkbox';
import FilterDividingLine from '@/components/filter/dividing-line';

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
      <div className="flex flex-col basis-[160px]">
        <div className="flex items-center mb-1 text-title-md-sb text-neutral-600">
          <span>{departureTime}</span>
          <span className="mx-2">~</span>
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
      <div className="flex flex-col basis-[99px]">
        <span className="mb-2 text-p-sm-sb text-neutral-600">
          14 小時 10 分鐘
        </span>
        <span className="text-p-xs text-warning-600">直飛</span>
      </div>
      <div className="flex justify-end items-start self-center">
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

const ItineraryCard = () => {
  return (
    <li className="grid grid-cols-[1fr_246px] border border-neutral-700/[.12] rounded-xl">
      <div
        className="relative grid grid-cols-[84px_1fr] gap-8 pt-9 pr-[60px] pb-8 pl-6
          before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0
          before:border-r before:border-dashed before:border-neutral-400"
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
      <div className="flex justify-center items-center py-9">
        <div className="flex flex-col items-start mr-6">
          <span className="text-[24px] font-semibold leading-[1.35em] tracking-[0.02em] text-neutral-700">
            NT$50,342
          </span>
          <span className="mb-6 text-p-sm-r text-neutral-500">來回價格</span>
          <button
            type="button"
            className="w-full py-3 text-p-md-sb-btn text-neutral-0 bg-primary-700 rounded-lg"
          >
            選擇航班
          </button>
        </div>
        <Image
          src="/images/icons/ticket-down-arrow.svg"
          alt="arrow"
          width={28}
          height={28}
        />
      </div>
    </li>
  );
};

export default function SearchPage() {
  const searchParams = useSearchParams();

  const originPlace = searchParams.get('originPlace');
  const destinationPlace = searchParams.get('destinationPlace');
  const departDate = searchParams.get('departDate');
  const returnDate = searchParams.get('returnDate');

  const MAX_FLIGHT_HOURS = 30;
  const MIN_FLIGHT_HOURS = 3.5;

  const [isStopNumberFilterShowing, setIsStopNumberFilterShowing] =
    useState(true);
  const [isDepatureTimeFilterShowing, setIsDepatureTimeFilterShowing] =
    useState(true);
  const [isFlightTimeFilterShowing, setIsFlightTimeFilterShowing] =
    useState(true);
  const [isAirportFilterShowing, setIsAirportFilterShowing] = useState(true);
  const [isAirlineFilterShowing, setIsAirlineFilterShowing] = useState(true);

  const [stopNumber, setStopNumber] = useState([0, 1, 2]);
  const [departureTimeSliderValue, setDepartureTimeSliderValue] = useState([
    0, 48
  ]);
  const [returnTimeSliderValue, setReturnTimeSliderValue] = useState([0, 48]);
  const [flightTimeSliderValue, setFlightTimeSliderValue] = useState(0);
  const [isReturnToSameAirport, setIsReturnToSameAirport] = useState(false);
  const [airportsList, setAirportsList] = useState<string[] | []>([]);
  const [isAllAirlinesSelected, setIsAllAirlinesSelected] = useState(false);
  const [airlinesList, setAirlinesList] = useState<string[] | []>([]);

  const handleTimeSliderOnChange = (
    value: number[],
    setValue: (value: number[]) => void
  ) => {
    const [start, end] = value;
    const minDistance = 0; // Minimum distance to prevent handles from being too close

    if (Math.abs(start - end) === minDistance) return;
    setValue(value);
  };

  const formatFlightTimeSliderValue = (value: number) => {
    return value / 2 + MIN_FLIGHT_HOURS;
  };

  const handleStopNumberCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let stops = [...stopNumber];
    const isChecked = e.target.checked;
    const stop = Number(e.target.value);
    const index = stops.findIndex((el) => el === stop);

    if (isChecked && index !== -1) {
      stops = [...stopNumber, stop];
    } else {
      stops.splice(index, 1);
    }

    setStopNumber(stops);
  };

  const handleAirportsCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let airports = [...airportsList];
    const isChecked = e.target.checked;
    const airport = e.target.value;
    const index = airports.findIndex((el) => el === airport);

    if (isChecked && index === -1) {
      airports = [...airportsList, airport];
    } else {
      airports.splice(index, 1);
    }

    setAirportsList(airports);
  };

  const handleAirlinesCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let airlines = [...airlinesList];
    const isChecked = e.target.checked;
    const airline = e.target.value;
    const index = airlines.findIndex((el) => el === airline);

    if (isChecked && index === -1) {
      airlines = [...airlinesList, airline];
    } else {
      airlines.splice(index, 1);
    }

    setAirlinesList(airlines);
  };

  return (
    <>
      <div className="bg-[url('/images/hero/search.png')] bg-cover bg-center">
        <div className="container min-h-[282px] flex flex-col justify-between pb-6">
          <Header isBlackLogo={false} />
          <SearchBar />
        </div>
      </div>
      <div className="container flex justify-between py-[60px]">
        <ul className="basis-[344px] mr-8 px-3">
          <li className="relative">
            <FilterTitle
              title={'轉機'}
              description={null}
              isShowingFilter={isStopNumberFilterShowing}
              onFilterTitleClick={() => {
                setIsStopNumberFilterShowing(!isStopNumberFilterShowing);
              }}
            />
            <div
              className={`ease-in-out duration-200 ${
                isStopNumberFilterShowing
                  ? 'pb-6 h-auto overflow-visible opacity-100'
                  : 'h-0 overflow-hidden opacity-0'
              }`}
            >
              <div className="py-[14px]">
                <Checkbox
                  id={'nonStop'}
                  value={0}
                  title={'直飛 (16)'}
                  price={'50,599'}
                  checked={stopNumber.findIndex((el) => el === 0) !== -1}
                  onCheckboxChange={handleStopNumberCheckboxChange}
                />
              </div>
              <div className="py-[14px]">
                <Checkbox
                  id={'oneStop'}
                  value={1}
                  title={'轉機 1 次 (8)'}
                  price={'41,347'}
                  checked={stopNumber.findIndex((el) => el === 1) !== -1}
                  onCheckboxChange={handleStopNumberCheckboxChange}
                />
              </div>
              <div className="py-[14px]">
                <Checkbox
                  id={'twoStop'}
                  value={2}
                  title={'轉機 2 次 (4)'}
                  price={'40,298'}
                  checked={stopNumber.findIndex((el) => el === 2) !== -1}
                  onCheckboxChange={handleStopNumberCheckboxChange}
                />
              </div>
            </div>
            <FilterDividingLine />
          </li>
          <li className="relative">
            <FilterTitle
              title={'出發時間'}
              description={null}
              isShowingFilter={isDepatureTimeFilterShowing}
              onFilterTitleClick={() => {
                setIsDepatureTimeFilterShowing(!isDepatureTimeFilterShowing);
              }}
            />
            <div
              className={`ease-in-out duration-200 ${
                isDepatureTimeFilterShowing
                  ? 'pb-6 h-auto overflow-visible opacity-100'
                  : 'h-0 overflow-hidden opacity-0'
              }`}
            >
              <TimeSlider
                label={'去程'}
                value={departureTimeSliderValue}
                onChange={(value) => {
                  // The type definition in the rc-slider source code allows the value to be either a number or an array of numbers.
                  // Since the range property is being used here, it can be confidently stated that in this specific use case,
                  // the value should always be an array containing two numbers.
                  // This explains the type assertion below.
                  handleTimeSliderOnChange(
                    value as number[],
                    setDepartureTimeSliderValue
                  );
                }}
              />
              <TimeSlider
                label={'回程'}
                value={returnTimeSliderValue}
                onChange={(value) => {
                  // Using type assertion here as well,
                  // for the same reason explained in the onChange for the departure time slider.
                  handleTimeSliderOnChange(
                    value as number[],
                    setReturnTimeSliderValue
                  );
                }}
              />
            </div>
            <FilterDividingLine />
          </li>
          <li className="relative">
            <FilterTitle
              title={'飛行時間'}
              description={`最短時間為 ${MIN_FLIGHT_HOURS} 小時`}
              isShowingFilter={isFlightTimeFilterShowing}
              onFilterTitleClick={() =>
                setIsFlightTimeFilterShowing(!isFlightTimeFilterShowing)
              }
            />
            <div
              className={`px-[10px] ease-in-out duration-200 ${
                isFlightTimeFilterShowing
                  ? 'pb-6 h-auto overflow-visible opacity-100'
                  : 'h-0 overflow-hidden opacity-0'
              }`}
            >
              <Slider
                className="py-[10px] mb-2"
                min={0}
                max={(MAX_FLIGHT_HOURS - MIN_FLIGHT_HOURS) * 2}
                step={1}
                value={flightTimeSliderValue}
                onChange={(value) => {
                  setFlightTimeSliderValue(value as number);
                }}
              />
              <div className="flex justify-between items-center mx-[-10px] text-p-xs text-neutral-600">
                <span>
                  {formatFlightTimeSliderValue(flightTimeSliderValue)}
                </span>
                <span>
                  {formatFlightTimeSliderValue(
                    (MAX_FLIGHT_HOURS - MIN_FLIGHT_HOURS) * 2
                  )}
                </span>
              </div>
            </div>
            <FilterDividingLine />
          </li>
          <li className="relative">
            <FilterTitle
              title={'機場'}
              description={null}
              isShowingFilter={isAirportFilterShowing}
              onFilterTitleClick={() =>
                setIsAirportFilterShowing(!isAirportFilterShowing)
              }
            />
            <div
              className={`ease-in-out duration-200 ${
                isAirportFilterShowing
                  ? 'pb-6 h-auto overflow-visible opacity-100'
                  : 'h-0 overflow-hidden opacity-0'
              }`}
            >
              <ToggleSwitch
                id={'theSameAirport'}
                title={'從相同機場出發和返回'}
                checked={isReturnToSameAirport}
                onSwitchChanged={() => {
                  // Store the new value of isReturnToSameAirport in a local variable to ensure immediate UI update.
                  const newIsReturnToSameAirport = !isReturnToSameAirport;

                  if (newIsReturnToSameAirport) {
                    setAirportsList(['tpe', 'tsa']);
                  } else {
                    setAirportsList([]);
                  }

                  setIsReturnToSameAirport(newIsReturnToSameAirport);
                }}
              />
              <div className="pt-4">
                <span className="text-p-sm-sb text-neutral-600">出發</span>
                <div className="py-[14px]">
                  <Checkbox
                    id={'tpe'}
                    value={'tpe'}
                    title={'TPE 台北桃園機場'}
                    price={null}
                    onCheckboxChange={handleAirportsCheckboxChange}
                    checked={
                      airportsList.findIndex((el) => el === 'tpe') !== -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'tsa'}
                    value={'tsa'}
                    title={'TSA 台北松山機場'}
                    price={null}
                    onCheckboxChange={handleAirportsCheckboxChange}
                    checked={
                      airportsList.findIndex((el) => el === 'tsa') !== -1
                    }
                  />
                </div>
              </div>
            </div>
            <FilterDividingLine />
          </li>
          <li className="relative">
            <FilterTitle
              title={'航空公司'}
              description={null}
              isShowingFilter={isAirlineFilterShowing}
              onFilterTitleClick={() =>
                setIsAirlineFilterShowing(!isAirlineFilterShowing)
              }
            />
            <div
              className={`ease-in-out duration-200 ${
                isAirlineFilterShowing
                  ? 'pb-6 h-auto overflow-visible opacity-100'
                  : 'h-0 overflow-hidden opacity-0'
              }`}
            >
              <ToggleSwitch
                id={'selectAllAirlines'}
                title={'選擇所有航空公司'}
                checked={isAllAirlinesSelected}
                onSwitchChanged={() => {
                  const newIsAllAirlinesSelected = !isAllAirlinesSelected;
                  setIsAllAirlinesSelected(newIsAllAirlinesSelected);

                  if (newIsAllAirlinesSelected) {
                    setAirlinesList([
                      'value alliiance',
                      'star alliance',
                      'sky team',
                      'oneworld',
                      'starlux',
                      'china airlines',
                      'tiger airways',
                      'cathay',
                      'scoot',
                      'eva air'
                    ]);
                  } else {
                    setAirlinesList([]);
                  }
                }}
              />
              <div className="mt-7">
                <span className="block mb-2 text-p-sm-sb text-neutral-600">
                  航空聯盟
                </span>
                <div className="py-[14px]">
                  <Checkbox
                    id={'valueAlliance'}
                    value={'value alliiance'}
                    title={'價值聯盟'}
                    price={null}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex(
                        (el) => el === 'value alliiance'
                      ) !== -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'starAlliance'}
                    title={'天合聯盟'}
                    value={'star alliance'}
                    price={null}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'star alliance') !==
                      -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'skyTeam'}
                    title={'星空聯盟'}
                    value={'sky team'}
                    price={null}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'sky team') !== -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'oneworld'}
                    title={'寰宇一家'}
                    value={'oneworld'}
                    price={null}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'oneworld') !== -1
                    }
                  />
                </div>
              </div>
              <div className="mt-7">
                <span className="block mb-2 text-p-sm-sb text-neutral-600">
                  航空公司 (16)
                </span>
                <div className="py-[14px]">
                  <Checkbox
                    id={'starlux'}
                    value={'starlux'}
                    title={'星宇航空'}
                    price={'8,831'}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'starlux') !== -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'chinaAirlines'}
                    value={'china airlines'}
                    title={'中華航空'}
                    price={'8,831'}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex(
                        (el) => el === 'china airlines'
                      ) !== -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'tigerAirways'}
                    value={'tiger airways'}
                    title={'台灣虎航'}
                    price={'8,831'}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'tiger airways') !==
                      -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'cathay'}
                    value={'cathay'}
                    title={'國泰航空'}
                    price={'8,831'}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'cathay') !== -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'scoot'}
                    value={'scoot'}
                    title={'酷航'}
                    price={'8,831'}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'scoot') !== -1
                    }
                  />
                </div>
                <div className="py-[14px]">
                  <Checkbox
                    id={'evaAir'}
                    value={'eva air'}
                    title={'長榮航空'}
                    price={'8,831'}
                    onCheckboxChange={handleAirlinesCheckboxChange}
                    checked={
                      airlinesList.findIndex((el) => el === 'eva air') !== -1
                    }
                  />
                </div>
              </div>
              <a
                href="#"
                onClick={stopHashHrefNavigation}
                className="block mt-6 text-center text-p-sm-sb text-primary-500"
              >
                顯示另外 10 家航空公司
              </a>
            </div>
          </li>
        </ul>
        <div className="grow">
          <ul className="flex items-start mb-6 bg-neutral-0 border border-neutral-700/[.12] rounded-lg">
            <li
              className="relative py-6 pl-4 grow basis-0 cursor-pointer rounded-lg
                before:absolute before:h-[2px] before:right-0 before:bottom-[-1px] before:left-[3px] before:bg-primary-700"
            >
              <div className="flex items-center mb-1">
                <span className="mr-1 text-p-md-sb text-primary-700">
                  最佳推薦
                </span>
                <Image
                  src="/images/icons/info.svg"
                  alt="info"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-primary-700">
                <span className="text-p-sm-sb">NT$50,342</span>
                <span className="mx-2 text-p-md-sb">·</span>
                <span className="text-p-sm-sb">14 小時 18 分鐘</span>
              </div>
            </li>
            <li className="py-6 pl-4 grow basis-0 cursor-pointer">
              <div className="flex items-center mb-1">
                <span className="mr-1 text-p-md-sb text-neutral-600">
                  最便宜
                </span>
              </div>
              <div className="text-neutral-500">
                <span className="text-p-sm-r">NT$37,298</span>
                <span className="mx-2 text-p-sm-r">·</span>
                <span className="text-p-sm-r">36 小時 40 分鐘</span>
              </div>
            </li>
            <li className="py-6 pl-4 grow basis-0 cursor-pointer">
              <div className="flex items-center mb-1">
                <span className="text-p-md-sb text-neutral-600">最快</span>
              </div>
              <div className="text-neutral-500">
                <span className="text-p-sm-r">NT$54,599</span>
                <span className="mx-2 text-p-sm-r">·</span>
                <span className="text-p-sm-r">13 小時 40 分鐘</span>
              </div>
            </li>
            <li className="py-6 px-4 grow basis-0 cursor-pointer">
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <span className="mb-1 text-p-md-sb text-neutral-600">
                    其他排序
                  </span>
                  <span className="text-p-sm-r text-neutral-500">最早出發</span>
                </div>
                <Image
                  src="/images/icons/ticket-down-arrow.svg"
                  alt="arrow"
                  width={28}
                  height={28}
                />
              </div>
            </li>
          </ul>
          <ul>
            <ItineraryCard />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
