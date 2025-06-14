'use client';

import { MIN_FLIGHT_HOURS } from '@/constants/time';

import HeroSection from '@/components/search/HeroSection';
import StopoverFilter from '@/components/search/filter/StopoverFilter';
import FilterSection from '@/components/search/filter/FilterSection';
import DepartureTimeSlider from '@/components/search/filter/DepartureTimeSlider';
import FlightTimeSlider from '@/components/search/filter/FlightTimeSlider';
import AirportFilter from '@/components/search/filter/AirportFilter';
import AirlineFilter from '@/components/search/filter/AirlineFilter';

import Footer from '@/components/layout/Footer';

import SortBar from '@/components/search/sort-bar';
import ItineraryCard from '@/components/search/itineray-card';

export default function SearchPage() {
  const dividingLine = (
    <div className="pb-6 before:absolute before:w-full before:h-[1.2px] before:bg-neutral-200" />
  );

  return (
    <>
      <HeroSection />
      <div className="container flex justify-between py-[60px] md:py-8 xs:py-7">
        <ul className="basis-[344px] shrink-0 mr-8 px-3 md:hidden">
          <li className="relative">
            <StopoverFilter />
            {dividingLine}
          </li>
          <li className="relative">
            <FilterSection title="出發時間">
              <DepartureTimeSlider label="去程" />
              <DepartureTimeSlider label="回程" />
            </FilterSection>
            {dividingLine}
          </li>
          <li className="relative">
            <FilterSection
              title="飛行時間"
              description={`最短時間為 ${MIN_FLIGHT_HOURS} 小時`}
            >
              <FlightTimeSlider />
            </FilterSection>
            {dividingLine}
          </li>
          <li className="relative">
            <AirportFilter />
            {dividingLine}
          </li>
          <li className="relative">
            <AirlineFilter />
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
