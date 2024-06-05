import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import ContentCards from '@/components/ContentCards';

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

const contents = () => {
  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | Contents</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="/about" nextLink="/ceoStatement" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <section className="flex w-full justify-center relative box-border min-h-[240px] max-h-none border-solid border-black border-0">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto min-h-[50px] justify-between rounded-[inherit]">
                <motion.div
                  className="flex relative flex-col grow shrink max-h-full box-border text-center justify-center border-solid border-black border-0 rounded-[inherit] basis-[calc(100%+0px)] max-w-[calc(100%+0px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[150px] pl-[100px] pr-[100px] md:pt-[150px] md:pl-[13.0208vw] md:pr-[13.0208vw] sm:pt-[100px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      alignItems: 'inherit',
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <div className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block">
                      <h1 className="break-words whitespace-pre-wrap p-0 mb-[20px] cursor-text relative text-6xl md:text-4xl sm:text-4xl text-center font-extrabold text-dark dark:text-light">
                        <span>Inside This Report</span>
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[470px] max-h-none border-solid border-black border-0">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-[inherit]">
                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-l-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-0 pl-0 pr-0 md:pt-0 md:pl-[100px] md:pr-[100px] sm:pt-0 sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/ceo_speaks.jpeg"
                      title="CEO Statement"
                      description="Our sustainability target extends beyond our business operations, it is rooted in our core values and vision for a transformative future."
                      linkHref="/ceoStatement"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-r-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-0 pr-0 md:pt-[20px] md:pl-[100px] md:pr-[100px] sm:pt-[20px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/we_are_axxela.jpeg"
                      title="We Are Axxela"
                      description="We are Axxela, a dynamic force in the energy and utilities sector, jointly owned by Helios Investment Partners LLP and Sojitz Corporation."
                      linkHref="/weAreAxxela"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[470px] max-h-none border-solid border-black border-0 md:mt-[20px]">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-[inherit]">
                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-l-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-0 pl-0 pr-0 md:pt-0 md:pl-[100px] md:pr-[100px] sm:pt-0 sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/high_points.jpeg"
                      title="2023 High Points"
                      description="Highlighting our 2023 sustainability achievements."
                      linkHref="/highPoints"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-r-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-0 pr-0 md:pt-[20px] md:pl-[100px] md:pr-[100px] sm:pt-[20px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/environmental_stewardship.jpeg"
                      title="Environmental Stewardship"
                      description="We prioritise environmental protection and minimise our impact on the ecosystem throughout our operations."
                      linkHref="/environmentalStewardship"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[470px] max-h-none border-solid border-black border-0 md:mt-[20px]">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-[inherit]">
                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-l-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-0 pl-0 pr-0 md:pt-0 md:pl-[100px] md:pr-[100px] sm:pt-0 sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/building_connections.jpg"
                      title="Building Connections Within Our Network"
                      description="Our dedication lies in enhancing the welfare of our employees through a range of programs designed to bolster their physical, emotional, and financial wellness."
                      linkHref="/buildingConnections"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-r-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-0 pr-0 md:pt-[20px] md:pl-[100px] md:pr-[100px] sm:pt-[20px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/community_initiative.jpeg"
                      title="Community Development Initiatives"
                      description="Our operations continue to contribute to the economic well-being of the communities where we operate by creating employment opportunities during construction and development."
                      linkHref="/communityInitiatives"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[470px] max-h-none border-solid border-black border-0 mb-10 md:mt-[20px]">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-[inherit]">
                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-l-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-0 pl-0 pr-0 md:pt-0 md:pl-[100px] md:pr-[100px] sm:pt-0 sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/economic_contributions.jpeg"
                      title="Sustainable Economic Contributions"
                      description="The financial implications of unmanaged climate risks are significant, potentially leading to a diminishment of shareholder value, a decline in profits, rising operational costs, and regulatory fines."
                      linkHref="/economicContributions"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-r-[inherit] basis-[calc(50%-25px)] max-w-[calc(50%-25px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
                >
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-0 pr-0 md:pt-[20px] md:pl-[100px] md:pr-[100px] sm:pt-[20px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'inherit',
                    }}
                  >
                    <ContentCards
                      imgSrc="/images/content/gallery.jpeg"
                      title="Gallery"
                      description="A Celebration of 2023."
                      linkHref="/gallery"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default contents;
