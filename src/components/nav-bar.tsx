import Image from 'next/image';

import left from '/public/left.svg?url';
import right from '/public/right.svg?url';

export interface NavBarProps {}

export default function NavBar({}: NavBarProps) {
  return (
    <section className='flex items-center justify-between'>
      <button>
        <Image src={left} alt='left-arrow' />
      </button>
      <span className='text-4xl text-white'>--------------------</span>
      <button>
        <Image src={right} alt='right-arrow' />
      </button>
    </section>
  );
}
