import React from 'react';
import AnimatedOnScroll from './AnimatedOnScroll';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Tooltip } from '@material-tailwind/react';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

// Custom processor to handle tooltips
const processTextWithTooltips = (text) => {
  return text.replace(
    /\[\[tooltip:(.+?)\|(.+?)\]\]/g,
    (match, tooltip, highlightText) => {
      return `<span class="tooltip-container" data-tooltip="${tooltip}"><span class="bg-vision">${highlightText}</span></span>`;
    }
  );
};

// Custom renderer to handle span with tooltip
const renderers = {
  p: ({ children }) => <p>{children}</p>,
  span: ({ node, children }) => {
    const tooltipText = node.properties['data-tooltip'];
    if (tooltipText) {
      return (
        <Tooltip
          placement="top"
          className="border border-blue-gray-50 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/10 text-partnership font-medium"
          content={tooltipText}
        >
          <span className="bg-vision">{children}</span>
        </Tooltip>
      );
    }
    return <span>{children}</span>;
  },
  br: () => <br />,
};

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

const RightImagePlacement = ({
  text,
  backgroundImage,
  backgroundColor,
  textColor,
  heading,
}) => {
  const processedText = processTextWithTooltips(text);

  return (
    <AnimatedOnScroll>
      <section className="flex w-full justify-center relative rounded-[inherit] box-border max-w-none min-h-[197px] max-h-none border-solid border-black border-0">
        <div className="flex flex-auto w-full rounded-[inherit]">
          <div className="flex flex-wrap mx-auto my-0 min-h-[50px] w-full justify-between rounded-inherit">
            <div
              className={`flex relative flex-col grow shrink max-h-full box-border text-start justify-start border-solid border-black border-0 !basis-[calc(54.1667%+0px)] !max-w-[calc(54.1667%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)] ${
                backgroundColor ? backgroundColor : ''
              }`}
            >
              <div className="flex flex-auto rounded-[inherit] pt-[80px] pl-[5.7554vw] pr-[5.7554vw] md:pt-[50px] md:pl-[6.51042vw] md:pr-[6.51042vw] sm:pt-[35px] sm:pl-[6.4vw] sm:pr-[6.4vw] mb-9">
                <motion.div
                  className={`relative w-full rounded-none border-solid border-black border-0 mb-0 p-0 visible !block ${
                    textColor ? textColor : ''
                  }`}
                  variants={anitext}
                  initial="hidden"
                  animate="visible"
                  style={{
                    animationFillMode: 'backwards',
                    flex: 'unset',
                  }}
                >
                  {heading && (
                    <h2
                      className={`mb-4 font-bold ${textColor ? textColor : ''}`}
                    >
                      {heading}
                    </h2>
                  )}
                  <ReactMarkdown
                    className={`break-words whitespace-pre-wrap p-0 cursor-text relative font-normal ${
                      textColor ? textColor : ''
                    }`}
                    components={renderers}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {processedText}
                  </ReactMarkdown>
                </motion.div>
              </div>
            </div>

            <div
              className="flex relative flex-col grow shrink max-h-full box-border text-start justify-start rounded-r-[inherit] bg-cover bg-no-repeat border-solid border-black border-0 !basis-[calc(45.8333%+0px)] !max-w-[calc(45.8333%+0px)] md:grow-0 md:shrink-0 md:!basis-[calc(100%+0px)] md:!max-w-[calc(100%+0px)] sm:grow-0 sm:shrink-0 sm:!basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]"
              style={{
                backgroundPosition: '50% 0%',
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              <div className="flex flex-auto rounded-[inherit] pt-[126px] pl-[0px] pr-0px md:pt-[210px] md:pl-[3.125vwpx] md:pr-[3.125vw] sm:pt-[65px] sm:pl-[6.4vw] sm:pr-[6.4vw]"></div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedOnScroll>
  );
};

export default RightImagePlacement;
