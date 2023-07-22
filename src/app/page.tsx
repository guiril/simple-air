import Image from 'next/image';

import Header from '@/components/header';
import SearchBar from '@/components/search-bar';
import HomeSection from '@/layouts/home-section';
import LargeCard from '@/components/large-card';
import AirlinesTab from '@/components/airlinesTab';
import Footer from '@/layouts/footer';

const asiaItems = [
  {
    labelText: '直飛',
    imgTitle: 'asia/bangkok',
    remaingNumber: 3,
    location: '曼谷 . 泰國',
    price: '6,638'
  },
  {
    labelText: '超夯',
    imgTitle: 'asia/ho-chi-minh-city',
    remaingNumber: null,
    location: '胡志明市 . 越南',
    price: '8,830'
  },
  {
    labelText: '直飛',
    imgTitle: 'asia/osaka',
    remaingNumber: 6,
    location: '大阪 . 日本',
    price: '13,634'
  }
];

const europeItems = [
  {
    labelText: null,
    imgTitle: 'europe/rome',
    remaingNumber: null,
    location: '羅馬 . 義大利',
    price: '40,801'
  },
  {
    labelText: null,
    imgTitle: 'europe/prague',
    remaingNumber: null,
    location: '布拉格 . 捷克',
    price: '36,868'
  },
  {
    labelText: '超夯',
    imgTitle: 'europe/paris',
    remaingNumber: null,
    location: '巴黎 . 法國',
    price: '39,895'
  }
];

const ItinerariesCards = () => {
  const itineraries = [
    {
      imgTitle: 'osaka',
      fromPlace: '台北',
      toPlace: '大阪',
      period: '8月30日 (三) - 9月6日 (三)',
      cabin: '經濟艙',
      price: '14,537'
    },
    {
      imgTitle: 'tokyo',
      fromPlace: '台北',
      toPlace: '東京',
      period: '8月30日 (三) - 9月6日 (三)',
      cabin: '經濟艙',
      price: '16,538'
    },
    {
      imgTitle: 'bangkok',
      fromPlace: '台北',
      toPlace: '曼谷',
      period: '8月30日 (三) - 9月6日 (三)',
      cabin: '經濟艙',
      price: '10,144'
    },
    {
      imgTitle: 'macow',
      fromPlace: '台北',
      toPlace: '澳門',
      period: '8月30日 (三) - 9月6日 (三)',
      cabin: '經濟艙',
      price: '5,949'
    }
  ];
  return itineraries.map((itinerary, index) => {
    return (
      <li
        key={itinerary.imgTitle}
        className={`flex flex-col py-[15px] px-4 bg-neutrail-0 border border-neutral-700/[.12] sm:mb-4 sm:last:mb-0 rounded-xl ${
          index === 2 || index === 3 ? 'md:hidden sm:flex' : ''
        }`}
      >
        <div className="mb-4 flex items-center">
          <Image
            src={`/images/airlines/${itinerary.imgTitle}.webp`}
            alt={itinerary.imgTitle}
            width={64}
            height={64}
            className="mr-3 rounded lg:shrink"
          />
          <div className="flex flex-col">
            <div className="flex items-center mb-2 text-p-md-sb text-neutral-700">
              <span>{itinerary.fromPlace}</span>
              <Image
                src={'/images/icons/round-arrow.svg'}
                alt={'round trip arrow'}
                width={20}
                height={20}
                className="mx-2"
              />
              <span>{itinerary.toPlace}</span>
            </div>
            <span className="mb-1 text-p-xs text-neutral-500">
              {itinerary.period}
            </span>
            <span className="text-p-xs text-neutral-500 sm:hidden">
              {itinerary.cabin}
            </span>
          </div>
        </div>
        <div className="self-end">
          <span className="mr-2 text-p-xs text-neutral-500 sm:hidden">
            來回票價
          </span>
          <span className="text-p-md-sb text-primary-500">
            NT${itinerary.price}
          </span>
        </div>
      </li>
    );
  });
};

export default function Home() {
  return (
    <>
      <div
        className="pb-[44px] bg-[url(/images/hero/bg-lg.webp)] bg-no-repeat bg-cover bg-center
          md:pb-[40px]"
      >
        <div className="container h-full flex flex-col">
          <Header />
          <div className="grow pt-[120px] md:pt-[200px] sm:pt-[80px]">
            <div className="mb-[214px] text-center md:mb-[228px] sm:mb-[24px]">
              <h1 className="mb-2 text-h1 text-neutral-0">
                探索世界，尋找最佳航班
              </h1>
              <p className="text-title-md text-neutral-200 sm:hidden">
                輕鬆輸入、快速比價 ─ 掌握最划算的航空選擇
              </p>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
      <HomeSection
        smallTitle={'獨家限量'}
        title={'精選熱門亞洲城市 超值來回機票'}
        description={'只有在 Simple Air 才能買到的限量來回機票，數量有限！'}
        isMoreButton={true}
      >
        <LargeCard items={asiaItems} />
      </HomeSection>
      <HomeSection
        smallTitle={'全網最齊全'}
        title={'全球熱門國際航線 通通都在這'}
        description={'提供最多航空公司航線、最划算的價格、最齊全的航班資訊！'}
        isMoreButton={true}
      >
        <LargeCard items={europeItems} />
      </HomeSection>
      <div className="container py-10 sm:bg-neutral-100 sm:py-9">
        <div
          className="py-10 px-12 flex justify-between items-center bg-neutral-100 rounded-xl
            sm:flex-col sm:p-0"
        >
          <div className="sm:mb-12">
            <h3 className="mb-2 text-h3 text-neutral-700">
              首次購票，最高享 <span className="text-primary-700">9折</span>{' '}
              優惠
            </h3>
            <p className="text-p-md-body text-neutral-700/60">
              首次使用 Simple Air 購票，立即享最高 9 折優惠！
              <br className="sm:hidden" />
              結帳時系統直接折價，省去貼上折扣碼的麻煩。
            </p>
          </div>
          <div className="sm:w-full sm:flex sm:flex-col">
            <button
              type="button"
              className="py-[13px] px-[23px] mr-4 text-p-md-sb leading-[1.5em]
                text-neutral-600 border border-neutral-700/[.12] rounded-lg sm:mr-0 sm:mb-3"
            >
              優惠說明
            </button>
            <button
              type="button"
              className="py-[13px] px-[23px] text-p-md-sb leading-[1.5em]
              text-neutral-0 bg-primary-700 border border-primary-700 rounded-lg"
            >
              立即搜尋
            </button>
          </div>
        </div>
      </div>
      <HomeSection
        smallTitle={'航空自由選'}
        title={'航空公司最新優惠 即時同步'}
        description={'各家航空推出的優惠機票，在 Simple Air 在也可以搶得到！'}
        isMoreButton={false}
      >
        <ul className="flex items-center mb-6 flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden sm:hidden">
          <AirlinesTab />
        </ul>
        <ul className="grid grid-cols-4 gap-4 md:grid-cols-2 sm:block">
          <ItinerariesCards />
        </ul>
      </HomeSection>
      <Footer />
    </>
  );
}
