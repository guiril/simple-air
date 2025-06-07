'use client';

import Image from 'next/image';

interface TabProps {
  title: string;
  iata: string;
  isActive: boolean;
  onClick: (iata: string) => void;
}

export default function Tab({ title, iata, isActive, onClick }: TabProps) {
  const handleClick = () => {
    onClick(iata);
  };

  return (
    <li className="shrink-0 mr-4 last:mr-0">
      <button
        type="button"
        className={`flex items-center py-[9px] px-[15px] rounded-lg ease-linear ${
          isActive
            ? 'text-p-sm-btn-sb text-neutral-0 bg-neutral-700 border-neutral-700'
            : 'text-p-sm-btn text-neutral-600 border border-neutral-700/[.12] hover:bg-neutral-100 hover:border-neutral-700/[.04]'
        }`}
        onClick={handleClick}
      >
        <div className="mr-2 shrink-0 bg-neutral-0 rounded-full">
          <Image
            src={`/images/airlines/${iata}.svg`}
            alt={title}
            width={18}
            height={18}
          />
        </div>
        <span>{title}</span>
      </button>
    </li>
  );
}
