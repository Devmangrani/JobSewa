import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar"; // Import the NavBar
import { motion } from "framer-motion"; // Import framer-motion for animation effects

export default function About() {
  const [showContent, setShowContent] = useState(false);

  // A simple animation effect when the page loads
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  }, []);

  return (
    <>
      <NavBar />
      <section className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-700">
        <motion.div
          className="bg-white p-10 rounded-lg shadow-lg max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-indigo-600">
            About JobSewa
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            JobSewa is a platform dedicated to bridging the gap between job
            seekers and employers. Whether you're looking to post jobs, find
            opportunities, or stay up-to-date with the latest industry trends,
            we've got you covered. Our mission is to empower both employers and
            job seekers by providing a seamless experience and fostering a
            supportive community.
          </p>
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h2>
            <p className="text-base leading-relaxed mb-4">
              To build a future where job searching is effortless, effective,
              and efficient for all. Our aim is to make meaningful connections
              between talents and opportunities that help people achieve their
              career goals.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed">
              We strive to create a job platform that prioritizes user
              experience, provides transparency, and connects the right people
              to the right jobs in a timely manner.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
