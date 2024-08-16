import Image from 'next/image';

import photo from '/public/photo.jpg';

export interface ProfileProps {}

export default function Profile({}: ProfileProps) {
  return (
    <section className='p-10'>
      <div className='mx-auto max-w-sm space-y-2 rounded-xl bg-white p-8 shadow-lg sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4'>
        <Image
          className='block size-20 rounded-full sm:mx-0 sm:shrink-0'
          src={photo}
          alt="Woman's Face"
        />
        <div className='space-y-2 text-center sm:text-left'>
          <div className='space-y-0.5'>
            <p className='text-lg font-semibold text-black'>Ruslan Hruchman</p>
            <p className='font-medium text-slate-500'>Full-Stack</p>
          </div>
          <button className='rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
            Message
          </button>
        </div>
      </div>
    </section>
  );
}
