import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobData } from "@/Utils/JobSlice";
import JobsCard from "@/components/JobsCard";
import useSWR from "swr";
import { toast } from "react-toastify";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import { BsBriefcase, BsBuilding } from "react-icons/bs";
import { MdCategory } from "react-icons/md";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function DisplayJobs() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const JobData = useSelector((state) => state?.Job?.JobData);

  const { data, error, isLoading } = useSWR("/getAllJobs", () => get_job());

  useEffect(() => {
    if (data) dispatch(setJobData(data?.data));
  }, [data, dispatch]);

  if (error) toast.error(error);

  useEffect(() => {
    if (search === "" && activeFilter === "all") {
      setFilteredData(JobData);
    } else {
      let filtered = JobData;

      // Apply search filter
      if (search !== "") {
        filtered = filtered.filter(
          (job) =>
            job?.job_category?.toLowerCase().includes(search.toLowerCase()) ||
            job?.title?.toLowerCase().includes(search.toLowerCase()) ||
            job?.company?.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Apply category filter
      if (activeFilter !== "all") {
        filtered = filtered.filter(
          (job) =>
            job?.job_category?.toLowerCase() === activeFilter.toLowerCase()
        );
      }

      setFilteredData(filtered);
    }
  }, [search, JobData, activeFilter]);

  const categories = [
    "all",
    ...new Set(JobData?.map((job) => job?.job_category)),
  ];

  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-20 mb-10"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Available Opportunities
            </h1>
            <p className="text-lg text-gray-600">
              Find your next career move from our wide range of opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, company or category..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-600 hover:bg-indigo-50"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Job Cards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
              filteredData.map((job, index) => (
                <motion.div key={job?._id} variants={item} className="h-full">
                  <JobsCard job={job} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm"
              >
                <img
                  src="/no-results.svg"
                  alt="No results"
                  className="w-48 h-48 mb-4 opacity-75"
                />
                <p className="text-xl text-gray-600 text-center">
                  No jobs found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("all");
                  }}
                  className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <BsBriefcase className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                {JobData?.length}
              </h3>
              <p className="text-gray-600">Total Jobs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <BsBuilding className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                {new Set(JobData?.map((job) => job?.company)).size}
              </h3>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MdCategory className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                {new Set(JobData?.map((job) => job?.job_category)).size}
              </h3>
              <p className="text-gray-600">Categories</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
