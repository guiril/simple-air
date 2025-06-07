import FooterContent from './FooterContent';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
  return (
    <footer className="flex flex-col bg-neutral-700">
      <FooterContent />
      <FooterCopyright />
    </footer>
  );
}
