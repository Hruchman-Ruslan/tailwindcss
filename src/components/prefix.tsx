export interface PrefixProps {}

export default function Prefix({}: PrefixProps) {
  return (
    <section className='p-10'>
      <div className='tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500'>
        <h1>Prefix</h1>
      </div>
    </section>
  );
}
