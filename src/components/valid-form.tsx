'use client';

import { useState } from 'react';

export interface ValidFormProps {}

export default function ValidForm({}: ValidFormProps) {
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className='p-10'>
      <form>
        <label className='block'>
          <span className='block text-sm font-medium text-slate-700'>
            Email
          </span>
          <input
            type='email'
            className='peer'
            value={email}
            onChange={handleChange}
          />
          <p className='invisible mt-2 text-sm text-pink-600 peer-invalid:visible'>
            Please provide a valid email address.
          </p>
        </label>
      </form>
    </section>
  );
}
