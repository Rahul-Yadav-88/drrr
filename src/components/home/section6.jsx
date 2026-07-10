// Section6.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartPulse, Baby, ShieldCheck, ArrowRight } from "lucide-react";

const cardsData = [
  {
    title: "Children Care",
    image: "/card1.png",
    description:
      "Comprehensive care for children from 1 month to 18 years including complex pediatric cases.",
    icon: Baby,
  },
  {
    title: "General Pediatrics",
    image: "/card2.png",
    description:
      "Expert care for infections, nutrition, growth, vaccinations and preventive health.",
    icon: HeartPulse,
  },
];

export default function Section6() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FCFD] to-white py-20">
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-200/30 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-cyan-700 font-semibold">
            Why Choose Dr. Gaurav Jadon
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Trusted Pediatric Care
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            28+ years of international pediatric experience across India,
            Kuwait and the UAE delivering compassionate, evidence‑based care.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cardsData.map((card,index)=>{
            const Icon=card.icon;
            return(
              <motion.div
                key={index}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                whileHover={{y:-8,scale:1.02}}
                viewport={{once:true}}
                transition={{delay:index*0.15}}
                className="overflow-hidden rounded-[30px] bg-white shadow-xl border border-slate-200"
              >
                <div className="relative overflow-hidden">
                  <img src={card.image} className="h-64 w-full object-cover transition duration-500 hover:scale-110" alt={card.title}/>
                  <div className="absolute left-6 bottom-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-xl">
                    <Icon size={28}/>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{card.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-cyan-600 font-semibold">
                    Learn More <ArrowRight size={18}/>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          className="mt-16 rounded-[32px] bg-gradient-to-r from-cyan-600 to-teal-600 p-10 text-center text-white"
        >
          <ShieldCheck className="mx-auto mb-4" size={42}/>
          <h3 className="text-3xl font-black">Compassion • Experience • Excellence</h3>
          <p className="mx-auto mt-4 max-w-3xl text-cyan-50">
            Comprehensive pediatric support from infancy through adolescence.
          </p>

          <Link href="/services">
            <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 shadow-lg hover:scale-105 transition">
              Explore Services
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
