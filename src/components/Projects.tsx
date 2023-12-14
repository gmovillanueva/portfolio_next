import React from 'react';
import { motion } from 'framer-motion';
import userImage from '@root/assets/tempPicture.webp';
import { Project } from '@root/typings';
import { urlForImage } from '@root/sanity/lib/image';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const dummyProjects = [1, 2, 3, 4, 5];
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
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[10px] text-glacier-gray text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, index) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                x: -300,
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
              key={project._id}
              src={urlForImage(project?.image).url()}
              alt=''
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-malachite/10'>
                  Project {index + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project.technologies.map((technology) => (
                  <img
                    className='h-10 w-10'
                    key={technology._id}
                    src={urlForImage(technology?.image).url()}
                    alt=''
                  />
                ))}
              </div>

              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-glacier-gray/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}
