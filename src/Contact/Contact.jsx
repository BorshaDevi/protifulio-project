import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact=()=>{
  useEffect(()=>{
    AOS.init();
  },[])
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mrfz3pk', 'template_b7kw1d1', form.current, {
        publicKey: 'HaqR7NyFKhnsAh6yM',
      })
      .then(
        (result) => {
          console.log(result);
          if(result.status ===200){
              e.target.reset()
              toast.success('Send your Email Successfully');
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        <>
        <div id='Contact'  className="mt-10 mb-5 md:px-15 ">
             <h1 className="font-serif font-bold text-xl text-center text-white " data-aos="fade-up">__Contact With Me</h1>
             <div className=" w-1/2    ml-10 md:ml-80 ">
             <form ref={form} onSubmit={sendEmail} className='   '>
      <label className='text-white'>Name</label>
      <br />
      <input type="text" name="user_name" placeholder='Enter Your Name' className='w-80 md:w-full px-3 py-2 ' />
      <br />
      <label className='text-white'>Email</label>
      <br />
      <input type="email" name="user_email" placeholder='Enter Your Email' className='w-80 md:w-full px-3  py-2' />
      <br />
      <label className='text-white'>Message</label>
      <br />
      <textarea name="message" placeholder='Message' className='w-80 md:w-full px-3 h-40' />
      <br />
      <input   type="submit" value="Send" className='w-80 md:w-full hover:bg-cyan-200 bg-cyan-800 btn text-black' />
    </form>
    {/* <div>
      <img className='w-20' src="https://i.ibb.co.com/dDjc5f7/world-grid-8199538.png" alt="" />
    </div> */}
             </div>
        </div>
        <Toaster position='top-right' />
        </>
    )
}
export default Contact;