import { MIN_FLIGHT_HOURS } from '@/constants/time';

export const formatSliderValueToHourMinute = (value: number) => {
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

export const formatFlightTimeSliderValue = (value: number) => {
  return value / 2 + MIN_FLIGHT_HOURS;
};
