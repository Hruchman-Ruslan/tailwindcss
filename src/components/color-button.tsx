import Image from 'next/image';

import twitter from '/public/twitter.svg?url';

export interface ColorButtonProps {}

export default function ColorButton({}: ColorButtonProps) {
  return (
    <section className='p-10'>
      <button className='text-white flex gap-5 rounded-lg bg-[#1da1f2] p-4 text-2xl'>
        <Image src={twitter} alt='twitter' />
        Share on Twitter
      </button>
    </section>
  );
}
