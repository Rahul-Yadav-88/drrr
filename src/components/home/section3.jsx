"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

const stats = [
  {
    icon: FaStethoscope,
    value: "28+",
    title: "Years Experience",
    subtitle: "Providing compassionate pediatric care",
  },
  {
    icon: FaUsers,
    value: "50K+",
    title: "Happy Patients",
    subtitle: "Children treated across multiple countries",
  },
  {
    icon: FaGlobeAsia,
    value: "3",
    title: "Countries Served",
    subtitle: "India • Kuwait • UAE",
  },
];

export default function Section3() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/home3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      {/* Animated Blur Background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-cyan-500 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
        }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-500 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wider text-cyan-300">
            WHY PARENTS TRUST US
          </p>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Excellence in Pediatric Care
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Decades of clinical excellence, international experience, and
            compassionate healthcare dedicated to every child.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: .6,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Floating Circle */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
                  }}
                  className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-[0_15px_35px_rgba(6,182,212,.35)]"
                >
                  <Icon size={34} />
                </motion.div>

                <h3 className="relative mt-8 text-5xl font-black text-white">
                  {item.value}
                </h3>

                <h4 className="relative mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="relative mt-4 leading-7 text-slate-300">
                  {item.subtitle}
                </p>

                {/* Bottom Accent */}
                <div className="relative mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}