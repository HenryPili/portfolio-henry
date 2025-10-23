'use client'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Now } from '@/components/sections/Now'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Now />
      <Contact />
      <Footer />
    </main>
  )
}
