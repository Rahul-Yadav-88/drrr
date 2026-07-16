"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  Linkedin,
} from "lucide-react";


const socialLinks = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/share/17mokYiMp5/?mibextid=wwXIfr",
    bg: "bg-[#1877F2]",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/drgauravjadon",
    bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
  },
  {
    icon: Linkedin,
    link: "http://linkedin.com/in/gauravjadon",
    bg: "bg-[#0A66C2]",
  },
];



const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .7
    }
  }
};



export default function Footer() {


  return (

    <footer className="
relative
overflow-hidden
bg-gradient-to-b
from-[#162833]
via-[#1F1F1F]
to-black
text-white
px-6
pt-20
pb-8
">


      {/* Background Glow */}

      <div className="
absolute
top-0
left-0
h-72
w-72
rounded-full
bg-cyan-400/10
blur-[120px]
"/>


      <div className="
absolute
bottom-0
right-0
h-80
w-80
rounded-full
bg-blue-400/10
blur-[140px]
"/>




      {/* Social Sidebar */}


      <motion.div

        initial={{
          x: -100
        }}

        animate={{
          x: 0
        }}

        transition={{
          duration: .8
        }}

        className="
fixed
left-0
top-1/2
-translate-y-1/2
z-50
hidden
md:flex
flex-col
overflow-hidden
rounded-r-2xl
shadow-2xl
"

      >


        {socialLinks.map((item, index) => {

          const Icon = item.icon;


          return (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
${item.bg}
p-4
transition-all
duration-300
hover:pl-7
`}
            >

              <Icon className="text-white w-6 h-6" />

            </a>

          )

        })}


      </motion.div>







      {/* Top Cards */}


      <motion.div

        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}

        className="
max-w-7xl
mx-auto
grid
grid-cols-1
md:grid-cols-3
gap-6
"


      >


        {[

          {
            title: "Find a clinic near you",
            text: "Find Us On Map"
          },

          {
            title: "Feel free to message us!",
            text: "Send an Email"
          },

          {
            title: "Book an appointment",
            text: "0505870574"
          }

        ].map((item, index) => (


          <div

            key={index}

            className="
group
rounded-3xl
border
border-white/20
bg-white/10
backdrop-blur-xl
p-8
text-center
hover:-translate-y-2
transition-all
duration-500
shadow-xl
"

          >


            <h4 className="
text-[#98DAD9]
font-semibold
text-lg
">

              {item.title}

            </h4>


            <p className="
mt-2
text-white/70
">

              {item.text}

            </p>


          </div>


        ))}



      </motion.div>







      {/* Main Content */}


      <motion.div

        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}

        className="
max-w-7xl
mx-auto
mt-16
grid
grid-cols-1
md:grid-cols-3
gap-12
"


      >


        {/* About */}


        <div>


          <h3 className="
text-3xl
font-bold
text-[#5B8291]
mb-5
">

            About Us

          </h3>


          <p className="
text-white/70
leading-8
">

            Dr. Gaurav Jadon is an experienced Consultant Pediatrician with
            28 years of clinical practice across India, Kuwait, and the UAE.
            He specializes in General Pediatrics and Pediatric emergency,
            providing safe, compassionate, and evidence-based care for children
            up to 18 years.

          </p>


        </div>






        {/* Contact */}


        <div>


          <h3 className="
text-3xl
font-bold
text-[#5B8291]
mb-5
">

            Get In Touch

          </h3>


          <div className="space-y-5 text-white/70">


            <p className="flex gap-3">

              <MapPin />
              Garhoud Dubai UAE

            </p>


            <p className="flex gap-3">

              <Mail />

              <a href="mailto:seemagauravansh@gmail.com">
                seemagauravansh@gmail.com
              </a>

            </p>



            <p className="flex gap-3">

              <Phone />
              0505870574

            </p>


          </div>


        </div>







        {/* Links */}


        <div>


          <h3 className="
text-3xl
font-bold
text-[#5B8291]
mb-5
">

            Quick Links

          </h3>


          <ul className="
space-y-4
text-white/70
">


            <li>
              <Link href="/services">
                → Services
              </Link>
            </li>


            <li>
              <Link href="/about">
                → About
              </Link>
            </li>


            <li>
              <Link href="/contact">
                → Contact
              </Link>
            </li>


          </ul>


        </div>


      </motion.div>









      {/* Appointment */}



      <motion.div

        initial={{
          opacity: 0,
          scale: .9
        }}

        whileInView={{
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: .8
        }}

        viewport={{ once: true }}

        className="
max-w-4xl
mx-auto
mt-20
rounded-3xl
bg-white/10
border
border-white/20
backdrop-blur-xl
p-8
md:p-12
"


      >


        <h3 className="
text-3xl
font-bold
text-[#5B8291]
text-center
mb-8
">

          Schedule An Appointment

        </h3>



        <form className="grid gap-5">


          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="First Name"
              className="inputStyle"
            />


            <input
              placeholder="Last Name"
              className="inputStyle"
            />


          </div>



          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="Phone Number"
              className="inputStyle"
            />


            <input
              placeholder="Email"
              className="inputStyle"
            />


          </div>



          <Link href="/contact">


            <button
              className="
mx-auto
flex
items-center
gap-3
rounded-full
bg-[#29495E]
px-10
py-4
hover:scale-105
transition
"

            >

              Submit

              <ArrowRight size={18} />

            </button>


          </Link>


        </form>


      </motion.div>







      {/* Bottom */}


      <div className="
border-t
border-white/20
mt-12
pt-6
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
text-white/60
text-sm
">


        <p>
          © 2023 Dr. Gaurav Jadon. All rights reserved.
        </p>


        <div className="flex gap-5">

          <Link href="#">
            Privacy
          </Link>

          <Link href="#">
            Terms
          </Link>

          <Link href="#">
            Sitemap
          </Link>


        </div>


      </div>



    </footer>

  )

}