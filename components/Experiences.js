"use client"
import React, {useEffect} from 'react'
import SectionHeading from './SectionHeading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { changeSection } from '@/reducers/activePage';


export default function Experiences() {
    const {ref,inView} = useInView({
        threshold: 0.1,
      })
      const dispatch = useDispatch()
      useEffect(() => {
        if (inView) {
          
          dispatch(changeSection("Expériences"))
        }
      }, [inView])
  return (
    <section id="experience" ref={ref} className='scroll-mt-28 mb-20 sm:mb-28'>
        <SectionHeading name="Expériences" />
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((experience, index) => {
                const description = experience.description 
                return (
                    <VerticalTimelineElement key={index} 
                    contentStyle={{
                        background:"#f3f4f6",
                        boxShadow:"none",
                        border:"1px solid, rgba(0,0,0,0.05)",
                        textAlign:"left",
                        padding:"1.3rem 2rem"
                    }}
                    contentArrowStyle={{
                        borderRight:"0.4rem solid #9ca3af"
                    }}
                    date={experience.date}
                    icon={experience.icon}
                    iconStyle={{
                        background:"white",
                        fontSize:"1.5rem"
                    }}>
                        <h3 className='font-semibold capitalize'>{experience.title}</h3>
                        <p className='font-normal !mt-0'>{experience.location}</p>
                        <ul className='!mt-1 ml-5 !font-normal text-gray-700 list-disc' >{experience.description.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })}</ul>
                        <p className='!mt-1 italic text-gray-700'>{experience.résumé}</p>
                    </VerticalTimelineElement>
                )})
            }
        </VerticalTimeline>
    </section>
    
  )
}
