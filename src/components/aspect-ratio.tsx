export interface AspectRatioProps {}

export default function AspectRatio({}: AspectRatioProps) {
  return (
    <section className='p-10'>
      <div className='aspect-h-9 aspect-w-16 w-96'>
        <iframe
          src='https://www.youtube.com/embed/dQw4w9WgXcQ'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
