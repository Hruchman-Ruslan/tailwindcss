import Image from 'next/image';

import search from '/public/search.svg?url';

export interface PlaceholderProps {}

export default function Placeholder({}: PlaceholderProps) {
  return (
    <section className='p-10'>
      <label className='relative block'>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <Image className='size-5 fill-slate-300' src={search} alt='Search' />
        </span>
        <input
          className='block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
          placeholder='Search for anything...'
          type='text'
          name='search'
        />
      </label>
    </section>
  );
}
