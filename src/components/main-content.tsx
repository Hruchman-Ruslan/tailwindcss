export interface MainContentProps {
  title: string;
  text: string;
}

export default function MainContent({ title, text }: MainContentProps) {
  return (
    <section className='max-w-lg pt-40'>
      <p className='mb-4 font-roboto text-2xl font-bold text-white'>
        OUR VISION
      </p>
      <h1 className='mb-7 font-viga text-9xl text-white'>{title}</h1>
      <p className='mb-10 font-roboto text-xl text-neutral-300'>{text}</p>
      <p className='font-roboto text-2xl text-white'>Take A Look</p>
    </section>
  );
}
