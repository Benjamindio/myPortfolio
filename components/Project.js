"use client"
import React, {useRef} from 'react'
import Image from 'next/image'
import {useScroll, motion, useTransform} from 'framer-motion'
import { FaGithubSquare } from 'react-icons/fa';

export default function Project(props) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1])
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6,1])
    let tags = props.tags
  return (
    <motion.div
    ref={ref}
    style={{
        scale:scaleProgress,
        opacity:opacityProgress
    }} className='group mb-3 sm:mb-8 last:mb-0 even:pl-8'>
        
    <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem] hover:bg-gray-200 transition sm:group-even:pl-8'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
            <h3 className='text-2xl font-semibold'>{props.title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700'>{props.description}</p>
            <FaGithubSquare className='sm:m-auto text-lg mb-2'/>
            <div className='flex flex-wrap sm:justify-center sm:m-auto'>
                <a href={props.frontend} className='p-2 gap-x-2 bg-gray-900 rounded-full  text-white text-sm ' target="_blank">Lien Frontend </a>
                {props.backend  && <a href={props.backend}  target="_blank" className=' p-2 gap-x-2 bg-gray-900 rounded-full  text-white text-sm '>Lien Backend </a> }
                
            </div>
           { props.live && <a href={props.live} className=' p-2 gap-x-2 bg-gray-900 rounded-full  text-white text-sm text-center w-[30%] sm:m-auto' target='_blank'>Live</a>}
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag,index) => (
                    <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>{tag}</li>
                ))}
            </ul>
        </div>
        <Image 
        src={props.image} 
        alt={props.title} 
        quality={95} 
        className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40'/>
    </section>
    
    </motion.div>
  )
}
