import Link from 'next/link';

export interface NavigationProps {}

const navItems = ['design', 'motion', 'engine'];

export default function Navigation({}: NavigationProps) {
  return (
    <nav>
      <ul className='flex gap-7'>
        {navItems.map(item => (
          <li key={item}>
            <Link
              className='font-roboto text-lg uppercase text-white'
              href={`/${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
