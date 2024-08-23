import Image from 'next/image';
import search from '/public/edit.svg?url';

export interface ThemeProps {}

export default function Theme({}: ThemeProps) {
  return (
    <section className='p-10'>
      <div className='rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800'>
        <div>
          <span className='inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg'>
            <Image className='size-6 text-white' src={search} alt='edit icon' />
          </span>
        </div>
        <h3 className='mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white'>
          Writes Upside-Down
        </h3>
        <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </section>
  );
}
