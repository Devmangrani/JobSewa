import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import JobsCard from "./JobsCard";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";




export default function Intro() {
  const [search, setSearch] = useState("");
  const jobData = useSelector((state) => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([]);
  const [doneSearch, setDoneSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === search?.toUpperCase().trim();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);
  };

  const onTagClick = (tag) => {
    setSearch(tag); // Set the search input value to the tag
    setDoneSearch(false); // Reset the search status before triggering a new search
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === tag.toUpperCase();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true); // Show the filtered results
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

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-between bg-gradient-to-br from-sky-100 to-indigo-200">
        <div className="flex-grow flex flex-col items-center justify-center pt-24"> {/* Added pt-24 for padding from navbar */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8"
            >
              Find Your Perfect Job with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-indigo-600 to-indigo-800">
                JobSewa
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-700 text-center mb-12"
            >
              Connecting thousands of job seekers with their dream careers daily.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow-xl p-6 mb-12 w-full max-w-2xl"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex-grow mb-4 sm:mb-0 sm:mr-4 relative w-full">
                  <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-sky-700" />
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    value={search}
                    type="text"
                    placeholder="Search job categories (e.g., electrician)"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-600 transition duration-300"
                  />
                  {search && (
                    <RxCross2
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-sky-700 cursor-pointer hover:text-sky-900 transition duration-300"
                    />
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSearch}
                  className="w-full sm:w-auto px-6 py-3 bg-sky-700 text-white rounded-lg uppercase tracking-wider font-semibold hover:bg-sky-800 transition duration-300"
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-8"
            >
              <span className="font-semibold text-lg text-gray-700 mr-2">Popular Tags:</span>
              {["Electrician", "Labourer", "Driver", "Plumber"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-100 text-blue-800 py-2 px-4 rounded-full cursor-pointer hover:bg-blue-200 transition duration-300"
                  onClick={() => onTagClick(tag)}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {doneSearch && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Search Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.isArray(filterJobs) && filterJobs.length > 0 ? (
                  filterJobs.map((job) => (
                    <motion.div
                      key={job?._id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <JobsCard job={job} />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-xl text-center font-semibold text-red-500 col-span-full">
                    Sorry, no jobs found in this category at the moment.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer Component */}
        <footer className="w-full h-20 px-6 flex justify-between text-lg items-center bg-[#1B263B] text-[#D3D3D3]">
          <div className="left gap-6">
             &copy; {new Date().getFullYear()} JobSewa. All rights reserved.
          </div>

          <div className="right flex gap-11">
            <a href="https://twitter.com" target="_blank" className="hover:text-[#3A7CA5] transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <FiTwitter size={22} />
            </a>

            <a href="https://linkedin.com" target="_blank" className="hover:text-[#3A7CA5] transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <GrLinkedin size={22} />
            </a>

            <a href="https://facebook.com" target="_blank" className="hover:text-[#3A7CA5] transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
            <BsFacebook size={22} />
            </a>
          </div>
        </footer>
      </div>
      
    </>
  );
}
