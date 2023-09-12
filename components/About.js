"use client";
import React, { useEffect }  from 'react';
import SectionHeading from './SectionHeading';
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { changeSection } from '@/reducers/activePage';

export default function About() {
  const {ref,inView} = useInView({
    threshold: 0.75,
  })
  const dispatch = useDispatch()
  useEffect(() => {
    if (inView) {
      
      dispatch(changeSection("A propos"))
    }
  }, [inView])
  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id='about'>
        <SectionHeading name="A propos"/>
        <p className='mb-3'>
            Après un master en <span className="font-medium">Digital marketing & Web Strategy et 3 ans passés chez Side</span>, 
            j'ai décidé de lancer <span className="underline">ma reconversion</span> pour suivre <span className='underline'>ma passion pour la programmation</span>. 
            J'ai ainsi suivi le <span className="underline">Bootcamp de La Capsule</span> et me voilà enfin diplômé du titre RNCP de niveau 6 : <span className="font-medium">Concepteur-développeur d’applications web & mobile</span>.
            Mon souhait est maintenant de trouver un emploi en tant que <span className="font-medium">Développeur Full-stack</span> afin de poursuivre ma passion. 
            Ma stack principale est <span className="font-medium">React, React Native, NextJs, Node.js, MongoDB</span>. Je suis également familié avec <span className="italic">Typescript et Tailwind</span>.    
        </p>
        <p>
            Quand je ne suis pas le nez dans le code, j'aime beaucoup joué aux <span className="italic">jeux vidéo</span> et notamment au FPS compétitif, <span className="italic">regarder des séries</span>,
            <span className="italic">voyager</span> et me <span className="italic">former sur différents sujets</span>. 
        </p>
    </motion.section>
  )
}
