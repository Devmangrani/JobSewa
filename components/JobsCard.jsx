import React from "react";
import Image from "next/image";
import { BsDot, BsBriefcase, BsCalendarDate } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function JobsCard({ job, posted }) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      key={job._id}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto"
    >
      <div className="relative">
        <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-bl-lg text-sm font-medium">
          {job?.job_type || "Full Time"}
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <Image
                fill
                className="rounded-full object-cover"
                src={
                  job?.user?.image ||
                  "https://xsgames.co/randomusers/avatar.php?g=male"
                }
                alt="company logo"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
                {job?.title}
              </h2>
              <p className="text-gray-600">{job?.company}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-700">
            <BsBriefcase className="mr-2" />
            <span className="font-medium">₹{job?.salary}/month</span>
          </div>
          <div className="flex items-center text-gray-700">
            <BsCalendarDate className="mr-2" />
            <span className="text-sm">
              {new Date(`${job?.job_deadline}`).toLocaleDateString("en-GB")}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm">
            {job?.job_category}
          </span>
          <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm">
            {job?.job_experience}
          </span>
        </div>

        {posted ? (
          <button
            onClick={() => router.push(`/frontend/detailPostedJob/${job?._id}`)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <span>View Applications</span>
            <AiOutlineArrowRight />
          </button>
        ) : (
          <button
            onClick={() => router.push(`/frontend/jobDetails/${job?._id}`)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <span>View Details</span>
            <AiOutlineArrowRight />
          </button>
        )}
      </div>
    </motion.div>
  );
}
