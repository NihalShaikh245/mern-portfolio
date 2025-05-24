import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { StarIcon, RepoIcon, PeopleIcon } from '@primer/octicons-react';
import SkillBadge from '../components/SkillBadge';
import API, { fetchProjects, fetchSkills, fetchGitHubStats } from '../api';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    API.get('/visitors')
      .then(res => setCount(res.data.count))
      .catch(console.error);
    
    const interval = setInterval(() => {
      API.get('/visitors')
        .then(res => setCount(res.data.count))
        .catch(console.error);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800/80 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono backdrop-blur-sm z-50 shadow-lg border border-cyan-400/20">
      👋 Visitors: {count.toLocaleString()}
    </div>
  );
};

const GitHubStatsCard = ({ icon, value, label }) => {
  return (
    <motion.div 
      className="glass-card p-4 rounded-lg text-center"
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-bold text-cyan-400">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
};

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [skillsData, projectsData, githubData] = await Promise.all([
          fetchSkills(),
          fetchProjects(),
          fetchGitHubStats()
        ]);

        setSkills(skillsData.skills.map(skill => skill.name));
        setProjects(projectsData.projects.slice(0, 2));
        setGithubStats(githubData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load data:', error);
        // Fallback data
        setSkills(['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git']);
        setProjects([
          {
            id: 1,
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce application with React and Node.js',
            tags: ['React', 'Node.js', 'MongoDB'],
            imageUrl: '/project1.jpg'
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'Kanban-style task management application',
            tags: ['React', 'Firebase'],
            imageUrl: '/project2.jpg'
          }
        ]);
        setGithubStats({
          followers: 42,
          repos: 28,
          stars: 156
        });
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 border-t-2 border-b-2 border-cyan-500 rounded-full"
        />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nihal Shaikh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Full Stack JavaScript Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              I build exceptional digital experiences with modern technologies.
              Currently focused on creating accessible, performant web applications.
            </p>
            
            {/* GitHub Stats */}
            {githubStats && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <GitHubStatsCard 
                  icon={<RepoIcon size={20} className="text-cyan-400 mx-auto" />}
                  value={githubStats.repos}
                  label="Repos"
                />
                <GitHubStatsCard 
                  icon={<StarIcon size={20} className="text-cyan-400 mx-auto" />}
                  value={githubStats.stars}
                  label="Stars"
                />
                <GitHubStatsCard 
                  icon={<PeopleIcon size={20} className="text-cyan-400 mx-auto" />}
                  value={githubStats.followers}
                  label="Followers"
                />
              </motion.div>
            )}

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EnvelopeIcon className="h-5 w-5" />
                Contact Me
              </motion.a>
              <motion.a
                href="/resume"
                className="flex items-center gap-2 px-6 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-900/30 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="h-5 w-5" />
                View Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-full overflow-hidden border-2 border-cyan-500/30">
                <img 
                  src="/profile.jpg" 
                  alt="Nihal Shaikh" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 w-4 h-0.5 mr-2"></span>
              My Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <SkillBadge 
                  key={skill} 
                  skill={skill} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 w-4 h-0.5 mr-2"></span>
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card hover:bg-gray-800/70 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <motion.a
                href="/projects"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                View all projects <ArrowDownIcon className="ml-2 h-4 w-4 rotate-90" />
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <VisitorCounter />
    </>
  );
}