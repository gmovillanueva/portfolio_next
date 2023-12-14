import React from 'react';
import { motion } from 'framer-motion';
import { urlForImage } from '@root/sanity/lib/image';

import { PageInfo } from '@root/typings';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[10px] text-glacier-gray text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={urlForImage(pageInfo?.heroImage).url()}
        className='mt-10 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:h-[32rem] md:w-auto md:rounded-3xl'
      />

      <div className='space-y-10 px-8 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Hello, I am Guillermo Villanueva:
        </h4>
        <p className='text-lg'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
``;
