'use client';

import { useState } from 'react';
import { stopHashHrefNavigation } from '@/utils';

import Slider from 'rc-slider';

import Header from '@/components/header';
import SearchBar from '@/components/search/search-bar';
import Footer from '@/components/footer';
import FilterTitle from '@/components/search/filter/filter-title';
import TimeSlider from '@/components/search/filter/time-slider';
import ToggleSwitch from '@/components/search/filter/toggle-switch';
import Checkbox from '@/components/search/filter/checkbox';
import FilterDividingLine from '@/components/search/filter/dividing-line';
import SortBar from '@/components/search/sort-bar';
import ItineraryCard from '@/components/search/itineray-card';

import {
  airportsData,
  allAirlinesData,
  allianceData,
  airlinesData
} from '@/data';

export default function SearchPage() {
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
  const [isReturnToSameAirport, setIsReturnToSameAirport] = useState(true);
  const [airportsList, setAirportsList] = useState<string[] | []>(airportsData);
  const [isAllAirlinesSelected, setIsAllAirlinesSelected] = useState(true);
  const [airlinesList, setAirlinesList] = useState<string[] | []>(
    allAirlinesData
  );

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

    if (isChecked && index === -1) {
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

    const allAirpots = airportsData.sort();
    const isChecked = e.target.checked;
    const airport = e.target.value;
    const index = airports.findIndex((el) => el === airport);

    if (isChecked && index === -1) {
      airports = [...airportsList, airport];
    } else {
      airports.splice(index, 1);
    }

    if (JSON.stringify(airports.sort()) === JSON.stringify(allAirpots)) {
      setIsReturnToSameAirport(true);
    } else {
      setIsReturnToSameAirport(false);
    }

    setAirportsList(airports);
  };

  const handleAirlinesCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let airlines = [...airlinesList];

    const allAirlines = allAirlinesData.sort();
    const isChecked = e.target.checked;
    const airline = e.target.value;
    const index = airlines.findIndex((el) => el === airline);

    if (isChecked && index === -1) {
      airlines = [...airlinesList, airline];
    } else {
      airlines.splice(index, 1);
    }

    if (JSON.stringify(airlines.sort()) === JSON.stringify(allAirlines)) {
      setIsAllAirlinesSelected(true);
    } else {
      setIsAllAirlinesSelected(false);
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
      <div className="container flex justify-between py-[60px] md:py-8 xs:py-7">
        <ul className="basis-[344px] shrink-0 mr-8 px-3 md:hidden">
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
                <span>{MIN_FLIGHT_HOURS}</span>
                <span>
                  {formatFlightTimeSliderValue(flightTimeSliderValue)}
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
                    setAirlinesList(allAirlinesData);
                  } else {
                    setAirlinesList([]);
                  }
                }}
              />
              <div className="mt-7">
                <span className="block mb-2 text-p-sm-sb text-neutral-600">
                  航空聯盟
                </span>
                {allianceData.map((alliance) => (
                  <div className="py-[14px]" key={alliance.id}>
                    <Checkbox
                      id={alliance.id}
                      value={alliance.value}
                      title={alliance.title}
                      price={null}
                      onCheckboxChange={handleAirlinesCheckboxChange}
                      checked={
                        airlinesList.findIndex(
                          (el) => el === alliance.value
                        ) !== -1
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <span className="block mb-2 text-p-sm-sb text-neutral-600">
                  航空公司 ({airlinesData.length + 5})
                </span>
                {airlinesData.map((airline) => (
                  <div className="py-[14px]" key={airline.id}>
                    <Checkbox
                      id={airline.id}
                      value={airline.value}
                      title={airline.title}
                      price={null}
                      onCheckboxChange={handleAirlinesCheckboxChange}
                      checked={
                        airlinesList.findIndex((el) => el === airline.value) !==
                        -1
                      }
                    />
                  </div>
                ))}
              </div>
              <a
                href="#"
                onClick={stopHashHrefNavigation}
                className="block mt-6 text-center text-p-sm-sb text-primary-500"
              >
                顯示另外 5 家航空公司
              </a>
            </div>
          </li>
        </ul>
        <div className="grow shrink">
          <SortBar />
          <ul className="mb-6 sm:mb-5 xs:mb-4">
            <ItineraryCard />
          </ul>
          <button
            type="button"
            className="w-full py-3 text-p-md-sb-btn text-primary-500 bg-primary-50 rounded-lg hover:bg-primary-100 xs:text-p-sm-md"
          >
            顯示更多結果
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
