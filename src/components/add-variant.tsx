export interface AddVariantProps {}

export default function AddVariant({}: AddVariantProps) {
  return (
    <section className='p-10'>
      <form className='inverted-colors:outline flex'>
        <input className='optional:border-gray-300' />
        <button className='bg-blue-500 hocus:bg-blue-600 w-10'>...</button>
      </form>
    </section>
  );
}
