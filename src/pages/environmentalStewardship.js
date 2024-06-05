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

          <section className="flex w-full justify-center relative rounded-[inherit] box-border max-w-none min-h-[136px] max-h-none border-solid border-black border-0">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-none">
              <div className="flex flex-wrap my-0 mx-auto w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-l-[inherit] !basis-[calc(33.3333%+0px)] !max-w-[calc(33.3333%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-[3.59712vw] pr-[3.59712vw] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pl-[6.4vw] sm:pr-[6.4vw]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                    >
                      <h4 className="break-words whitespace-pre-wrap p-0 cursor-text relative text-dark dark:text-light mb-[0.625em] text-xl font-bold">
                        Biodiversity Conservation Initiatives
                      </h4>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-dark dark:text-light font-light text-base">
                        We prioritise environmental protection and minimise our
                        impact on the ecosystem throughout our operations. Our
                        approach includes comprehensive environmental impact
                        studies and social assessments during the project
                        planning and pre-construction phases, continuous
                        environmental monitoring &#40;quarterly or
                        biannually&#41;, regular audits, and compliance checks.
                        Independent environmental consultants conduct these
                        assessments according to statutory requirements and
                        international best practices.
                      </p>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-dark dark:text-light font-light text-base">
                        Our facilities are not located in protected areas, and
                        our operations do not have additional adverse effects on
                        biodiversity beyond the conversion of one acre of land
                        for the TGNL gas facility in Ibefun, Ogun State,
                        Nigeria. We use existing transport infrastructure built
                        by the Federal Government, and our activities do not
                        contribute to atmospheric pollutants, introduce new
                        invasive species or pests, reduce species, or change
                        ecological processes outside the natural range of
                        variation.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="flex relative flex-col grow shrink max-h-full box-border bg-grey1 dark:bg-grey9 text-start justify-start border-solid border-black border-0 !basis-[calc(33.3333%+0px)] !max-w-[calc(33.3333%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-[3.59712vw] pr-[3.59712vw] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pl-[6.4vw] sm:pr-[6.4vw]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                    >
                      <h4 className="break-words whitespace-pre-wrap p-0 cursor-text relative text-dark dark:text-light mb-[0.625em] text-xl font-bold">
                        Water Management
                      </h4>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-dark dark:text-light font-light text-base">
                        Our day-to-day administrative operations have no
                        water-related impacts. Water is primarily used for
                        office cleaning, drinking, handwashing, and other
                        sanitary purposes. We source water either from
                        underground water tables via boreholes or obtain it from
                        vendors for drinking water.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-l-[inherit] !basis-[calc(33.3333%+0px)] !max-w-[calc(33.3333%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-[3.59712vw] pr-[3.59712vw] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pl-[6.4vw] sm:pr-[6.4vw]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                    >
                      <h4 className="break-words whitespace-pre-wrap p-0 cursor-text relative text-dark dark:text-light mb-[0.625em] text-xl font-bold">
                        Sustainable Practices for Reduced Carbon Emissions
                      </h4>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-dark dark:text-light font-light text-base">
                        At Axxela, we conduct a comprehensive assessment of our
                        environmental and social impact to ensure responsible
                        and sustainable operations. This assessment covers both
                        actual negative impacts on the environment, such as
                        natural gas emissions, CO<sup>2</sup> emissions from
                        electricity, commuting, and diesel consumption, as well
                        as potential negative impacts on people, like increased
                        natural gas emissions and fire incidents. To address
                        these impacts, we implement various mitigation measures,
                        including reducing inefficiencies in energy usage,
                        conducting baseline integrity and pipeline leak surveys,
                        and actively contributing to carbon sequestration
                        efforts.
                      </p>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-dark dark:text-light font-light text-base">
                        Additionally, we set Environmental, Social, and
                        Governance &#40;ESG&#41; targets and objectives, request
                        GHG data quarterly for review, and maintain an emergency
                        response team on standby to address reported gas leaks
                        promptly. Our stakeholder engagement initiatives lead to
                        continuous improvement, with measures such as installing
                        markers along Right of Way, conducting sensitisation
                        sessions, and collaborating with government agencies to
                        monitor encroachment. These efforts demonstrate our
                        commitment to minimising environmental impact and
                        prioritising stakeholder well-being.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border max-w-none min-h-[136px] max-h-none border-solid border-black border-0">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-none">
              <div className="flex flex-wrap my-0 mx-auto w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border bg-background dark:bg-grey7 text-start justify-start border-solid border-black border-0 rounded-l-[inherit] !basis-[calc(50%+0px)] !max-w-[calc(50%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-[3.59712vw] pr-[3.59712vw] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pl-[6.4vw] sm:pr-[6.4vw]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                    >
                      <SimpleLineChart />
                    </motion.div>
                  </div>
                </div>

                <div className="flex relative flex-col grow shrink max-h-full box-border bg-background dark:bg-grey7 text-start justify-start border-solid border-black border-0 !basis-[calc(50%+0px)] !max-w-[calc(50%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-[3.59712vw] pr-[3.59712vw] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pl-[6.4vw] sm:pr-[6.4vw]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                    >
                      <h4 className="break-words whitespace-pre-wrap p-0 cursor-text relative text-dark dark:text-light mb-[0.625em] text-xl font-bold">
                        Water Management
                      </h4>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-dark dark:text-light font-light text-base">
                        Our day-to-day administrative operations have no
                        water-related impacts. Water is primarily used for
                        office cleaning, drinking, handwashing, and other
                        sanitary purposes. We source water either from
                        underground water tables via boreholes or obtain it from
                        vendors for drinking water.
                      </p>
                    </motion.div>
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
