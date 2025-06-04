import Image from 'next/image';

interface HeaderButtonProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  onClick?: () => void;
}

export default function HeaderButton({
  iconSrc,
  iconAlt,
  title,
  onClick
}: HeaderButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-[9px] px-[15px] flex items-center rounded-[12px]
        text-p-sm-btn text-neutral-600 bg-neutral-0 border border-neutral-700/[.12]
        hover:bg-neutral-100 hover:border-neutral-700/[.04]
        sm:py-[5px] sm:px-[9px]"
    >
      <Image
        src={`/images/icons/${iconSrc}.svg`}
        alt={iconAlt}
        width={18}
        height={18}
        className="mr-2 sm:w-[16px]"
      />
      <span>{title}</span>
    </button>
  );
}
