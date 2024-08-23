export interface BeforeAndAfterProps {}

export default function BeforeAndAfter({}: BeforeAndAfterProps) {
  return (
    <section className='p-10'>
      <label className='block'>
        <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
          Email
        </span>
        <input
          type='email'
          name='email'
          className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm'
          placeholder='you@example.com'
        />
      </label>
    </section>
  );
}
