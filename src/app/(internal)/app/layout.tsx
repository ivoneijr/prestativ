'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import Sidebar from './_components/layout/Sidebar';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100">
              <div className="py-6 h-screen">{children}</div>
            </main>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
