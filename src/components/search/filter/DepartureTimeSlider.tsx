import { useState } from 'react';
import Slider from 'rc-slider';
import { formatSliderValueToHourMinute } from '@/utils/formatters';

const MIN_VALUE = 0;
const MAX_VALUE = 48;
const STEP = 1;

interface DepartureTimeSliderProps {
  label: string;
}

export default function DepartureTimeSlider({
  label
}: DepartureTimeSliderProps) {
  const [value, setValue] = useState<number[]>([MIN_VALUE, MAX_VALUE]);

  const handleChange = (value: number | number[]) => {
    if (!Array.isArray(value)) return;

    const [start, end] = value;
    const minDistance = 0;

    // Minimum distance to prevent handles from being too close
    if (Math.abs(start - end) === minDistance) return;

    setValue(value);
  };

  return (
    <div className="pt-4 pb-2">
      <span className="inline-block mb-3 text-p-sm-sb text-neutral-600">
        {label}
      </span>
      <div className="px-[10px]">
        <Slider
          range
          className="py-[10px] mb-2"
          allowCross={false}
          min={MIN_VALUE}
          max={MAX_VALUE}
          step={STEP}
          value={value}
          onChange={handleChange}
        />
        <div className="flex justify-between items-center mx-[-10px] text-p-xs text-neutral-600">
          <span>{formatSliderValueToHourMinute(value[0])}</span>
          <span>{formatSliderValueToHourMinute(value[1])}</span>
        </div>
      </div>
    </div>
  );
}
