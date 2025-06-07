interface SectionHeaderProps {
  title: string;
  label: string;
  description: string;
  isMoreButtonVisible?: boolean;
}

export default function SectionHeader({
  title,
  label,
  description,
  isMoreButtonVisible = true
}: SectionHeaderProps) {
  const titleEl = <h2 className="mb-1 text-h2 text-neutral-600">{title}</h2>;

  const labelEl = (
    <small className="block mb-6 text-p-sm-r font-medium text-warning-600">
      {label}
    </small>
  );

  const descriptionEl = (
    <p className="text-p-md-body text-neutral-500">{description}</p>
  );

  const moreButtonEl = isMoreButtonVisible && (
    <button
      type="button"
      className="py-3 px-5 text-p-md-sb-btn text-primary-500
      bg-primary-50 rounded-lg
      hover:bg-primary-100 active:bg-primary-100
        sm:hidden"
    >
      了解更多
    </button>
  );

  return (
    <div className="flex justify-between items-end mb-12 md:mb-10 sm:mb-[28px]">
      <div>
        {labelEl}
        {titleEl}
        {descriptionEl}
      </div>
      {moreButtonEl}
    </div>
  );
}
