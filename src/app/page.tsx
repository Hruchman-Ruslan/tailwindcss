import Image from 'next/image';

import message from '/public/message.svg?url';

export default function Home() {
  return (
    <div className='mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg'>
      <div className='shrink-0'>
        <Image
          src={message}
          className='size-12'
          alt='ChitChat Logo'
        />
      </div>
      <div>
        <div className='text-xl font-medium text-black'>
          ChitChat
        </div>
        <p className='text-slate-500'>
          You have a new message!
        </p>
      </div>
    </div>
  );
}
