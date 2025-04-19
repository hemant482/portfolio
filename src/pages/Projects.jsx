import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TravelU',
      description: 'Developed a responsive travel website using HTML, CSS, JavaScript, and PHP, with secure user authentication handled via PHP and MySQL on XAMPP. Implemented dynamic content, database management, and a user-friendly interface for an enhanced travel booking experience.',
      image: '/travel.png',
      technologies: ['HTML', 'CSS', 'JavaScript','PHP', 'SQL'],
      github: 'https://github.com/hemant482/hemant482.github.io',
      live: 'https://hemant482.github.io/main/index.html'
    },
    {
      title: 'Gourmet Haven',
      description: 'Built with HTML, CSS, JavaScript and React, this website provides menu, reservations and contact-form options and providing an interactive user experience.',
      image: '/restaurant.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'React-Router'],
      github: 'https://github.com/hemant482/restaurant-project',
      live: 'https://restaurant-project-silk.vercel.app/'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">My Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full flex justify-end space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-navy-200 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-navy-200 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-navy-600 mb-3 group-hover:text-navy-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-navy-50 text-navy-600 rounded-full text-sm font-medium transition-colors hover:bg-navy-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
