import React from 'react';

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-glacier-gray text-2xl'>
        Interested?
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>Let's Talk.</h4>
      </div>
    </div>
  );
}
