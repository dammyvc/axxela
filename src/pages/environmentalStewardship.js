import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Renewable from '@/components/Renewable';
import SimpleLineChart from '@/components/Renewable';
import RightImagePlacement from '@/components/RightImagePlacement';
import LeftImagePlacement from '@/components/LeftImagePlacement';

const firstParagraph = `We prioritise environmental protection and minimise our impact on ecosystems throughout our operations. This includes comprehensive environmental impact studies and social assessments during project planning and pre-construction phases. Continuous environmental monitoring and regular audits are conducted by independent environmental consultants, adhering to statutory requirements and international best practices. Our facilities are not situated in protected areas, and our operations do not have additional adverse effects on biodiversity. We use existing transport infrastructure and our activities do not contribute to atmospheric pollutants or introduce new invasive species. Our commitment lies in ensuring minimal impact beyond necessary land conversion.`;

const secondParagraph = ` Our day-to-day administrative operations have no water-related impacts. Water is primarily used for office cleaning, drinking, handwashing, and other sanitary purposes. We source water either from underground water tables via boreholes or obtain it from vendors for drinking water.`;

const thirdParagraph = `At Axxela, we conduct thorough environmental and social impact assessments to ensure responsible and sustainable operations. This includes addressing actual negative impacts such as natural gas emissions and CO<sub>2</sub> emissions from various sources. Mitigation measures involve reducing energy inefficiencies, conducting baseline integrity surveys, and contributing to carbon sequestration efforts. Environmental, Social, and Governance (ESG) targets and objectives are set, with quarterly GHG data reviews and an emergency response team on standby for gas leak incidents. Stakeholder engagement initiatives focus on continuous improvement, including installing markers along Right of Way and collaborating with government agencies to monitor encroachment. These efforts showcase our dedication to minimising environmental impact and prioritising stakeholder welfare.`;

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

const environmentalStewardship = () => {
  return (
    <>
      <Head>
        <title>
          Axxela 2023 Sustainability Report | Environmental Stewardship
        </title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="/highPoints" nextLink="/buildingConnections" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="Environmental Stewardship"
            backgroundImage="/images/content/environmental_stewardship.jpeg"
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
                        At Axxela, we continuously refine our approach to
                        managing greenhouse gas &#40;GHG&#41; emissions to align
                        with the latest global standards and ensure
                        environmental sustainability.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            text={firstParagraph}
            backgroundImage="/images/misc/biodiversity.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <LeftImagePlacement
            text={secondParagraph}
            backgroundImage="/images/misc/water.jpg"
            backgroundColor="bg-light dark:bg-dark"
            textColor="text-partnership dark:text-light"
          />

          <RightImagePlacement
            text={thirdParagraph}
            backgroundImage="/images/misc/environment.jpg"
            backgroundColor="bg-[rgba(245,208,0,0.5)] dark:bg-[rgba(245,208,0,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-[rgba(11,51,86,0.4)] dark:bg-[rgba(11,51,86,0.4)] max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto w-full min-h-[50px] justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 !basis-[calc(100%+0px)] !max-w-[calc(100%+0px)] md:grow-0 md:shrink-0">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[40px] pl-[0px] pr-[0px] md:pt-[80px] md:pl-[10.01vw] md:pr-[10.01vw] sm:pt-[80px] sm:pl-[3.20427vw] sm:pr-[3.20427vw]"
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'inherit',
                      flexDirection: 'inherit',
                    }}
                  >
                    <div
                      className="relative w-full rounded-none text-light dark:text-light border-solid border-black border-0 mb-0 p-0 visible md:p-5 !block"
                      style={{ flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-lg font-semibold">
                        Total energy consumption within the organisation from
                        renewable sources
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer prevLink="/highpoints" nextLink="/buildingConnections" />
        </Layout>
      </main>
    </>
  );
};

export default environmentalStewardship;
