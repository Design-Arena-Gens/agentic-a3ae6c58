import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '??????: ??? ?????',
  description: '?????????? RPG ?? ????????? ??????',
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-leaf-900/30 via-neutral-900 to-neutral-950" />
        <div className="relative mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
