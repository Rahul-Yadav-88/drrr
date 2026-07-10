"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarClock, PhoneCall, ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Hospital Location",
    icon: MapPin,
    color: "from-cyan-500 via-sky-500 to-blue-600",
    subtitle: "Mediclinic Welcare Hospital",
    meta: "Dubai, UAE",
    desc: "Providing comprehensive pediatric and emergency care in a modern healthcare environment.",
    action: "View Location",
    href: "#",
  },
  {
    title: "Schedule Appointment",
    icon: CalendarClock,
    color: "from-emerald-500 via-teal-500 to-cyan-600",
    subtitle: "24/7 Appointment Booking",
    meta: "8001999",
    desc: "Book instantly through our team or the Mediclinic App from anywhere.",
    action: "Book Now",
    href: "#",
  },
  {
    title: "Contact Details",
    icon: PhoneCall,
    color: "from-violet-500 via-fuchsia-500 to-indigo-600",
    subtitle: "Emergency & Queries",
    meta: "☎ 8001999",
    desc: "Our healthcare specialists are available around the clock.",
    action: "Call Now",
    href: "tel:8001999",
  },
];

export default function HeroCards() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[160px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-cyan-400 font-semibold tracking-[0.3em] uppercase">Healthcare</p>
          <h2 className="mt-4 text-5xl font-black text-white">Everything You Need</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Beautiful modern cards with premium interactions and responsive layout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{opacity:0,y:60}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:.6,delay:i*.15}}
                whileHover={{y:-12}}
                className="group relative overflow-hidden rounded-[32px] p-[1px]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />
                <div className="relative h-full rounded-[31px] bg-slate-900/95 p-8 backdrop-blur-xl">
                  <Icon className="absolute right-4 top-4 h-32 w-32 text-white/5 transition group-hover:scale-110" strokeWidth={1}/>
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color}`}>
                    <Icon className="h-8 w-8 text-white"/>
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-white">{card.title}</h3>
                  <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r ${card.color}`}/>
                  <p className="mt-8 text-xl font-semibold text-white">{card.subtitle}</p>
                  <p className="mt-1 text-cyan-300">{card.meta}</p>
                  <p className="mt-6 leading-8 text-slate-400">{card.desc}</p>

                  <motion.a
                    whileHover={{x:5}}
                    href={card.href}
                    className="mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white"
                  >
                    <span className="font-semibold">{card.action}</span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${card.color}`}>
                      <ArrowUpRight className="h-5 w-5 text-white"/>
                    </span>
                  </motion.a>

                  <div className={`absolute -bottom-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-gradient-to-r ${card.color} opacity-20 blur-[90px] group-hover:opacity-40 transition`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
