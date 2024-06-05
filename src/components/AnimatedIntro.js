import React from 'react';
import { LinkArrow } from './Icons';
import Link from 'next/link';
import VideoComponent from './VideoIntro';


const AnimatedIntro = () => {
    

    return (

        <>
        

            <div className="w-full h-screen overscroll-contain relative">
                <VideoComponent className='absolute inset-0 z-10' />

                <div>
                    <div className='absolute top-2/4 w-full flex justify-around text-partnership font-mont font-bold z-20  sm:flex-col sm:m-[10px] sm:justify-between sm:space-y-32 sm:top-28'>
                        <p>Axxela 2023 <br /> Sustainability Report</p>
                        <h1 className='text-xl'>Empowering Today, Preserving Tomorrow: <br /> Sustainable Energy for Future Generations</h1>
                        <Link href="/about">Explore Report <LinkArrow className={"w-6 ml-1"} /> </Link>
                    </div>
                </div>
                
            </div>
        
        </>
        
    );
};

export default AnimatedIntro;