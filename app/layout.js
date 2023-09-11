"use client"
import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import activePage from '@/reducers/activePage'
import Footer from '@/components/Footer'



const store = configureStore({
  reducer:{activePage},
})
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    
    <html lang="fr" className='!scroll-smooth'>
      
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[1000px] pt-28 sm:pt-36`}>
        <div className="bg-[#FDF5D8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#D4D2D2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[15rem] 2xl:left-[-5rem]"></div>
        <Provider store={store}>
        <Header />
        
        {children}
        <Footer />
        </Provider>
        </body>
        
    </html>
    
  )
}
