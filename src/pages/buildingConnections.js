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
import GenderDemograph from '@/components/GenderDemograph';
import AgeGroup from '@/components/AgeGroup';
import Region from '@/components/Region';
import HseStatistics from '@/components/HseStatistics';
import GasLeaks from '@/components/GasLeaks';
import GenderTraining from '@/components/GenderTraining';
import CatTraining from '@/components/CatTraining';
import BoardGender from '@/components/BoardGender';
import BoardAge from '@/components/BoardAge';
import EmployeeGender from '@/components/EmployeeGender';

const firstParagraph = `Our dedication lies in enhancing the welfare of our employees through a range of programs designed to bolster their physical, emotional, and financial wellness. These endeavours empower our workforce to proactively manage their well-being and focus on their priorities for a prosperous and secure future. <br /><br />Throughout the reporting period, our workforce comprised a total of 107 individuals, consisting of 89 permanent employees and 18 temporary staff.`;

const secondParagraph = ` At Axxela, we prioritise environmental protection and workforce well-being, adhering to NIS ISO 14001:2015 and ISO 45001:2018 standards. Our goals include maintaining a safe, pollution-free workplace, identifying and mitigating risks, and complying with statutory regulations. We systematically identify hazards through inspections, audits, and specialized tools, ensuring incidents are reported and addressed promptly. Proactive measures, such as medical facilities and regular health monitoring, promote employee well-being. Comprehensive OHS training covers auditing, first aid, fire prevention, and defensive driving.<br /><br />Our robust Health Maintenance Organisation (HMO) supports non-work-related medical needs, with regular health check-ups for employees. All employees and controlled workers are covered by our certified Integrated Management System, including ISO 45001-2018. We ensure our mechanical vendors adhere to our EOHS objectives and educate clients on safe product usage, maintaining a secure environment for all stakeholders. During the reporting period, there were no health and safety non-compliance incidents related to our products and services. `;

const thirdParagraph = `We prioritise the professional growth of our employees through a structured training program focusing on leadership, management, and jobspecific skills. Additionally, career development opportunities and counselling services are provided to support their well-being. Regular performance and career reviews were conducted for all employees during the reporting period, ensuring personalised guidance for individual advancement.`;

const fourthParagraph = `The organisation encourages personnel to join professional organisations who are at liberty to join industry-based associations for continued professional advancement, promoting structured social dialogues, and improving working conditions. The Company also encourages employees to take advantage of the annual subscription to health, fitness/ social clubs in recognition of the value of a healthy workforce while benefiting from social networking opportunities.`;

const fifthParagraph = `Our firm maintains a competitive remuneration and benefits structure based on individual, collective, and organisational achievements. Fixed pay is set within the 50th to 75th percentile, as validated by reputable survey institutions. Employees receive variable compensation through an Annual Performance Bonus, Bonus Vesting Scheme, and various awards, tied to annual performance benchmarks. To attract specialised talent, we offer a sign-on bonus with conditions to ensure fairness among new hires. We partner with Stanbic IBTC Asset Management to provide an employer contributory trust fund, ensuring departing employees receive payouts based on their contributions.<br /><br />Remuneration decisions are made by Executive Management and ratified by the Board's Governance and Remuneration Committee. In the last reporting cycle, the highest-paid individual's total annual compensation was 6.34 times the median employee compensation. The percentage increase in total annual compensation for the highest-paid individual was 0.75 times the median percentage increase for all employees, based on Annual Gross Salary and Cost of Living Adjustments.`;

const sixthParagraph = `The potential positive impacts of diversity and inclusion are significant, enhancing decision-making through diverse perspectives, fostering supportive and flexible work environments, and addressing unconscious biases. Additionally, it promotes gender and cultural diversity throughout the organisation. However, unintended negative consequences such as reinforcing stereotypes, increasing legal liabilities, and perpetuating discrimination are acknowledged. To mitigate these risks, the Axxela Diversity Policy includes vigilant monitoring, sanctions for non-compliance, and regular evaluation metrics.<br /><br />The company is committed to achieving diversity objectives through tailored job applications, targeted training, and development programs to prevent adverse impacts. Notably, there were no reported incidents of discrimination during the reporting year. Both the Company's Board and key stakeholders are dedicated to actively monitoring diversity performance.`;

const seventhParagraph = `Axxela Information Security Management Policy provides the framework for ensuring Information is protected according to its sensitivity, criticality, and value regardless of the media on which it is stored, the manual or automated system that processes it, or the method by which it is distributed. Relevant infrastructure, resources, and measures to protect information assets. Axxela employees are continually sensitized on information security, acceptable use of information assets, data confidentiality, records retention and other relevant data protection policies. There was no report on ethical issues and information security related incidents in 2023 across all Axxela whistle blowing reporting channels.`;

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

const buildingConnections = () => {
  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | Building Connections</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator
        prevLink="/environmentalStewardship"
        nextLink="/communityInitiatives"
      />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="Building Connections Within Our Network"
            backgroundImage="/images/content/2023CAF.JPG"
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
                        At Axxela, safeguarding the environment and ensuring the
                        well-being of our workforce are paramount considerations
                        across all levels of our operations.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            heading="Nurturing Employee Engagement"
            text={firstParagraph}
            backgroundImage="/images/misc/employee.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
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
                        Employee Gender Demographics
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] ">
                      <GenderDemograph />
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
                        Employee Age Group Demographics
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] ">
                      <AgeGroup />
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
                        Employee Region Demographics
                      </p>
                    </div>
                    <div className="max-w-full w-fullmb-[8px] ">
                      <Region />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LeftImagePlacement
            heading="Promoting Health and Safety"
            text={secondParagraph}
            backgroundImage="/images/misc/hse.jpg"
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
                        HSE statistics for our human resources
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] ">
                      <HseStatistics />
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
                        Gas leaks resulting from 3rd party damage and vandalism
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] ">
                      <GasLeaks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            heading="Talent Management and Development"
            text={thirdParagraph}
            backgroundImage="/images/misc/talent.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
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
                        Average hours of training by gender
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] ">
                      <GenderTraining />
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
                        Average hours of training per employee category
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] ">
                      <CatTraining />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LeftImagePlacement
            heading="Professional Development and Freedom of Association"
            text={fourthParagraph}
            backgroundImage="/images/misc/association.jpeg"
            backgroundColor="bg-light dark:bg-dark"
            textColor="text-partnership dark:text-light"
          />

          <RightImagePlacement
            heading="Compensation and Employee Benefits"
            text={fifthParagraph}
            backgroundImage="/images/misc/benefits.jpeg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <LeftImagePlacement
            heading="Cultivating Inclusivity"
            text={sixthParagraph}
            backgroundImage="/images/misc/inclusion.jpeg"
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
                      <p className="break-words whitespace-pre-wrap mt-[30px] mb-[20px] p-0 cursor-text relative text-start text-base font-semibold italic">
                        Board categorisation by gender &#40;&#37;&#41;
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px]">
                      <BoardGender />
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
                        Board categorisation by age group &#40;&#37;&#41;
                      </p>
                    </div>
                    <div className="max-w-full w-full mb-[8px] ">
                      <BoardAge />
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
                        Employee categorisation by gender &#40;&#37;&#41;
                      </p>
                    </div>
                    <div className="max-w-full w-fullmb-[8px] ">
                      <EmployeeGender />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RightImagePlacement
            heading="Information Security"
            text={seventhParagraph}
            backgroundImage="/images/misc/informationsecurity.jpg"
            backgroundColor="bg-[rgba(199,213,34,0.5)] dark:bg-[rgba(199,213,34,0.2)]"
            textColor="text-partnership dark:text-light"
          />

          <Footer
            prevLink="/environmentalStewardship"
            nextLink="/communityInitiatives"
          />
        </Layout>
      </main>
    </>
  );
};

export default buildingConnections;
