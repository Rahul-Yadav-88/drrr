"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Syringe,
  Baby,
  Stethoscope,
} from "lucide-react";

const expertise = [
  {
    icon: Baby,
    title: "General Pediatrics",
    desc: "Comprehensive care for children from 1 month to 18 years.",
  },
  {
    icon: HeartPulse,
    title: "Pediatric Emergency",
    desc: "Rapid diagnosis and emergency pediatric management.",
  },
  {
    icon: Stethoscope,
    title: "Childhood Asthma",
    desc: "Long-term asthma management and respiratory care.",
  },
  {
    icon: ShieldCheck,
    title: "Adolescent Care",
    desc: "Specialized healthcare for growing teenagers.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    desc: "Complete immunization and preventive healthcare.",
  },
];

export default function Section4() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F7FCFD] via-white to-[#F3FBFC]">

      {/* Background Blobs */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          rotate: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-200/30 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute h-[340px] w-[340px] rounded-full bg-cyan-300/20 blur-[100px]" />

            {/* Floating Circle */}

            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              whileHover={{
                rotateY: 10,
                rotateX: 10,
                scale: 1.04,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 blur-3xl opacity-30" />

              <div className="rounded-full border border-white/60 bg-white/40 p-5 backdrop-blur-xl shadow-[0_35px_80px_rgba(0,0,0,.12)]">

                <img
                  src="/doc.png"
                  alt="Doctor"
                  className="h-[360px] w-[360px] object-cover rounded-full"
                />

              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Areas of Expertise
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
              Specialized Care
              <span className="text-cyan-600">
                {" "}For Every Stage Of Childhood
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Combining international experience with compassionate care,
              Dr. Gaurav provides comprehensive pediatric services focused
              on prevention, early diagnosis, emergency treatment, and
              long-term child wellness.
            </p>

            {/* Expertise Grid */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {expertise.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      rotateX: 8,
                      rotateY: -8,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:border-cyan-300 hover:shadow-2xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg">

                      <Icon size={26} />

                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>

                  </motion.div>
                );
              })}

            </div>

            {/* CTA */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .96,
              }}
              className="mt-12"
            >
              <Link href="/about">

                <button className="rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-9 py-4 font-semibold text-white shadow-[0_20px_45px_rgba(6,182,212,.35)] transition hover:shadow-[0_25px_55px_rgba(6,182,212,.55)]">

                  Explore Expertise →

                </button>

              </Link>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}