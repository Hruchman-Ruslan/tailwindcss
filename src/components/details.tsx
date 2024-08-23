export interface DetailsProps {}

export default function Details({}: DetailsProps) {
  return (
    <section className='p-10'>
      <div className='mx-auto max-w-lg p-8'>
        <details
          className='rounded-lg p-6 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10'
          open
        >
          <summary className='select-none text-sm font-semibold leading-6 text-slate-900 dark:text-white'>
            Why do they call it Ovaltine?
          </summary>
          <div className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400'>
            <p>
              The mug is round. The jar is round. They should call it Roundtine.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
