import { ReactNode, useState } from 'react';
import FilterHeader from '@/components/search/filter/FilterHeader';

interface FilterSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function FilterSection({
  title,
  description,
  children
}: FilterSectionProps) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(true);

  const handleHeaderClick = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div>
      <FilterHeader
        title={title}
        description={description}
        isFilterOpen={isFilterOpen}
        onClick={handleHeaderClick}
      />
      <div
        className={`ease-in-out duration-200 ${
          isFilterOpen
            ? 'pb-6 h-auto overflow-visible opacity-100'
            : 'h-0 overflow-hidden opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
