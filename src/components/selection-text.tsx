export interface SelectTextProps {}

export default function SelectText({}: SelectTextProps) {
  return (
    <section className='p-10'>
      <div className='max-w-80 selection:bg-fuchsia-300 selection:text-fuchsia-900'>
        <p>
          So I started to walk into the water. I won&apos;t lie to you boys, I
          was terrified. But I pressed on, and as I made my way past the
          breakers a strange calm came over me. I don&apos;t know if it was
          divine intervention or the kinship of all living things but I tell you
          Jerry at that moment, I <em>was</em> a marine biologist.
        </p>
      </div>
    </section>
  );
}
