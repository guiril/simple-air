import { useState, useMemo } from 'react';
import Slider from 'rc-slider';
import { formatFlightTimeSliderValue } from '@/utils/formatters';
import { MIN_FLIGHT_HOURS, MAX_FLIGHT_HOURS } from '@/constants/time';

export default function FlightTimeSlider() {
  const sliderMin = 0;
  const sliderMax = (MAX_FLIGHT_HOURS - MIN_FLIGHT_HOURS) * 2;
  const sliderStep = 1;

  const [value, setValue] = useState<number>(0);

  const displayValue = useMemo(
    () => formatFlightTimeSliderValue(value),
    [value]
  );

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) return;
    setValue(value);
  };

  return (
    <div className="px-[10px]">
      <Slider
        className="py-[10px] mb-2"
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        value={value}
        onChange={handleSliderChange}
      />
      <div className="flex justify-between items-center mx-[-10px] text-p-xs text-neutral-600">
        <span>{MIN_FLIGHT_HOURS}</span>
        <span>{displayValue}</span>
      </div>
    </div>
  );
}
