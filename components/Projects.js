"use client"
import React, {useEffect} from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { changeSection } from '@/reducers/activePage';

export default function Projects() {
  const {ref,inView} = useInView({
    
    threshold: 0.6,
  })
  const dispatch = useDispatch()
  useEffect(() => {
    if (inView) {
      
      dispatch(changeSection("Projets"))
    }
  }, [inView])
  return (
    <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
        <SectionHeading name="Mes projets" />
        <div>
            {projectsData.map((project,index) => (
                <Project 
                live={project.live}
                key={index} 
                title={project.title} 
                description={project.description} 
                tags={project.tags}
                image={project.imageUrl}
                frontend={project.GithubFrontend}
                backend={project.GithubBackend}/>
            ))}
        </div>
    </section>
  )
}

