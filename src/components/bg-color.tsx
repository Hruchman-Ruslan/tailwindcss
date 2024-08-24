export interface BgColorProps {}

export default function BgColor({}: BgColorProps) {
  return (
    <section className='p-10'>
      <div className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
      <div className='h-14 bg-gradient-to-r from-sky-500 to-indigo-500'></div>
      <div className='h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500'></div>
      <div className='h-14 bg-gradient-to-r from-purple-500 to-pink-500'></div>
      <div className='h-14 bg-gradient-to-r from-cyan-500 to-blue-500'></div>
    </section>
  );
}
