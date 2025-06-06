import Link from 'next/link';

const SITE_NAME = 'Simple Air';

interface HeaderLogoProps {
  isDarkLogo: boolean;
}

export default function HeaderLogo({ isDarkLogo }: HeaderLogoProps) {
  const logoUrl = isDarkLogo ? 'logo-dark.svg' : 'logo-light.svg';

  return (
    <div className="w-[124px] h-[24px]">
      <Link
        href="/"
        className="block w-full h-full bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(/images/logos/${logoUrl})`
        }}
      >
        <span className="sr-only">{SITE_NAME}</span>
      </Link>
    </div>
  );
}
