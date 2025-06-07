'use client';

import HeaderLogo from './HeaderLogo';
import HeaderButton from './HeaderButton';

interface HeaderProps {
  isDarkLogo: boolean;
}

export default function Header({ isDarkLogo }: HeaderProps) {
  return (
    <header className="h-[88px] flex justify-between items-center sm:h-[80px]">
      <HeaderLogo isDarkLogo={isDarkLogo} />
      <ul className="flex justify-start items-center">
        <li className="mr-[16px] sm:mr-0">
          <HeaderButton
            iconSrc="flag-tw"
            iconAlt="TW"
            title="TWD"
            onClick={() => {}}
          />
        </li>
        <li className="sm:hidden">
          <HeaderButton
            iconSrc="customer"
            iconAlt="contact"
            title="聯繫我們"
            onClick={() => {}}
          />
        </li>
      </ul>
    </header>
  );
}
