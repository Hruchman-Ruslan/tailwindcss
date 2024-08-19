import Link from 'next/link';

export interface NavHrefProps {}

export default function NavHref({}: NavHrefProps) {
  return (
    <section className='p-10'>
      <nav className='flex space-x-4 sm:justify-center'>
        {[
          ['Home', '/dashboard'],
          ['Team', '/team'],
          ['Projects', '/projects'],
          ['Reports', '/reports'],
        ].map(([title, url, index]) => (
          <Link
            key={index}
            href={url}
            className='rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900'
          >
            {title}
          </Link>
        ))}
      </nav>
    </section>
  );
}
