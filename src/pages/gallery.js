import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import ImageGallery from '@/components/ImageGallery';

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

const gallery = () => {
  const isLastPage = true;

  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | Gallery</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator
        prevLink="/economicContributions"
        nextLink={isLastPage ? null : '/next-page'}
        isLastPage={isLastPage}
      />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero text="Gallery" backgroundImage="/images/content/gallery.jpeg" />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[50px] max-h-none pl-[50px] pr-[50px] pt-10 pb-11 border-solid border-black border-0 md:pl-[30px] md:pr-[30px] sm:pl-[15px] sm:pr-[15px]">
            <div className="flex-auto flex w-full rounded-[inherit] max-w-[1024px]">
              <motion.div
                className="flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-[inherit]"
                variants={anitext}
                initial="hidden"
                animate="visible"
                style={{ animationFillMode: 'backwards', flex: 'unset' }}
              >
                <ImageGallery />
              </motion.div>
            </div>
          </section>

          <Footer
            prevLink="/economicContributions"
            nextLink={isLastPage ? null : '/next-page'}
          />
        </Layout>
      </main>
    </>
  );
};

export default gallery;
