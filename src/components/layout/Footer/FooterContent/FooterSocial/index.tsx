'use client';

import Image from 'next/image';
import { stopHashHrefNavigation } from '@/utils';
import FooterTitle from '@/components/layout/Footer/FooterContent/FooterTitle';

const socialMediaList = [
  { title: 'facebook' },
  { title: 'instagram' },
  { title: 'twitter' },
  { title: 'linkedin' }
];

export default function FooterSocial() {
  const socialMediaLinks = socialMediaList.map((socialMedia) => (
    <li className="mr-[26px] last:mr-0 sm:mr-0" key={socialMedia.title}>
      <a
        href="#"
        className="block p-[11px] border-[0.6px] border-neutral-400 rounded-full"
        onClick={stopHashHrefNavigation}
      >
        <Image
          src={`/images/social-media/${socialMedia.title}.svg`}
          alt={socialMedia.title}
          width={24}
          height={24}
        />
      </a>
    </li>
  ));

  return (
    <div
      className="flex flex-col items-end
        md:col-span-2 md:flex-row md:justify-between md:items-start md:mt-20
        sm:flex-col sm:mt-[60px]"
    >
      <div className="mb-[60px] md:mb-0 sm:w-full sm:mb-[60px]">
        <FooterTitle title="關注我們" />
        <ul className="flex items-center sm:justify-between">
          {socialMediaLinks}
        </ul>
      </div>
      <div>
        <FooterTitle title="應用程式" />
        <ul className="flex">
          <li className="mr-5 sm:mr-6">
            <a href="#" onClick={stopHashHrefNavigation}>
              <Image
                src="/images/application/app-store.svg"
                alt="app store"
                width={116}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="#" onClick={stopHashHrefNavigation}>
              <Image
                src="/images/application/google-play.svg"
                alt="google play"
                width={134}
                height={40}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
