"use client";

import React from "react";
import { motion } from "framer-motion";

const brandLogos = [
  { id: 1, image: "/brand.png" },
  { id: 2, image: "/brand2.png" },
  { id: 3, image: "/brand3.png" },
  { id: 4, image: "/brand5.png" },
  { id: 5, image: "/brand5.png" },
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};



const Section7 = () => {

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5FAFC] via-white to-[#EAF3F7] py-24 px-6">


      {/* Background Glow */}

      <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-blue-200/30 blur-[140px]" />




      <div className="relative mx-auto max-w-7xl">


        {/* Heading */}


        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-16"

        >


          <span className="inline-flex rounded-full border border-[#5B8291]/20 bg-white px-5 py-2 text-sm font-semibold tracking-widest text-[#5B8291] shadow-sm">

            ASSOCIATIONS & PARTNERS

          </span>



          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#29495E]">

            Trusted By

            <span className="block text-[#5B8291]">

              Leading Healthcare Organizations

            </span>

          </h2>



          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#5B8291] to-[#29495E]" />


        </motion.div>






        {/* Logos */}


        <motion.div

          variants={container}

          initial="hidden"

          whileInView="show"

          viewport={{
            once:true
          }}

          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"


        >


          {brandLogos.map((logo,index)=>(


            <motion.div

              key={logo.id}

              variants={item}

              animate={{

                y:[0,-8,0]

              }}

              transition={{

                duration:4,

                repeat:Infinity,

                delay:index*0.4,

                ease:"easeInOut"

              }}

              whileHover={{

                scale:1.08,

                y:-15

              }}

              className="
              group relative flex h-40 items-center justify-center
              rounded-3xl border border-white/70
              bg-white/70 backdrop-blur-xl
              shadow-lg
              transition-all duration-500
              hover:shadow-2xl
              "

            >



              {/* Hover Glow */}

              <div className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-r from-cyan-200/20 to-blue-200/20
                opacity-0 blur-xl
                transition
                group-hover:opacity-100
              " />




              <img

                src={logo.image}

                alt="Healthcare Partner Logo"

                className="
                relative z-10
                w-36 md:w-40
                object-contain
                grayscale
                opacity-70
                transition-all duration-500
                group-hover:grayscale-0
                group-hover:opacity-100
                "

              />



            </motion.div>


          ))}


        </motion.div>



      </div>


    </section>

  );

};



export default Section7;