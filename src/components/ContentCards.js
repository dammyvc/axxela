import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContentCards = ({ imgSrc, title, description, linkHref }) => {
  return (
    <>
      <div className="relative w-full rounded-lg overflow-hidden">
        <div
          className="flex leading-[0] max-w-full w-full m-0 !items-stretch"
          style={{ flexDirection: 'inherit' }}
        >
          <figure className="inline-block max-w-full w-full min-w-[20px] relative box-border overflow-hidden m-0 rounded-none border-solid border-black border-0">
            <Image
              src={imgSrc}
              width={800}
              height={600}
              className="w-full h-auto max-h-full pointer-events-none align-middle"
              alt={title}
            />
          </figure>
        </div>

        <div className="relative w-full rounded-none p-[40px] bg-partnership dark:bg-light ">
          <h3 className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-[2rem] font-extrabold text-vision dark:text-partnership">
            {title}
          </h3>
          <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-lg font-light text-light dark:text-dark">
            {description}
          </p>
          <div
            className="flex w-full relative pointer-events-auto"
            style={{ flexDirection: 'inherit', alignItems: 'inherit' }}
          >
            <Link className="inline-block mb-[0.55em]" href={linkHref}>
              <div className="whitespace-pre-wrap relative w-fit rounded-none text-base font-bold text-light dark:text-dark border-solid border-light dark:border-dark border-[4px] py-[12px] px-[20px] visible !inline-block md:text-lg">
                Go &rarr;
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCards;
