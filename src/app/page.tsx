'use client';

import { useState } from 'react';

import asia from '@/data/asia.json';
import europe from '@/data/europe.json';
import airlines from '@/data/airlines.json';
import airlinesItineraries from '@/data/airlines-itineraries.json';

import HeroSection from '@/components/home/HeroSection';
import SectionHeader from '@/components/home/SectionHeader';
import ItineraryCards from '@/components/home/ItineraryCards';
import DiscountBanner from '@/components/home/DiscountBanner';
import Tab from '@/components/home/Tab';
import AirlineCard from '@/components/home/AirlineCard';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [activeAirline, setActiveAirline] = useState(airlines.data[0].iata);

  const airlineTabs = airlines.data.map((airline) => (
    <Tab
      key={airline.iata}
      title={airline.title}
      iata={airline.iata}
      isActive={activeAirline === airline.iata}
      onClick={(iata: string) => {
        setActiveAirline(iata);
      }}
    />
  ));

  return (
    <>
      <HeroSection />
      <section className="py-20 bg-neutral-0 md:py-[60px] sm:py-12">
        <div className="container">
          <SectionHeader
            title="精選熱門亞洲城市 超值來回機票"
            label="獨家限量"
            description="只有在 Simple Air 才能買到的限量來回機票，數量有限！"
          />
          <ItineraryCards products={asia.data} />
        </div>
      </section>
      <section className="py-20 bg-neutral-0 md:py-[60px] sm:py-12">
        <div className="container">
          <SectionHeader
            title="全球熱門國際航線 通通都在這"
            label="全網最齊全"
            description="提供最多航空公司航線、最划算的價格、最齊全的航班資訊！"
          />
          <ItineraryCards products={europe.data} />
        </div>
      </section>
      <DiscountBanner />
      <section className="py-20 bg-neutral-0 md:py-[60px] sm:py-12">
        <div className="container">
          <SectionHeader
            title="航空公司最新優惠 即時同步"
            label="航空自由選"
            description="各家航空推出的優惠機票，在 Simple Air 在也可以搶得到！"
            isMoreButtonVisible={false}
          />
          <ul className="flex items-center mb-6 flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden sm:hidden">
            {airlineTabs}
          </ul>
          <ul className="grid grid-cols-4 gap-4 md:grid-cols-2 sm:block">
            {airlinesItineraries.data.map((itinerary, index) => (
              <AirlineCard
                key={itinerary.imgTitle}
                imgTitle={itinerary.imgTitle}
                fromPlace={itinerary.fromPlace}
                toPlace={itinerary.toPlace}
                period={itinerary.period}
                cabin={itinerary.cabin}
                price={itinerary.price}
                index={index}
              />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
