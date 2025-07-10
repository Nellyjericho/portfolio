'use client';

export default function AboutPage() {
  const frameworks = [
    'Next.js',
    'React',]

    const frameworkjsx = frameworks.map((framework, index) => (
      <li key={index} className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        {framework}
      </li>
    ));

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">About Me</h1>
      <p className="text-lg mb-6 leading-relaxed text-white-700">
        Hey 👋, I'm <span className="font-semibold">Nelly Jericho</span> — a passionate and aspiring Software Engineer
        from Kenya 🇰🇪. I love building beautiful, functional web applications with modern tools like
        Next.js, Tailwind CSS, and Node.js.
      </p>
      <p className="text-lg mb-6 leading-relaxed text-white-700">
        Currently, I'm focusing on frontend development and exploring full-stack technologies to create seamless user experiences.
        When I'm not coding, I enjoy learning new frameworks, designing UI, and dreaming about my next big project 🚀.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600">My Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white-800">
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Next.js</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">React</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Tailwind CSS</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">MySQL</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Docker</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Git</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Arduino</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Jira</li>
        <li className="p-2 border rounded-lg shadow-sm hover:shadow-blue-400 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">Python</li>
      </ul>
    </div>
  );
}
