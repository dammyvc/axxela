import React from 'react';
import { LinkArrow } from './Icons';
import Link from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VideoComponent from './VideoIntro';

const AnimatedIntro = () => {
  return (
    <>
      <div className="w-full h-screen overscroll-contain relative">
        <VideoComponent className="absolute inset-0 z-10" />

        <div>
          <div className="absolute top-2/4 w-full flex justify-around text-dark dark:text-light font-mont font-bold z-20 md:m-[10px]  sm:flex-col sm:m-[10px] sm:justify-between sm:space-y-32 sm:top-[15rem]">
            <p className="text-2xl font-normal">
              Axxela 2023 <br /> Sustainability Report
            </p>
            <h1 className="text-4xl sm:text-2xl">
              <span className="text-partnership dark:text-growth font-bold">
                Empowering Today, Preserving Tomorrow:&nbsp;
                <br/>
                <span className="font-medium text-dark dark:text-light text-3xl sm:text-xl">
                  Sustainable Energy for Future Generations
                </span>
              </span>
              <br/>
              <br/>
                <span className='bg-partnership dark:bg-growth rounded-lg pb-1 pl-2 pr-2'>
                  <Link className="text-2xl font-semibold text-white" href="/contents"> Explore Report <OpenInNewIcon/> </Link>
                </span>
              
            </h1>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedIntro;
