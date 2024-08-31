import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/logo.svg?url';

export interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <div className='flex items-center gap-2'>
      <Link className='h-9 w-12' href='.'>
        <Image src={logo} alt='logo' className='hover-item' />
      </Link>
      <div>
        <h2 className='font-viga text-xl text-white dark:text-black'>FUTURA</h2>
        <p className='font-viga text-base text-neutral-600 dark:text-black'>
          Today - Tomorrow
        </p>
      </div>
    </div>
  );
}
