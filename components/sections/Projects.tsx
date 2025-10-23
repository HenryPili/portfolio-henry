'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    image: '🛒',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Interactive data visualization platform with machine learning insights and predictive analytics.',
    image: '📊',
    tags: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'Social Media App',
    description: 'Real-time social networking platform with messaging, posts, and user authentication.',
    image: '💬',
    tags: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with kanban boards, time tracking, and team analytics.',
    image: '✅',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yourusername/project4',
    live: 'https://project4.com',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts and interactive maps.',
    image: '🌤️',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Mapbox'],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.com',
  },
  {
    title: 'Portfolio CMS',
    description: 'Headless CMS for managing portfolio content with a modern admin interface.',
    image: '📝',
    tags: ['Next.js', 'Sanity', 'GraphQL', 'Tailwind'],
    github: 'https://github.com/yourusername/project6',
    live: 'https://project6.com',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-24 relative bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full glass rounded-xl overflow-hidden hover:glow-effect transition-all duration-300">
                  {/* Project Image/Icon */}
                  <div className="relative h-48 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-6xl">{project.image}</span>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold font-heading group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 glass rounded-lg font-medium hover:glow-effect transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
