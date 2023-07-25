import Image from 'next/image';

export default function Dropdown() {
  const items = [
    {
      iconSrc: 'round',
      iconAlt: 'round or one way',
      text: '來回'
    },
    {
      iconSrc: 'passenger',
      iconAlt: 'round or one way',
      text: '1 位成人'
    },
    {
      iconSrc: 'cabin',
      iconAlt: 'cabin',
      text: '經濟艙'
    }
  ];

  const list = items.map((el) => (
    <li className="flex items-center mr-3 last:mr-0 sm:mr-0" key={el.iconSrc}>
      <button
        type="button"
        className="flex items-center py-2 px-1 text-neutral-600 rounded ease-linear hover:bg-neutral-200"
      >
        <Image
          src={`/images/icons/${el.iconSrc}.svg`}
          alt={el.iconAlt}
          width={20}
          height={20}
          className="mr-1"
        />
        <span className="mr-1 text-p-sm-r">{el.text}</span>
        <Image
          src="/images/icons/arrow-down.svg"
          alt="arrow down"
          width={20}
          height={20}
        />
      </button>
    </li>
  ));

  return list;
}
