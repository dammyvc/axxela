import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import { Tooltip } from '@material-tailwind/react';
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

const weAreAxxela = () => {
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
        <title>Axxela 2023 Sustainability Report | We Are Axxela</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="/ceoStatement" nextLink="/highPoints" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="We Are Axxela"
            backgroundImage="/images/content/we_are_axxela.jpeg"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[236px] max-h-none px-[50px] border-solid border-black border-0 md:px-[30px] sm:px-[15px]">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-[inherit] !basis-[calc(100%+0px)] !max-w-[calc(100%+0px)] md:grow-0 md:shrink-0 sm:grow-0 sm:shrink-0">
                  <div className="flex flex-auto items-start pt-[72px] pl-0 pr-[32px] md:pt-[53px] md:pl-[24px] md:pr-[24px] sm:pt-[24px] sm:pl-[24px] sm:pr-[24px]">
                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                    >
                      <h4 className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-medium text-dark dark:text-light md:mb-[1.61111em]">
                        We are Axxela, a dynamic force in the energy and
                        utilities sector, jointly owned by Helios Investment
                        Partners LLP and Sojitz Corporation. Our journey is
                        rooted in a commitment to driving the transition towards
                        sustainable energy solutions for today and tomorrow.
                      </h4>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[375px] max-h-none bg-grey1 dark:bg-grey9 border-solid border-black border-0">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto min-h-[50px] w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border bg-grey1 dark:bg-grey9 text-start justify-start border-solid border-black border-0 rounded-tl-[inherit] rounded-tr-[inherit] !basis-[calc(16.667%-20px)] !max-w-[calc(16.667%-20px)] sm:hidden">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[68px] pl-[38px] pr-[27px]"
                    style={{
                      alignItems: 'flex-start',
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
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
                      className="flex leading-[0] max-w-full w-full mb-[6em] !items-stretch"
                    >
                      <figure className="inline-block max-w-full w-full min-w-[20px] relative box-border overflow-hidden m-0">
                        <Image
                          className="w-full h-auto max-h-full pointer-events-none align-middle"
                          src="/images/misc/circle1.png"
                          width={266}
                          height={266}
                          alt="Item 1"
                        />
                      </figure>
                    </motion.div>

                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="flex leading-[0] max-w-full w-full mb-[3.1875em] !items-stretch"
                    >
                      <figure className="inline-block max-w-full w-full min-w-[20px] relative box-border overflow-hidden m-0">
                        <Image
                          className="w-full h-auto max-h-full pointer-events-none align-middle"
                          src="/images/misc/circle2.png"
                          width={266}
                          height={266}
                          alt="Item 2"
                        />
                      </figure>
                    </motion.div>

                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="flex leading-[0] max-w-full w-full mb-[4.9em] !items-stretch"
                    >
                      <figure className="inline-block max-w-full w-full min-w-[20px] relative box-border overflow-hidden m-0">
                        <Image
                          className="w-full h-auto max-h-full pointer-events-none align-middle"
                          src="/images/misc/circle3.png"
                          width={266}
                          height={266}
                          alt="Item 3"
                        />
                      </figure>
                    </motion.div>

                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="flex leading-[0] max-w-full w-full mb-[3.1875em] !items-stretch"
                    >
                      <figure className="inline-block max-w-full w-full min-w-[20px] relative box-border overflow-hidden m-0">
                        <Image
                          className="w-full h-auto max-h-full pointer-events-none align-middle"
                          src="/images/misc/circle4.png"
                          width={266}
                          height={266}
                          alt="Item 4"
                        />
                      </figure>
                    </motion.div>
                  </div>
                </div>

                <div className="flex relative flex-col grow shrink max-h-full box-border bg-grey1 dark:bg-grey9 text-start justify-start border-solid border-black border-0 rounded-bl-[inherit] rounded-br-[inherit] !basis-[calc(83.3333%-4px)] !max-w-[calc(83.3333%-4px)] md:grow-0 md:shrink-0 md:basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:!max-w-[calc(100%+0px)]">
                  <div
                    className="flex flex-auto rounded-[inherit] pt-[71px] pl-[0px] pr-[50px] md:pt-[60px] md:pl-[50px] md:pr-[50px] sm:pt-[60px] sm:pl-[40px] sm:pr-[40px]"
                    style={{
                      alignItems: 'flex-start',
                      flexDirection: 'inherit',
                      justifyContent: 'inherit',
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
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-[1.5em] p-0 visible !block"
                    >
                      <p className="break-words, whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light text-dark dark:text-light">
                        <span className="font-bold">
                          Our Reach, Our Commitment
                        </span>
                        <br />
                        With operations spanning Nigeria - from Lagos, Sagamu,
                        Abuja, and Port Harcourt - to the international
                        landscape of Togo, particularly in Lome, our presence
                        echoes our dedication to shaping a sustainable energy
                        future. Axxela Limited, along with our subsidiaries -
                        Gaslink Nigeria Limited, Transit Gas Nigeria Limited,
                        Central Horizon Gas Company, and Gas Network Service
                        Limited - stands as a beacon of innovation and progress.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark border-solid border-black border-0 mb-[1.5em] p-0 visible !block"
                    >
                      <p className="break-words, whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light text-dark dark:text-light">
                        <span className="font-bold">
                          Strengthened by Collaboration, Driven by Purpose
                        </span>
                        <br />
                        Through audited consolidated financial statements, we
                        uphold transparency and accountability, showcasing the
                        strength of our partnerships and the depth of our
                        commitment. As a joint venture, we harness the
                        collective expertise of Helios Investment Partners LLP
                        and Sojitz Corporation, reinforcing our position as a
                        leader in the energy sector.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark border-solid border-black border-0 mb-[1.5em] p-0 visible !block"
                    >
                      <p className="break-words, whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light text-dark dark:text-light">
                        <span className="font-bold">
                          Pioneering Sustainable Solutions
                        </span>
                        <br />
                        At Axxela Limited, we are pioneers in natural gas,
                        electric power, and energy infrastructure development,
                        illuminating pathways towards a greener future. Our
                        supply chain, meticulously crafted to deliver efficiency
                        and reliability, ensures seamless transmission of gas
                        from processing stations to distribution companies like
                        ours.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{
                        animationFillMode: 'backwards',
                        flex: 'unset',
                        flexDirection: 'inherit',
                      }}
                      className="relative w-full rounded-none text-dark border-solid border-black border-0 mb-[1.5em] p-0 visible !block"
                    >
                      <p className="break-words, whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-light text-dark dark:text-light">
                        <span className="font-bold">
                          Empowering Communities, Enriching Lives
                        </span>
                        <br />
                        Gas suppliers deliver gas through transmission lines to
                        processing stations, where it undergoes purification to
                        remove any impurities, such as liquids and condensates.
                        Once processed, the natural gas is supplied to local
                        distribution companies like Axxela, via pipelines. From
                        there, we distribute the processed natural gas to our
                        customers downstream using pipelines, CNG skids, and
                        other distribution methods. Additionally, Axxela plays a
                        crucial role in supplying gas to Togo through the West
                        Africa Gas Pipeline &#40;WAGP&#41;.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[349px] max-h-none px-[50px] mb-11 border-solid border-black border-0 md:px-[30px] sm:px-[15px]">
            <div className="flex flex-auto w-full rounded-[inherit] max-w-[1024px]">
              <div className="flex flex-wrap my-0 mx-auto w-full justify-between rounded-[inherit]">
                <div className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 rounded-[inherit] !basis-[calc(100%+0px)] !max-w-[calc(100%+0px)] md:grow-0 md:shrink-0 sm:grow-0 sm:shrink-0">
                  <div className="flex flex-auto items-start pt-[72px] pl-0 pr-[32px] md:pt-[53px] md:pl-[24px] md:pr-[24px] sm:pt-[24px] sm:pl-[24px] sm:pr-[24px]">
                    <motion.div
                      variants={anitext}
                      initial="hidden"
                      animate="visible"
                      style={{ animationFillMode: 'backwards', flex: 'unset' }}
                      className="relative w-full rounded-none text-dark dark:text-light border-solid border-black border-0 mb-0 p-0 visible !block"
                    >
                      <h4 className="break-words whitespace-pre-wrap p-0 mb-[0.55em] cursor-text relative text-base font-medium text-dark dark:text-light md:mb-[1.61111em]">
                        At Axxela Group, our commitment to sustainability is
                        deeply ingrained in our strategic imperatives, guided by
                        globally recognised standards. Through direct engagement
                        with stakeholders and strategic partnerships, we
                        navigate the complex intersections of economic,
                        environmental, and social impacts arising from our
                        operations.
                        <br />
                        <br />
                        In the past year, notable achievements include 7.7
                        million LTI-free man-hours, elevation to Silver in the
                        EcoVadis Sustainability Ratings assessment, and
                        enrollment with the UN Global Compact &#40;UNGC&#41;,
                        underscoring our dedication to excellence and
                        sustainability. Looking ahead to 2024, we aim to expand
                        our impact further by awarding scholarships to deserving
                        students, enhancing our{' '}
                        <Tooltip
                          placement="top"
                          className="border border-blue-gray-50 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/10 text-partnership font-medium"
                          content="Supervisory Control and Data Acquisition (SCADA) systems are used for controlling, monitoring, and analysing industrial devices and processes."
                        >
                          <span className="bg-vision">SCADA System</span>
                        </Tooltip>
                        , and improving our Ecovadis Sustainability Rating from
                        Silver to Gold. Despite challenges such as gas supply
                        shortages and FX market fluctuations, we remain focused
                        on our mid-term goals, including expanding our natural
                        gas distribution network and exploring opportunities for
                        inorganic growth.
                      </h4>

                      <Link href="#" target="_blank">
                        <Btn text="More About Axxela" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer prevLink="/ceoStatement" nextLink="/highPoints" />
        </Layout>
      </main>
    </>
  );
};

export default weAreAxxela;
