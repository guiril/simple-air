import Image from 'next/image';

export default function SortBar() {
  return (
    <ul className="flex flex-start items-start mb-6 bg-neutral-0 border border-neutral-700/[.12] rounded-lg">
      <li
        className="relative w-[146px] py-6 pl-4 grow basis-0 shrink cursor-pointer rounded-lg overflow-hidden
          before:absolute before:h-[2px] before:right-0 before:bottom-[-1px] before:left-[3px] before:bg-primary-700"
      >
        <div className="flex items-center mb-1">
          <span className="mr-1 text-p-md-sb text-primary-700">最佳推薦</span>
          <Image
            src="/images/icons/info.svg"
            alt="info"
            width={20}
            height={20}
          />
        </div>
        <div className="text-primary-700 whitespace-nowrap">
          <span className="text-p-sm-sb">NT$50,342</span>
          <span className="mx-2 text-p-md-sb">·</span>
          <span className="text-p-sm-sb">14 小時 18 分鐘</span>
        </div>
      </li>
      <li className="w-[146px] py-6 pl-4 basis-0 grow shrink cursor-pointer overflow-hidden">
        <div className="flex items-center mb-1">
          <span className="mr-1 text-p-md-sb text-neutral-600">最便宜</span>
        </div>
        <div className="text-neutral-500 whitespace-nowrap">
          <span className="text-p-sm-r">NT$37,298</span>
          <span className="mx-2 text-p-sm-r">·</span>
          <span className="text-p-sm-r">36 小時 40 分鐘</span>
        </div>
      </li>
      <li className="w-[146px] py-6 pl-4 basis-0 grow shrink cursor-pointer overflow-hidden">
        <div className="flex items-center mb-1">
          <span className="text-p-md-sb text-neutral-600">最快</span>
        </div>
        <div className="text-neutral-500 whitespace-nowrap">
          <span className="text-p-sm-r">NT$54,599</span>
          <span className="mx-2 text-p-sm-r">·</span>
          <span className="text-p-sm-r">13 小時 40 分鐘</span>
        </div>
      </li>
      <li className=" w-[146px] py-6 px-4 basis-0 grow shrink cursor-pointer overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="mb-1 text-p-md-sb text-neutral-600">其他排序</span>
            <span className="text-p-sm-r text-neutral-500">最早出發</span>
          </div>
          <Image
            src="/images/icons/ticket-down-arrow.svg"
            alt="arrow"
            width={28}
            height={28}
          />
        </div>
      </li>
    </ul>
  );
}
