import React from 'react';
import { motion } from 'framer-motion';
import WorkExperienceCards from '@/components/WorkExperienceCards';
import { Experience } from '@root/typings';

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
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
      className='flex flex-col relative h-screen text-left justify-evenly mx-auto items-center overflow-hidden md:flex-row max-w-full px-10'
    >
      <h3 className='absolute top-24 uppercase tracking-[10px] text-glacier-gray text-2xl'>
        Experience
      </h3>

      {/* Experience Cards */}
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap snap-mandatory'>
        {experiences?.map((experience) => (
          <WorkExperienceCards key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
