'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-hook-inview';

const Banner = () => {
  const [isOnce] = useState(true);

  return (
    <>
      <div className="flex translate-y-20 px-4 md:px-0  flex-col mt-8 md:mt-0 justify-between items-start md:items-center md:pb-8 text-[60px] leading-[60px] md:text-[110px] md:leading-[110px]">
        <div className="mt-12 relative">
          <motion.img
            src="/sparkle-filled.png"
            width={70}
            className="absolute hidden md:block left-[60%] translate-x-[-50%] top-[-45%]"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 2, rotate: 0 },
              visible: { opacity: 1, scale: 1, rotate: -30 },
            }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            viewport={{ once: isOnce }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            viewport={{ once: isOnce }}
            className="uppercase"
          >
            A Developer
          </motion.div>
        </div>
        <div className="flex relative items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            viewport={{ once: isOnce }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
            }}
            className="font-extrabold italic font-pp-migra text-secondary"
          >
            with Millions of
          </motion.div>
        </div>
        <div className="relative flex items-center">
          <motion.img
            src="/sparkle.svg"
            width={70}
            className="absolute left-[-10%] translate-x-[-50%] top-[-40%]"
            alt=""
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 2, rotate: 0 },
              visible: { opacity: 1, scale: 1, rotate: -30 },
            }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            viewport={{ once: isOnce }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 100,
              delay: 0.4,
            }}
            className="flex uppercase text-[50px] md:text-[110px]"
            viewport={{ once: isOnce }}
          >
            Creativity
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
