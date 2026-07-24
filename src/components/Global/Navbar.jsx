"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {

    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [open]);



  return (

    <motion.header

      initial={{
        y: -50,
        opacity: 0
      }}

      animate={{
        y: 0,
        opacity: 1
      }}

      transition={{
        duration: 0.5
      }}

      className="
      w-full
      bg-white
      border-b
      border-slate-200
      sticky
      top-0
      z-50
      "

    >


      <nav className="
      max-w-7xl
      mx-auto
      h-20
      px-5
      md:px-8
      flex
      items-center
      justify-between
      ">



        {/* Logo */}

        <Link
          href="/"
          className="
          flex
          items-center
          gap-4
          "
        >


          <img

            src="/logo.png"

            alt="Dr Gaurav Jadon"

            className="
            w-14
            h-14
            rounded-full
            object-cover
            border-2
            border-cyan-100
            "

          />


          <div>

            <h1 className="
            text-lg
            md:text-xl
            font-bold
            text-slate-800
            ">

              Dr. Gaurav Jadon

            </h1>


            <p className="
            text-sm
            text-cyan-600
            font-medium
            ">

              Consultant Pediatrician

            </p>


          </div>


        </Link>







        {/* Desktop Menu */}

        <ul className="
        hidden
        md:flex
        items-center
        gap-9
        ">


          {
            navLinks.map((link) => (

              <li
                key={link.name}
                className="
                relative
                "
              >


                <Link

                  href={link.href}

                  className={`
                  text-sm
                  font-semibold
                  transition-colors
                  duration-300

                  ${
                    pathname === link.href
                      ?
                      "text-cyan-600"
                      :
                      "text-slate-600 hover:text-cyan-600"
                  }

                  `}

                >

                  {link.name}

                </Link>



                {
                  pathname === link.href &&

                  <motion.span

                    layoutId="active"

                    className="
                    absolute
                    left-0
                    right-0
                    -bottom-3
                    h-[3px]
                    rounded-full
                    bg-cyan-600
                    "

                  />

                }


              </li>

            ))
          }


        </ul>







        {/* Appointment Button */}

        <button

          className="
          hidden
          md:flex
          items-center
          gap-2
          bg-gradient-to-r
          from-cyan-600
          to-emerald-500
          text-white
          px-6
          py-3
          rounded-lg
          font-semibold
          shadow-md
          hover:scale-105
          transition
          "

        >

          <Calendar size={18} />

          Appointment

        </button>







        {/* Mobile Menu Button */}

        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          p-2
          rounded-lg
          bg-slate-100
          text-slate-700
          "

        >

          {
            open
              ?
              <X size={24} />
              :
              <Menu size={24} />
          }


        </button>



      </nav>








      {/* Mobile Menu */}

      <AnimatePresence>


        {
          open &&

          <motion.div

            initial={{
              height: 0,
              opacity: 0
            }}

            animate={{
              height: "auto",
              opacity: 1
            }}

            exit={{
              height: 0,
              opacity: 0
            }}

            className="
            md:hidden
            border-t
            border-slate-200
            bg-white
            overflow-hidden
            "

          >


            <div className="
            px-6
            py-6
            flex
            flex-col
            gap-5
            ">



              {
                navLinks.map((link) => (

                  <Link

                    key={link.name}

                    href={link.href}

                    onClick={() => setOpen(false)}

                    className={`
                    text-lg
                    font-semibold

                    ${
                      pathname === link.href
                        ?
                        "text-cyan-600"
                        :
                        "text-slate-700"
                    }

                    `}

                  >

                    {link.name}

                  </Link>


                ))
              }





              <button

                className="
                flex
                items-center
                justify-center
                gap-2
                bg-cyan-600
                text-white
                py-3
                rounded-lg
                font-semibold
                "

              >

                <Calendar size={18} />

                Book Appointment

              </button>



            </div>


          </motion.div>

        }


      </AnimatePresence>



    </motion.header>

  );
}