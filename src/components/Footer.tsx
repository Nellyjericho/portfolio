'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-600 dark:text-gray-400">
        {/* Copyright */}
        <p className="text-sm mb-2 sm:mb-0">
          © {new Date().getFullYear()} Nelly Jericho. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Nellyjericho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nelly-jericho-132aa8257"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nellyjericho55@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}


