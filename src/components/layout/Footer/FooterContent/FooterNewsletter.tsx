'use client';

export default function FooterNewsletter() {
  const labelEl = (
    <label htmlFor="email" className="block mb-3 text-p-md-sb text-neutral-100">
      訂閱電子報
    </label>
  );

  const inputEl = (
    <input
      type="email"
      id="email"
      placeholder="請輸入電子郵件地址"
      className="py-4 px-3 mr-4 grow rounded-lg md:max-w-[244px]"
    />
  );

  const buttonEl = (
    <button
      type="button"
      className="py-3 px-5 text-p-md-sb text-primary-500 bg-primary-50
        rounded-lg hover:bg-primary-100 active:bg-primary-100
        sm:py-2 sm:px-4 sm:text-p-sm-sb"
    >
      訂閱
    </button>
  );

  return (
    <div className="sm:hidden">
      {labelEl}
      <div className="flex items-center">
        {inputEl}
        {buttonEl}
      </div>
    </div>
  );
}
