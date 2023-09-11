import React from 'react'
import Intro from '@/components/Intro'
import SectionDivider from '@/components/SectionDivider'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experiences from '@/components/Experiences'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Benjamin Diomat | Portfolio',
  description: 'Bienvenue sur le portfolio de Benjamin Diomat full-stack developer junior.',
}
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  )
}
