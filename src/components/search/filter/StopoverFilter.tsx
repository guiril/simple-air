import { useState } from 'react';

import stopOptions from '@/data/stop-options.json';

import FilterSection from '@/components/search/filter/FilterSection';
import FilterCheckbox from '@/components/search/filter/FilterCheckbox';

export default function StopoverFilter() {
  const [checkedList, setCheckedList] = useState<string[]>(
    stopOptions.data.map((option) => option.value)
  );

  const handleCheckboxChange = (value: string) => {
    setCheckedList((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <FilterSection title="轉機">
      {stopOptions.data.map((option) => (
        <div className="py-[14px]" key={option.id}>
          <FilterCheckbox
            id={option.id}
            value={option.value}
            labelText={option.labelText}
            isChecked={checkedList.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
        </div>
      ))}
    </FilterSection>
  );
}
