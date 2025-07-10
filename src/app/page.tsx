'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <h1 className="text-5xl font-bold mb-4 text-blue-700 dark:text-blue-300">
        Hi, I'm Nelly Jericho 👋
      </h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Aspiring Software Engineer | Frontend Developer
      </p>
      <Link href="/projects">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors">
          See My Projects
        </button>
      </Link>
    </div>
  );
}
