import React from 'react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <img
          src="/hemant.png"
          alt="Profile"
          className="w-48 h-48 rounded-full shadow-2xl mx-auto mb-8 object-cover"
        />
        <h1 className="text-4xl font-bold text-orange-600 mb-4">HEMANT KUMAWAT</h1>
        <h2 className="text-2xl font-bold text-navy-600 mb-6">Frontend Developer</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate about creating beautiful and functional web applications.
          With expertise in modern web technologies and a keen eye for design,
          I bring ideas to life through code.
        </p>
      </div>
    </div>
  );
};

export default Home;