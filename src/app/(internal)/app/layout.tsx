'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import Header from './Header';
interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <div className={'  h-screen '}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
