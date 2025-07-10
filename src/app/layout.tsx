import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Jericho Portfolio',
  description: 'My portfolio built with love ❤️',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="p-4 flex-grow">{children}</main>
        <Footer /> {/* 👈 Now your footer will show on every page */}
      </body>
    </html>
  );
}
