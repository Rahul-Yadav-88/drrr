"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  HeartPulse,
  Stethoscope,
  Baby,
} from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Amazing team and amazing treatment from the best doctor in the world.",
      name: "Michael",
      role: "Patient",
    },
    {
      quote:
        "Very friendly staff and excellent service. Highly recommended!",
      name: "Sophia",
      role: "Patient",
    },
    {
      quote:
        "The doctor treated me like family. Truly grateful for the care.",
      name: "David",
      role: "Patient",
    },
    {
      quote:
        "World-class facilities with a warm-hearted and compassionate team.",
      name: "Emma",
      role: "Patient",
    },
    {
      quote:
        "Professional, caring, and always available whenever needed.",
      name: "Olivia",
      role: "Patient",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-sky-50 via-white to-cyan-50">

      {/* Animated Aurora */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-60 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-300/20 via-cyan-200/10 to-blue-300/20 blur-[140px]"
      />

      {/* Floating circles */}

      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-10 top-20 h-28 w-28 rounded-full bg-sky-200/30 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute right-10 bottom-16 h-36 w-36 rounded-full bg-cyan-200/30 blur-2xl"
      />

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[10%] top-[25%] text-sky-200"
      >
        <HeartPulse size={44} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-[12%] top-[20%] text-cyan-200"
      >
        <Baby size={44} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-[18%] bottom-[18%] text-blue-200"
      >
        <Stethoscope size={44} />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >
          <span className="px-5 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            What Our Patients Say
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Families trust us because every child deserves compassionate,
            world-class pediatric care.
          </p>
        </motion.div>

        {/* Card */}

        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                scale: .92,
                rotateX: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                y: -80,
                scale: .92,
                rotateX: -12,
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 16,
              }}
              whileHover={{
                y: -8,
              }}
              className="relative mx-auto max-w-4xl rounded-[40px] border border-white/50 bg-white/70 backdrop-blur-3xl p-10 md:p-14 shadow-[0_30px_80px_rgba(15,23,42,.12)]"
            >
              {/* Glow */}

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-sky-100/20 to-cyan-100/20 pointer-events-none" />

              {/* Quote */}

              <div className="relative flex justify-between items-center">

                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="h-20 w-20 rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white shadow-xl"
                >
                  <Quote size={36} />
                </motion.div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: i * .08,
                      }}
                    >
                      <Star
                        className="fill-yellow-400 text-yellow-400"
                        size={20}
                      />
                    </motion.div>
                  ))}
                </div>

              </div>

              {/* Quote */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .25 }}
                className="relative mt-10 text-xl leading-10 text-slate-600"
              >
                "{testimonials[index].quote}"
              </motion.p>

              {/* User */}

              <div className="mt-12 flex items-center gap-5">

                <motion.div
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: .8,
                  }}
                  className="h-16 w-16 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center text-xl font-bold shadow-lg"
                >
                  {testimonials[index].name.charAt(0)}
                </motion.div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {testimonials[index].name}
                  </h4>

                  <p className="text-slate-500">
                    {testimonials[index].role}
                  </p>
                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Buttons */}

          <button
            onClick={prev}
            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white shadow-xl hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="mx-auto" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white shadow-xl hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="mx-auto" />
          </button>

          {/* Dots */}

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  index === i
                    ? "w-10 h-3 bg-sky-500"
                    : "w-3 h-3 bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}

          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="mt-8 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"
          />

        </div>

      </div>

    </section>
  );
}