import Image from 'next/image';

export default function SortBar() {
  return (
    <ul className="flex flex-start items-start mb-6 bg-neutral-0 border border-neutral-700/[.12] rounded-lg md:items-center">
      <li
        className="relative w-[146px] py-6 pl-4 grow shrink cursor-pointer rounded-lg overflow-hidden
          before:absolute before:h-[2px] before:right-0 before:bottom-[-1px] before:left-[3px] before:bg-primary-700
          sm:w-[127px] xs:w-[72px] xs:py-3 xs:px-1"
      >
        <div className="flex items-center mb-1 md:justify-center xs:mb-">
          <span className="mr-1 text-p-md-sb text-primary-700 md:text-p-md-r sm:text-p-sm-md xs:text-p-xs-md">
            最佳推薦
          </span>
          <Image
            src="/images/icons/info.svg"
            alt="info"
            width={20}
            height={20}
            className="md:hidden"
          />
        </div>
        <div className="text-primary-700 whitespace-nowrap md:text-center">
          <span className="font-['PingFang_TC'] text-p-sm-sb md:text-[18px] md:font-semibold xs:text-[12px] xs:leading-[1.3em]">
            NT$50,342
          </span>
          <span className="mx-2 text-p-md-sb md:hidden">·</span>
          <span className="text-p-sm-sb md:hidden">14 小時 18 分鐘</span>
        </div>
      </li>
      <li className="w-[146px] py-6 pl-4 grow shrink cursor-pointer overflow-hidden sm:w-[127px] xs:w-[72px] xs:py-3 xs:px-1">
        <div className="flex items-center mb-1 md:justify-center">
          <span className="mr-1 text-p-md-sb text-neutral-600 md:text-p-md-r sm:text-p-sm-md xs:text-p-xs-md">
            最便宜
          </span>
        </div>
        <div className="text-neutral-500 whitespace-nowrap md:text-center">
          <span className="font-['PingFang_TC'] text-p-sm-r md:text-[18px] md:font-semibold md:text-neutral-600 xs:text-[12px] xs:leading-[1.3em]">
            NT$37,298
          </span>
          <span className="mx-2 text-p-sm-r md:hidden">·</span>
          <span className="text-p-sm-r md:hidden">36 小時 40 分鐘</span>
        </div>
      </li>
      <li className="w-[146px] py-6 pl-4 grow shrink cursor-pointer overflow-hidden sm:w-[127px] xs:w-[72px] xs:py-3 xs:px-1">
        <div className="flex items-center mb-1 md:justify-center">
          <span className="text-p-md-sb text-neutral-600 md:text-p-md-r sm:text-p-sm-md xs:text-p-xs-md">
            最快
          </span>
        </div>
        <div className="text-neutral-500 whitespace-nowrap md:text-center">
          <span className="font-['PingFang_TC'] text-p-sm-r md:text-[18px] md:font-semibold md:text-neutral-600 xs:text-[12px] xs:leading-[1.3em]">
            NT$54,599
          </span>
          <span className="mx-2 text-p-sm-r md:hidden">·</span>
          <span className="text-p-sm-r md:hidden">13 小時 40 分鐘</span>
        </div>
      </li>
      <li className=" w-[146px] py-6 px-4 grow shrink cursor-pointer overflow-hidden sm:w-[127px] xs:w-[72px] xs:py-3 xs:px-1">
        <div className="flex justify-between items-center md:justify-center">
          <div className="flex flex-col items-start md:mr-3 xs:mr-1">
            <span className="mb-1 text-p-md-sb text-neutral-600 md:text-p-md-r sm:text-p-sm-md xs:text-p-xs-md">
              <span className="xs:hidden">其他</span>排序
            </span>
            <span className="text-p-sm-r text-neutral-500 sm:text-p-xs xs:hidden">
              最早出發
            </span>
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
