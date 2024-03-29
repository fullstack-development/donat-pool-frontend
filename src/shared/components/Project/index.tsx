import type { Props } from './types';

function Project({ previousPageTitle, title, children, onPreviousPageClick }: Props) {
  return (
    <div className="relative flex justify-center">
      <div className="w-full max-w-[38.75rem]">
        <div className="mb-15 flex justify-between max-xl:justify-start max-lg:mb-8">
          <div
            className="absolute
              left-0
              top-0
              flex
              cursor-pointer
              items-center
              text-xl/[280%]
              font-bold
              text-blue
              before:mr-[1.4375rem]
              before:block
              before:h-10
              before:w-10
              before:text-center
              before:content-[url('/icons/arrow.svg')]
              max-xl:static"
            onClick={onPreviousPageClick}
          >
            <div className="max-xl:hidden">{previousPageTitle}</div>
          </div>
          <h1
            className="overflow-hidden
              text-ellipsis
              font-rammetto-one
              text-[3.375rem]/[125%]
              text-red
              max-lg:text-[2.25rem]
              max-sm:text-[2.25rem]"
          >
            {title}
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Project;
