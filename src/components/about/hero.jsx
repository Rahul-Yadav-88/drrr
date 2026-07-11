"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Syringe,
  Baby,
  Pill,
  ClipboardPlus,
  Activity,
} from "lucide-react";

const floatingIcons = [
  { Icon: HeartPulse, pos: "-top-6 left-20", color: "text-red-500", bg: "bg-white", delay: 0 },
  // { Icon: ShieldCheck, pos: "top-20 -right-8", color: "text-green-500", bg: "bg-white", delay: .6 },
  { Icon: Baby, pos: "bottom-24 -left-10", color: "text-pink-500", bg: "bg-white", delay: .9 },
  { Icon: Syringe, pos: "bottom-16 -right-8", color: "text-blue-500", bg: "bg-white", delay: 1.2 },
  { Icon: Pill, pos: "-bottom-5 left-24", color: "text-purple-500", bg: "bg-white", delay: 1.5 },
  // { Icon: ClipboardPlus, pos: "top-1/2 -left-12", color: "text-orange-500", bg: "bg-white", delay: 1.8 },
  { Icon: Activity, pos: "top-1/2 -right-12", color: "text-emerald-500", bg: "bg-white", delay: 2.1 },
    { Icon: Stethoscope, pos: "top-16 -left-8", color: "text-cyan-500", bg: "bg-cyan-300", delay: .3 },

];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <motion.div animate={{x:[0,60,0],y:[0,-40,0]}} transition={{repeat:Infinity,duration:10}} className="absolute -top-24 left-20 w-80 h-80 rounded-full bg-cyan-400/20 blur-[120px]" />
      <motion.div animate={{x:[0,-60,0],y:[0,50,0]}} transition={{repeat:Infinity,duration:12}} className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{opacity:0,x:-60}} animate={{opacity:1,x:0}}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl px-5 py-2 mb-8">
            <ShieldCheck className="text-cyan-300 w-5 h-5"/>
            <span className="text-cyan-300 text-sm">Trusted Pediatric Specialist</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Caring For
            <span className="block text-cyan-300">Every Child's</span>
            Healthy Future
          </h1>

          <h2 className="text-3xl font-bold text-white mt-4">Dr. Gaurav Jadon</h2>

          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-8">
            Expert in General Pediatrics (1 month–18 years). Dedicated to safe,
            compassionate and evidence-based child healthcare.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact">
              <button className="bg-cyan-300 hover:bg-cyan-200 transition px-7 py-4 rounded-xl font-semibold flex items-center gap-2">
                Book Appointment <ArrowRight size={18}/>
              </button>
            </Link>
            <Link href="/about">
              <button className="border border-white/20 bg-white/5 backdrop-blur-xl px-7 py-4 rounded-xl text-white hover:bg-white/10 transition">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,x:80}} animate={{opacity:1,x:0}} className="relative flex justify-center">
          <motion.div animate={{scale:[1,1.08,1],opacity:[.3,.1,.3]}} transition={{repeat:Infinity,duration:4}} className="absolute w-[520px] h-[520px] rounded-full border-2 border-cyan-400/30"/>
          <motion.div animate={{rotate:360}} transition={{repeat:Infinity,duration:25,ease:"linear"}} className="absolute w-[480px] h-[480px] rounded-full border border-cyan-400/20"/>

          <div className="relative">
            {floatingIcons.map(({Icon,pos,color,bg,delay},i)=>(
              <motion.div key={i}
                animate={{y:[0,-10,0],rotate:[0,6,-6,0]}}
                transition={{repeat:Infinity,duration:3,delay}}
                className={`absolute ${pos} ${bg} w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center z-30`}>
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl -z-10"/>
                <Icon className={`${color} w-7 h-7`} />
              </motion.div>
            ))}

            <motion.div whileHover={{rotateY:-8,rotateX:5,scale:1.03}}
              style={{transformStyle:"preserve-3d"}}
              className="relative rounded-[38px] p-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_40px_100px_rgba(0,255,255,.25)]">
              <div className="overflow-hidden rounded-[34px] bg-[#16212f]">
                <Image src="/about1.png" alt="Doctor" width={500} height={650} className="object-cover"/>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
