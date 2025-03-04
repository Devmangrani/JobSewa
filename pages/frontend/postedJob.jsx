import { get_my_posted_job } from "@/Services/job";
import { setMyJobs } from "@/Utils/JobSlice";
import JobsCard from "@/components/JobsCard";
import NavBar from "@/components/NavBar";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSWR from "swr";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsBriefcase, BsPlus, BsSearch } from "react-icons/bs";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function NotificationBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-xl transition-all duration-500 z-50"
    >
      <span className="font-medium">To access this page, please Login. </span>
      <Link
        href="/auth/login"
        className="text-white underline ml-2 font-semibold hover:text-blue-200 transition-colors"
      >
        Redirecting...
      </Link>
    </motion.div>
  );
}

function PostedJobs() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.User?.userData);
  const myJobs = useSelector((state) => state?.Job?.myJobs);
  const id = user?._id;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!id || !Cookies.get("token")) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        router.push("/auth/login");
      }, 4500);
    }
  }, [id, router]);

  const { data, error, isLoading } = useSWR(
    id && Cookies.get("token") ? "/getMyPostedJobs" : null,
    () => get_my_posted_job(id)
  );

  useEffect(() => {
    if (data) dispatch(setMyJobs(data?.data));
  }, [data, dispatch]);

  useEffect(() => {
    if (myJobs) {
      setFilteredJobs(
        myJobs.filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.job_category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, myJobs]);

  if (error) toast.error(error);

  if (showNotification) return <NotificationBar />;

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-gray-50 w-full h-screen flex items-center flex-col justify-center"
      >
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-indigo-200 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full border-t-8 border-indigo-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-sm font-medium text-gray-600 mt-6 animate-pulse">
          Loading your posted jobs...
        </p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pt-20 pb-8"
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h1
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="text-3xl font-bold text-center"
              >
                Your Posted Jobs
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="mt-2 text-center text-indigo-100"
              >
                Manage and track your job listings
              </motion.p>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Action Bar */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex flex-col md:flex-row items-center justify-between gap-4 my-8"
            >
              <div className="relative w-full md:w-96">
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your posted jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/frontend/postAJob")}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <BsPlus className="w-5 h-5 mr-2" />
                Post New Job
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
                  <BsBriefcase className="w-8 h-8 text-indigo-600" />
                  <div className="ml-4">
                    <p className="text-sm text-gray-500">Total Jobs Posted</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {myJobs?.length || 0}
                    </p>
                  </div>
                </div>
                {/* Add more stats as needed */}
              </div>
            </motion.div>

            {/* Jobs Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredJobs?.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job._id}
                    variants={fadeInUp}
                    className="transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <JobsCard job={job} posted={true} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={fadeInUp}
                  className="col-span-full flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm"
                >
                 
                  <p className="text-xl text-gray-600 text-center mb-4">
                    {searchTerm
                      ? "No jobs found matching your search"
                      : "You haven't posted any jobs yet"}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/frontend/postAJob")}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Post Your First Job
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default PostedJobs;
