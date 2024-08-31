'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import ArrowEnable from '/public/arrowEnable.svg';
import ArrowDisable from '/public/arrowDisable.svg';

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

  const progressWidth = `${((currentIndex + 1) / pages.length) * 100}%`;

  return (
    <section className='flex items-center justify-between gap-10'>
      <button onClick={goToPrevPage} disabled={currentIndex === 0}>
        {currentIndex === 0 ? (
          <ArrowDisable />
        ) : (
          <ArrowEnable className={'rotate-180'} />
        )}
      </button>

      <div className='relative h-2 flex-1 rounded-full bg-gray-700'>
        <span
          className='block h-full rounded-full bg-white dark:bg-black'
          style={{ width: progressWidth }}
        />
        {pages.length > 1 && (
          <>
            <span className='absolute inset-y-0 left-1/3 border-l-8 border-gray-700 dark:border-x-white' />
            <span className='absolute inset-y-0 left-2/3 border-l-8 border-gray-700 dark:border-x-white' />
          </>
        )}
      </div>

      <button
        onClick={goToNextPage}
        disabled={currentIndex === pages.length - 1}
      >
        {currentIndex === pages.length - 1 ? (
          <ArrowDisable className={'rotate-180'} />
        ) : (
          <ArrowEnable />
        )}
      </button>
    </section>
  );
}
