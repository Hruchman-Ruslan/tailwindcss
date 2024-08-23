import Image from 'next/image';
import Link from 'next/link';

import photo from '/public/photo.jpg';

export interface MediaScreenProps {}

export default function MediaScreen({}: MediaScreenProps) {
  return (
    <section className='p-10'>
      <div className='mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:shrink-0'>
            <Image
              className='h-48 w-full object-cover md:h-full md:w-48'
              src={photo}
              alt='Men'
            />
          </div>
          <div className='p-8'>
            <div className='text-sm font-semibold uppercase tracking-wide text-indigo-500'>
              Company retreats
            </div>
            <Link
              href='#'
              className='mt-1 block text-lg font-medium leading-tight text-black hover:underline'
            >
              Incredible accommodation for your team
            </Link>
            <p className='mt-2 text-slate-500'>
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
