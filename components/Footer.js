import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'> 
        <small className='mb-2 text-xs block'>
            &copy; 2023 Benjamin Diomat. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-bold'>A propos de ce site :</span> construit avec React & Next.js (13.4.8), TaildWind CSS, Framer Motion, Resend, Vercel
        </p>
    </footer>
  )
}
