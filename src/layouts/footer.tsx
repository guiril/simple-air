'use client';

import Image from 'next/image';
import { stopHashHrefNavigation } from '@/utils';

const SectionTitle = ({ title }: { title: string }) => (
  <span className="block mb-5 text-p-md-sb text-neutral-100">{title}</span>
);

const LinksList = ({ links }: { links: { title: string; link: string }[] }) => {
  const list = links.map((link) => {
    return (
      <li key={link.title}>
        <a
          href={link.link}
          className="block py-2"
          onClick={stopHashHrefNavigation}
        >
          {link.title}
        </a>
      </li>
    );
  });

  return <ul className="text-p-sm-r-2 text-neutral-100">{list}</ul>;
};

const SocialMediaList = ({
  socialMediaItems
}: {
  socialMediaItems: { title: string }[];
}) => {
  const list = socialMediaItems.map((item) => {
    return (
      <li className="mr-[26px] last:mr-0 sm:mr-0" key={item.title}>
        <a
          href="#"
          className="block p-[11px] border-[0.6px] border-neutral-400 rounded-full"
          onClick={stopHashHrefNavigation}
        >
          <Image
            src={`/images/social-media/${item.title}.svg`}
            alt={item.title}
            width={24}
            height={24}
          />
        </a>
      </li>
    );
  });

  return <ul className="flex items-center sm:justify-between">{list}</ul>;
};

export default function Footer() {
  return (
    <footer className="flex flex-col bg-neutral-700">
      <div className="border-b border-neutral-600">
        <div
          className="container grid grid-cols-3 py-20 md:grid-cols-2
            sm:block sm:max-w-[300px] sm:py-[60px] sm:px-0"
        >
          <div className="flex flex-col sm:mb-[60px]">
            <div className="mb-[88px] md:mb-[92px] sm:mx-auto sm:mb-0">
              <Image
                src={'/images/logos/logo-white.svg'}
                alt={'logo'}
                width={167}
                height={32}
                className="mb-3 sm:mx-auto"
              />
              <p className="text-p-sm-r text-neutral-400">
                最佳機票的唯一選擇，提供安心優質的旅遊體驗
              </p>
            </div>
            <div className="sm:hidden">
              <label
                htmlFor="email"
                className="block mb-3 text-p-md-sb text-neutral-100"
              >
                訂閱電子報
              </label>
              <div className="flex items-center">
                <input
                  type="email"
                  id="email"
                  placeholder="請輸入電子郵件地址"
                  className="py-4 px-3 mr-4 grow rounded-lg md:max-w-[244px]"
                />
                <button
                  type="button"
                  className="py-3 px-5 text-p-md-sb text-primary-500 bg-primary-50 rounded-lg"
                >
                  訂閱
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end pr-[60px] md:p-0 sm:justify-between">
            <div className="mr-[52px] sm:mr-0">
              <SectionTitle title={'Simple Air'} />
              <LinksList
                links={[
                  { title: '關於我們', link: '#' },
                  { title: '優惠專區', link: '#' },
                  { title: '航空資訊', link: '#' },
                  { title: '機場資訊', link: '#' },
                  { title: '所有航班', link: '#' }
                ]}
              />
            </div>
            <div className="sm:text-right">
              <SectionTitle title={'提供幫助'} />
              <LinksList
                links={[
                  { title: '預訂指南', link: '#' },
                  { title: '常見問題', link: '#' },
                  { title: '幫助中心', link: '#' },
                  { title: '隱私政策', link: '#' },
                  { title: '服務條款', link: '#' }
                ]}
              />
            </div>
          </div>
          <div
            className="flex flex-col items-end
              md:col-span-2 md:flex-row md:justify-between md:items-start md:mt-20
              sm:flex-col sm:mt-[60px]"
          >
            <div className="mb-[60px] md:mb-0 sm:w-full sm:mb-[60px]">
              <SectionTitle title={'關注我們'} />
              <SocialMediaList
                socialMediaItems={[
                  { title: 'facebook' },
                  { title: 'instagram' },
                  { title: 'twitter' },
                  { title: 'linkedin' }
                ]}
              />
            </div>
            <div>
              <SectionTitle title={'應用程式'} />
              <ul className="flex">
                <li className="mr-5 sm:mr-6">
                  <a href="#" onClick={stopHashHrefNavigation}>
                    <Image
                      src={'/images/application/app-store.svg'}
                      alt={'app store'}
                      width={116}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" onClick={stopHashHrefNavigation}>
                    <Image
                      src={'/images/application/google-play.svg'}
                      alt={'google play'}
                      width={134}
                      height={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container flex justify-between items-center py-8
          text-p-xs text-neutral-400 sm:justify-center"
      >
        <small className="sm:hidden">
          Data provided by RapidAPI and Skyscanner. Strictly for personal
          learning purposes, no commercial use.
        </small>
        <small>
          Copyright © 2023 YA-JHAO CHEN. All rights reserved. Site design by
          Lan.
        </small>
      </div>
    </footer>
  );
}
