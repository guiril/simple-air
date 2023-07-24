import Image from 'next/image';

export default function LargeCard({
  items
}: {
  items: {
    labelText: string | null;
    imgTitle: string;
    remaingNumber: number | null;
    location: string;
    price: string;
  }[];
}) {
  const itemsList = items.map((item) => {
    return (
      <li
        key={item.location}
        className="md:last:hidden sm:last:block sm:mb-8 sm:last:mb-0"
      >
        <div className="relative mb-6 sm:mb-[10px]">
          {item.labelText ? (
            <span
              className="absolute top-3 right-3 py-1 px-2
                text-p-xs text-neutral-700 bg-neutral-0 rounded"
            >
              {item.labelText}
            </span>
          ) : (
            ''
          )}
          <Image
            src={`/images/${item.imgTitle}.webp`}
            alt={item.imgTitle}
            width={410}
            height={348}
            className="rounded-xl w-full"
          />
          {typeof item.remaingNumber === 'number' ? (
            <span
              className="absolute bottom-3 left-3 py-1 px-2
                text-p-xs text-neutral-100 bg-[#0AA4E7] rounded"
            >
              剩 {item.remaingNumber} 張
            </span>
          ) : (
            ''
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-title-md-sb text-neutral-700">
            {item.location}
          </span>
          <div className="flex items-center">
            <span className="mr-3 text-p-sm-r-2 text-neutral-500 sm:hidden">
              最低價
            </span>
            <span className="text-title-md-sb text-primary-500">
              NT$ {item.price}
            </span>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:block">
      {itemsList}
    </ul>
  );
}
