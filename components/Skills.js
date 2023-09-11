"use client"
import React, {useEffect} from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { changeSection } from '@/reducers/activePage';
import { motion } from 'framer-motion';

const fadeInAnimationsVariants = {
    initial: {
        opacity:0, 
        y:100, 
    }, 
    animate: (index) => {
    return {
        opacity:1,
        y:0,
        transition: {
            delay:0.05 * index
        }
    }}
}

export default function Skills() {
    const {ref,inView} = useInView({
        threshold: 0.75,
      })
      const dispatch = useDispatch()
      useEffect(() => {
        if (inView) {
          
          dispatch(changeSection("Skills"))
        }
      }, [inView])
  return (
    <section 
    id="skills"
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
     ref={ref}>
        <SectionHeading name="Mes compétences" />
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsData.map((skill, index)=> (
                <motion.li 
                key={index} 
                className='bg-white borderBlack rounded-xl px-5 py-3'
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once:true
                }}
                custom={index}>
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}
