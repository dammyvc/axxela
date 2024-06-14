import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import CountUp from 'react-countup';
import useOnScreen from '../components/hooks/useOnScreen';
import AnimatedOnScroll from './AnimatedOnScroll';

const anitext = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};

const Supplier = () => {
  const [ref9, isVisible9] = useOnScreen({ threshold: 0.1 });
  const [ref10, isVisible10] = useOnScreen({ threshold: 0.1 });
  const [ref11, isVisible11] = useOnScreen({ threshold: 0.1 });
  const [ref12, isVisible12] = useOnScreen({ threshold: 0.1 });

  return (
    <AnimatedOnScroll>
      <section className="flex w-full justify-center min-h-[302px] max-h-none relative rounded-[inherit] box-border max-w-none border-0">
        <div className="flex flex-auto w-full rounded-[inherit]">
          <div className="flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]">
            <motion.div
              ref={ref9}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden"
              variants={anitext}
              initial="hidden"
              animate={isVisible9 ? 'visible' : 'hidden'}
            >
              <div
                className="flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]"
                style={{
                  alignItems: 'center',
                  justifyContent: 'inherit',
                }}
              >
                <div
                  className="flex w-full"
                  style={{
                    flexDirection: 'inherit',
                    alignItems: 'inherit',
                  }}
                >
                  <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                    <div className="inline-block relative">
                      <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                        {isVisible9 && (
                          <CountUp suffix="%" duration={7} end={93} />
                        )}
                      </div>
                      <ProgressBar
                        targetPercentage={93}
                        start={isVisible9}
                        strokeColor="#f5d000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref10}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]"
              variants={anitext}
              initial="hidden"
              animate={isVisible10 ? 'visible' : 'hidden'}
            >
              <div
                className="flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]"
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'inherit',
                  flexDirection: 'inherit',
                }}
              >
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <h1 className="break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible sm:!visible">
                    93%
                  </h1>
                </div>
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                    of our procurement budget spent on local suppliers based in
                    Nigeria.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref11}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden"
              variants={anitext}
              initial="hidden"
              animate={isVisible11 ? 'visible' : 'hidden'}
            >
              <div
                className="flex flex-auto rounded-[inherit] pt-[10px] pl-[2.15827vw] pr-[2.15827vw] md:pt-[20px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[31px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]"
                style={{
                  alignItems: 'center',
                  justifyContent: 'inherit',
                }}
              >
                <div
                  className="flex w-ful"
                  style={{
                    flexDirection: 'inherit',
                    alignItems: 'inherit',
                  }}
                >
                  <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                    <div className="inline-block relative">
                      <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                        {isVisible11 && (
                          <CountUp suffix="" duration={7} end={54} />
                        )}
                      </div>
                      <ProgressBar
                        targetPercentage={54}
                        start={isVisible11}
                        strokeColor="#f5d000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref12}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]"
              variants={anitext}
              initial="hidden"
              animate={isVisible12 ? 'visible' : 'hidden'}
            >
              <div
                className="flex flex-auto rounded-[inherit] pt-[30px] pl-[1.5884vw] pr-[3.1768vw] md:pt-[34px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[50px] sm:pl-[13.3333vw] sm:pr-[13.3333vw]"
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'inherit',
                  flexDirection: 'inherit',
                }}
              >
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <h1 className="break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light invisible sm:!visible">
                    54
                  </h1>
                </div>
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                    new suppliers meticulously screened using environmental and
                    social criteria.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedOnScroll>
  );
};

export default Supplier;
