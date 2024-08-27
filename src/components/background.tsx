import Image from 'next/image';
// import design from '/public/design.jpg';
import motion from '/public/motion.jpg';
// import engine from '/public/engine.jpg';

export interface BackgroundProps {}

export default function Background({}: BackgroundProps) {
  return (
    <Image
      className='absolute inset-0 -z-10 object-cover'
      alt='design'
      src={motion}
      placeholder='blur'
      quality={100}
      fill
      sizes='100vw'
    />
  );
}
