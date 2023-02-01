import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <h1  className="text-3xl font-bold underline">Login - Sistema Olá Mundo</h1>
        <hr />
        {children}
      </body>
    </html>
  );
}