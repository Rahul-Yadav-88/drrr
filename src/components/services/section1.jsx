"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Section1() {
  const services = [
    {
      title: "General Pediatrics & Child Health",
      desc: "From routine checkups and vaccinations to managing common illnesses, Dr. Jadon ensures comprehensive care for every stage of childhood, focusing on prevention, growth, and development.",
      img: "/1.avif",
    },
    {
      title: "Expert Care for Children up to 18 Years",
      desc: "Expert care for newborns, infants, children and adolescents requiring specialized monitoring, preventive care and advanced pediatric treatment.",
      img: "/2.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef4ff] via-[#f8fbff] to-[#edf6ff] py-20">

      {/* Background Blur */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-sky-300/30 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-5 py-2 backdrop-blur-md shadow-md">

            <Sparkles
              className="text-sky-600"
              size={18}
            />

            <span className="text-sm font-semibold text-sky-700">
              Pediatric Excellence
            </span>

          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#0B214A] sm:text-4xl lg:text-5xl">
            Comprehensive Pediatric Care
            <span className="block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              You Can Trust
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-gray-600 md:text-lg">
            With
            <span className="font-semibold text-sky-700"> 28 years </span>
            of clinical expertise across India, Kuwait and the UAE,
            Dr. Gaurav Jadon provides compassionate, evidence-based
            healthcare for children
            <span className="font-semibold text-sky-700">
              {" "}
              up to 18 years
            </span>
            . His patient-first approach focuses on early diagnosis,
            preventive healthcare and personalized treatment for
            every child.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {services.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              className="group perspective-[2000px]"
            >

              <div
                className="
                relative
                h-[420px]
                overflow-hidden
                rounded-[32px]
                border border-white/40
                bg-white/20
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,.12)]
                transition-all
                duration-700
                group-hover:-translate-y-4
                group-hover:rotate-x-2
                group-hover:rotate-y-2
                group-hover:shadow-[0_30px_80px_rgba(14,165,233,.35)]
              "
              >

                {/* Animated Border */}

                <div className="absolute inset-0 rounded-[32px] p-[1.5px] bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 opacity-0 transition duration-700 group-hover:opacity-100">

                  <div className="h-full w-full rounded-[30px] bg-transparent" />

                </div>

                {/* Image */}

                <div className="absolute inset-0 overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-110 group-hover:rotate-2"
                  />

                </div>

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#001a35] via-[#001a3550] to-transparent" />

                {/* Floating Glow */}

                <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-[90px] group-hover:bg-sky-400/40 transition duration-700" />

                {/* Content */}

                <div className="absolute bottom-0 z-20 p-8">

                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20">

                    <ArrowUpRight
                      className="text-white transition duration-500 group-hover:rotate-45"
                      size={26}
                    />

                  </div>

                  <h3 className="text-2xl font-bold leading-snug text-white lg:text-3xl">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-white/90">

                    {item.desc}

                  </p>

                </div>

                {/* Shine Effect */}

                <div
                  className="
                    absolute
                    -left-full
                    top-0
                    h-full
                    w-1/2
                    rotate-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    transition-all
                    duration-1000
                    group-hover:left-[140%]
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}