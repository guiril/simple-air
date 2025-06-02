import Image from 'next/image';
import Link from 'next/link';

const Button = ({
  iconSrc,
  iconAlt,
  title
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
}) => {
  return (
    <button
      type="button"
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
};

export default function Header({ isBlackLogo }: { isBlackLogo: boolean }) {
  return (
    <header className="h-[88px] flex justify-between items-center sm:h-[80px]">
      <div className="w-[124px] h-[24px]">
        <Link
          href="/"
          className={`block w-full h-full bg-no-repeat ${
            isBlackLogo
              ? 'bg-[url(/images/logos/logo.svg)]'
              : 'bg-[url(/images/logos/white.svg)]'
          }`}
        >
          <span className="sr-only">Simple Air</span>
        </Link>
      </div>
      <ul className="flex justify-start items-center">
        <li className="mr-[16px] sm:mr-0">
          <Button iconSrc={'flag-tw'} iconAlt={'TW'} title={'TWD'} />
        </li>
        <li className="sm:hidden">
          <Button iconSrc={'customer'} iconAlt={'contact'} title={'聯繫我們'} />
        </li>
      </ul>
    </header>
  );
}
