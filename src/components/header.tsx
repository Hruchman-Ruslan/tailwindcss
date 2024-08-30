import HeaderBar from './header-bar';
import Logo from './logo';
import Navigation from './navigation';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className='flex items-center justify-between py-10'>
      <Logo />
      <Navigation />
      <HeaderBar />
    </header>
  );
}
