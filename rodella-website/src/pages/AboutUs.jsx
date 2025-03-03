import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Footer from "./../components/footer";
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
    <section className="bg-black text-white pt-2">
      <Navbar />
      {/* Page Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </div>

      {/* Leadership Team Section */}
      <div className="text-center py-12 px-50">
        <h2 className="text-4xl font-bold text-white">
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
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-300">{member.title}</p>
              <p className="mt-2 text-gray-400">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center justify-center py-16 ">
        <h2 className="text-4xl font-bold text-white mb-8">Meet Our Team</h2>
        <div className="w-full max-w-4xl mx-auto px-4">
          <video
            className="w-full rounded-lg shadow-xl"
            controls
            src="/src/assets/videos/demo1.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
