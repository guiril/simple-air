import { useState, useEffect } from 'react';

import airports from '@/data/airports.json';

import FilterSection from '@/components/search/filter/FilterSection';
import ToggleButton from '@/components/search/filter/ToggleButton';
import FilterCheckbox from '@/components/search/filter/FilterCheckbox';

export default function AirportFilter() {
  // Check all airports by default
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [checkedList, setCheckedList] = useState<string[]>(
    airports.data.map((airport) => airport.value)
  );

  const handleToggleChange = () => {
    const newIsAllChecked = !isAllChecked;
    setIsAllChecked(newIsAllChecked);
    setCheckedList(
      newIsAllChecked ? airports.data.map((airport) => airport.value) : []
    );
  };

  const handleCheckboxChange = (value: string) => {
    setCheckedList((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    // Update the toggle button state based on the checkedList
    setIsAllChecked(checkedList.length === airports.data.length);
  }, [checkedList]);

  return (
    <FilterSection title="機場">
      <ToggleButton
        id="theSameAirport"
        labelText="從相同機場出發和返回"
        isChecked={isAllChecked}
        onChange={handleToggleChange}
      />
      <div className="pt-4">
        <span className="text-p-sm-sb text-neutral-600">出發</span>
        {airports.data.map((airport) => (
          <div className="py-[14px]" key={airport.id}>
            <FilterCheckbox
              id={airport.id}
              value={airport.value}
              labelText={airport.labelText}
              isChecked={checkedList.includes(airport.value)}
              onChange={() => handleCheckboxChange(airport.value)}
            />
          </div>
        ))}
      </div>
    </FilterSection>
  );
}
