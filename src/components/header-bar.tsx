import Image from 'next/image';

import sun from '/public/sun.svg?url';
import search from '/public/search.svg?url';

export interface HeaderBarProps {}

export default function HeaderBar({}: HeaderBarProps) {
  return (
    <div className='flex gap-8'>
      <Image src={sun} alt='sun' sizes='8' className='hover-item' />
      <Image src={search} alt='search' sizes='8' className='hover-item' />
    </div>
  );
}
