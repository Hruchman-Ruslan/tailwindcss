import Logo from './logo';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <section className='py-14'>
      <Logo />
    </section>
  );
}
