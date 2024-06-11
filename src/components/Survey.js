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

const Survey = () => {
  const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.2 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.2 });
  const [ref5, isVisible5] = useOnScreen({ threshold: 0 });
  const [ref6, isVisible6] = useOnScreen({ threshold: 0 });
  const [ref7, isVisible7] = useOnScreen({ threshold: 0 });
  const [ref8, isVisible8] = useOnScreen({ threshold: 0 });

  return (
    <AnimatedOnScroll>
      <section className="flex w-full justify-center min-h-[302px] max-h-none relative rounded-[inherit] box-border max-w-none border-0">
        <div className="flex flex-auto w-full rounded-[inherit]">
          <div className="flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]">
            <motion.div
              ref={ref1}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden"
              variants={anitext}
              initial="hidden"
              animate={isVisible1 ? 'visible' : 'hidden'}
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
                  style={{ flexDirection: 'inherit', alignItems: 'inherit' }}
                >
                  <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                    <div className="inline-block relative">
                      <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                        {isVisible1 && (
                          <CountUp suffix="%" duration={7} end={91} />
                        )}
                      </div>
                      <ProgressBar
                        targetPercentage={91}
                        start={isVisible1}
                        strokeColor="#f5d000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-sustainable dark:bg-[rgba(11,51,86,0.6)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]"
              variants={anitext}
              initial="hidden"
              animate={isVisible2 ? 'visible' : 'hidden'}
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
                  <h1 className="break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light">
                    91%
                  </h1>
                </div>
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                    of our customers were satisfied with our response to the
                    safety concerns of our products and services.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden"
              variants={anitext}
              initial="hidden"
              animate={isVisible3 ? 'visible' : 'hidden'}
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
                  style={{ flexDirection: 'inherit', alignItems: 'inherit' }}
                >
                  <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                    <div className="inline-block relative">
                      <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                        {isVisible3 && (
                          <CountUp suffix="%" duration={7} end={94} />
                        )}
                      </div>
                      <ProgressBar
                        targetPercentage={94}
                        start={isVisible3}
                        strokeColor="#f5d000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref4}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.8)] dark:bg-partnership justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]"
              variants={anitext}
              initial="hidden"
              animate={isVisible4 ? 'visible' : 'hidden'}
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
                  <h1 className="break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light">
                    94%
                  </h1>
                </div>
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                    of our customers stated that our products and services
                    improved their well-being.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center min-h-[302px] max-h-none relative rounded-[inherit] box-border max-w-none border-0">
        <div className="flex flex-auto w-full rounded-[inherit]">
          <div className="flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]">
            <motion.div
              ref={ref5}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.4)] dark:bg-[rgba(11,51,86,0.4)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden"
              variants={anitext}
              initial="hidden"
              animate={isVisible5 ? 'visible' : 'hidden'}
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
                  style={{ flexDirection: 'inherit', alignItems: 'inherit' }}
                >
                  <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                    <div className="inline-block relative">
                      <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                        {isVisible1 && (
                          <CountUp suffix="%" duration={7} end={88} />
                        )}
                      </div>
                      <ProgressBar
                        targetPercentage={88}
                        start={isVisible5}
                        strokeColor="#f5d000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref6}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.4)] dark:bg-[rgba(11,51,86,0.4)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]"
              variants={anitext}
              initial="hidden"
              animate={isVisible6 ? 'visible' : 'hidden'}
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
                  <h1 className="break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light">
                    88%
                  </h1>
                </div>
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                    of our customers were satisfied with our customer service
                    procedures.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref7}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.2)] dark:bg-[rgba(11,51,86,0.2)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] md:!hidden sm:!hidden"
              variants={anitext}
              initial="hidden"
              animate={isVisible7 ? 'visible' : 'hidden'}
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
                  style={{ flexDirection: 'inherit', alignItems: 'inherit' }}
                >
                  <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                    <div className="inline-block relative">
                      <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                        {isVisible7 && (
                          <CountUp suffix="%" duration={7} end={86} />
                        )}
                      </div>
                      <ProgressBar
                        targetPercentage={86}
                        start={isVisible7}
                        strokeColor="#f5d000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref8}
              className="flex relative flex-col grow shrink max-h-full box-border text-start bg-[rgba(108,175,199,0.2)] dark:bg-[rgba(11,51,86,0.2)] justify-center border-solid border-black border-0 !basis-[calc(25%+0px)] !max-w-[calc(25%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]"
              variants={anitext}
              initial="hidden"
              animate={isVisible8 ? 'visible' : 'hidden'}
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
                  <h1 className="break-words whitespace-pre-wrap p-0 cursor-text relative font-normal text-4xl text-start md:text-center text-partnership dark:text-light">
                    86%
                  </h1>
                </div>
                <div
                  className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                  style={{ flex: 'unset' }}
                >
                  <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                    of our customers were satisfied with our invoicing process.
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

export default Survey;
