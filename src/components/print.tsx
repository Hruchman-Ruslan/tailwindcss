export interface PrintProps {}

export default function Print({}: PrintProps) {
  return (
    <div>
      <article className='print:hidden'>
        <h1>My Secret Pizza Recipe</h1>
        <p>This recipe is a secret, and must not be shared with anyone.</p>
      </article>
      <div className='hidden print:block'>
        Are you seriously trying to print this? It&apos;s secret!
      </div>
    </div>
  );
}
