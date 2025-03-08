import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Footer from "./../components/footer";
// Import images
import demo1 from "./../assets/videos/demo1.mp4";
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
    <section className="bg-black text-white min-h-screen pt-2">
      <Navbar />
      {/* Page Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>

        {/* Leadership Team Section */}
        <div className="text-center py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="aspect-square w-24 sm:w-32 mx-auto mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-300">{member.title}</p>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="py-8 sm:py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
            Meet Our Team
          </h2>
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="aspect-w-16 aspect-h-9">
              <video
                className="w-full h-full rounded-lg shadow-xl object-cover"
                controls
                src={demo1}
              >
                Your browser does not support the video tag
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
