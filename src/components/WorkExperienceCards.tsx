import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@root/typings';
import { urlForImage } from '@root/sanity/lib/image';

type Props = {
  experience: Experience;
};

export default function WorkExperienceCards({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-bunker opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden h-[800px]'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className='w-32 h-32 rounded-full md:h-48 md:w-48 object-cover object-center'
        src={urlForImage(experience?.companyImage).url()}
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlForImage(technology.image).url()}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-glacier-gray'>
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg overflow-y-scroll h-80'>
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
