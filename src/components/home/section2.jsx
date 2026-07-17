"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Award,
  Globe,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export default function Section2() {
  return (
    <section className="relative overflow-hidden bg-[#F7FCFD] py-20">

      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-200/30 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Card */}

            <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,.08)] p-10">

              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-100 blur-3xl" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg"
              >
                <Stethoscope size={36} />
              </motion.div>

              <p className="mt-8 text-sm uppercase tracking-[4px] text-cyan-600 font-semibold">
                Pediatric Specialist
              </p>

              <h2 className="mt-3 text-5xl font-black leading-tight text-slate-900">
                Dr. Gaurav
                <br />
                Jadon
              </h2>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3 text-slate-600">
                  <Award className="text-cyan-600" size={20} />
                  Diploma European Board of Pediatrics
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <GraduationCap className="text-cyan-600" size={20} />
                  DNB • DCH • MBBS
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Globe className="text-cyan-600" size={20} />
                  India • Kuwait • UAE
                </div>

              </div>

            </div>

            {/* Floating Experience */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-8 top-10 hidden lg:block"
            >
              <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-teal-500 p-6 text-white shadow-2xl">

                <div className="text-4xl font-black">
                  28+
                </div>

                <div className="text-sm opacity-90">
                  Years Experience
                </div>

              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              About The Doctor
            </span>

            <h2 className="mt-5 text-5xl font-black leading-tight text-slate-900">
              Trusted Pediatric Care
              <span className="text-cyan-600">
                {" "}For Every Child.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              With more than <strong>28 years of clinical excellence</strong>,
              Dr. Gaurav Jadon has cared for thousands of children across
              India, Kuwait and the UAE. His practice combines international
              standards with compassionate, family-centered pediatric care.
            </p>

            {/* Feature Cards */}

            <div className="mt-10 space-y-5">

              {[
                {
                  icon: HeartPulse,
                  title: "Special Interests",
                  desc: "General Pediatrics, Emergency Care, Childhood Asthma, Adolescent Health & Vaccinations."
                },
                {
                  icon: ShieldCheck,
                  title: "International Expertise",
                  desc: "European Board Certified over 28 years of experience in India ,Kuwait ,UAE including recent 14.5 years in NMC Speciality Hospital Dubai "
                },
                {
                  icon: Award,
                  title: "Current Practice",
                  desc: "Consultant Pediatrician, Dubai, UAE, 0505870574"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                    transition: {
                      duration: .25,
                    },
                  }}
                  className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-cyan-300 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <item.icon size={24} />
                  </div>

                  <div>

                    <h4 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}