'use client';

import { FOOTER_LINKS } from '@/constants/footer';
import FooterLink from './FooterLink';

export default function FooterLinks() {
  return (
    <div className="flex justify-end pr-[60px] md:p-0 sm:justify-between">
      <div className="mr-[52px] sm:mr-0">
        <FooterLink
          title={FOOTER_LINKS.ABOUT.title}
          links={FOOTER_LINKS.ABOUT.links}
        />
      </div>
      <div className="sm:text-right">
        <FooterLink
          title={FOOTER_LINKS.HELP.title}
          links={FOOTER_LINKS.HELP.links}
        />
      </div>
    </div>
  );
}
