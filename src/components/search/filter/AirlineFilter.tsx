import { useState, useEffect } from 'react';

import FilterSection from '@/components/search/filter/FilterSection';
import ToggleButton from '@/components/search/filter/ToggleButton';
import FilterCheckbox from '@/components/search/filter/FilterCheckbox';

import airlinesData from '@/data/filter-airline.json';

export default function AirlineFilter() {
  const allAirlinesValue = [
    ...airlinesData.alliance.map((alliance) => alliance.value),
    ...airlinesData.airlines.map((airline) => airline.value)
  ];

  const [isAllChecked, setIsAllChecked] = useState(true);
  const [checkedList, setCheckedList] = useState<string[]>(allAirlinesValue);

  const handleToggleChange = () => {
    const newIsAllChecked = !isAllChecked;
    setIsAllChecked(newIsAllChecked);
    setCheckedList(newIsAllChecked ? allAirlinesValue : []);
  };

  const handleCheckboxChange = (value: string) => {
    setCheckedList((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    setIsAllChecked(checkedList.length === allAirlinesValue.length);
  }, [checkedList.length, allAirlinesValue.length]);

  const moreButton = (
    <button className="block mt-6 text-center text-p-sm-sb text-primary-500">
      顯示另外 5 家航空公司
    </button>
  );

  return (
    <FilterSection title="航空公司">
      <ToggleButton
        id="selectAllAirlines"
        labelText="選擇所有航空公司"
        isChecked={isAllChecked}
        onChange={handleToggleChange}
      />
      <div className="mt-7">
        <span className="block mb-2 text-p-sm-sb text-neutral-600">
          航空聯盟
        </span>
        {airlinesData.alliance.map((alliance) => (
          <div className="py-[14px]" key={alliance.id}>
            <FilterCheckbox
              id={alliance.id}
              value={alliance.value}
              labelText={alliance.title}
              isChecked={checkedList.includes(alliance.value)}
              onChange={() => handleCheckboxChange(alliance.value)}
            />
          </div>
        ))}
      </div>
      <div className="mt-7">
        <span className="block mb-2 text-p-sm-sb text-neutral-600">
          航空公司 ({airlinesData.airlines.length + 5})
        </span>
        {airlinesData.airlines.map((airline) => (
          <div className="py-[14px]" key={airline.id}>
            <FilterCheckbox
              id={airline.id}
              value={airline.value}
              labelText={airline.title}
              isChecked={checkedList.includes(airline.value)}
              onChange={() => handleCheckboxChange(airline.value)}
            />
          </div>
        ))}
      </div>
      {moreButton}
    </FilterSection>
  );
}
