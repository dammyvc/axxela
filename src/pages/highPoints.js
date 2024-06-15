import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import TextReveal from '@/components/TextReveal';

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

const highPoints = () => {
  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | 2023 High Points</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="/contents" nextLink="/ceoStatement" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="High Points of 2023"
            backgroundImage="/images/content/high_points.jpeg"
          />

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
                        <span>Our 2023 Sustainability Achievements</span>
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative box-border min-h-[240px] max-h-none border-solid border-black border-0 mb-10">
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
                    className="flex flex-auto rounded-[inherit] pt-[50px] pl-[100px] pr-[100px] md:pt-[150px] md:pl-[13.0208vw] md:pr-[13.0208vw] sm:pt-[100px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      alignItems: 'inherit',
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <div className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block">
                      <TextReveal />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <Footer prevLink="/contents" nextLink="/ceoStatement" />
        </Layout>
      </main>
    </>
  );
};

export default highPoints;
