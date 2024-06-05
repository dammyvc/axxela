import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tooltip } from '@material-tailwind/react';

const Paginator = ({ prevLink, nextLink, isLastPage }) => {
  const router = useRouter();

  const handleNavigation = (link) => {
    router.push(link);
  };

  return (
    <div className="flex fixed z-10 right-[30px] bottom-[45%] flex-col justify-center h-[90px] text-[24px] transition-opacity duration-300 ease-linear opacity-100 sm:bottom-[60px] sm:flex-row sm:h-auto">
      <Tooltip
        placement="left"
        className="border border-blue-gray-50 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/10 text-partnership font-medium"
        content="Previous Page"
      >
        <div
          onClick={() => handleNavigation(prevLink)}
          className="flex pt-[9px] pr-[8px] pl-[9px] pb-[8px] items-center opacity-100 cursor-pointer pointer-events-auto rounded-t-[20px] rounded-b-none bg-vision text-partnership sm:rounded-tl-[2px] sm:rounded-tr-none sm:rounded-br-none sm:rounded-bl-[2px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left align-middle"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </div>
      </Tooltip>

      <Tooltip
        placement="left"
        className="border border-blue-gray-50 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/10 text-partnership font-medium"
        content="Next Page"
      >
        {isLastPage ? (
          <div className="flex pt-[9px] pr-[8px] pl-[9px] pb-[8px] items-center cursor-not-allowed rounded-t-none rounded-b-[20px] bg-gray-200 text-gray-400 sm:rounded-tl-none sm:rounded-tr-[2px] sm:rounded-br-[2px] sm:rounded-bl-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        ) : (
          <div
            onClick={() => handleNavigation(nextLink)}
            className="flex p-[9px] items-center opacity-100 cursor-pointer pointer-events-auto rounded-t-none rounded-b-[20px] bg-vision text-partnership sm:rounded-tl-none sm:rounded-tr-[2px] sm:rounded-br-[2px] sm:rounded-bl-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        )}
      </Tooltip>
    </div>
  );
};

export default Paginator;
