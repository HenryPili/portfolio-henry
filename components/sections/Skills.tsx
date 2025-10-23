'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Layout, Server, Briefcase, Terminal } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML/CSS', level: 65 },
      { name: 'JavaScript', level: 55 },
      { name: 'React', level: 45 },
      { name: 'Tailwind CSS', level: 50 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 40 },
      { name: 'Express', level: 35 },
      { name: 'REST APIs', level: 45 },
      { name: 'PHP', level: 30 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 50 },
      { name: 'MongoDB', level: 40 },
      { name: 'SQL Basics', level: 55 },
      { name: 'Database Design', level: 45 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Code2,
    skills: [
      { name: 'Git/GitHub', level: 60 },
      { name: 'VS Code', level: 70 },
      { name: 'Responsive Design', level: 65 },
      { name: 'Problem Solving', level: 60 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Briefcase,
    skills: [
      { name: 'Sales Strategies', level: 65 },
      { name: 'Problem Solving', level: 60 },
      { name: 'Time Management', level: 70 },
      { name: 'Team Collaboration', level: 65 },
    ],
  },
  {
    title: 'Languages',
    icon: Terminal,
    skills: [
      { name: 'English', level: 70 },
      { name: 'Tagalog', level: 70 },
      { name: 'Communication', level: 65 },
      { name: 'Customer Service', level: 68 },
    ],
  },
]

export function Skills() {
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
    <section id="skills" className="py-24 relative" ref={ref}>
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
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 space-y-6 hover:glow-effect transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent to-accent-dark rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
