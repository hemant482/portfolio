import React from 'react';

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Bootstrap',  'SQL', 'PHP', 'SEO', 'Git'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-navy-600 mb-4">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium">Master of Computer Application</h4>
              <p className="text-gray-700">Mohanlal Sukhadia University, Udaipur</p>
              <p className="text-gray-600">2023 - Present • 7.5 CGPA</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Bachelor of Computer Application</h4>
              <p className="text-gray-700">
              Pandit Deendayal Upadhyaya Shekhawati University</p>
              <p className="text-gray-600">2020 - 2023 • 74%</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">12th Standard</h4>
              <p className="text-gray-700">RBSE</p>
              <p className="text-gray-600">2020 • 71%</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">10th Standard</h4>
              <p className="text-gray-700">RBSE</p>
              <p className="text-gray-600">2018 • 70%</p>
            </div>
            
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy-600 mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg p-5 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
