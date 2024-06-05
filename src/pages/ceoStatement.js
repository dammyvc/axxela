import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Btn from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';

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

const ceoStatement = () => {
  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | CEO Statement</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="/contents" nextLink="/weAreAxxela" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="CEO Statement"
            backgroundImage="/images/content/ceo_speaks.jpeg"
          />

          <section className="flex w-full justify-center min-h-[50px] relative rounded-[inherit] box-border pt-[100px] px-[24px] pb-[80px] border-solid border-black border-0 md:px-[14.4px] md:pt-[60px] md:pb-[48px] sm:px-[7.2px] sm:pt-[30px] sm:pb-[24px] ">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto min-h-[50px] w-full justify-between rounded-[inherit]">
                <motion.div
                  className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-white border-0 rounded-l-[inherit] !basis-[calc(41.6667%-14.5833px)] !max-w-[calc(41.6667%-14.5833px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]"
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                >
                  <div
                    className="flex flex-auto rounded-[inherit] items-start pt-0 pl-0 pr-0 md:pt-0 md:pl-[24px] md:pr-[24px] sm:pt-[26px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <div
                      className="flex max-w-full leading-[0] w-full mb-[16px] !items-stretch"
                      style={{ flexDirection: 'inherit' }}
                    >
                      <figure className="inline-block max-w-full w-full min-w-[20px] relative box-border overflow-hidden m-0">
                        <Image
                          className="w-full h-auto max-h-full pointer-events-none align-middle"
                          src="/images/profiles/ceo.jpeg"
                          width={500}
                          height={500}
                          alt="Axxela's CEO"
                        />
                      </figure>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex relative flex-col grow shrink max-h-full box-border text-center justify-center border-solid border-vision border-l-[3px] rounded-r-[inherit] !basis-[calc(58.333%-10.4167px)] !max-w-[calc(58.333%-10.4167px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)] sm:border-l-0"
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{ animationFillMode: 'backwards', flex: 'unset' }}
                >
                  <div
                    className="flex flex-auto rounded-[inherit] items-center pt-0 pl-[25px] pr-0 md:pt-0 md:pl-[24px] md:pr-[24px] sm:pt-[26px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <div
                      className="relative w-full rounded-none text-dark border-solid border-black border-0 mb-0 p-0 visible !block dark:text-light"
                      style={{ flexDirection: 'inherit', flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-start text-sm text-dark dark:text-light  ">
                        I am pleased to present to you our Sustainability Report
                        for the year 2023. At the heart of our sustainability
                        and corporate responsibility journey is a deep-seated
                        belief in the power of collaboration, and it gives me
                        such pride to share the significant progress we have
                        achieved in the past twelve months.
                      </p>
                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-start text-sm text-dark dark:text-light  ">
                        Our sustainability target extends beyond our business
                        operations, it is rooted in our core values and vision
                        for a transformative future. Through the pages of this
                        Report, you will read about the comprehensive overview
                        of our sustainability efforts across different facets of
                        our business. From promoting natural gas adoption and
                        utilisation, contributing to carbon emission reduction,
                        minimising waste, preserving the environment,
                        encouraging diversity and inclusion within our
                        workforce, each aspect reflects our unwavering
                        dedication to enabling a more sustainable future.
                      </p>
                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-start text-sm text-dark dark:text-light">
                        This Report is in line with the core requirements of the
                        Global Reporting Initiative &#40;GRI&#41; Standards as a
                        foundation, as well as the International Financial
                        Reporting Standards&apos; &#40;IFRS&#41; Scope 1 and
                        Scope 2 requirements, with specific focus on areas that
                        are considered material to Axxela, its assets, and
                        stakeholders.
                      </p>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-start text-sm text-dark dark:text-light  ">
                        The transition to a gas-based economy is accelerating
                        due to recent concerted efforts and commitments from
                        governments, private sector organisations, investors,
                        and the wider public. From transition fuel to net-zero
                        targets, switch from traditional dirty fossil fuels to a
                        cleaner, environmentally friendly energy alternative, we
                        understand that meaningful progress requires collective
                        action. I want to express my heartfelt gratitude to our
                        employees, customers, partners, suppliers, and other
                        stakeholders for their unwavering support in driving
                        this positive change. Through effective collaboration,
                        we have continued to partner with our customers to turn
                        promises into action, and together, we can achieve much
                        more.
                        <br />
                        <br />
                        Thank you for your continued support.
                      </p>

                      <p className="break-words whitespace-pre-wrap p-0 mb-[60px] cursor-text relative text-start text-sm font-bold text-dark dark:text-light  ">
                        Bolaji Osunsanya
                        <br />
                        Chief Executive Officer
                      </p>
                    </div>
                    <div
                      className="flex w-full relative pointer-events-auto"
                      style={{
                        flexDirection: 'inherit',
                        alignItems: 'inherit',
                      }}
                    >
                      <Link
                        className="inline-block m-0"
                        style={{ alignSelf: 'flex-start' }}
                        href="#"
                      >
                        <Btn text="Read Full Statement" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <Footer prevLink="/contents" nextLink="/weAreAxxela" />
        </Layout>
      </main>
    </>
  );
};

export default ceoStatement;
