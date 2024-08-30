import Image, { StaticImageData } from 'next/image';

export interface BackgroundProps {
  src: StaticImageData;
  alt: string;
}

export default function Background({ src, alt }: BackgroundProps) {
  return (
    <Image
      className='absolute inset-0 -z-10 object-cover'
      alt={alt}
      src={src}
      placeholder='blur'
      quality={100}
      fill
      sizes='100vw'
    />
  );
}
