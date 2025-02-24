import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Footer from "./../components/footer"
// Import images
import MissionImg from "./../assets/images/ServiceImg2.png";
import VisionImg from "./../assets/images/achievment.jpg";
// /src/assets/images/achievment.jpg
import WhoWeAreImg from "./../assets/images/fixed-wing2.jpg";
import WhatWeDoImg from "./../assets/images/services.jpg";
import WhyChooseUsImg from "./../assets/images/services.jpg";
import SecurityImg from "./../assets/images/services.jpg";
import FutureImg from "./../assets/images/services.jpg";
import CEOImg from "./../assets/images/services.jpg"; // Add CEO image
import CTOImg from "./../assets/images/services.jpg"; // Add CTO image
import COOImg from "./../assets/images/services.jpg"; // Add COO image
import Navbar from "../components/Navbar";

const sections = [
  {
    title: "Our Mission",
    content:
      "At Rodella, our mission is to establish India as a global leader in drone technology by developing fully customized, high-performance UAVs for defense, surveillance, and industrial applications. We are committed to manufacturing every component in India, ensuring complete self-reliance from raw materials to finished products.",
    img: MissionImg,
  },
  {
    title: "Our Vision",
    content:
      "We envision a future where India no longer relies on foreign drone technology. By creating state-of-the-art drones tailored to the specific needs of the Indian Armed Forces and industries, we aim to strengthen national security, enhance operational efficiency, and drive innovation in aerial technology.",
    img: VisionImg,
  },
  {
    title: "Who We Are",
    content:
      "Rodella is a specialized drone manufacturing company focused on delivering advanced, custom-built UAV solutions. Our team comprises aerospace engineers, AI specialists, and military experts working together to push the boundaries of drone technology.",
    img: WhoWeAreImg,
  },
  // {
  //   title: "What We Do",
  //   content: `We design and manufacture drones customized for various applications, including:
  //     - Defense & Security – High-endurance surveillance drones, tactical UAVs, and autonomous combat systems.
  //     - Industrial Solutions – Inspection, monitoring, and logistics support for industries like energy, agriculture, and infrastructure.
  //     - AI & Automation – Smart drone systems with advanced navigation, object detection, and swarm technology.
  //     - Indigenous Manufacturing – 100% Indian-made drones, from core electronics to propulsion systems.`,
  //   img: WhatWeDoImg,
  // },
  // {
  //   title: "Why Choose Us",
  //   content: `- Fully Made in India – Every component, from materials to software, is manufactured locally.
  //     - Custom Drone Solutions – Tailored UAVs to meet specific mission requirements.
  //     - Military-Grade Technology – Secure, high-performance drones built for extreme conditions.
  //     - AI-Powered Systems – Intelligent drones with real-time analytics and autonomous capabilities.
  //     - Commitment to Innovation – Investing in next-gen aerial solutions for defense and commercial use.`,
  //   img: WhyChooseUsImg,
  // },
  // {
  //   title: "Our Commitment to National Security",
  //   content:
  //     "Rodella is dedicated to empowering India's defense forces with cutting-edge drone technology. Our UAVs provide real-time intelligence, enhanced surveillance, and tactical support to safeguard national interests and ensure operational superiority.",
  //   img: SecurityImg,
  // },
  // {
  //   title: "Join Us in Building India's Drone Future",
  //   content:
  //     "We are on a journey to redefine India's drone industry. Whether you are a defense organization, a private enterprise, or a technology enthusiast, we invite you to collaborate with us and shape the future of aerial technology. Proudly Made in India, Engineered for Excellence.",
  //   img: FutureImg,
  // },
];

const leadershipTeam = [
  {
    name: "Vasu Gupta",
    title: "CEO",
    description:
      "Visionary leader with over 15 years of experience in the drone industry.",
    img: CEOImg,
  },
  {
    name: "Jane Smith",
    title: "CTO",
    description:
      "Tech innovator driving our digital strategy and product development.",
    img: CTOImg,
  },
  {
    name: "Emily Johnson",
    title: "COO",
    description:
      "Operational expert ensuring efficiency and excellence in our processes.",
    img: COOImg,
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-900 text-white pt-2">
      <Navbar />
      {/* Page Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-400">About Us</h1>
      </div>

      {/* Alternating Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-16 py-12 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 50 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2"
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            transition={{ duration: 0.3 }} // Duration of the hover effect
          >
            <img
              src={section.img}
              alt={section.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg transition-transform duration-300 ease-in-out"
            />
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-300">
              {section.title}
            </h2>
            <p className="mt-4 text-gray-300">{section.content}</p>
          </div>
        </motion.div>
      ))}

      {/* Leadership Team Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-blue-400">
          Meet Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
              animate={{ opacity: 1, scale: 1 }} // Animate to this state
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-400"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-300">{member.title}</p>
              <p className="mt-2 text-gray-400">{member.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
    
  );
};

export default AboutUs;
