"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope, Calendar, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0"
      >
        <Image
  src="/pp.jpeg"
  alt="Dr Gaurav Jadon"
  fill
  priority
  sizes="100vw"
  className="object-fill object-center md:object-[65%_center]"
/>
      </motion.div>


      {/* Better Image Visibility Overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-r 
        from-black/75
        via-black/35
        to-transparent
      " />

      {/* Bottom Fade */}
      <div className="
        absolute inset-0 
        bg-gradient-to-t 
        from-black/50 
        via-transparent 
        to-transparent
      "/>


      {/* Decorative Lights */}
      <div className="
        absolute top-20 left-20
        h-72 w-72
        rounded-full
        bg-cyan-400/20
        blur-[120px]
      "/>

      <div className="
        absolute bottom-10 right-20
        h-80 w-80
        rounded-full
        bg-emerald-400/20
        blur-[130px]
      "/>



      {/* Badge */}
      <motion.div
        initial={{opacity:0,y:-30}}
        animate={{opacity:1,y:0}}
        transition={{delay:.3}}
        className="
        absolute top-8 right-6 md:right-12
        "
      >

        <div className="
          flex items-center gap-2
          rounded-full
          border border-white/30
          bg-white/10
          backdrop-blur-xl
          px-5 py-2
          text-black
          shadow-xl
        ">
          <Stethoscope 
          size={18}
          className="text-cyan-300"
          />

          <span className="text-sm">
            30+ Years Pediatric Excellence
          </span>

        </div>

      </motion.div>



      {/* Content */}

      <div className="
      relative z-20
      flex min-h-screen
      items-center
      ">

        <div className="
        mx-auto
        w-full
        max-w-7xl
        px-6
        lg:px-12
        ">


        <motion.div
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:.9}}
        className="max-w-2xl"
        >


          {/* Small Heading */}

          <p className="
          mb-5
          uppercase
          tracking-[6px]
          text-sm
          font-semibold
          text-cyan-300
          ">
            Trusted Pediatrician
          </p>



          {/* Title */}

          <h1 className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          text-white
          drop-shadow-2xl
          ">

            Dr.

            <span className="
            block
            bg-gradient-to-r
            from-cyan-300
            via-teal-300
            to-emerald-300
            bg-clip-text
            text-transparent
            ">
              Gaurav Jadon
            </span>

          </h1>



          <p className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-gray-200
          drop-shadow-lg
          ">

            Consultant Pediatrician committed to delivering compassionate,
            evidence-based healthcare for newborns, infants, children,
            and adolescents with over three decades of clinical excellence.

          </p>



          {/* Stats */}

          <div className="
          mt-8
          flex
          gap-5
          flex-wrap
          ">


            <div className="
            rounded-2xl
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            px-6 py-4
            ">

              <h3 className="
              text-3xl
              font-bold
              text-cyan-300
              ">
                30+
              </h3>

              <p className="text-gray-200 text-sm">
                Years Experience
              </p>

            </div>



            <div className="
            rounded-2xl
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            px-6 py-4
            ">

              <h3 className="
              text-3xl
              font-bold
              text-emerald-300
              ">
                50K+
              </h3>

              <p className="text-gray-200 text-sm">
                Happy Patients
              </p>

            </div>


          </div>




          {/* Buttons */}

          <div className="
          mt-10
          flex
          gap-4
          flex-wrap
          ">


          {/* <button className="
          group
          flex
          items-center
          gap-3
          rounded-full
          bg-cyan-400
          px-8 py-4
          font-semibold
          text-black
          hover:bg-cyan-300
          transition
          shadow-xl
          ">

            <Calendar size={20}/>

            Book Appointment

            <ArrowRight
            size={18}
            className="
            group-hover:translate-x-1
            transition
            "
            />

          </button> */}



          <button className="
          rounded-full
          border
          border-white/40
          bg-white/10
          backdrop-blur-md
          px-8 py-4
          text-white
          hover:bg-white
          hover:text-black
          transition
          ">

            Learn More

          </button>


          </div>



        </motion.div>


        </div>

      </div>



      {/* Scroll */}

      <motion.div
      animate={{
        y:[0,10,0]
      }}
      transition={{
        duration:1.8,
        repeat:Infinity
      }}
      className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      "
      >

        <div className="
        h-14
        w-8
        rounded-full
        border
        border-white/40
        flex
        justify-center
        ">

          <div className="
          mt-2
          h-3
          w-3
          rounded-full
          bg-white
          "/>

        </div>

      </motion.div>


    </section>
  );
};

export default HeroSection;