"use client"
import React from 'react'
import Intro from '@/components/Intro'
import SectionDivider from '@/components/SectionDivider'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experiences from '@/components/Experiences'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import activePage from '@/reducers/activePage'

export default function Home() {
  const store = configureStore({
    reducer:{activePage},
  })
  return (
    <main className="flex flex-col items-center px-4">
       <Provider store={store}>
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experiences />
        <Contact />
      </Provider>
    </main>
  )
}
