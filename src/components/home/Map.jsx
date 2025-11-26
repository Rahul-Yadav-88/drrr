import React from 'react'

const Map = () => {
  return (
    <div>
       <section className="h-[500px] bg-gray-300 p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3559.02020839374!2d55.33788701531049!3d25.246952388779494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMediclinic%20Welcare%20Hospital%20Dubai!5e0!3m2!1sen!2sin!4v1764164227366!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  )
}

export default Map
