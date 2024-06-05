import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import Contact from '@/components/Contact';
import TransitionEffect from '@/components/TransitionEffect';
import Link from 'next/link';

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

const about = () => {
  const johnOkoro = {
    image: '/images/profiles/John_Okoro.jpeg',
    name: 'John Okoro',
    position: 'Head, EHSQ',
    detailsProps: {
      avatar: '/images/profiles/John_Okoro.jpeg',
      name: 'John Okoro',
      position: 'Head, EHSQ',
      company: '8th Floor, The Wings Office Complex, Lagos, Nigeria',
      phone: '+234-1-2700-035',
      email: 'jokoro@axxelagroup.com',
    },
  };

  const omolaraShitu = {
    image: '/images/profiles/Omolara_Shitu.jpeg',
    name: 'Omolara Shitu',
    position: 'Corporate Communications Lead',
    detailsProps: {
      avatar: '/images/profiles/Omolara_Shitu.jpeg',
      name: 'Omolara Shitu',
      position: 'Corporate Communications Lead',
      company: '8th Floor, The Wings Office Complex, Lagos, Nigeria',
      phone: '+234-1-2700-035',
      email: 'oshitu@axxelagroup.com',
    },
  };

  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | About this Report</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="./" nextLink="/contents" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="About this Report"
            backgroundImage="/images/content/about_this_report.jpg"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[50px] max-h-none pl-[50px] pr-[50px] border-solid border-black border-0 md:pl-[30px] md:pr-[30px] sm:pl-[15px] sm:pr-[15px]">
            <div className="flex-auto flex w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-l-[inherit] basis-[calc(50%-12px)] max-w-[calc(50%-12px)] md:grow-0 md:shrink-0 md:basis-[calc(100%-0px)] md:max-w-[calc(100%-0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%-0px)] sm:max-w-[calc(100%-0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] items-start pt-[80px] pl-0 pr-[32px] md:pt-[53px] md:pl-[24px] md:pr-[24px] sm:pt-[24px] sm:pl-[24px] sm:pr-[24px]  "
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <motion.div
                      className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block"
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                    >
                      <h2 className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-2xl font-black leading-tight text-partnership uppercase dark:text-sustainable">
                        Aligning with world sustainability standards
                      </h2>
                    </motion.div>

                    <motion.div
                      className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block"
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light leading-tight text-dark dark:text-light">
                        We are pleased that you are reading our 7th annual
                        Sustainability Report, documenting our sustainable
                        initiatives within our quartet of business operations
                        throughout 2023 calendar year &#40;January 01 - December
                        31, 2023&#41;. This report has been compiled in
                        collaboration with our consultancy partner,
                        <Link
                          href="https://www.csr-in-action.com"
                          target="_blank"
                          className="underline font-bold italic text-sustainable"
                        >
                          CSR-in-Action Consulting
                        </Link>
                        .
                      </p>

                      <br />

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light leading-tight text-dark dark:text-light">
                        For transparency and clarity, we include a series of
                        financial statements, which have undergone rigorous
                        review by an independent auditor. The extent and focus
                        of this sustainability report are matched with those of
                        our financial report.
                      </p>

                      <br />

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light leading-tight text-dark dark:text-light">
                        The consolidation method in our financial reports
                        maintains consistency, with no alterations made
                        regarding minority interests.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-r-[inherit] basis-[calc(50%-12px)] max-w-[calc(50%-12px)] md:grow-0 md:shrink-0 md:basis-[calc(100%-0px)] md:max-w-[calc(100%-0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%-0px)] sm:max-w-[calc(100%-0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] items-start pt-[144px] pl-0 pr-[32px] md:pt-[11px] md:pl-[24px] md:pr-[24px] sm:pt-[24px] sm:pl-[24px] sm:pr-[24px]  "
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <motion.div
                      className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible unset !block"
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light leading-tight text-dark dark:text-light">
                        We employ a uniform consolidation method for our
                        reporting processes and procedures, ensuring
                        comprehensive inclusion of data from all entities.
                      </p>

                      <br />

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light leading-tight text-dark dark:text-light">
                        This publication aligns with the reporting principles of
                        the GRI Standards, which guide our materiality
                        evaluation, stakeholder engagement, and dualfocused
                        financial and non-financial sustainability reporting. We
                        remain committed to reporting within the parameters of
                        the IFRS Standards for Scope 1 and Scope 2, and we
                        continue to outline our efforts towards the Sustainable
                        Development Goals &#40;SDGs&#41;. The content of this
                        report centres on Axxela&apos;s tangible impacts and its
                        intrinsic value.
                      </p>

                      <br />

                      <p className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light leading-tight text-dark dark:text-light">
                        This report has received
                        <Link
                          href="#"
                          target="_blank"
                          className="underline font-bold italic text-sustainable"
                        >
                          external assurance
                        </Link>
                        by an assurer accredited with ISAE 3000 certification,
                        bringing expertise in sustainability report assurance.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center min-h-[50px] max-h-none pt-[50px] pl-[50px] pr-[50px] border-solid border-black border-0 md:pl-[30px] md:pr-[30px] sm:pl-[15px] sm:pr-[15px]">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto min-h-[50px] w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-[inherit] basis-[calc(100%+0px)] max-w-[calc(100%+0px)] md:grow-0 sm:grow-0 md:shrink-0 sm:shrink-0">
                  <div
                    className="flex flex-auto items-start rounded-[inherit] pt-0 pl-[80px] pr-[50px] md:pt-0 md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-20px sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <motion.div
                      className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block"
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                    >
                      <h3 className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text text-center relative text-xl font-normal leading-tight text-dark dark:text-light">
                        We highly value your feedback and encourage you to
                        communicate with our team members
                      </h3>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[485px] max-h-none pt-[40px] pb-[150px] border-solid border-black border-0 md:pt-[24px] md:pb-[90px] sm:pt-[12px] sm:pb-[45px]">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto min-h-[50px] w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start border-solid border-black border-0 rounded-l-[inherit] basis-[calc(50%+0px)] max-w-[calc(50%+0px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-0 pl-[80px] pr-[50px] md:pt-[60px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[20px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block"
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                    >
                      <div className="!font-mont">
                        <Contact profileCardProps={johnOkoro} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="flex relative flex-col grow shrink max-h-full box-border text-start border-solid border-vision border-l-2 md:border-l-0 md:border-t-2 rounded-r-[inherit] basis-[calc(50%+0px)] max-w-[calc(50%+0px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-0 pl-[80px] pr-[50px] md:pt-[60px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[20px] sm:pl-[24px] sm:pr-[24px]"
                    style={{
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
                      alignItems: 'flex-start',
                    }}
                  >
                    <motion.div
                      className="relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block"
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                    >
                      <div className="!font-mont">
                        <Contact profileCardProps={omolaraShitu} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer prevLink="./" nextLink="/contents" />
        </Layout>
      </main>
    </>
  );
};

export default about;
