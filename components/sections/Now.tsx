'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Tv, Gamepad2, Film } from 'lucide-react'

const hobbies = [
  {
    icon: Music,
    title: 'Listening to Music',
    description: 'Exploring different genres and discovering new artists. Music helps me relax and stay creative.',
    favorite: 'Various Genres',
  },
  {
    icon: Tv,
    title: 'Watching Anime',
    description: 'Enjoying captivating storylines and beautiful animation. Always looking for the next great series to binge.',
    favorite: 'Action & Adventure',
  },
  {
    icon: Gamepad2,
    title: 'Playing Games',
    description: 'Gaming is my go-to for unwinding. From strategy to action games, I love the challenge and immersion.',
    favorite: 'Various Platforms',
  },
  {
    icon: Film,
    title: 'Watching Movies',
    description: 'Cinematic storytelling at its finest. Whether it\'s blockbusters or indie films, I appreciate great filmmaking.',
    favorite: 'All Genres',
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
              My <span className="text-gradient">Hobbies</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What I love doing in my free time
            </p>
          </motion.div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon
              return (
                <motion.div
                  key={hobby.title}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="glass rounded-xl p-6 space-y-4 hover:glow-effect transition-all duration-300 gradient-border cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="p-3 bg-accent/10 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        <Icon className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-bold font-heading">{hobby.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{hobby.favorite}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Fun Note */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Life is better with hobbies that bring joy! ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
