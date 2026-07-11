// Section2.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope, HeartPulse, GraduationCap, Award, Baby, ShieldCheck, ArrowRight
} from "lucide-react";

const floatingIcons = [
  { Icon: Stethoscope, top: "8%", left: "4%" },
  { Icon: HeartPulse, top: "15%", right: "6%" },
  { Icon: GraduationCap, bottom: "18%", left: "8%" },
  { Icon: Award, bottom: "12%", right: "10%" },
  { Icon: Baby, top: "52%", left: "2%" },
  { Icon: ShieldCheck, top: "55%", right: "2%" },
];

const timeline = [
  "28 years of clinical practice across India, Kuwait and UAE.",
  "Expert in General Pediatrics from 1 month to 18 years.",
  "Managed pediatric emergencies and complex critical cases.",
  "Research, teaching and international medical conferences.",
  "Published scientific papers in reputed PubMed journals."
];

export default function Section2() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28 px-4 lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/about2.png')" }}
    >
      <div className="absolute inset-0 bg-black/35"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,.25),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(6,182,212,.18),transparent_40%)]"/>
      {floatingIcons.map(({Icon,...style},i)=>(
        <motion.div key={i} style={style}
          animate={{y:[0,-14,0],rotate:[0,6,-6,0]}}
          transition={{duration:5+i,repeat:Infinity}}
          className="absolute hidden lg:flex z-20">
          <div className="rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl p-4 shadow-2xl">
            <Icon className="h-8 w-8 text-cyan-300"/>
          </div>
        </motion.div>
      ))}
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="relative rounded-[36px] p-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
          <div className="relative rounded-[36px] border border-white/15 bg-white/10 backdrop-blur-2xl p-8 lg:p-14 overflow-hidden">
            <motion.div animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:4}}
              className="absolute right-8 top-8 rounded-3xl bg-white text-center p-5 shadow-xl">
              <div className="text-4xl font-black text-cyan-600">28+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 text-cyan-100">
                  <HeartPulse size={18}/> ABOUT THE DOCTOR
                </span>
                <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white">Dr. Gaurav Jadon</h2>
                <p className="mt-3 text-cyan-200 text-xl font-semibold">International Pediatric Specialist</p>
                <p className="mt-5 text-white/90">Diploma in European Board of Pediatrics</p>
                <p className="text-white/80">DNB Pediatrics • DCH • MBBS</p>

                <div className="grid grid-cols-3 gap-4 mt-10">
                  {[
                    ["28+","Years"],
                    ["3","Countries"],
                    ["1000+","Children"]
                  ].map(([v,l])=>(
                    <div key={l} className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-5 text-center hover:-translate-y-2 transition">
                      <div className="text-3xl font-bold text-cyan-300">{v}</div>
                      <div className="text-white/80">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white shadow-xl">
                  <p className="italic text-lg">“Every child deserves compassionate care backed by science.”</p>
                  <p className="mt-3 font-semibold">— Dr. Gaurav Jadon</p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Professional Journey</h3>
                <div className="space-y-8">
                  {timeline.map((t,i)=>(
                    <div key={i} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-cyan-400"/>
                        {i<timeline.length-1 && <div className="w-1 flex-1 bg-cyan-400/40 mt-2"/>}
                      </div>
                      <p className="text-white/90 leading-8">{t}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-white/10 p-6 backdrop-blur-xl">
                  <h4 className="text-2xl font-bold text-cyan-200">Dedicated to Children's Health</h4>
                  <p className="mt-3 text-white/80">Compassionate, evidence-based pediatric care backed by decades of international experience.</p>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white">Learn More <ArrowRight size={18}/></button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
