'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import Image from 'next/image';

import left from '/public/left.svg?url';
import right from '/public/right.svg?url';

const pages = ['/design', '/motion', '/engine'];

export default function NavBar() {
  const router = useRouter();
  const currentPath = usePathname();
  const currentIndex = pages.indexOf(currentPath);

  const goToNextPage = () => {
    const nextPage = pages[currentIndex + 1];
    router.push(nextPage);
  };

  const goToPrevPage = () => {
    const prevPage = pages[currentIndex - 1];
    router.push(prevPage);
  };

  return (
    <section className='flex items-center justify-between'>
      <button onClick={goToPrevPage}>
        <Image src={left} alt='left-arrow' />
      </button>
      <span className='text-4xl text-white'>--------------------</span>
      <button onClick={goToNextPage}>
        <Image src={right} alt='right-arrow' />
      </button>
    </section>
  );
}
