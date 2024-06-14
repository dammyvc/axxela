import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import TransitionEffect from '@/components/TransitionEffect';
import RightImagePlacement from '@/components/RightImagePlacement';

const firstParagraph = `Our company prioritises the economic prosperity of the communities where we operate, providing employment opportunities during construction and development phases. We actively engage with stakeholders through forums and town hall meetings, both before and after construction, fostering positive community relations. In cases where construction causes temporary inconveniences or economic losses, we conduct independent assessments and offer compensation as needed. Corporate Social Responsibility (CSR) activities are a key aspect of our community engagement efforts, extending beyond economic impact to environmental sustainability.<br /> <br />To ensure minimal negative impact on host communities, all our projects undergo rigorous Environmental Impact Assessments (EIAs), including evaluations of social impact. These assessments are closely monitored by federal and state authorities and are publicly available records, as mandated by law. Prior to project implementation, stakeholder mapping exercises help identify relevant parties, enabling tailored engagement strategies to address their needs and concerns. Additionally, we have established grievance-handling procedures to transparently address any grievances or conflicts with stakeholders and host communities.`;

const communityInitiatives = () => {
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
