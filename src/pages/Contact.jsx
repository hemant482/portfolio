import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Me</h2>
      
      <div className="max-w-2xl mx-auto">
        <form action="https://formspree.io/f/mldgqeoq" method='post' className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-md font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md outline border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md outline border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-md font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md p-2 outline border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-md font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md p-2 outline border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-navy-600 text-white font-bold text-lg py-2 px-4 rounded-md hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;