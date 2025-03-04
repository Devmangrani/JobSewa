import AppliedJobDataTable from "@/components/AppliedJobDataTable";
import NavBar from "@/components/NavBar";
import SavedJobDataTable from "@/components/SavedJobDataTable";
import { get_my_applied_job } from "@/Services/job";
import { get_book_mark_job } from "@/Services/job/bookmark";
import { setAppliedJob, setBookMark } from "@/Utils/AppliedJobSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  BsFillBookmarkStarFill,
  BsBriefcase,
  BsClipboardData,
} from "react-icons/bs";
import { GiSuitcase } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

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

export default function Dashboard() {
  const [showTable, setShowTable] = useState("appliedJobs");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state?.User?.userData);
  const id = activeUser?._id;

  useEffect(() => {
    if (!id || !Cookies.get("token")) {
      router.push("/auth/login");
    }
  }, [activeUser, id, Cookies]);

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    const res = await get_my_applied_job(id);
    const get_bookmarks = await get_book_mark_job(id);
    if (res.success || get_bookmarks.success) {
      dispatch(setAppliedJob(res?.data));
      dispatch(setBookMark(get_bookmarks?.data));
      setLoading(false);
    } else {
      router.push("/auth/login");
    }
  };

  if (loading) {
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
          Loading your dashboard...
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
                Welcome to Your Dashboard
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="mt-2 text-center text-indigo-100"
              >
                Manage your job applications and saved opportunities
              </motion.p>
            </div>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setShowTable("appliedJobs")}
                className={`cursor-pointer rounded-xl shadow-lg bg-white p-6 border-2 transition-all duration-200 ${
                  showTable === "appliedJobs"
                    ? "border-indigo-500"
                    : "border-transparent hover:border-indigo-200"
                }`}
              >
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <BsBriefcase className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Applied Jobs
                    </h2>
                    <p className="text-gray-500">Track your job applications</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setShowTable("savedJobs")}
                className={`cursor-pointer rounded-xl shadow-lg bg-white p-6 border-2 transition-all duration-200 ${
                  showTable === "savedJobs"
                    ? "border-indigo-500"
                    : "border-transparent hover:border-indigo-200"
                }`}
              >
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <BsFillBookmarkStarFill className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Saved Jobs
                    </h2>
                    <p className="text-gray-500">
                      View your bookmarked positions
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Data Table Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {showTable === "savedJobs"
                    ? "Saved Opportunities"
                    : "Applied Positions"}
                </h3>
                <div className="flex items-center space-x-2">
                  <BsClipboardData className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-600">
                    {showTable === "savedJobs"
                      ? "Bookmarked jobs"
                      : "Application history"}
                  </span>
                </div>
              </div>

              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showTable}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {showTable === "savedJobs" ? (
                      <SavedJobDataTable />
                    ) : (
                      <AppliedJobDataTable />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
