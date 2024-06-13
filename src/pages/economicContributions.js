import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import TransitionEffect from '@/components/TransitionEffect';
import RightImagePlacement from '@/components/RightImagePlacement';
import LeftImagePlacement from '@/components/LeftImagePlacement';
import Survey from '@/components/Survey';
import TaxBar from '@/components/TaxBar';
import EconomicImpactBar from '@/components/EconomicImpactBar';

const firstParagraph = `Despite challenging gas supply conditions, Axxela achieved a minor decrease of less than 1&#37; in gas sales, from **840 MMSCM** in 2022 to **833 MMSCM** in 2023, thanks to strategic customer service and proactive business management. We commissioned the **GL5 Phase 1 backbone project**, extending our gas pipeline network in the Greater Lagos Industrial Area to approximately 178 km, creating local employment opportunities. Adherence to International Finance Corporation&#39;s (IFC) Performance Standards led to an impressive **7.7 million LTI man-hours** without incidents. Axxela supported economic inclusion by providing financial donations and scholarships, benefiting **100 pupils** through &#34;Back-to-School&#34; initiatives in 2023. <br /> <br />Acknowledging climate change risks, we have implemented robust risk mitigation strategies, including comprehensive insurance, emergency response planning, and superior health and safety protocols. We also emphasise sustainability by setting benchmarks for environmental, social, and governance practices to reduce our climate impact. Extreme weather conditions pose both risks and opportunities for Axxela, with elevated power demands potentially driving revenue growth if managed effectively. Our commitment to sustainable development and strategic planning aims to mitigate climate risks and ensure resilient operations.`;

const secondParagraph = `Axxela faces a wide array of sustainability-related risks and opportunities that impact its overall prospects. These risks include reputational damage from environmentally harmful projects, social concerns such as human rights violations, and financial risks stemming from bad investments or operational losses. Compliance risks due to evolving regulations, resource over-consumption risks, and competition and product substitution risks are also significant. Conversely, opportunities arise from transitioning to more efficient processes, diversifying into renewables for new revenue streams, and accessing green funds.<br /> <br /> Axxela also benefits from participating in resource-efficient programs, enhancing sustainability monitoring activities, and improving corporate social responsibility initiatives. These risks and opportunities vary in their time horizons, with long-term concerns focusing on reputational and resource factors, medium-term risks involving financial and legal aspects, and short-term risks addressing immediate challenges like media coverage and compliance issues. Axxela categorises these time horizons for effective risk management, aiding in assessing, prioritising, and mitigating risks across varying temporal scales within its operations.`;

const thirdParagraph = `Axxela's Enterprise Risk Management (ERM) Framework is fundamental for evaluating sustainability-related risks, encompassing identification, assessment, and mitigation strategies. Supplemented by policies on stakeholder management, environmental documentation, and corporate social responsibility, the framework guides risk management and monitoring. The evaluation process integrates diverse inputs, including historical records, operational plans, and industry insights, to categorise risks, assess impacts, and develop mitigation strategies. Scenario analysis is used to understand sustainability risks, with inputs from internal stakeholders and evaluations across socio-economic, regulatory, and environmental domains.<br /> <br /> A holistic approach is adopted, considering both qualitative and quantitative factors, such as financial implications and ESG metrics. Rigorous methodologies, including stakeholder analysis and environmental and social impact assessments, ensure robust risk management with clear roles and responsibilities. Sustainability risks are prioritised due to their interconnectedness with broader business risks, impacting operational continuity and reputation. Proactive management of these risks within the ERM framework provides Axxela with a competitive advantage.`;

const fourthParagraph = `We have integrated tax compliance into our corporate framework, ensuring adherence to all relevant tax laws and regulations. Our strategy focuses on minimising tax exposure legally while meeting all tax obligations on time. The Financial Controller, reporting to the CFO, is responsible for tax management, emphasising our commitment to regulatory compliance. Recognising the critical role of tax compliance in the oil and gas industry, we engage qualified tax experts and consultants to assess risks, maintaining zero tolerance for non-compliance.<br /> <br />We educate our employees on the importance of tax compliance through regular updates in management meetings, fostering a culture of commitment to compliance. Our Risk and Internal Control team conducts regular checks to identify any tax infractions. We value our relationships with tax authorities, viewing them as partners, and maintain strong, professional interactions with prompt responses to their correspondences.<br /> <br />Our open-door policy ensures transparency with financial records accessible to regulators for verification. We actively participate in forums and discussions on tax issues, contributing our perspectives to regulatory matters.`;

const fifthParagraph = `The objective of managing supply chain materiality is to ensure compliance with our code of conduct and environmental and social mandates. This entails selecting materials that minimise environmental impact and ensuring suppliers adhere to ethical labor practices and human rights standards. Contracts and pricing agreements are negotiated for optimal value, with material inspection occurring before and upon delivery. Service Level Agreements (SLAs) with aligned Key Performance Indicators (KPIs) support contract execution. We obtain mill test or Factory Acceptance Test (FAT) certificates and engage offshore inspection agents for foreign materials. Our goal is to maintain rejection rates below 5% through consistent pre-engagement checks. Early stakeholder engagement facilitates appropriate product specifications for certification. The company spends 93% of its procurement budget to local suppliers in Nigeria and screens new suppliers meticulously based on environmental and social criteria, resulting in zero negative social impacts in 2023.`;

const economicContributions = () => {
  return (
    <>
      <Head>
        <title>
          Axxela 2023 Sustainability Report | Economic Contributions
        </title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="/communityInitiatives" nextLink="/gallery" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="Sustainable Economic Contributions"
            backgroundImage="/images/content/economic_contributions.jpeg"
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
                        The financial implications of unmanaged climate risks
                        are significant, potentially leading to a diminishment
                        of shareholder value, a decline in profits, rising
                        operational costs, and regulatory fines.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            text={firstParagraph}
            backgroundImage="/images/misc/sustainableeconomy.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <section className="flex w-full justify-center relative rounded-[inherit] box-border min-h-[136px] max-h-none border-solid border-black border-0 mb-[24px]">
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
                        In 2023, we carried out a customer survey, with 65% of
                        our customers participating. A summary of our findings
                        indicated high satisfaction in areas such as safety
                        concerns, technical concerns, customer service, and the
                        invoicing process.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Survey />

          <LeftImagePlacement
            text={secondParagraph}
            backgroundImage="/images/misc/risks.jpg"
            backgroundColor="bg-light dark:bg-dark"
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
                        Our Economic Impact
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px]">
                      <EconomicImpactBar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            text={thirdParagraph}
            backgroundImage="/images/misc/riskmanagement.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
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
                        Our Tax Figures
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px]">
                      <TaxBar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LeftImagePlacement
            text={fourthParagraph}
            backgroundImage="/images/misc/tax.jpg"
            backgroundColor="bg-light dark:bg-dark"
            textColor="text-partnership dark:text-light"
          />

          <Footer prevLink="/communityInitiatives" nextLink="/gallery" />
        </Layout>
      </main>
    </>
  );
};

export default economicContributions;
