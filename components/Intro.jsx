import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import JobsCard from "./JobsCard";
import { motion } from 'framer-motion';
export default function Intro() {
  const [search, setSearch] = useState("");
  const jobData = useSelector((state) => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([]);
  const [doneSearch, setDoneSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === search?.toUpperCase().trim();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);
  };

  return (
    <>
      <div className="w-full  h-full flex items-center lg:justify-start py-24 justify-center flex-wrap  ">
        <div className="lg:w-3/6 w-full sm:p-2 h-full my-2 flex items-center justify-center px-4 md:items-start md:justify-start md:p-20 flex-col ">
          
          <motion.h1
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{
             duration: 0.8,
             type: "spring",
             stiffness: 100,
             delay: 0,
           }}
           className="md:text-6xl text-3xl sm:text-2xl font-extrabold mb-4 text-black ">
            To Choose Right Jobs.{" "}
            <span className="block text-sky-700"> JobSewa is for You</span>{" "}
          </motion.h1>

          <motion.p 
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{
               duration: 0.8,
               type: "spring",
               stiffness: 100,
               delay: 0,
             }}
          className="md:text-lg sm:text-sm text-xs mb-8 text-gray-400">
            Thousands of people search for jobs daily on job portals on average.
          </motion.p>
          <div className="bg-white  mb-6 w-full md:px-4 py-2 md:py-4 pl-4 flex sm:flex-row items-center justify-center">
            <BiSearchAlt className="text-2xl text-sky-700 mx-2 hidden sm:flex"/>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Jobs with Job Categories like electrician ..."
              className="xs:w-full w-3/4 md:h-full p-2 md:px-2 md:py-3 bg-gray-200 text-base outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-3 py-2 my-2 sm:my-0 border border-sky-700 rounded uppercase tracking-widest mx-4   text-white bg-sky-700 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-sky-700"
            >
              Search
            </button>
          </div>
          <div className=" w-full px-2 py-2 flex items-center justify-start flex-wrap">
            <div className="flex items-center justify-center">
              <BsFillBookmarkFill className="text-sky-700 text-xl mx-2" />
              <h1 className="font-semibold text-lg">Suggest Tag : </h1>
            </div>
              <p className="px-2  text-gray-600">Electrician</p>
              <p className="px-2  text-gray-600">Labourer</p>
              <p className="px-2  text-gray-600">Driver</p>
              <p className="px-2  text-gray-600">Plumber</p>
              <p className="px-2  text-gray-600">Etc.</p>
          </div>
        </div>
        <motion.div 
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{
           duration: 0.8,
           type: "spring",
           stiffness: 100,
           delay: 0,
         }}
        className="w-3/6 my-2 h-full bg-gray-200 hidden items-center justify-center flex-col p-20 lg:flex">
          <Image
            width={1000}
            height={1000}
            src="/intro.png"
            alt="no-image-found"
          />
        </motion.div>
      </div>
      {doneSearch && (
        <div className="w-full flex flex-wrap items-center justify-center py-2 px-2">
          {Array.isArray(filterJobs) && filterJobs.length > 0 ? (
            filterJobs?.map((job) => {
              return <JobsCard job={job} key={job?._id} />;
            })
          ) : (
            <p className="text-sm text-center font-semibold  text-red-500">
              Sorry No Such Categories Job Available Right Now
            </p>
          )}
        </div>
      )}
    </>
  );
}
