import React from 'react'
import AnimatedTextHeader from './AnimatedTextHeader'


const Hero = ({ text, backgroundImage }) => {
  return (
    <>
        <section className='flex w-full justify-center relative box-border max-w-none min-h-[565px] max-h-none bg-[rgba(255,255,255,0)] rounded-[inherit]  border-solid border-black border-0 '>
            <div className='flex-auto flex w-full rounded-[inherit]'>
                <div className='inset-0 absolute w-full h-full rounded-[inherit] overflow-hidden'>
                    <div className='inset-0 absolute h-[565px] w-full overflow-hidden rounded-[inherit] will-change-transform'>
                        <div className='bg-no-repeat bg-cover inset-0 absolute w-full h-[584.8px] overflow-hidden pointer-events-none rounded-[inherit] box-border bg-inherit opacity-100 transition-opacity duration-500 ease-linear delay-0' style={{backgroundPosition: '50% 100%', backgroundImage:`url(${backgroundImage})`}}>
                            

                        </div>

                    </div>
                    

                </div>
                <div className='flex flex-wrap m-0 min-h-[50px] w-full justify-between rounded-inherit'>
                        <div className='flex relative flex-col grow shrink max-h-full box-border text-start justify-center basis-[calc(37.5%-15px)] max-w-[calc(37.5%-15px)] md:grow-0 md:shrink-0 md:[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:[calc(100%+0px)] sm:max-w-[calc(100%+0px)]'>
                            <div className='flex flex-auto pt-[200px] pl-[6.61715vw] pr-0 md:pt-[200px] md:pl-[5.20833vw] md:pr-[50.7812vw] sm:pt-[425px] lg:pt-[0px] sm:pl-[8vw] sm:pr-[8vw]'>
                                <div className='relative w-full block'>
                                    <AnimatedTextHeader text={text} />

                                </div>

                            </div>

                        </div>

                        <div className='flex relative flex-col grow shrink max-h-full box-border text-start justify-center basis-[calc(37.5%-15px)] max-w-[calc(37.5%-15px)] md:grow-0 md:shrink-0 md:[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:[calc(100%+0px)] sm:max-w-[calc(100%+0px)]'>
                            <div className='flex flex-auto pt-[10.403120936280883vh] pl-[6.61715vw] pr-0 md:pt-[24px] md:pl-[5.20833vw] md:pr-[50.7812vw] sm:pt-[425px] sm:pl-[8vw] sm:pr-[8vw]'>

                            </div>

                        </div>

                        <div className='flex relative flex-col grow shrink max-h-full box-border text-start justify-center basis-[calc(37.5%-15px)] max-w-[calc(37.5%-15px)] md:grow-0 md:shrink-0 md:[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:[calc(100%+0px)] sm:max-w-[calc(100%+0px)]'>
                            <div className='flex flex-auto pt-[200px] pl-[6.61715vw] pr-0 md:pt-[200px] md:pl-[5.20833vw] md:pr-[50.7812vw] sm:pt-[425px] sm:pl-[8vw] sm:pr-[8vw]'>

                            </div>

                        </div>

                    </div>
                

            </div>

        </section>
    
    
    </>
  )
}

export default Hero