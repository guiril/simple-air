'use client';

import Image from 'next/image';

export default function FooterLogo() {
  const logo = (
    <Image
      src="/images/logos/logo-white.svg"
      alt="logo"
      width="167"
      height="32"
      className="mb-3 sm:mx-auto"
    />
  );

  const description = (
    <p className="text-p-sm-r text-neutral-400">
      最佳機票的唯一選擇，提供安心優質的旅遊體驗
    </p>
  );

  return (
    <div className="mb-[88px] md:mb-[92px] sm:mx-auto sm:mb-0">
      {logo}
      {description}
    </div>
  );
}
