'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export interface NavigationProps {}

const navItems = ['design', 'motion', 'engine'];

export default function Navigation({}: NavigationProps) {
  const pathname = usePathname();

  const activeItem = (item: string) =>
    `${pathname === `/${item}` ? 'text-red-500 ' : 'text-white'} font-roboto text-lg uppercase`;

  return (
    <nav>
      <ul className='flex gap-7'>
        {navItems.map(item => (
          <li key={item}>
            <Link className={activeItem(item)} href={`/${item}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
