import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundPolygons from '@/components/BackgroundPolygons';
import { PageInfo } from '@root/typings';
import { urlForImage } from '@root/sanity/lib/image';

type Props = {
  pageInfo: PageInfo;
};

{
  /* Implement some kind of animated text. */
}
export default function Hero({ pageInfo }: Props) {
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundPolygons />
      <div className='relative h-36 w-36 mx-auto object-cover'>
        <Image
          src={urlForImage(pageInfo?.heroImage).url()}
          alt=''
          fill
          className='rounded-full'
        />
      </div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-glacier-grey pb-2 tracking-[5px]'>
          ${pageInfo?.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-light-cyan'>
          Hello! The name is {pageInfo?.name}.
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
