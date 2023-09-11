"use client"
import React,{useEffect, useState} from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { changeSection } from '@/reducers/activePage';

import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {
  const [email, setEmail] = useState("")
  const [message,setMessage] = useState("")
    const {ref,inView} = useInView({
        threshold: 0.8,
      })
      const dispatch = useDispatch()
      useEffect(() => {
        if (inView) {
          dispatch(changeSection("Contact"))
        }
      }, [inView])
      
    const handleSubmit = () => {
      
      sendEmail(message,email)
    }
    
   
  return (
    <motion.section 
    ref={ref}
    id="contact" 
    className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)]'
    initial=
    {{
        opacity:0
    }}
    whileInView=
    {{
        opacity:1
    }}
    transition={{
        duration:1
    }}
    viewport={{
        once:true
    }}> 
        <SectionHeading name="Contact"/>
        <p className='text-gray-700 text-center -mt-6'>Vous pouvez me contacter à <a className='underline' href="mailto:benjamin.diomat@gmail.com">benjamin.diomat@gmail.com</a> ou depuis ce formulaire.</p>
        <form className='mt-10 flex flex-col' onSubmit={() => handleSubmit()}
        >
            <input className="h-14 my-3 p-4 rounded-lg borderBlack" 
            type="email" 
            placeholder='Votre email'
            required
            maxLength={500}
            onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <textarea className="h-52 my-3 rounded-lg borderBlack p-4" 
            placeholder='Votre message'
            required
            maxLength={1000}
            onChange={(e)=> setMessage(e.target.value)} value={message}/>
            <button type="submit" 
            className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 bg-gray-900 text-white rounded-full outline-none transition-all
            focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
            >
                Envoyer 
                <FaPaperPlane 
                className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/></button>
        </form>
    </motion.section>
  )
}
