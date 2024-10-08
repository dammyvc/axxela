import Head from 'next/head';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import NavBar from '@/components/NavBar';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/signature_black.svg" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont w-full min-h-screen relative overflow-x-hidden bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(0,0,0,0.5)]`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
