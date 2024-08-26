import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/logo.svg?url';

export interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <div className='flex items-center gap-2'>
      <Link className='h-9 w-12' href='.'>
        <Image src={logo} alt='logo' />
      </Link>
      <div>
        <h2 className='text-xl text-white'>FUTURA</h2>
        <p className='text-base text-neutral-600'>Today - Tomorrow</p>
      </div>
    </div>
  );
}
