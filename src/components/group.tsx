import Image from 'next/image';
import Link from 'next/link';

import folder from '/public/folder.svg?url';

export interface GroupProps {}

export default function Group({}: GroupProps) {
  return (
    <section className='p-10'>
      <Link
        href='#'
        className='group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500'
      >
        <div className='flex items-center space-x-3'>
          <Image
            src={folder}
            className='size-6 stroke-sky-500 group-hover:stroke-white'
            alt='folder'
          />
          <h3 className='text-sm font-semibold text-slate-900 group-hover:text-white'>
            New project
          </h3>
        </div>
        <p className='text-sm text-slate-500 group-hover:text-white'>
          Create a new project from a variety of starting templates.
        </p>
      </Link>
    </section>
  );
}
