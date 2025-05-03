// import React from 'react';
// import './career.css';
// import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
// import { BsArrowDownCircle } from "react-icons/bs";
// import {
//   FaPhoneAlt,
//  FaEnvelope,
  
// } from 'react-icons/fa';

// const ContactUs = () => {
//   const handleScrollDown = () => {
//     window.scrollBy({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <div className="contact-us-container">
//   <Breadcrumb currentPage="Contact-Us" />

//   <section className="contact-hero">
//         <div className="contact-hero-content">
      
//       <div className="contact-content">
//         {/* <div className="vertical-line22"></div> */}
//         <div className="career-text">
//         <h1>Build Your Career with Us.</h1>
//           <h2>Together, We'll Achieve Great Things.</h2>
//           <p>
//           We're Hiring! Find Your Dream Role Here
//           </p>
//           <div className="scroll-down" onClick={handleScrollDown}>
//            <BsArrowDownCircle size={35} />
//           </div>
//         </div>
//       </div>
//      </div>
//       </section>
//       <section className="join-team-section">
//   <div className="join-team-content">
//     <h2>Join Our Team</h2>
//     <p>Fill out the form and attach your resume. We’ll get in touch soon!</p>

//     <form
//       action="https://formspree.io/f/mkgrjvva" method="POST"
//       encType="multipart/form-data"
//       className="career-form"
//     >
//       <input type="text" name="name" placeholder="Your Name" required />
//       <input type="email" name="email" placeholder="Your Email" required />
//       <input type="text" name="position" placeholder="Position You’re Interested In" />
//       <textarea name="message" placeholder="Your Message" rows="5"></textarea>
      
//       {/* <label className="file-label">
//         Attach Resume:
//         <input type="file" name="attachment" accept=".pdf,.doc,.docx" />
//       </label> */}

//       <button type="submit">Submit Application</button>
//     </form>

//     <div className="whatsapp-contact">
//       <a
//         href="https://wa.me/919922058133?text=Hello%20Bitshine%20Infotech%2C%20I%20am%20interested%20in%20a%20career%20opportunity."
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         📱 Contact via WhatsApp
//       </a>
//     </div>
//   </div>
// </section>



//     </div>
//   );
// };

// export default ContactUs;


import React from 'react';
import './career.css';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact-us-container">
      <Breadcrumb currentPage="Contact-Us" />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-content">
            <div className="career-text">
              <h1>Build Your Career with Us.</h1>
              <h2>Together, We'll Achieve Great Things.</h2>
              <p>We're Hiring! Find Your Dream Role Here</p>
              <div className="scroll-down" onClick={handleScrollDown}>
                <BsArrowDownCircle size={35} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Application Form */}
      <section className="career-application-section">
        <div className="career-form-wrapper">
          <h2 className="form-heading">Join Our Team</h2>
          <p className="form-subtext">
            Interested in growing with us? Submit your application below — we’re eager to meet talented individuals like you!
          </p>

          <form
            action="https://formspree.io/f/mkgrjvva"
            method="POST"
            className="career-form"
          >
            <div className="form-grid">
              <input type="text" name="name" placeholder="Full Name *" required />
              <input type="email" name="email" placeholder="Email Address *" required />
              <input type="text" name="position" placeholder="Position Interested In" />
              <input type="tel" name="phone" placeholder="Phone Number" />
            </div>
            <textarea name="message" placeholder="Tell us why you’re a great fit..." rows="5"></textarea>

            <div className="form-footer">
              <button type="submit">Submit Application</button>
              <a
                href="https://wa.me/919922058133?text=Hello%20Bitshine%20Infotech%2C%20I%20am%20interested%20in%20a%20career%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <FaWhatsapp size={20} /> Chat with HR on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>

      <section className="why-join-us">
  <div className="why-join-container">
    <h2>Why Join HHAK?</h2>
    <div className="why-join-grid">
      <div className="reason-card">
        <h3>🌍 Global Exposure</h3>
        <p>Work with clients and partners across the globe on impactful projects.</p>
      </div>
      <div className="reason-card">
        <h3>💡 Innovation-First</h3>
        <p>We foster a culture that supports new ideas and modern technologies.</p>
      </div>
      <div className="reason-card">
        <h3>🤝 Inclusive Culture</h3>
        <p>We celebrate diversity and value collaboration and mutual respect.</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactUs;
