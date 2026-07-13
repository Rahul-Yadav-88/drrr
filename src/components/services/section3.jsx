"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function SpecialtySection() {
  const specialties = [
    {
      title: "General Pediatrics",
      desc: "Comprehensive care for infants, children, and adolescents.",
      img: "/img1.png",
    },
    {
      title: "Care of Children from 1 Month to 18 Years",
      desc: "Routine checkups, growth monitoring, developmental assessment and preventive healthcare.",
      img: "/img4.png",
    },
    {
      title: "Pediatric Emergency Care",
      desc: "Immediate care for acute illnesses, injuries and medical emergencies.",
      img: "/img5.png",
    },
    {
      title: "Child Growth & Development",
      desc: "Monitoring height, weight, milestones and early childhood development.",
      img: "/img6.png",
    },
    {
      title: "Vaccination & Immunization",
      desc: "Complete childhood vaccination schedule with expert guidance.",
      img: "/img7.png",
    },
    {
      title: "Nutrition & Diet Counseling",
      desc: "Healthy nutrition plans for proper growth and disease prevention.",
      img: "/img1.png",
    },
    {
      title: "Chronic Disease Management",
      desc: "Long-term care for asthma, allergies, anemia and other chronic illnesses.",
      img: "/img8.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef7ff] via-white to-[#edf5ff] py-20">

      {/* Decorative Blur */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-sky-300/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 backdrop-blur-xl px-5 py-2 shadow-md">

            <Sparkles
              size={18}
              className="text-sky-600"
            />

            <span className="text-sky-700 font-semibold text-sm">
              Pediatric Expertise
            </span>

          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#10284F]">
            Our
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}Specialties
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            World-class pediatric care delivered with compassion,
            advanced medical expertise and over
            <span className="font-semibold text-sky-700">
              {" "}28 years{" "}
            </span>
            of experience.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {specialties.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              className="group perspective-[1800px]"
            >

              <div
                className="
                relative
                overflow-hidden
                rounded-[30px]
                bg-white/60
                backdrop-blur-2xl
                border border-white/50
                shadow-[0_15px_45px_rgba(0,0,0,.08)]
                transition-all
                duration-700
                hover:-translate-y-4
                hover:rotate-x-2
                hover:rotate-y-2
                hover:shadow-[0_25px_70px_rgba(14,165,233,.28)]
                p-8
              "
              >

                {/* Gradient Border */}

                <div className="absolute inset-0 rounded-[30px] p-[1.5px] opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">

                  <div className="h-full w-full rounded-[28px] bg-transparent" />

                </div>

                {/* Glow */}

                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-sky-300/20 blur-[70px] group-hover:bg-cyan-400/30 transition duration-700" />

                {/* Icon */}

                <div className="relative z-10 flex justify-between items-start">

                  <div
                    className="
                    h-20
                    w-20
                    rounded-3xl
                    bg-gradient-to-br
                    from-sky-100
                    to-cyan-100
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    transition
                    duration-700
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                  >

                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-10 h-10 object-contain"
                    />

                  </div>

                  <ArrowUpRight
                    className="text-sky-500 transition duration-500 group-hover:rotate-45 group-hover:scale-125"
                    size={24}
                  />

                </div>

                {/* Content */}

                <div className="relative z-10 mt-8">

                  <h3 className="text-2xl font-bold leading-snug text-[#12355B] transition group-hover:text-sky-700">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {item.desc}

                  </p>

                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}