// 'use client'

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

// export default function DoctorPortfolio() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mobile: '',
//     email: ''
//   });

//   const schedules = [
//     {
//       location: "NMC Specialty Hospital, Dubai",
//       days: "Mon - Sat",
//       time: "5:30PM - 9:00PM",
//       description: "For consultations, vaccinations, newborn care & pediatric follow-ups."
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % schedules.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + schedules.length) % schedules.length);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Appointment request submitted!');
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
  

//       {/* Hero Section with Overlapping Cards */}
//       <section id="home" className="w-full relative">
//         <img 
//           src="/image.png" 
//           alt="Hero Background"
//           className="w-full h-auto object-cover"
//         />
        
//         {/* Progress Line and Numbers */}
//         <div className="absolute bottom-8 left-0 right-0 px-8">
//           <div className="max-w-7xl mx-auto">
//             {/* Line */}
//             <div className="relative h-0.5 bg-white/30 mb-4">
//               <div className="absolute top-0 left-0 h-full bg-white" style={{ width: '33%' }}></div>
//             </div>
            
//             {/* Numbers */}
//             <div className="grid grid-cols-3 text-white">
//               <div className="text-left">
//                 <span className="text-2xl font-light">1</span>
//               </div>
//               <div className="text-center">
//                 <span className="text-2xl font-light">2</span>
//               </div>
//               <div className="text-right">
//                 <span className="text-2xl font-light">3</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Three Overlapping Cards */}
//         <div className="absolute bottom-0 left-0 right-0 px-8 translate-y-1/2">
//           <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
//             {/* Clinic Location Card */}
//             <div className="bg-teal-800 text-white p-6 shadow-2xl">
//               <h3 className="text-sm font-bold mb-3">Clinic Location</h3>
//               <h4 className="text-base font-bold mb-2">NMC Specialty Hospital, Dubai</h4>
//               <p className="text-xs text-teal-100 mb-3">Al Nahda 2, Dubai, UAE</p>
//               <p className="text-xs text-teal-50 leading-relaxed mb-5">
//                 Providing comprehensive pediatric, neonatal & emergency care in a modern clinical environment.
//               </p>
//               <button className="flex items-center gap-2 border-2 border-white px-5 py-2 text-xs font-bold hover:bg-white hover:text-teal-800 transition">
//                 CONTACT US <ArrowRight className="w-3 h-3" />
//               </button>
//             </div>

//             {/* Schedule Card */}
//             <div className="bg-teal-700 text-white p-6 shadow-2xl">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="text-sm font-bold leading-tight">Schedule an<br/>Appointment</h3>
//                 <div className="flex gap-1">
//                   <button onClick={prevSlide} className="w-6 h-6 border-2 border-white flex items-center justify-center hover:bg-white hover:text-teal-700 transition">
//                     <ChevronLeft className="w-3 h-3" />
//                   </button>
//                   <button onClick={nextSlide} className="w-6 h-6 border-2 border-white flex items-center justify-center hover:bg-white hover:text-teal-700 transition">
//                     <ChevronRight className="w-3 h-3" />
//                   </button>
//                 </div>
//               </div>
//               <h4 className="text-base font-bold mb-2">{schedules[currentSlide].location}</h4>
//               <div className="flex justify-between mb-3 text-xs text-teal-50 font-semibold">
//                 <span>{schedules[currentSlide].days}</span>
//                 <span>{schedules[currentSlide].time}</span>
//               </div>
//               <p className="text-xs text-teal-50 leading-relaxed">
//                 {schedules[currentSlide].description}
//               </p>
//             </div>

//             {/* Contact Details Card */}
//             <div className="bg-teal-900 text-white p-6 shadow-2xl">
//               <h3 className="text-sm font-bold mb-2">Contact Details</h3>
//               <p className="text-xs text-teal-100 mb-4">For appointments and urgent queries:</p>
//               <a href="tel:+971505870574" className="flex items-center gap-2 text-lg font-bold hover:text-teal-300 transition">
//                 <Phone className="w-5 h-5" />
//                 +971 50 587 0574
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Spacer for overlapping cards */}
//       <div className="h-40"></div>

//       {/* About Section */}
//       <section id="about" className="bg-white py-20 px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-20 items-start">
//             <div className="border-l-4 border-blue-500 pl-8">
//               <h2 className="text-4xl font-bold text-gray-700 mb-2">DR.</h2>
//               <h2 className="text-4xl font-bold text-gray-700 mb-5">Gaurav Jadon</h2>
//               <p className="text-lg text-gray-600 font-medium">MBBS, DCH, DNB Pediatrics, EBP (Europe)</p>
//             </div>
            
//             <div className="space-y-5 text-gray-600 leading-relaxed text-base">
//               <p>
//                 Dr. Gaurav Jadon is a highly experienced Consultant Pediatrician with 28 years of clinical expertise across India, Kuwait, and the UAE. He specializes in General Pediatrics, Neonatology, and Pediatric Intensive Care, offering compassionate and evidence-based care for newborns, infants, and children.
//               </p>
//               <p>
//                 He currently serves at NMC Specialty Hospital, Dubai, and is recognized for his commitment to child health, medical education, and international research.
//               </p>
//             </div>
//           </div>
          
//           <div className="mt-12 text-center">
//             <button className="px-16 py-4 bg-teal-700 text-white text-sm font-bold hover:bg-teal-800 transition tracking-wider">
//               READ MORE
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Full Width Image */}
//       <section className="w-full">
//         <img 
//           src="/image2.png" 
//           alt="Statistics"
//           className="w-full h-auto object-cover"
//         />
//       </section>

//       {/* Expertise Section */}
//       <section id="services" className="bg-white py-20 px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-start">
//             <div className="w-full">
//               <img 
//                 src="/image3.png" 
//                 alt="Dr. Gaurav Jadon"
//                 className="w-full h-auto shadow-2xl"
//                 style={{ maxHeight: '600px', objectFit: 'cover' }}
//               />
//             </div>
            
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <div className="border-t-4 border-teal-600 w-24 mb-8"></div>
//                 <h3 className="text-3xl font-bold text-teal-700 mb-6">Areas of Expertise</h3>
//                 <p className="text-lg text-gray-600 leading-relaxed mb-10">
//                   Leading Consultant Pediatrician with 28 years of experience in General Pediatrics, Neonatology, and Pediatric Intensive Care. Trusted for compassionate, evidence-based care.
//                 </p>
//               </div>
//               <button className="px-12 py-4 bg-teal-700 text-white text-sm font-bold hover:bg-teal-800 transition tracking-wider self-start">
//                 READ MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Emergency Banner */}
//       <section className="bg-gray-100 py-6 px-8">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
//           <p className="text-lg text-gray-700">
//             In case of <span className="font-bold text-teal-700">EMERGENCY</span>, call <span className="font-bold">+91 9701757017</span>
//           </p>
//           <button className="flex items-center gap-3 px-10 py-3 bg-teal-800 text-white text-sm font-bold hover:bg-teal-900 transition">
//             OR SEND US MESSAGE <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>

//       {/* Why Choose Section */}
//       <section className="bg-white py-20 px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">Why Choose Dr. Gaurav Jadon</h2>
//           <div className="w-24 h-1 bg-teal-600 mx-auto mb-16"></div>
          
//           <div className="space-y-6 text-gray-600 leading-relaxed mb-16 text-lg max-w-6xl mx-auto">
//             <p>
//               Dr. Gaurav Jadon brings 28 years of pediatric expertise across India, Kuwait, and the UAE. His practice blends clinical excellence, compassion, and evidence-based care, making him a trusted pediatrician for families across the region.
//             </p>
//             <p>
//               With strong expertise in General Pediatrics, Neonatology, and Pediatric Intensive Care, he has managed a wide variety of complex presentations and conditions. He has cared for premature babies, critically ill children, and acute emergencies, while also guiding routine pediatric care, growth monitoring, and preventive health.
//             </p>
//             <p>
//               In addition to his clinical work, he has played an active role in training medical residents, leading clinical audits, and contributing to international conferences and research. His commitment to continuous learning and quality improvement reflects his dedication to raising pediatric care standards.
//             </p>
//             <p>
//               He offers expert care across a broad spectrum of pediatric and neonatal conditions, providing comprehensive support from infancy through adolescence.
//             </p>
//           </div>

//           {/* Services Cards */}
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <div className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition">
//               <img 
//                 src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400" 
//                 alt="Newborn Care"
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Newborn & Neonatal Care</h3>
//                 <p className="text-base text-gray-600 leading-relaxed">
//                   Comprehensive care for newborns, including premature babies and NICU-level support. Expert in neonatal resuscitation, ventilation, surfactant therapy, and management of high-risk newborn conditions.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition">
//               <img 
//                 src="https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=400" 
//                 alt="General Pediatrics"
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">General Pediatrics</h3>
//                 <p className="text-base text-gray-600 leading-relaxed">
//                   Complete medical care for infants, children, and adolescents covering infections, allergies, nutrition, growth, development, vaccinations, and long-term pediatric health.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition">
//               <img 
//                 src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400" 
//                 alt="Pediatric Intensive Care"
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Pediatric Intensive Care</h3>
//                 <p className="text-base text-gray-600 leading-relaxed">
//                   Advanced management of critically ill children, including respiratory failure, sepsis, trauma, and complex emergencies. Skilled in mechanical ventilation, PICU protocols, and multidisciplinary pediatric critical care.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="text-center">
//             <button className="px-16 py-4 bg-teal-700 text-white text-sm font-bold hover:bg-teal-800 transition tracking-wider">
//               VIEW MORE
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Partner Logos */}
//       <section className="bg-gray-50 py-16 px-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
//           <div className="text-center text-gray-300 opacity-40">
//             <div className="text-sm font-light">BIO</div>
//             <div className="font-bold text-2xl">PHARMA</div>
//             <div className="text-xs font-light">HOME & FAMILY</div>
//           </div>
//           <div className="text-center text-gray-300 text-3xl font-serif italic opacity-40">
//             foveris
//           </div>
//           <div className="text-center text-gray-300 opacity-40">
//             <div className="text-2xl font-light">+Aetia</div>
//             <div className="text-xs font-light">PHARMACEUTICS</div>
//           </div>
//           <div className="text-center text-gray-300 border-2 border-gray-300 px-4 py-3 opacity-40">
//             <div className="text-base font-bold">BRIGHTMED</div>
//             <div className="text-xs font-light">HOSPITAL EQUIPMENT</div>
//           </div>
//           <div className="text-center text-gray-300 opacity-40">
//             <div className="text-base font-bold">MEDSCREEN</div>
//             <div className="text-xs font-light">DUBAI MEDICAL TESTING</div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonial */}
//       <section className="bg-gray-900 py-24 px-8">
//         <div className="max-w-6xl mx-auto text-center text-white">
//           <p className="text-lg leading-relaxed mb-10 font-light">
//             Dr. Gaurav Jadon is a Consultant Pediatrician with over 28 years of post-specialization experience across India, Kuwait, and the UAE. He specializes in General Pediatrics, Neonatology, and Pediatric Intensive Care, combining clinical expertise with academic leadership. Certified by the European Board of Pediatrics, Dr. Jadon serves at NMC Specialty Hospital, Dubai. He actively contributes to teaching, clinical audits, and international research forums. Passionate about pediatric education and evidence-based practice, he continues to advance child health standards in the GCC region through compassionate care and lifelong learning.
//           </p>
//           <p className="text-base font-semibold tracking-wide">- Harsh Vardhan</p>
//         </div>
//       </section>

//       {/* Map */}
//       <section className="h-96 bg-gray-300">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4!2d55.37!3d25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzI0LjQiTiA1NcKwMjInMTIuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </section>


//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
