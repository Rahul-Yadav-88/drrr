"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, Ambulance, ArrowRight } from "lucide-react";

export default function Section5() {
  return (
    <section className="relative overflow-hidden py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C64] via-[#1C6A83] to-[#0F4C64]" />

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-400 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
        }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-300 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,.25)]"
        >

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center p-8 lg:p-12">

            {/* Left */}

            <div className="flex items-center gap-6">

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, -6, 6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_15px_40px_rgba(239,68,68,.45)]"
              >
                <Ambulance className="text-white" size={38} />
              </motion.div>

              <div>

                <span className="inline-block rounded-full bg-red-500/20 px-4 py-2 text-xs font-bold tracking-[3px] text-red-200">
                  24 × 7 EMERGENCY
                </span>

                <h2 className="mt-4 text-3xl md:text-5xl font-black text-white leading-tight">
                  Need Immediate
                  <span className="text-cyan-300">
                    {" "}Medical Help?
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
                  If your child requires urgent medical attention,
                  contact our emergency team immediately.
                  We're available 24 hours a day to provide
                  expert pediatric care.
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="flex flex-col items-center gap-6">

              <motion.a
                href="tel:8001999"
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="group flex items-center gap-4 rounded-3xl bg-white px-8 py-6 shadow-2xl"
              >

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                >
                  <PhoneCall size={24} />
                </motion.div>

                <div>

                  <p className="text-sm uppercase tracking-widest text-slate-500">
                    Emergency Helpline
                  </p>

                  <h3 className="text-3xl font-black text-slate-900">
                    800 1999
                  </h3>

                </div>

              </motion.a>

              <Link href="/contact">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .95,
                  }}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-white font-semibold shadow-[0_15px_35px_rgba(6,182,212,.35)] transition"
                >

                  Contact Emergency

                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>

                </motion.button>

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}