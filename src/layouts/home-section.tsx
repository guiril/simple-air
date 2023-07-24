import { ReactNode } from 'react';

export default function HomeSection({
  smallTitle,
  title,
  description,
  isMoreButton,
  children
}: {
  smallTitle: string;
  title: string;
  description: string;
  isMoreButton: boolean;
  children: ReactNode;
}) {
  return (
    <section className="py-20 bg-neutral-0 md:py-[60px] sm:py-12">
      <div className="container">
        <div className="flex justify-between items-end mb-12 md:mb-10 sm:mb-[28px]">
          <div>
            <small className="block mb-6 text-p-sm-r font-medium text-warning-600">
              {smallTitle}
            </small>
            <h2 className="mb-1 text-h2 text-neutral-600">{title}</h2>
            <p className="text-p-md-body text-neutral-500">{description}</p>
          </div>
          {isMoreButton ? (
            <button
              type="button"
              className="py-3 px-5 text-p-md-sb leading-[1.5em] text-primary-500 bg-primary-50 rounded-lg sm:hidden"
            >
              了解更多
            </button>
          ) : (
            ''
          )}
        </div>
        {children}
        {isMoreButton ? (
          <button
            type="button"
            className="w-full py-4 mt-7 text-p-md-sb leading-[1.5em] text-primary-500 bg-primary-50 rounded-lg hidden
            sm:block"
          >
            了解更多
          </button>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
