import Slider from 'rc-slider';

const formatSliderValueToTime = (value: number) => {
  let hours =
    value / 2 < 10
      ? '0' + Math.floor(value / 2)
      : Math.floor(value / 2).toString();
  let minutes = value % 2 === 0 ? '00' : '30';

  if (hours === '24') {
    hours = '23';
    minutes = '59';
  }

  return `${hours}:${minutes}`;
};

export default function TimeSlider({
  label,
  value,
  onChange
}: {
  label: string;
  value: number[];
  onChange: (value: number[] | number) => void;
}) {
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
          min={0}
          max={48}
          step={1}
          value={value}
          onChange={onChange}
        />
        <div className="flex justify-between items-center mx-[-10px] text-p-xs text-neutral-600">
          <span>{formatSliderValueToTime(value[0])}</span>
          <span>{formatSliderValueToTime(value[1])}</span>
        </div>
      </div>
    </div>
  );
}
