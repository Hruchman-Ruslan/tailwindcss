'use client';

import { useState } from 'react';

export interface ScreenProps {}

export default function Screen({}: ScreenProps) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className='flex min-h-screen'>
      {isSidebarVisible && (
        <aside className='hidden w-64 bg-gray-800 p-4 text-white sm:block'>
          <h2 className='text-xl font-semibold'>Sidebar</h2>
          <p className='mt-4'>This is the sidebar content.</p>
        </aside>
      )}

      <div className={`flex-1 p-6 ${isSidebarVisible ? 'md:w-full' : ''}`}>
        <button
          className='mb-4 rounded bg-blue-500 px-4 py-2 text-white'
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        >
          Toggle Sidebar
        </button>
        <h1 className='text-2xl font-bold'>Main Content</h1>
        <p className='mt-4'>
          Resize the browser window to see how the layout adapts. The styles for
          the main content area will change based on the visibility of the
          sidebar.
        </p>
      </div>
    </div>
  );
}
