"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  HeartPulse,
  Stethoscope,
 ShieldPlus,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#eef8ff] via-white to-[#f5fcff]">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-cyan-200/30 blur-[130px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-300/20 blur-[170px] rounded-full" />

      {/* Floating Icons */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-cyan-300 opacity-20"
      >
        <HeartPulse size={55} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-24 top-36 text-sky-300 opacity-20"
      >
        <ShieldPlus size={60} />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-24 left-1/3 text-cyan-300 opacity-20"
      >
        <Stethoscope size={55} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          whileHover={{
            rotateX: 4,
            rotateY: -4,
            scale: 1.02,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative"
        >

          {/* Glow */}

          <div className="absolute -inset-1 rounded-[35px] bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 blur-xl opacity-25" />

          <div className="relative backdrop-blur-xl bg-white/80 border border-white rounded-[35px] p-10 shadow-2xl">

            <span className="inline-flex px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
              Contact Us
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-800">
              Let's Talk About
              <span className="block text-cyan-600">
                Your Child's Health
              </span>
            </h2>

            <p className="text-gray-500 mt-5 leading-8">
              We are committed to providing exceptional pediatric care.
              Reach out today to schedule your appointment.
            </p>

            <form className="mt-10 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none"
              />

              <select className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">

                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Friend</option>

              </select>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{ scale: .97 }}
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-600 py-4 font-semibold text-white shadow-xl flex justify-center items-center gap-3"
              >
                Send Message
                <Send size={18} />
              </motion.button>

            </form>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <motion.div
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
              >
                <Phone className="text-cyan-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-500">8001999</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
              >
                <Mail className="text-cyan-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-500">
                    Gaurav.jadon@mediclinic.ae
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          whileHover={{
            rotateY: 5,
            rotateX: -5,
            scale: 1.02,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative"
        >

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="rounded-[35px] overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,.18)] border border-white bg-white"
          >

            <iframe
              title="Clinic Map"
              width="100%"
              height="650"
              loading="lazy"
              className="grayscale-[10%]"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3559.02020839374!2d55.33788701531049!3d25.246952388779494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMediclinic%20Welcare%20Hospital%20Dubai!5e0!3m2!1sen!2sin!4v1764164227366!5m2!1sen!2sin"
            />

          </motion.div>

          {/* Floating Location Card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-2xl px-6 py-5 flex gap-4 items-center"
          >

            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center">

              <MapPin className="text-cyan-600" />

            </div>

            <div>

              {/* <h4 className="font-bold text-slate-800">
                Mediclinic Welcare Hospital
              </h4> */}

              <p className="text-gray-500 text-sm">
                Al Garhoud, Dubai.
              </p>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}