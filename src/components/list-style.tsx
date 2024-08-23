export interface ListStyleProps {}

export default function ListStyle({}: ListStyleProps) {
  return (
    <section className='p-10'>
      <ul
        role='list'
        className='list-disc space-y-3 pl-5 text-slate-400 marker:text-sky-400'
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
    </section>
  );
}
