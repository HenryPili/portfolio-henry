'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, MapPin, Briefcase, GraduationCap } from 'lucide-react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 relative" ref={ref}>
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about who I am and what I do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent via-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Rotating border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
                    backgroundSize: '300% 300%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-[3px] bg-white dark:bg-gray-950 rounded-2xl" />
                </motion.div>
                
                {/* Photo container with hover effects */}
                <motion.div 
                  className="relative glass rounded-2xl p-6 h-full flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image with effects */}
                  <motion.div
                    className="relative w-full h-full rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src="/henry-photo.png" 
                      alt="Henry Pili" 
                      className="w-full h-full object-cover rounded-xl shadow-2xl"
                    />
                    {/* Overlay gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bio & Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-heading">
                  Hello! I&apos;m Henry
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To secure an entry-level position in a reputable company where I can apply my skills, 
                  contribute to team success, and continue developing my professional growth. 
                  I have a proven track record of delivering high-quality care while maintaining 
                  patient safety and satisfaction.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I&apos;m highly motivated, adaptable, and eager to learn to deliver quality results for 
                  the organization. My experience includes working as a Bagger at SM MOLINO and as a 
                  Food Service Clerk at Landers, Alabang.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=Ciudad+De+Bacoor+Cavite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-4 glass rounded-lg hover:glow-effect transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bldg 9, Unit 119, Ciudad De Bacoor Cavite</p>
                    <p className="text-xs text-accent mt-1">Click to view on map</p>
                  </div>
                </motion.a>
                <div className="flex items-start space-x-3 p-4 glass rounded-lg">
                  <Briefcase className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">1+ Year</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 glass rounded-lg sm:col-span-2">
                  <GraduationCap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      SHS in San Nicholas III (2019-2020)<br/>
                      Golden Acres National High School (2017-2018)
                    </p>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.a
                href="/Henry_Pili_CV.html"
                target="_blank"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors shadow-lg hover:shadow-accent/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
