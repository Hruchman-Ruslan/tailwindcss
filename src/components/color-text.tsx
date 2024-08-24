export interface ColorTextProps {}

export default function ColorText({}: ColorTextProps) {
  return (
    <section className='p-10'>
      <span className='bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white'>
        Hello
        <br />
        World
      </span>
      <span className='bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-clone px-2 text-white'>
        Hello
        <br />
        World
      </span>
    </section>
  );
}
