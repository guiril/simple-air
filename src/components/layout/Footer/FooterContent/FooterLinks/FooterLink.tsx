import { stopHashHrefNavigation } from '@/utils';
import FooterTitle from '@/components/layout/Footer/FooterContent/FooterTitle';

interface FooterLinkProps {
  title: string;
  links: { title: string; link: string }[];
}

export default function FooterLink({ title, links }: FooterLinkProps) {
  const linkList = links.map((link) => (
    <li key={link.title}>
      <a
        href={link.link}
        className="block py-2"
        onClick={stopHashHrefNavigation}
      >
        {link.title}
      </a>
    </li>
  ));

  return (
    <>
      <FooterTitle title={title} />
      <ul className="text-p-sm-r-2 text-neutral-100">{linkList}</ul>
    </>
  );
}
