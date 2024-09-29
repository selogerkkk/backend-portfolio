import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Terminal, Code, Server, Mail, Github, Linkedin, Database, Cloud, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const fullText = `const backendDev = {
  name: 'Ruan Henrique',
  skills: ['PHP', 'Laravel', 'SQL', 'Docker'],
  passion: 'Building robust and scalable systems'
};`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const sections = ['home', 'about', 'experience', 'projects', 'contact'];

  const experience = [
    { year: '2021 - Present', title: 'Senior Backend Developer', company: 'Tech Innovators Inc.' },
    { year: '2018 - 2021', title: 'Backend Developer', company: 'DataDriven Solutions' },
    { year: '2016 - 2018', title: 'Junior Developer', company: 'StartUp Ventures' },
  ]

  const projects = [
    {
      name: 'Scalable Microservices Architecture',
      desc: 'Designed and implemented a highly scalable microservices system using Node.js and Kubernetes.',
      tech: ['Node.js', 'Kubernetes', 'Docker', 'MongoDB'],
      link: 'https://github.com/selogerkkk/'
    },
    {
      name: 'Real-time Data Processing Pipeline',
      desc: 'Built a robust data processing pipeline using Apache Kafka and Python for real-time analytics.',
      tech: ['Python', 'Apache Kafka', 'Apache Spark', 'AWS'],
      link: 'https://github.com/selogerkkk/'

    },
    {
      name: 'Serverless API Gateway',
      desc: 'Developed a serverless API gateway using AWS Lambda and API Gateway for efficient request handling.',
      tech: ['AWS Lambda', 'API Gateway', 'Node.js', 'DynamoDB'],
      link: 'https://github.com/selogerkkk/'

    },
    {
      name: 'Distributed Caching System',
      desc: 'Implemented a distributed caching system using Redis to improve application performance.',
      tech: ['Redis', 'Node.js', 'Docker', 'Nginx'],
      link: 'https://github.com/selogerkkk/'

    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8" style={{ minHeight: '100vh', backgroundColor: '#1a202c', color: '#f7fafc', padding: '2rem' }}>
      <nav className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center justify-center space-y-8 bg-gray-800" style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', backgroundColor: '#2d3748' }}>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`p-2 rounded-full transition-colors duration-200 ${activeSection === section ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            style={{
              padding: '0.5rem',
              borderRadius: '9999px',
              transition: 'background-color 0.2s',
              backgroundColor: activeSection === section ? '#3b82f6' : '#4a5568',
            }}
          >
            {section === 'home' && <Terminal size={20} />}
            {section === 'about' && <Code size={20} />}
            {section === 'experience' && <Briefcase size={20} />}
            {section === 'projects' && <Server size={20} />}
            {section === 'contact' && <Mail size={20} />}
          </button>
        ))}
      </nav>

      <main className="ml-20" style={{ marginLeft: '5rem' }}>
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen flex items-center justify-center"
          style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {activeSection === 'home' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4" style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Backend Developer</h1>
              <div className="bg-black p-4 rounded-lg shadow-lg" style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
                <pre className="font-mono text-green-400" style={{ fontFamily: 'monospace', color: 'green' }}>
                  <code>{terminalText}</code>
                </pre>
              </div>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4" style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>About me</h2>
              <p className="text-xl mb-4" style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                textAlign: 'justify',
              }}>
                Hi, i'm Ruan! I'm currently graduating in Computer Science at IFMA and I am committed to improving my skills as a backend developer, creating efficient solutions to meet the needs of companies and customers.
              </p>
              <div className="flex justify-center space-x-4" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <Database className="w-16 h-16 text-blue-400" style={{ width: '2rem', height: '2rem', color: '#63b3ed' }} />
                <Server className="w-16 h-16 text-purple-400" style={{ width: '2rem', height: '2rem', color: '#b794f4' }} />
                <Cloud className="w-16 h-16 text-green-400" style={{ width: '2rem', height: '2rem', color: '#68d391' }} />
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="max-w-3xl w-full">
              <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
              <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 ml-4">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.year}
                    className="mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-[41px] top-1" />
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-500">{job.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="max-w-4xl w-full mx-auto px-4 py-16">
              <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <motion.div
                    key={project.name}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.name}</h3>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-sm rounded bg-gray-800 dark:bg-gray-700 text-gray-800 dark:text-gray-200" style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', borderRadius: '0.25rem', backgroundColor: '#1f2937', color: '#e5e7eb' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 text-white transition-colors duration-200"
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.25rem',
                          backgroundColor: '#1f2937',
                          color: '#ffffff',
                          transition: 'background-color 0.2s',
                        }}
                      >
                        View Project
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8" style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>How do you like to reach me?</h2>
              <div className="flex justify-center space-x-6 mb-8" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <a href="mailto:ruanhborges@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors" style={{ color: '#63b3ed', transition: 'color 0.2s' }}>
                  <Mail className="w-8 h-8" style={{ width: '2rem', height: '2rem' }} />
                </a>
                <a href="https://github.com/selogerkkk" className="text-gray-400 hover:text-gray-300 transition-colors" style={{ color: '#a0aec0', transition: 'color 0.2s' }} target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8" style={{ width: '2rem', height: '2rem' }} />
                </a>
                <a href="https://www.linkedin.com/in/ruanborges/" className="text-blue-600 hover:text-blue-500 transition-colors" style={{ color: '#3182ce', transition: 'color 0.2s' }} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8" style={{ width: '2rem', height: '2rem' }} />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}