import Image from 'next/image';
import photo from '/public/photo.jpg';

export interface ButtonFormProps {}

export default function ButtonForm({}: ButtonFormProps) {
  return (
    <section className='p-10'>
      <form className='flex items-center space-x-6'>
        <div className='shrink-0'>
          <Image
            className='size-16 rounded-full object-cover'
            src={photo}
            alt='Current profile photo'
          />
        </div>
        <label className='block'>
          <span className='sr-only'>Choose profile photo</span>
          <input
            type='file'
            className='block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100'
          />
        </label>
      </form>
    </section>
  );
}
