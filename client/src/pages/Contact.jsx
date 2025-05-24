import { motion } from 'framer-motion';
import { ArrowLeftIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-8"
      >
        <a href="/" className="mr-4 text-cyan-400 hover:text-cyan-300">
          <ArrowLeftIcon className="h-5 w-5" />
        </a>
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-6 text-cyan-400">Get in Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPinIcon className="h-5 w-5 text-cyan-400 mt-1 mr-3" />
              <div>
                <h4 className="font-medium text-gray-200">Location</h4>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <EnvelopeIcon className="h-5 w-5 text-cyan-400 mt-1 mr-3" />
              <div>
                <h4 className="font-medium text-gray-200">Email</h4>
                <p className="text-gray-400">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <PhoneIcon className="h-5 w-5 text-cyan-400 mt-1 mr-3" />
              <div>
                <h4 className="font-medium text-gray-200">Phone</h4>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-6 text-cyan-400">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}