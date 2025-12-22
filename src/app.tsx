import type React from 'react';

import { tw } from '@/styles/twind';

import '@/styles/index.css';

export const App: React.FC = () => {
  return (
    <div className={tw`flex flex-col items-center justify-center min-h-screen`}>
      <h1 className={tw`text-6xl mb-8`}>React application</h1>
      <p>
        Change your system's color scheme from light to dark, refresh this page
        and see the page's favicon changing accordingly.
      </p>
    </div>
  );
};
