'use client';

import FooterLogo from './FooterLogo';
import FooterNewsletter from './FooterNewsletter';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

export default function FooterContent() {
  return (
    <div className="border-b border-neutral-600">
      <div
        className="container grid grid-cols-3 py-20 md:grid-cols-2
          sm:block sm:max-w-[300px] sm:py-[60px] sm:px-0"
      >
        <div className="flex flex-col sm:mb-[60px]">
          <FooterLogo />
          <FooterNewsletter />
        </div>
        <FooterLinks />
        <FooterSocial />
      </div>
    </div>
  );
}
