


// // import React from "react";
// // import { motion } from "framer-motion";
// // import "./exhibition-page.css";

// // import techworld from "../../Images/hero10.avif";
// // import manufacturing from "../../Images/hero3.jpg";
// // import aiRobotics from "../../Images/hero5.jpg";
// // import digitalInfra from "../../Images/hero4.jpg";

// // const exhibitions = [
// //   {
// //     title: "TechWorld Expo 2025",
// //     description: "Explore cutting-edge tech solutions with global innovators.",
// //     date: "2025-08-20",
// //     location: "Dubai World Trade Center",
// //     image: techworld,
// //     registerLink: "https://register-techworld.com"
// //   },
// //   {
// //     title: "Smart Manufacturing Summit",
// //     description: "A showcase of smart industrial systems and solutions.",
// //     date: "2024-12-10",
// //     location: "Frankfurt, Germany",
// //     image: manufacturing,
// //     registerLink: "https://register-manufacturing.com"
// //   },
// //   {
// //     title: "AI & Robotics Fair",
// //     description: "Future-ready AI and robotic innovations in action.",
// //     date: "2025-09-15",
// //     location: "Tokyo, Japan",
// //     image: aiRobotics,
// //     registerLink: "https://register-ai.com"
// //   },
// //   {
// //     title: "Digital Infrastructure Conference",
// //     description: "Networking for tomorrow's digital landscape.",
// //     date: "2024-10-05",
// //     location: "Singapore Expo Hall",
// //     image: digitalInfra,
// //     registerLink: "https://register-digital.com"
// //   }
// // ];

// // const ExhibitionPage = () => {
// //   const today = new Date();

// //   const upcoming = exhibitions
// //     .filter(ex => new Date(ex.date) >= today)
// //     .sort((a, b) => new Date(a.date) - new Date(b.date));

// //   const past = exhibitions
// //     .filter(ex => new Date(ex.date) < today)
// //     .sort((a, b) => new Date(b.date) - new Date(a.date));

// //   return (
// //     <div className="exhibition-page">
// //       <h2 className="exhibition-heading">Upcoming Exhibitions</h2>
// //       <div className="exhibition-list">
// //         {upcoming.map((ex, idx) => (
// //           <ExhibitionCard key={idx} index={idx} {...ex} />
// //         ))}
// //       </div>

// //       <h2 className="exhibition-heading">Past Exhibitions</h2>
// //       <div className="exhibition-list">
// //         {past.map((ex, idx) => (
// //           <ExhibitionCard key={idx} index={idx} {...ex} isPast />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const ExhibitionCard = ({ title, description, date, location, image, registerLink, isPast, index }) => {
// //   return (
// //     <motion.div
// //       className={`exhibition-card ${isPast ? "past" : ""}`}
// //       initial={{ opacity: 0, x: 50 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       transition={{ duration: 0.6, delay: index * 0.2 }}
// //     >
// //       {image && <img src={image} alt={title} className="exhibition-image" />}
// //       <div className="exhibition-date">{new Date(date).toDateString()}</div>
// //       <h3 className="exhibition-title">{title}</h3>
// //       <p className="exhibition-description">{description}</p>
// //       <div className="exhibition-location">📍 {location}</div>
// //       {!isPast && registerLink && (
// //         <a href={registerLink} className="register-button" target="_blank" rel="noopener noreferrer">
// //           Register Now
// //         </a>
// //       )}
// //     </motion.div>
// //   );
// // };

// // export default ExhibitionPage;


// import React from "react";
// import { motion } from "framer-motion";
// import "./exhibition-page.css";

// import techworld from "../../Images/hero10.avif";
// import manufacturing from "../../Images/hero3.jpg";
// import aiRobotics from "../../Images/hero5.jpg";
// import digitalInfra from "../../Images/hero4.jpg";

// const exhibitions = [
//   {
//     title: "TechWorld Expo 2025",
//     description: "Explore cutting-edge tech solutions with global innovators.",
//     date: "2025-08-20",
//     location: "Dubai World Trade Center",
//     image: techworld,
//     registerLink: "https://register-techworld.com",
//   },
//   {
//     title: "Smart Manufacturing Summit",
//     description: "A showcase of smart industrial systems and solutions.",
//     date: "2024-12-10",
//     location: "Frankfurt, Germany",
//     image: manufacturing,
//     registerLink: "https://register-manufacturing.com",
//   },
//   {
//     title: "AI & Robotics Fair",
//     description: "Future-ready AI and robotic innovations in action.",
//     date: "2025-09-15",
//     location: "Tokyo, Japan",
//     image: aiRobotics,
//     registerLink: "https://register-ai.com",
//   },
//   {
//     title: "Digital Infrastructure Conference",
//     description: "Networking for tomorrow's digital landscape.",
//     date: "2024-10-05",
//     location: "Singapore Expo Hall",
//     image: digitalInfra,
//     registerLink: "https://register-digital.com",
//   }
// ];

// const ExhibitionPage = () => {
//   const today = new Date();
//   const upcoming = exhibitions.filter(ex => new Date(ex.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));
//   const past = exhibitions.filter(ex => new Date(ex.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date));

//   return (
//     <div className="exhibition-container">
//       <aside className="sidebar">
//         <h1>📅 Exhibitions</h1>
//         <nav>
//           <a href="#upcoming">Upcoming</a>
//           <a href="#past">Past</a>
//           <a href="#register">Register</a>
//         </nav>
//       </aside>

//       <main className="exhibition-page">
//         <section id="upcoming">
//           <h2 className="exhibition-heading">Upcoming Exhibitions</h2>
//           <div className="exhibition-list">
//             {upcoming.map((ex, idx) => (
//               <ExhibitionCard key={idx} index={idx} {...ex} />
//             ))}
//           </div>
//         </section>

//         <section id="past">
//           <h2 className="exhibition-heading">Past Exhibitions</h2>
//           <div className="exhibition-list">
//             {past.map((ex, idx) => (
//               <ExhibitionCard key={idx} index={idx} {...ex} isPast />
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// const ExhibitionCard = ({ title, description, date, location, image, registerLink, isPast, index }) => {
//   return (
//     <motion.div
//       className={`exhibition-card ${isPast ? "past" : ""}`}
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//     >
//       <img src={image} alt={title} className="exhibition-image" />
//       <div className="exhibition-date">{new Date(date).toDateString()}</div>
//       <h3 className="exhibition-title">{title}</h3>
//       <p className="exhibition-description">{description}</p>
//       <div className="exhibition-location">📍 {location}</div>
//       {!isPast && registerLink && (
//         <a href={registerLink} className="register-button" target="_blank" rel="noopener noreferrer">
//           Register Now
//         </a>
//       )}
//     </motion.div>
//   );
// };

// export default ExhibitionPage;


import React from "react";
import { motion } from "framer-motion";
import "./exhibition-page.css";

import techworld from "../../Images/hero10.avif";
import manufacturing from "../../Images/hero3.jpg";
import aiRobotics from "../../Images/hero5.jpg";
import digitalInfra from "../../Images/hero4.jpg";

const exhibitions = [
  {
    title: "TechWorld Expo 2025",
    description: "Explore cutting-edge tech solutions with global innovators.",
    date: "2025-08-20",
    location: "Dubai World Trade Center",
    image: techworld,
    registerLink: "https://register-techworld.com",
  },
  {
    title: "Smart Manufacturing Summit",
    description: "A showcase of smart industrial systems and solutions.",
    date: "2024-12-10",
    location: "Frankfurt, Germany",
    image: manufacturing,
    registerLink: "https://register-manufacturing.com",
  },
  {
    title: "AI & Robotics Fair",
    description: "Future-ready AI and robotic innovations in action.",
    date: "2025-09-15",
    location: "Tokyo, Japan",
    image: aiRobotics,
    registerLink: "https://register-ai.com",
  },
  {
    title: "Digital Infrastructure Conference",
    description: "Networking for tomorrow's digital landscape.",
    date: "2024-10-05",
    location: "Singapore Expo Hall",
    image: digitalInfra,
    registerLink: "https://register-digital.com",
  }
];

// Breaking News Ticker Component
// const BreakingNewsTicker = () => {
//   return (
//     <div className="ticker-container">
//       <a href="#upcoming" className="ticker-text">
//         🚨 Don't miss the upcoming TechWorld Expo in 2025! Click here to register!
//       </a>
//     </div>
//   );
// };

const ExhibitionPage = () => {
  const today = new Date();
  const upcoming = exhibitions.filter(ex => new Date(ex.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));
  const past = exhibitions.filter(ex => new Date(ex.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="exhibition-container">
      {/* <BreakingNewsTicker /> */}

      <aside className="sidebar">
        <h1>📅 Exhibitions</h1>
        <nav>
          <a href="#upcoming">Upcoming</a>
          <a href="#past">Past</a>
          <a href="#register">Register</a>
        </nav>
      </aside>

      <main className="exhibition-page">
        <section id="upcoming">
          <h2 className="exhibition-heading">Upcoming Exhibitions</h2>
          <div className="exhibition-list">
            {upcoming.map((ex, idx) => (
              <ExhibitionCard key={idx} index={idx} {...ex} />
            ))}
          </div>
        </section>

        <section id="past">
          <h2 className="exhibition-heading">Past Exhibitions</h2>
          <div className="exhibition-list">
            {past.map((ex, idx) => (
              <ExhibitionCard key={idx} index={idx} {...ex} isPast />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const ExhibitionCard = ({ title, description, date, location, image, registerLink, isPast, index }) => {
  return (
    <motion.div
      className={`exhibition-card ${isPast ? "past" : ""}`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <img src={image} alt={title} className="exhibition-image" />
      <div className="exhibition-date">{new Date(date).toDateString()}</div>
      <h3 className="exhibition-title">{title}</h3>
      <p className="exhibition-description">{description}</p>
      <div className="exhibition-location">📍 {location}</div>
      {!isPast && registerLink && (
        <a href={registerLink} className="register-button" target="_blank" rel="noopener noreferrer">
          Register Now
        </a>
      )}
    </motion.div>
  );
};

export default ExhibitionPage;
