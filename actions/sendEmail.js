"use server"

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)      

export const sendEmail = (message,email) => {

    if(!message || typeof message !== 'string') {
        return {
            error:"Invalid message"
        }
    }
    try{
    resend.emails.send({
        from:'Contact Form <onboarding@resend.dev>',
        to:'benjamin.diomat@gmail.com',
        subject:'Demande de contact - Portfolio Benjamin Diomat',
        reply_to:email,
        text:message
      })}
      catch (error) {
        console.error(error)
      }

}