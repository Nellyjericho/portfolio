'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow dark:shadow-lg">
      <h1 className="text-xl font-bold text-blue-700">Nelly Jericho</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}

