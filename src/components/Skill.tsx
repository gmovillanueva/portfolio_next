import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlForImage } from '@root/sanity/lib/image';
import { Skill } from '@root/typings';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
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
        className='relative rounded-full h-24 w-24 mx-auto object-cover md:w-28 md:h-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src={urlForImage(skill?.image).url()}
        alt=''
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-glacier-gray h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black-russian opacity-100'>
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
}
