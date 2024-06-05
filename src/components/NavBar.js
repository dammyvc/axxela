import React, { useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo.js';
import {
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icons.js';
import { motion } from 'framer-motion';
import { Tooltip } from '@material-tailwind/react';
import useThemeSwitcher from './hooks/useThemeSwitcher.js';

const CustomLink = ({ href, title, className = '' }) => {
  return (
    <Link href={href} className={'${className}'}>
      {title}
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  useEffect(() => {
    const toggleButton = document.getElementById('toggleButton');
    const cardContainer = document.getElementById('cardContainer');
    const closeButton = document.getElementById('closeButton');

    const toggleMenu = () => {
      cardContainer.style.width =
        cardContainer.style.width === '350px' ? '0' : '350px';
    };

    const closeMenu = () => {
      cardContainer.style.width = '0';
    };

    toggleButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', closeMenu);

    // Cleanup event listeners on unmount
    return () => {
      toggleButton.removeEventListener('click', toggleMenu);
      closeButton.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between fixed bg-inherit z-[969] bg-white dark:bg-dark sm:px-8">
      <nav className="flex items-center justify-center flex-wrap dark:text-light">
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`mr-3 flex items-center justify-center rounded-full p-1
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        >
          {mode === 'dark' ? (
            <SunIcon className={'fill-dark dark:fill-light'} />
          ) : (
            <MoonIcon className={'fill-dark dark:fill-light'} />
          )}
        </button>

        <motion.a
          href="https://twitter.com/axxelagroup"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-5 mr-3 sm:hidden"
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/company/axxela"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-5 mr-3 sm:hidden"
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/axxelagroup/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-5 mr-3 sm:hidden"
        >
          <InstagramIcon />
        </motion.a>
      </nav>

      <nav>
        <Tooltip
          placement="left"
          className="border border-blue-gray-50 rounded-xl bg-white px-4 py-3 shadow-xl shadow-black/10 text-partnership font-medium"
          content="Toggle Menu"
        >
          <button id="toggleButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu dark:stroke-light"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </Tooltip>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <div
        id="cardContainer"
        className="fixed top-0 right-0 h-full w-0 overflow-hidden bg-background bg-opacity-50 backdrop-blur-lg shadow-lg transition-all duration-300 z-50 dark:bg-dark"
      >
        <button
          id="closeButton"
          className="text-red-500 absolute top-6 right-6 z-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="w-full h-full px-8 py-16 relative !text-partnership dark:!text-light">
          <div className="w-full h-auto flex flex-col gap-y-1 mt-3">
            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <CustomLink
                href="/"
                title="Home"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-open-text"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                <path d="M6 8h2" />
                <path d="M6 12h2" />
                <path d="M16 8h2" />
                <path d="M16 12h2" />
              </svg>
              <CustomLink
                href="/about"
                title="About this Report"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-scroll-text"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>
              <CustomLink
                href="/contents"
                title="Contents"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-podcast"
              >
                <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
                <path d="M8 14a5 5 0 1 1 8 0" />
                <circle cx="12" cy="11" r="1" />
                <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
              </svg>
              <CustomLink
                href="/ceoStatement"
                title="CEO Statement"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <CustomLink
                href="/weAreAxxela"
                title="We are Axxela"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-line-chart"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              <CustomLink
                href="/highPoints"
                title="High Points"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-leaf"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <CustomLink
                href="/environmentalStewardship"
                title="Environmental Stewardship"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-handshake"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
              <CustomLink
                href="/buildingConnections"
                title="Buidling Connections"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-graduation-cap"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              <CustomLink
                href="/communityInitiatives"
                title="Community Initiatives"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-hand-coins"
              >
                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 16 6 6" />
                <circle cx="16" cy="9" r="2.9" />
                <circle cx="6" cy="5" r="3" />
              </svg>
              <CustomLink
                href="/economicContributions"
                title="Economic Contributions"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto flex items-center gap-x-4 text-partnership hover:text-gray-100 hover:bg-partnership rounded-md px-4 py-3 ease-out duration-500 cursor-pointer dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-images"
              >
                <path d="M18 22H4a2 2 0 0 1-2-2V6" />
                <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
                <circle cx="12" cy="8" r="2" />
                <rect width="16" height="16" x="6" y="2" rx="2" />
              </svg>
              <CustomLink
                href="/gallery"
                title="Gallery"
                className="text-base font-medium"
              />
            </div>

            <div className="w-full h-auto absolute bottom-6 left-0 px-8 text-center border-t border-grey5 pt-6 text-partnership text-sm font-thin dark:text-light sm:hidden">
              <a
                href="https://www.axxelagroup.com"
                target="_blank"
                className="underline"
              >
                Axxela Group
              </a>{' '}
              &copy; 2024. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
