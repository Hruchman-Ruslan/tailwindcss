import Link from 'next/link';

export interface DemoProjectProps {}

export default function DemoProject({}: DemoProjectProps) {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center p-4'>
      <h1 className='mb-4 font-viga text-9xl text-white dark:text-black'>
        Demo Project
      </h1>
      <p className='mb-8 text-lg text-white dark:text-black'>
        This project was created to study Tailwind CSS.
      </p>
      <Link
        href='/design'
        className='inline-block rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-600 dark:bg-transparent dark:text-black'
      >
        Go to the project
      </Link>
    </section>
  );
}
