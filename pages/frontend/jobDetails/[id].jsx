import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { MdCategory, MdEmail, MdBusinessCenter } from "react-icons/md";
import {
  BsBriefcaseFill,
  BsFillBookmarkCheckFill,
  BsClock,
} from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineDollarCircle } from "react-icons/ai";
import { RiUserSearchFill } from "react-icons/ri";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { HiOutlineStar } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setMatchingJobData } from "@/Utils/JobSlice";
import { get_specified_job } from "@/Services/job";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { book_mark_job } from "@/Services/job/bookmark";
import Cookies from "js-cookie";
import Link from "next/link";

function NotificationBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-xl transition-all duration-500 z-50"
    >
      <span className="font-medium">To view job details, please Login. </span>
      <Link
        href="/auth/login"
        className="text-white underline ml-2 font-semibold hover:text-blue-200 transition-colors"
      >
        Login Now
      </Link>
    </motion.div>
  );
}

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

export default function JobDetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const JobData = useSelector((state) => state?.Job?.JobData);
  const machingData = useSelector((state) => state?.Job?.matchingData);
  const user = useSelector((state) => state?.User?.userData);
  const [JobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!id) return;
      try {
        const response = await get_specified_job(id);
        if (response.success) {
          setJobDetails(response.data);
        } else {
          toast.error(response.message);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
        toast.error("Failed to fetch job details");
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    if (!user?._id || !Cookies.get("token")) {
      setShowNotification(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 4500);
    }
  }, [user, router]);

  useEffect(() => {
    if (JobDetails) {
      const filteredJobData = JobData?.filter(
        (job) => job.job_category === JobDetails?.job_category
      );
      const filteredJobData2 = filteredJobData?.filter(
        (job) => job._id !== JobDetails?._id
      );
      dispatch(setMatchingJobData(filteredJobData2));
    }
  }, [JobDetails, JobData, dispatch]);

  const handleApply = () => {
    if (!user) return toast.error("Please Login First");
    router.push(`/frontend/applyJob/${id}`);
  };

  const handleBookMark = async () => {
    if (!user) return toast.error("Please Login First");

    const data = { user: user?._id, job: JobDetails?._id };
    const res = await book_mark_job(data);
    if (res.success) {
      return toast.success(res.message);
    } else {
      return toast.error(res.message);
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
          Loading job details...
        </p>
      </motion.div>
    );
  }

  if (showNotification) {
    return (
      <AnimatePresence>
        <NavBar />
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen bg-gray-50 py-20"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-indigo-100 rounded-full">
                <MdBusinessCenter className="text-2xl text-indigo-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                {JobDetails?.title}
              </h1>
            </div>
            <div className="space-y-4 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <BsBriefcaseFill className="text-indigo-500" />
                <p>Company: {JobDetails?.company}</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdCategory className="text-indigo-500" />
                <p>Category: {JobDetails?.job_category}</p>
              </div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <p className="text-center text-gray-700 font-medium">
                Please login to view complete job details and apply
              </p>
              <Link href="/auth/login">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Login to Continue
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
        <NotificationBar />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <ToastContainer />
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-50 pt-20"
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeInUp}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center">Job Details</h1>
            <p className="text-center mt-2 text-indigo-100">
              Find your dream opportunity
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10"
        >
          {/* Job Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="relative">
                  <Image
                    src={
                      JobDetails?.user?.image ||
                      "https://xsgames.co/randomusers/avatar.php?g=male"
                    }
                    alt="company logo"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {JobDetails?.title}
                  </h2>
                  <p className="text-gray-600">{JobDetails?.company}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookMark}
                  className="flex items-center justify-center px-4 py-2 border border-indigo-200 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <BsFillBookmarkCheckFill className="mr-2" />
                  Save Job
                </motion.button>
                {JobDetails?.user?.email === user?.email ? (
                  <p className="text-red-500 text-sm font-medium">
                    Unable to apply to your own jobs
                  </p>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleApply}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Apply Now
                  </motion.button>
                )}
              </div>
            </div>

            {/* Job Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <GoLocation className="text-xl text-indigo-600" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Bhopal</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MdCategory className="text-xl text-indigo-600" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{JobDetails?.job_category}</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <BsBriefcaseFill className="text-xl text-indigo-600" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Job Type</p>
                  <p className="font-medium capitalize">
                    {JobDetails?.job_type}
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <AiOutlineDollarCircle className="text-xl text-indigo-600" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Salary</p>
                  <p className="font-medium">₹ {JobDetails?.salary}</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <FaUserAstronaut className="text-xl text-indigo-600" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Posted By</p>
                  <p className="font-medium">{JobDetails?.user?.name}</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MdEmail className="text-xl text-indigo-600" />
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Contact Email</p>
                  <p className="font-medium">{JobDetails?.user?.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Job Description
                </h3>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {JobDetails?.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Job Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <RiUserSearchFill className="text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Experience Level</p>
                      <p className="font-medium">2-3 Years</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BsClock className="text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Job Type</p>
                      <p className="font-medium capitalize">
                        {JobDetails?.job_type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <AiOutlineDollarCircle className="text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Salary Range</p>
                      <p className="font-medium">₹ {JobDetails?.salary}</p>
                    </div>
                  </div>
                </div>

                {JobDetails?.user?.email !== user?.email && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleApply}
                    className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  >
                    Apply Now
                    <AiOutlineArrowRight className="ml-2" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
