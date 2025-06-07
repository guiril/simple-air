import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import SearchBar from '@/components/search/search-bar';

export default function HeroSection() {
  const title = (
    <h1 className="mb-2 text-h1 text-neutral-0">探索世界，尋找最佳航班</h1>
  );

  const description = (
    <p className="text-title-md text-neutral-200 sm:hidden">
      輕鬆輸入、快速比價 ─ 掌握最划算的航空選擇
    </p>
  );

  return (
    <div
      className="pb-[44px] bg-[url(/images/hero/bg-lg.webp)] bg-no-repeat bg-cover bg-center
        md:pb-[40px]"
    >
      <div className="container h-full flex flex-col">
        <Header isDarkLogo={true} />
        <div className="grow pt-[120px] md:pt-[200px] sm:pt-[80px]">
          <div className="mb-[214px] text-center md:mb-[228px] sm:mb-[24px]">
            {title}
            {description}
          </div>
          <Suspense fallback={<></>}>
            <SearchBar />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
