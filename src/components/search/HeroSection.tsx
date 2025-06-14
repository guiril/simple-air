import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import SearchBar from '@/components/search/search-bar';

export default function HeroSection() {
  return (
    <div className="bg-[url('/images/hero/search.png')] bg-cover bg-center">
      <div className="container min-h-[282px] flex flex-col justify-between pb-6">
        <Header isDarkLogo={false} />
        <Suspense fallback={<></>}>
          <SearchBar />
        </Suspense>
      </div>
    </div>
  );
}
