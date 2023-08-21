import Image from 'next/image';

export default function FilterTitle({
  title,
  description,
  isShowingFilter,
  onFilterTitleClick
}: {
  title: string;
  description: string | null;
  isShowingFilter: boolean;
  onFilterTitleClick: () => void;
}) {
  return (
    <div
      className="flex justify-between items-center py-[22px] cursor-pointer"
      onClick={onFilterTitleClick}
    >
      <div className="flex items-center">
        <span className="text-p-md-sb text-neutral-700">{title}</span>
        {description && (
          <span className="ml-4 text-p-xs text-neutral-500">{description}</span>
        )}
      </div>
      <Image
        src={
          isShowingFilter
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
