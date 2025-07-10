'use client';

const projects = [
  {
    title: 'Church Event Planner',
    description: 'A web app for managing church events using Next.js, Node.js, and MySQL. Still a work in progress',
    image: '/projects/church-event.png',
    link: 'https://github.com/Nellyjericho/church-event-planner',
  },
  {
    title: 'Ve-lixa',
    description: 'A web app for selling gym equipments.',
    image: '/projects/ve-lixa.png',
    link: 'https://github.com/Nellyjericho/Ve-lixa',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio built with Next.js, Tailwind CSS, and deployed on Vercel.',
    image: '/projects/portfolio.png',
    link: 'https://github.com/Nellyjericho/portfolio',
  },
  {
    title: 'Hospital Management System',
    description: 'A full-stack hospital management system built with Python, JavaScript, HTML, and CSS.',
    image: '/projects/dash-screenshot.png',
    link: 'https://github.com/Nellyjericho/HMS-Dashboard',
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-300">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-blue-400 dark:hover:shadow-blue-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
