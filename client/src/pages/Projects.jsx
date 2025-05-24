import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../api';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData.projects);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load projects:', error);
        setProjects([
          {
            id: 1,
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce application with React and Node.js',
            tags: ['React', 'Node.js', 'MongoDB'],
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'Kanban-style task management application',
            tags: ['React', 'Firebase'],
          },
          {
            id: 3,
            title: 'Portfolio Website',
            description: 'Personal portfolio website built with React',
            tags: ['React', 'Tailwind CSS'],
          }
        ]);
        setLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <a href="/" className="mr-4 text-cyan-400 hover:text-cyan-300">
            <ArrowLeftIcon className="h-5 w-5" />
          </a>
          <h2 className="text-3xl font-bold">All Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}