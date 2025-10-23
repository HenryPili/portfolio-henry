'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
    <section id="contact" className="py-24 relative" ref={ref}>
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-heading">Let's work together</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:Pilihenry89@gmail.com"
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:glow-effect transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pilihenry89@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-4 p-4 glass rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bacoor, Cavite, Philippines</p>
                  </div>
                </motion.div>
              </div>

              {/* Availability */}
              <div className="p-6 glass rounded-xl space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium text-green-500">Available for freelance</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently accepting new projects and collaborations
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitStatus === 'success' ? (
                    <span>Message Sent! ✓</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-500 text-center"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
