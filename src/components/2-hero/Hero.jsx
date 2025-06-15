import React from 'react';
import './hero.css';
import Lottie from 'lottie-react';
import devAnimation from '../../animation/dev.json'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
// import { FaFacebookSquare } from 'react-icons/fa';

function Hero() {
    const fileUrl = "/photo/ZiadElsayedcv.pdf" 

  return (
    <>
      <section id='about' className='hero flex'>
        <div className='left-section'>

          <motion.div
          variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
          className="parent-avatar flex">
            <img className='avatar' src="./ziad3.jpg" alt="" />
            <div className='icon-verified'></div>
          </motion.div>
          <motion.h1
           variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
          className='title'>
            Ziad Al-Sayed
          </motion.h1>
          <motion.p 
          
          
           variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
          
          
          className='sub-title'>
                       React Front End Web Devoloper

            
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
          className="all-icons flex">
            {/* <div className="icon icon-twitter"><FaFacebookSquare/></div> */}
            {/* <div className="icon icon-instagram"></div> */}
           <a href="https://github.com/ziadelsayed10" target="_blank">
            <div className="icon icon-github">
           </div>
           </a>
                      <a href="https://www.linkedin.com/in/ziad-elsayed-1537702b9/" target="_blank">

            <div className="icon icon-linkedin-square"></div>
            </a>
          </motion.div>

          <a href={fileUrl} download>
        <button className="btn-cv" >Dowmload CV</button>
        </a>

        </div>


        <motion.div
         variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
        className='right-section animation '>
          <Lottie className='dev-Animation' loop={true} style={{ height: 255 }}
            animationData={devAnimation} />
        </motion.div>

      </section></>
  )
}

export default Hero