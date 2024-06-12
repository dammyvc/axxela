import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';
import ProgressBar from '@/components/ProgressBar';
import CountUp from 'react-countup';
import useOnScreen from '../components/hooks/useOnScreen';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import RightImagePlacement from '@/components/RightImagePlacement';
import LeftImagePlacement from '@/components/LeftImagePlacement';

const firstParagraph = `Our company prioritises the economic prosperity of the communities where we operate, providing employment opportunities during construction and development phases. We actively engage with stakeholders through forums and town hall meetings, both before and after construction, fostering positive community relations. In cases where construction causes temporary inconveniences or economic losses, we conduct independent assessments and offer compensation as needed. Corporate Social Responsibility (CSR) activities are a key aspect of our community engagement efforts, extending beyond economic impact to environmental sustainability.<br /> <br />To ensure minimal negative impact on host communities, all our projects undergo rigorous Environmental Impact Assessments (EIAs), including evaluations of social impact. These assessments are closely monitored by federal and state authorities and are publicly available records, as mandated by law. Prior to project implementation, stakeholder mapping exercises help identify relevant parties, enabling tailored engagement strategies to address their needs and concerns. Additionally, we have established grievance-handling procedures to transparently address any grievances or conflicts with stakeholders and host communities.`;

const secondParagraph = `The objective of managing supply chain materiality is to ensure compliance with our code of conduct and environmental and social mandates. This entails selecting materials that minimise environmental impact and ensuring suppliers adhere to ethical labor practices and human rights standards. Contracts and pricing agreements are negotiated for optimal value, with material inspection occurring before and upon delivery. Service Level Agreements (SLAs) with aligned Key Performance Indicators (KPIs) support contract execution. We obtain mill test or Factory Acceptance Test (FAT) certificates and engage offshore inspection agents for foreign materials. Our goal is to maintain rejection rates below 5% through consistent pre-engagement checks. Early stakeholder engagement facilitates appropriate product specifications for certification. The company spends 93% of its procurement budget to local suppliers in Nigeria and screens new suppliers meticulously based on environmental and social criteria, resulting in zero negative social impacts in 2023.`;

const anitext = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      delay: 0.8,
    },
  },
};

const communityInitiatives = () => {
  const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.2 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.2 });

  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | Community Initiatives</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator
        prevLink="/buildingConnections"
        nextLink="/economicContributions"
      />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="Community Development Initiatives"
            backgroundImage="/images/content/community_initiative.jpeg"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[136px] max-h-none border-solid border-black border-0 mb-[51px]">
            <div className="flex flex-auto w-full max-w-[1024px] rounded-[inherit]">
              <div className="flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-center border-solid border-black border-0 !basis-[calc(100%+0px)] !max-w-[calc(100%+0px)] md:grow-0 md:shrink-0">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[80px] pl-[50px] pr-[50px] md:pt-[24px] md:pl-[50px] md:pr-[50px] sm:pt-[24px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'inherit',
                      flexDirection: 'inherit',
                    }}
                  >
                    <div
                      className="flex w-full"
                      style={{
                        flexDirection: 'inherit',
                        alignItems: 'inherit',
                      }}
                    >
                      <hr className="w-[51px] border-b-[2px] border-solid border-sustainable dark:border-vision mt-0 mb-[16px] max-w-full box-border inline-block relative border-t-0 border-r-0 border-l-0" />
                    </div>

                    <div
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                      style={{ flex: 'unset' }}
                    >
                      <h4 className="break-words whitespace-pre-wrap p-0 cursor-text relative text-partnership dark:text-light text-lg font-normal">
                        We contribute to the economic well-being of the
                        communities where we operate by creating employment
                        opportunities during construction and development.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            text={firstParagraph}
            backgroundImage="/images/misc/community.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
            textColor="text-partnership dark:text-light"
          />

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
                      style={{
                        flexDirection: 'inherit',
                        alignItems: 'inherit',
                      }}
                    >
                      <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                        <div className="inline-block relative">
                          <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                            {isVisible1 && (
                              <CountUp suffix="%" duration={7} end={93} />
                            )}
                          </div>
                          <ProgressBar
                            targetPercentage={93}
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
                        93%
                      </h1>
                    </div>
                    <div
                      className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                      style={{ flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                        of our procurement budget spent on local suppliers based
                        in Nigeria.
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
                      style={{
                        flexDirection: 'inherit',
                        alignItems: 'inherit',
                      }}
                    >
                      <div className="relative w-full text-center mb-0 text-partnership dark:text-light text-3xl font-semibold">
                        <div className="inline-block relative">
                          <div className="flex items-center justify-center absolute w-full h-full pr-[12%] pl-[12%] top-0 bottom-0 break-all text-center">
                            {isVisible3 && (
                              <CountUp suffix="" duration={7} end={54} />
                            )}
                          </div>
                          <ProgressBar
                            targetPercentage={54}
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
                        54
                      </h1>
                    </div>
                    <div
                      className="relative w-full rounded-none text-center mb-0 p-0 text-partnership dark:text-light border-solid border-black border-0 visible !block"
                      style={{ flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap p-0 cursor-text relative text-start font-normal text-normal text-partnership dark:text-light md:text-center">
                        new suppliers meticulously screened using environmental
                        and social criteria.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <LeftImagePlacement
            text={secondParagraph}
            backgroundImage="/images/misc/supply.jpg"
            backgroundColor="bg-light dark:bg-dark"
            textColor="text-partnership dark:text-light"
          />

          <Footer
            prevLink="/buildingConnections"
            nextLink="/economicContributions"
          />
        </Layout>
      </main>
    </>
  );
};

export default communityInitiatives;
