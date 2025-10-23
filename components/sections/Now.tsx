'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Code, Coffee, Rocket } from 'lucide-react'

const currentActivities = [
  {
    icon: Rocket,
    title: 'Building a SaaS Platform',
    description: 'Working on an AI-powered project management tool with real-time collaboration features.',
    status: 'In Progress',
  },
  {
    icon: BookOpen,
    title: 'Learning Web3',
    description: 'Diving deep into blockchain development, smart contracts, and decentralized applications.',
    status: 'Learning',
  },
  {
    icon: Code,
    title: 'Open Source Contributions',
    description: 'Contributing to Next.js and other popular open-source projects in the React ecosystem.',
    status: 'Active',
  },
  {
    icon: Coffee,
    title: 'Writing Tech Blog',
    description: 'Sharing my knowledge through tutorials and articles about modern web development.',
    status: 'Weekly',
  },
]

export function Now() {
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
    <section id="now" className="py-24 relative bg-gray-50 dark:bg-gray-900/50" ref={ref}>
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
              What I&apos;m <span className="text-gradient">Doing Now</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Current projects and learning adventures
            </p>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentActivities.map((activity) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={activity.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 space-y-4 hover:glow-effect transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-bold font-heading">{activity.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-accent">{activity.status}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Last Updated */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
