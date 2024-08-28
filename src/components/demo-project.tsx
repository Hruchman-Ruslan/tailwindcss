import Link from 'next/link';

export interface DemoProjectProps {}

export default function DemoProject({}: DemoProjectProps) {
  return (
    <section className='flex items-center justify-center'>
      <Link href='/design'>
        <h1 className='font-viga text-9xl text-white'>Demo Project</h1>
      </Link>
    </section>
  );
}
