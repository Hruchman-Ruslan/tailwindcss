import Image from 'next/image';

import phone from '/public/phone.svg?url';
import photo from '/public/photo.jpg';
import Link from 'next/link';

const people = [
  {
    name: 'Ruslan',
    title: 'Full-Stack',
    imageUrl: photo,
  },
  {
    name: 'Ruslan#2',
    title: 'Frontend Developer',
    imageUrl: photo,
  },
  {
    name: 'Ruslan#3',
    title: 'Backend Developer',
    imageUrl: photo,
  },
];

export interface GroupNameProps {}

export default function GroupName({}: GroupNameProps) {
  return (
    <section className='p-10'>
      <ul role='list' className='max-w-xs rounded-lg'>
        {people.map((person, index) => (
          <li key={index} className='group/item hover:bg-slate-100'>
            <>
              <Image
                src={person.imageUrl}
                alt={`${person.name}'s photo`}
                className='size-20 rounded-full'
              />
              <div>
                <Link href='#'>{person.name}</Link>
                <p>{person.title}</p>
              </div>
            </>
            <div>
              <Link
                className='group/edit invisible hover:bg-slate-200 group-hover/item:visible'
                href='#'
              >
                <span className='group-hover/edit:text-gray-700'>Call</span>
                <Image
                  className='size-5 group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500'
                  src={phone}
                  alt='Phone'
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
