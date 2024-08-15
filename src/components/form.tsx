export interface FormProps {}

export default function Form({}: FormProps) {
  return (
    <section className='p-10'>
      <form className='max-w-max'>
        <label className='block'>
          <span className='block text-sm font-medium text-slate-700'>
            Username
          </span>
          <input
            type='text'
            value='tbone'
            disabled
            className='mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none'
          />
        </label>
      </form>
    </section>
  );
}
