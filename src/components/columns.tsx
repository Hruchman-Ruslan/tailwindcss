import Image from 'next/image';

import photo from '/public/photo.jpg';

const photos = [
  { id: '1', photo: photo },
  { id: '2', photo: photo },
  { id: '3', photo: photo },
  { id: '4', photo: photo },
  { id: '5', photo: photo },
];

export interface ColumnsProps {}

export default function Columns({}: ColumnsProps) {
  return (
    <section className='p-10'>
      <ul className='w-60 columns-2 gap-8 hover:columns-3 md:columns-3'>
        {photos.map(item => (
          <li key={item.id}>
            <Image className='w-full' src={item.photo} alt='men' width={40} />
          </li>
        ))}
      </ul>
    </section>
  );
}
