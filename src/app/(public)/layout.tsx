import './globals.css';

import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTop';

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
