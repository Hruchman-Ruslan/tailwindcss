import Link from 'next/link';

export interface NavigationProps {}

const navItems = ['Home', 'Stories', 'Works', 'Pages', 'Contact', 'Shop'];

export default function Navigation({}: NavigationProps) {
  return (
    <nav>
      <ul className='flex gap-7'>
        {navItems.map(item => (
          <li key={item}>
            <Link className='font-roboto text-lg text-white' href={`/${item}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
