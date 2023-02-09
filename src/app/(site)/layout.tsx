import './globals.css';

import Navbar from './_components/Navbar';
import ScrollToTopButton from './_components/ScrollToTop';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <>{children}</>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
