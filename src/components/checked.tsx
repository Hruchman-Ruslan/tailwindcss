'use client';

export interface CheckedProps {}

export default function Checked({}: CheckedProps) {
  return (
    <section className='p-10'>
      <fieldset>
        <legend>Published status</legend>

        <input
          id='draft'
          className='peer/draft hidden'
          type='radio'
          name='status'
        />
        <label
          htmlFor='draft'
          className='cursor-pointer peer-checked/draft:text-sky-500'
        >
          Draft
        </label>

        <input
          id='published'
          className='peer/published hidden'
          type='radio'
          name='status'
        />
        <label
          htmlFor='published'
          className='cursor-pointer peer-checked/published:text-sky-500'
        >
          Published
        </label>

        <div className='hidden peer-checked/draft:block'>
          Drafts are only visible to administrators.
        </div>
        <div className='hidden peer-checked/published:block'>
          Your post will be publicly visible on your site.
        </div>
      </fieldset>
    </section>
  );
}
