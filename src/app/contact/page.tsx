'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_GMAIL_SERVICE_ID || 'service_eph95nn', // Use your Gmail SMTP service ID here or fallback
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_eow86db',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'a3eubW1AeZjlzF73-'
      );
      alert('✅ Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-300">Get in Touch</h1>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Got a project or want to say hi? Drop me a message!
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200" htmlFor="user_name">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200" htmlFor="user_email">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={4}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Connect with Me</h2>
        <ul className="mt-2 space-y-2">
          <li>
            📧 Email:{' '}
            <a
              href="mailto:nellyjericho55@gmail.com"
              className="text-blue-600 dark:text-blue-400"
            >
              nellyjericho55@gmail.com
            </a>
          </li>
          <li>
            💻 GitHub:{' '}
            <a
              href="https://github.com/Nellyjericho"
              target="_blank"
              className="text-blue-600 dark:text-blue-400"
              rel="noreferrer"
            >
              github.com/Nellyjericho
            </a>
          </li>
          <li>
            🔗 LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/nelly-jericho-132aa8257"
              target="_blank"
              className="text-blue-600 dark:text-blue-400"
              rel="noreferrer"
            >
              linkedin.com/in/nelly-jericho-132aa8257
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
