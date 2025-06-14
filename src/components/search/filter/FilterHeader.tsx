import Image from 'next/image';

interface FilterHeaderProps {
  title: string;
  description?: string;
  isFilterOpen: boolean;
  onClick: () => void;
}

export default function FilterHeader({
  title,
  description,
  isFilterOpen,
  onClick
}: FilterHeaderProps) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div
      className="flex justify-between items-center py-[22px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <span className="text-p-md-sb text-neutral-700">{title}</span>
        {description && (
          <span className="ml-4 text-p-xs text-neutral-500">{description}</span>
        )}
      </div>
      <Image
        src={
          isFilterOpen
            ? '/images/icons/filter-up-arrow.svg'
            : '/images/icons/filter-down-arrow.svg'
        }
        alt="arrow"
        width={24}
        height={24}
      />
    </div>
  );
}
