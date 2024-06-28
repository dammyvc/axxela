import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import RightImagePlacement from '@/components/RightImagePlacement';
import LeftImagePlacement from '@/components/LeftImagePlacement';
import NonRenewableChart from '@/components/NonRenewable';
import ConsumptionChart from '@/components/ConsumptionChart';
import RenewableChart from '@/components/Renewable';
import DirecetmssionsLine from '@/components/DirectEmissionsLine';
import IndirectemssionsLine from '@/components/IndirectEmissionsLine';
import EntityEmissions from '@/components/EntityEmissions';
import ReductionsBarChart from '@/components/ReductionsBarChart';
import WasteChart from '@/components/WasteChart';

const firstParagraph = `We prioritise environmental protection and minimise our impact on ecosystems throughout our operations. This includes comprehensive environmental impact studies and social assessments during project planning and pre-construction phases. Continuous environmental monitoring and regular audits are conducted by independent environmental consultants, adhering to statutory requirements and international best practices. Our facilities are not situated in protected areas, and our operations do not have additional adverse effects on biodiversity. We use existing transport infrastructure and our activities do not contribute to atmospheric pollutants or introduce new invasive species. Our commitment lies in ensuring minimal impact beyond necessary land conversion.`;

const secondParagraph = ` Our day-to-day administrative operations have no water-related impacts. Water is primarily used for office cleaning, drinking, handwashing, and other sanitary purposes. We source water either from underground water tables via boreholes or obtain it from vendors for drinking water.`;

const thirdParagraph = `At Axxela, we conduct thorough environmental and social impact assessments to ensure responsible and sustainable operations. This includes addressing actual negative impacts such as natural gas emissions and CO<sub>2</sub> emissions from various sources. Mitigation measures involve reducing energy inefficiencies, conducting baseline integrity surveys, and contributing to carbon sequestration efforts. Environmental, Social, and Governance (ESG) targets and objectives are set, with quarterly GHG data reviews and an emergency response team on standby for gas leak incidents. Stakeholder engagement initiatives focus on continuous improvement, including installing markers along Right of Way and collaborating with government agencies to monitor encroachment. These efforts showcase our dedication to minimising environmental impact and prioritising stakeholder welfare.`;

const fourthParagraph = `At Axxela, we continuously refine our approach to managing greenhouse gas (GHG) emissions to align with the latest global standards and ensure environmental sustainability. We recently adjusted our base year to 2021 following a comprehensive review of our GHG Emissions framework and calculation methodology, with a particular focus on enhancing our calculation of Natural Gas Emissions. This adjustment incorporates the addition of a new facility within our organisation and is in line with the latest global emissions standards. We utilised the International System of Units (SI) Conversion Factors for General Use manual and referenced Axxela's GHG Emissions Framework document to ensure accuracy. The Global Warming Potential (GWP) values used were sourced from the IPCC's fifth assessment (AR5) for GWP emissions amendment, reflecting the most recent amendment provided by the Intergovernmental Panel on Climate Change (IPCC).<br /><br />Throughout the year, we diligently monitor our emissions and deliver quarterly reports to our esteemed board of shareholders, who wholeheartedly support our emission reduction strategy. We actively implement procedures aimed at reducing emissions and strive to instil the importance of emission reduction in the minds and hearts of our employees, demonstrating our unwavering commitment to this critical cause.`;

const fifthParagraph = `At Axxela, methane from natural gas is a significant revenue source, driving our commitment to reducing methane emissions across operations. We aim to minimise emissions from pipeline leaks and operational activities. Our short-term strategies focus on energy efficiency, including upgrading equipment, optimising energy use, transitioning to cleaner fuels, and enhancing maintenance practices. Employee training on energy-saving and emission reduction is also a priority.<br /><br /> Long-term, we are investing in renewable energy projects to diversify our energy sources and reduce dependence on emission-intensive fuels. We support carbon credit mechanisms to internalise emission costs and incentivise reductions. Sustainable supply chain management is key, as we collaborate with suppliers to lower emissions throughout the supply chain by optimising logistics and promoting sustainable practices. Regulatory compliance and policy advocacy are also crucial, ensuring we support and adhere to policies that facilitate the transition to cleaner energy sources.`;

const sixthParagraph = `While our day-to-day administrative operations have minimal waste-related impacts, we recognise the potential for negative environmental effects related to pollution. To mitigate this, we have implemented several waste management measures, including a structured disposal process, waste recycling, and proper disposal through government-approved agencies.<br /><br /> Our Board stays informed about the waste disposal process, and the amount of waste disposed of is meticulously recorded in our quarterly ESG report. We ensure proper waste management by segregating waste, weighing it using certified scales, and maintaining daily records before disposal.`;

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

      <Paginator prevLink="/weAreAxxela" nextLink="/buildingConnections" />

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
            heading="Biodiversity Conservation Initiatives"
            text={firstParagraph}
            backgroundImage="/images/misc/biodiversity.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <LeftImagePlacement
            heading="Water Management"
            text={secondParagraph}
            backgroundImage="/images/misc/water.jpg"
            backgroundColor="bg-light dark:bg-dark"
            textColor="text-partnership dark:text-light"
          />

          <RightImagePlacement
            heading="Sustainable Practices for Reduced Carbon Emissions"
            text={thirdParagraph}
            backgroundImage="/images/misc/sustainablepractices.jpeg"
            backgroundColor="bg-[rgba(245,208,0,0.5)] dark:bg-[rgba(245,208,0,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-white dark:bg-slate-800 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      className="relative w-full rounded-none text-partnership dark:text-light border-solid border-black border-0 mb-0 p-0 visible md:p-5 !block"
                      style={{ flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold italic">
                        Energy consumption within the organisation from
                        renewable sources
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] sm:mb-[200px]">
                      <RenewableChart />

                      <p className="text-xs text-center italic dark:text-white">
                        The increase in energy consumption is attributed to our
                        implementation of full accounting for renewable energy
                        sources in 2023, considering that the recorded energy
                        usage for 2022 was not for the full year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-slate-100 dark:bg-slate-600 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold text-partnership dark:text-light italic">
                        Fuel consumption within the organisation from
                        non-renewable sources
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] sm:mb-[200px]">
                      <NonRenewableChart />
                      <p className="text-xs text-center italic dark:text-white">
                        There was 11% reduction in non-renewable energy
                        consumption across all operational areas within the
                        organisation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-white dark:bg-slate-800 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold text-partnership dark:text-light italic">
                        Electricity and Energy consumption within and outside
                        the organisation
                      </p>
                    </div>
                    <div className="max-w-full w-fullmb-[8px] sm:mb-[200px]">
                      <ConsumptionChart />
                      <p className="text-xs text-center italic dark:text-white">
                        *Downstream distribution of our products via CNG trucks
                        to customer locations. Energy consumption increased from
                        2022 due to increased customer pool.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LeftImagePlacement
            heading="Sustainable Practices for Reduced Carbon Emissions"
            text={fourthParagraph}
            backgroundImage="/images/misc/sustainablepractice.png"
            backgroundColor="bg-light dark:bg-dark"
            textColor="text-partnership dark:text-light"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-white dark:bg-slate-800 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      className="relative w-full rounded-none text-partnership dark:text-light border-solid border-black border-0 mb-0 p-0 visible md:p-5 !block"
                      style={{ flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold italic">
                        Direct &#40;Scope 1&#41; GHG emissions
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] sm:mb-[200px]">
                      <DirecetmssionsLine />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-slate-100 dark:bg-slate-600 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold text-partnership dark:text-light italic">
                        Energy indirect &#40;Scope 2&#41; GHG emissions
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px]">
                      <IndirectemssionsLine />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-white dark:bg-slate-800 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold text-partnership dark:text-light italic">
                        GHG emissions by entity
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] sm:mb-[200px]">
                      <EntityEmissions />
                      <p className="text-xs text-center italic dark:text-white">
                        The increase in staff strength and operational
                        activities contributed to the overall increment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            heading="Strategies for Methane Emission Reduction"
            text={fifthParagraph}
            backgroundImage="/images/misc/methane.jpg"
            backgroundColor="bg-[rgba(245,208,0,0.5)] dark:bg-[rgba(245,208,0,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-white dark:bg-slate-800 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      className="relative w-full rounded-none text-partnership dark:text-light border-solid border-black border-0 mb-0 p-0 visible md:p-5 !block"
                      style={{ flex: 'unset' }}
                    >
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold italic">
                        GHG emissions reductions from our customers switch to
                        natural gas
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] sm:mb-[200px]">
                      <ReductionsBarChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[46px] bg-slate-100 dark:bg-slate-600 max-h-none border-solid border-black border-0 pb-20 sm:pb-0">
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
                      <p className="break-words whitespace-pre-wrap mb-[20px] p-0 cursor-text relative text-start text-base font-semibold text-partnership dark:text-light italic">
                        Volume of generated wastes by type &#40;tons&#41;
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] sm:mb-[200px]">
                      <WasteChart />
                      <p className="text-xs text-center italic dark:text-white">
                        The increase in waste volume is attributed to
                        on-premises resumption, a larger staff size, and
                        additional projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LeftImagePlacement
            heading="Waste Management - Disposal, Recycling, and Environmental Impact Mitigation"
            text={sixthParagraph}
            backgroundImage="/images/misc/waste.jpg"
            backgroundColor="bg-light dark:bg-dark"
            textColor="text-partnership dark:text-light"
          />

          <Footer prevLink="/weAreAxxela" nextLink="/buildingConnections" />
        </Layout>
      </main>
    </>
  );
};

export default environmentalStewardship;
