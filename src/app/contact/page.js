"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  HeartPulse,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-[#eef8ff] via-white to-[#f5fcff]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Contact Form */}
        <div className="bg-white rounded-[32px] shadow-2xl p-10">
          <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold mt-5 leading-tight">
            Let's Talk About{" "}
            <span className="text-cyan-600">Your Child's Health</span>
          </h2>

          <p className="mt-5 text-gray-500">
            We are committed to providing exceptional pediatric care.
          </p>

          <form className="space-y-5 mt-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-cyan-500 transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-cyan-500 transition"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-cyan-500 transition"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-cyan-500 transition resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white p-4 flex justify-center items-center gap-2 transition-all duration-300"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

        {/* Right Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-[36px] overflow-hidden bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="h-48 bg-gradient-to-r from-cyan-500 to-sky-600 p-8 text-white relative">
            <HeartPulse size={64} />

            <h3 className="text-3xl font-bold mt-4">
              Dr. Gaurav Jadon
            </h3>

            <p className="text-cyan-100">
              Consultant Pediatrician
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["28+", "Years"],
                ["5000+", "Families"],
                ["24/7", "Support"],
                ["100%", "Care"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-3xl bg-cyan-50 p-6 text-center"
                >
                  <h4 className="text-3xl font-bold text-cyan-600">
                    {number}
                  </h4>

                  <p className="text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-600 text-white p-6 mt-8">
              <h4 className="text-2xl font-bold">
                Contact for expert Pediatric care 
              </h4>

              <p className="mt-2 opacity-90">
                Expert pediatric care with compassion and modern treatment.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-50 rounded-3xl p-5">
                <Phone className="text-cyan-600 mb-3" />

                <p className="font-semibold">
                  0505870574
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-2">
                <Mail className="text-cyan-600 mb-3" />

                <p className="font-semibold break-all">
                  seemagauravansh@gmail.com
                </p>
              </div>

              {/* <div className="bg-slate-50 rounded-3xl p-5 col-span-2">
                <MapPin className="text-cyan-600 mb-3" />

                <p>
                  Garhoud Dubai UAE
                </p>
              </div> */}
            </div>
          </div>

          {/* Floating Icons */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="absolute top-6 right-6"
          >
            <ShieldPlus size={34} className="text-white" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute bottom-6 left-6"
          >
            <Stethoscope size={34} className="text-cyan-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}