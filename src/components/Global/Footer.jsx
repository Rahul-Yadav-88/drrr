"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {Mail,Phone,Facebook,Instagram,Linkedin,MapPin,ArrowRight,HeartPulse} from "lucide-react";

const socials=[
{icon:Facebook,href:"https://www.facebook.com/share/17mokYiMp5/?mibextid=wwXIfr",bg:"from-blue-600 to-blue-500",label:"Facebook"},
{icon:Instagram,href:"https://www.instagram.com/drgauravjadon",bg:"from-pink-500 via-purple-500 to-orange-400",label:"Instagram"},
{icon:Linkedin,href:"http://linkedin.com/in/gauravjadon",bg:"from-sky-600 to-blue-700",label:"LinkedIn"},
];
const stats=[["28+","Years"],["5000+","Happy Families"],["24/7","Support"],["100%","Trusted"]];
export default function Footer(){
return(
<footer className="relative overflow-hidden bg-gradient-to-b from-[#122430] via-[#171d23] to-black text-white pt-24">
<div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:60px_60px]"/>
<div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]"/>
<div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-500/20 blur-[120px]"/>
<motion.div initial={{x:-80}} animate={{x:0}} className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-50">
{socials.map((s,i)=>{const I=s.icon;return <a key={i} href={s.href} target="_blank" className={`group flex items-center gap-3 rounded-full bg-gradient-to-r ${s.bg} px-4 py-3`}><I size={20}/><span className="max-w-0 overflow-hidden group-hover:max-w-32 transition-all">{s.label}</span></a>})}
</motion.div>
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300"><HeartPulse size={16}/> Pediatric Care</div>
<h2 className="text-4xl font-bold mt-5">Your Child Deserves Exceptional Care</h2>
<p className="text-white/70 mt-4 max-w-2xl mx-auto">Book a consultation with Dr. Gaurav Jadon for compassionate, evidence‑based pediatric care.</p>
<div className="flex justify-center gap-4 mt-8 flex-wrap">
{/* <Link href="/contact" className="rounded-full bg-cyan-500 px-8 py-4 font-semibold flex items-center gap-2">Book Appointment<ArrowRight size={18}/></Link> */}
<a href="tel:0505870574" className="rounded-full border border-white/20 px-8 py-4">Call Now</a>
</div></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-14">{stats.map(([n,l])=><motion.div whileHover={{y:-5}} key={l} className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center"><div className="text-4xl font-bold text-cyan-300">{n}</div><div className="text-white/70 mt-2">{l}</div></motion.div>)}</div>
<div className="grid md:grid-cols-3 gap-10 py-8">
<div><h3 className="text-2xl font-bold text-cyan-300 mb-4">About</h3><p className="text-white/70 leading-8">Dr. Gaurav Jadon is a Consultant Pediatrician with 28+ years of experience across India, Kuwait and the UAE, delivering compassionate care for children.</p></div>
<div><h3 className="text-2xl font-bold text-cyan-300 mb-4">Contact</h3><div className="space-y-4 text-white/70"><p className="flex gap-3"><Mail/>seemagauravansh@gmail.com</p><p className="flex gap-3"><Phone/>0505870574</p><p className="flex gap-3"><MapPin/>Dubai, UAE</p></div></div>
<div><h3 className="text-2xl font-bold text-cyan-300 mb-4">Quick Links</h3><div className="space-y-3"><Link href="/about">About →</Link><br/><Link href="/services">Services →</Link><br/><Link href="/contact">Contact →</Link></div></div>
</div>
<div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between text-white/60 text-sm">
<p>© 2026 Dr. Gaurav Jadon. All rights reserved.</p><div className="flex gap-5"><Link href="#">Privacy</Link><Link href="#">Terms</Link><Link href="#">Sitemap</Link></div>
</div>
</div></footer>)}
