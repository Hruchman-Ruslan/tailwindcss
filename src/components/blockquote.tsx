export interface BlockquoteProps {}

export default function Blockquote({}: BlockquoteProps) {
  return (
    <section className='p-10'>
      <blockquote className='md:text-md 3xl:text-lg text-base'>
        Oh I gotta get on that internet, I am late on everything!
      </blockquote>
    </section>
  );
}
