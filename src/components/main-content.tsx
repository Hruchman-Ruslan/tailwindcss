import Image from 'next/image';

import circle from '/public/circle.svg?url';

export interface MainContentProps {
  title: string;
  text: string;
}

export default function MainContent({ title, text }: MainContentProps) {
  return (
    <section className='max-w-lg py-40'>
      <p className='mb-4 font-roboto text-2xl font-bold text-white'>
        OUR VISION
      </p>
      <h1 className='mb-7 font-viga text-9xl text-white'>{title}</h1>
      <p className='mb-10 font-roboto text-xl text-neutral-300'>{text}</p>
      <div className='flex items-center gap-2'>
        <Image src={circle} alt='circle' />
        <p className='font-roboto text-2xl text-white underline'>Take A Look</p>
      </div>
    </section>
  );
}
