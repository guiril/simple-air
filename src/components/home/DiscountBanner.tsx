export default function DiscountBanner() {
  const title = (
    <h3 className="mb-2 text-h3 text-neutral-700">
      首次購票，最高享 <span className="text-primary-700">9折</span> 優惠
    </h3>
  );

  const description = (
    <p className="text-p-md-body text-neutral-700/60">
      首次使用 Simple Air 購票，立即享最高 9 折優惠！
      <br className="sm:hidden" />
      結帳時系統直接折價，省去貼上折扣碼的麻煩。
    </p>
  );

  const offerButton = (
    <button
      type="button"
      className="py-[11px] px-[19px] mr-4 text-p-md-sb-btn
        text-neutral-600 border border-neutral-700/[.12] rounded-lg
        hover:bg-neutral-200 active:bg-neutral-200
        sm:mr-0 sm:mb-3"
    >
      優惠說明
    </button>
  );

  const searchButton = (
    <button
      type="button"
      className="py-[11px] px-[19px] text-p-md-sb-btn
      text-neutral-0 bg-primary-700 border border-primary-700 rounded-lg
      hover:bg-primary-500 active:bg-primary-500"
    >
      立即搜尋
    </button>
  );

  return (
    <div className="container py-10 sm:bg-neutral-100 sm:py-9">
      <div
        className="py-10 px-12 flex justify-between items-center bg-neutral-100 rounded-xl
          sm:flex-col sm:p-0"
      >
        <div className="sm:mb-12">
          {title}
          {description}
        </div>
        <div className="sm:w-full sm:flex sm:flex-col">
          {offerButton}
          {searchButton}
        </div>
      </div>
    </div>
  );
}
