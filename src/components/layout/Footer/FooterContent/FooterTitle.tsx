interface FooterTitleProps {
  title: string;
}

export default function FooterTitle({ title }: FooterTitleProps) {
  return (
    <span className="block mb-5 text-p-md-sb text-neutral-100">{title}</span>
  );
}
