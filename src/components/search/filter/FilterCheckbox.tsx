import { useState } from 'react';

interface FilterCheckboxProps {
  id: string;
  value: string;
  labelText: string;
  isChecked: boolean;
  price?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterCheckbox({
  id,
  value,
  labelText,
  isChecked,
  price,
  onChange
}: FilterCheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="hidden peer"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="relative pl-[40px] flex justify-between items-center text-neutral-600 cursor-pointer group
          before:absolute before:left-0 before:top-[-2px] before:z-10 before:w-5 before:h-5 before:m-[2px]
          before:border-2 before:border-neutral-400 before:rounded
          after:absolute after:left-0 after:z-20 after:w-6 after:h-6
          after:bg-[url('/images/icons/check.svg')] after:bg-cover after:bg-no-repeat after:opacity-0
          hover:text-primary-600 hover:before:border-primary-500
          peer-checked:before:border-primary-500 peer-checked:before:bg-primary-500
          peer-checked:after:opacity-100"
      >
        <span className="text-p-sm-r">{labelText}</span>
        {price && <span className="text-p-sm-r-2">{`NT${price} 起`}</span>}
      </label>
    </>
  );
}
