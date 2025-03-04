import React, { useState, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import JobsCard from "./JobsCard";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { BsFacebook, BsArrowDown } from "react-icons/bs";
import styles from "../styles/Homepage.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Intro() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const jobData = useSelector((state) => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([]);
  const [doneSearch, setDoneSearch] = useState(false);
  const resultsRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category?.toLowerCase();
      let y = job?.title?.toLowerCase();
      let z = job?.company?.toLowerCase();
      let searchTerm = search?.toLowerCase().trim();
      return (
        x?.includes(searchTerm) ||
        y?.includes(searchTerm) ||
        z?.includes(searchTerm)
      );
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);

    // Smooth scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const onTagClick = (tag) => {
    setSearch(tag);
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category?.toLowerCase();
      let y = job?.title?.toLowerCase();
      let z = job?.company?.toLowerCase();
      let searchTerm = tag.toLowerCase();
      return (
        x?.includes(searchTerm) ||
        y?.includes(searchTerm) ||
        z?.includes(searchTerm)
      );
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);

    // Smooth scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredJobs([]);
    setDoneSearch(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const handleJobClick = (jobId) => {
    router.push(`/frontend/jobDetails/${jobId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.leftSection}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.motionDiv}
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Find Your Perfect Job with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                JobSewa
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Connecting thousands of job seekers with their dream careers
              daily.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative w-full max-w-2xl mx-auto"
            >
              <div className="relative">
                <BiSearchAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400" />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  value={search}
                  type="text"
                  placeholder="Search job categories (e.g., electrician)"
                  className="w-full pl-12 pr-12 py-4 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 text-lg"
                />
                {search && (
                  <RxCross2
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                  />
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                className="mt-4 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                Search Jobs
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <span className="text-gray-600 font-medium">Popular Tags:</span>
              {["Electrician", "Labourer", "Driver", "Plumber"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-white border-2 border-indigo-100 rounded-full text-indigo-600 cursor-pointer hover:bg-indigo-50 transition-all duration-200"
                  onClick={() => onTagClick(tag)}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.rightSection}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/hero-image-2.png"
              alt="Hero Image"
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {doneSearch && (
        <motion.div
          ref={resultsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-gray-50 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              Search Results
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(filterJobs) && filterJobs.length > 0 ? (
                filterJobs.map((job, index) => (
                  <motion.div
                    key={job?._id}
                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    onClick={() => handleJobClick(job?._id)}
                    className="transform hover:translate-y-[-5px] transition-all duration-300"
                  >
                    <JobsCard job={job} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="col-span-full flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm"
                >
                  <img
                    src="/no-results.svg"
                    alt="No results"
                    className="w-48 h-48 mb-4 opacity-75"
                  />
                  <p className="text-xl text-gray-600 text-center">
                    Sorry, no jobs found in this category at the moment.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                JobSewa
              </h3>
              <img
                src="/Jobsewa_logo.png"
                alt="JobSewa Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-600 text-center md:text-left">
                Connecting talent with opportunity
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connect with Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/devmangrani"
                  target="_blank"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <FiTwitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dev-mangrani/"
                  target="_blank"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <GrLinkedin size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <BsFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} JobSewa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
