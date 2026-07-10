"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";


const Section8 = () => {

  return (

    <section className="relative mt-10 h-screen min-h-[700px] w-full overflow-hidden">


      {/* Background Image */}

      <motion.img

        src="/section8.png"

        alt="Dr. Gaurav Jadon"

        initial={{
          scale:1.15
        }}

        animate={{
          scale:1
        }}

        transition={{
          duration:2
        }}

        className="absolute inset-0 h-full w-full object-cover"

      />



      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2535]/90 via-[#29495E]/60 to-black/50" />




      {/* Decorative Blur */}

      <div className="
        absolute
        -top-20
        right-10
        h-72
        w-72
        rounded-full
        bg-cyan-300/20
        blur-[120px]
      " />


      <div className="
        absolute
        bottom-0
        left-10
        h-80
        w-80
        rounded-full
        bg-blue-300/20
        blur-[140px]
      " />






      {/* Content */}


      <div className="
        relative
        z-10
        flex
        h-full
        items-center
        justify-center
        px-6
      ">


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          viewport={{
            once:true
          }}

          className="
          max-w-5xl
          rounded-3xl
          border
          border-white/20
          bg-white/10
          backdrop-blur-xl
          p-8
          md:p-14
          shadow-2xl
          text-center
          "

        >



          {/* Quote Icon */}


          <motion.div

            animate={{
              y:[0,-8,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
            mx-auto
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-white/20
            "

          >

            <Quote
              size={32}
              className="text-white"
            />

          </motion.div>






          {/* Text */}


          <motion.p

            initial={{
              opacity:0
            }}

            whileInView={{
              opacity:1
            }}

            transition={{
              delay:.3,
              duration:.8
            }}

            className="
            text-sm
            leading-8
            text-white/90

            sm:text-base
            md:text-xl
            md:leading-10
            "

          >

            Dr. Gaurav Jadon is a Consultant Pediatrician with over{" "}

            <span className="font-semibold text-white">
              28 years of post-specialization experience
            </span>

            {" "}across India, Kuwait, and the UAE. He specializes in General
            Pediatrics, combining clinical expertise with academic leadership.

            Certified by the European Board of Pediatrics, Dr. Jadon serves at{" "}

            <span className="font-semibold text-white">
              Mediclinic Welcare Hospital Dubai.
            </span>

            {" "}He actively contributes to teaching, clinical audits, and
            international research forums. Passionate about pediatric education
            and evidence-based practice, he continues to advance child health
            standards in the GCC region through compassionate care and lifelong
            learning.

          </motion.p>






          {/* Divider */}


          <motion.div

            initial={{
              width:0
            }}

            whileInView={{
              width:"20%"
            }}

            transition={{
              duration:1,
              delay:.6
            }}

            className="
            h-[2px]
            bg-white/70
            mx-auto
            mt-10
            mb-5
            "

          />





          {/* Name */}


          <motion.h3

            initial={{
              opacity:0,
              y:20
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.8
            }}

            className="
            text-xl
            md:text-2xl
            font-semibold
            tracking-wide
            text-white
            "

          >

            Dr. Gaurav Jadon

          </motion.h3>



          <p className="
            mt-2
            text-sm
            text-white/70
            tracking-widest
            uppercase
          ">

            Consultant Pediatrician

          </p>



        </motion.div>



      </div>



    </section>

  );

};


export default Section8;