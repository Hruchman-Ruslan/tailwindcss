export interface ButtonHoverProps {}

export default function ButtonHover({}: ButtonHoverProps) {
  return (
    <section className='p-10'>
      <button
        type='button'
        className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'
      >
        Hover me
      </button>
    </section>
  );
}
