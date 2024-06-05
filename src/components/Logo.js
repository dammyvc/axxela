import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(11,51,86,1)',
            'rgba(108,179,199,1)',
            'rgba(199,213,34,1)',
            'rgba(245,208,0,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <Image src="/signature_white.svg" width={30} height={30} alt="Logo" />
      </MotionLink>
    </div>
  );
};

export default Logo;
