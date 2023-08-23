import Image from 'next/image';

export default function Input({
  id,
  label,
  placeholder,
  value,
  setValue,
  isBorder,
  isDisabled,
  handleFocus,
  isShowingResetButton,
  resetValue
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isBorder: boolean;
  isDisabled: boolean;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  isShowingResetButton: boolean;
  resetValue: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <input
        type="text"
        id={id}
        className={`w-full h-full pt-[42px] pb-4 px-4 text-p-md-sb text-neutral-600 rounded-[8px] placeholder:font-normal selection:bg-primary-100 hover:sibling:block disabled:text-neutral-700/[.28] disabled:bg-neutral-0 ${
          isBorder
            ? 'bg-neutral-0 border border-neutral-700/[.12] hover:border-neutral-600 focus:border-[1.6px] focus:border-primary-400'
            : ''
        }`}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        onFocus={handleFocus}
        onBlur={handleFocus}
        autoComplete="off"
        disabled={isDisabled}
      />
      <label
        htmlFor={id}
        className={`absolute top-4 left-4 ${
          value && !isDisabled
            ? 'text-p-sm-r-2 text-neutral-500'
            : 'text-p-sm-sb text-neutral-600'
        } ${isDisabled ? 'font-normal text-neutral-700/[.28]' : ''}`}
      >
        {label}
      </label>
      <button
        tabIndex={-1}
        className={`absolute top-[29px] right-[28px] ${
          isShowingResetButton ? 'block' : 'hidden'
        }`}
        onMouseDown={resetValue}
      >
        <Image
          src="/images/icons/close.svg"
          alt="clear"
          width={20}
          height={20}
        />
      </button>
    </>
  );
}
