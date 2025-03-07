import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

export default function JobsCard({ job, posted }) {
  const router = useRouter();
  return (
    <div
      key={job._id}
      className="mx-auto transition-all duration-1000 shadow-2xl p-2 rounded-md"
    >
      <div className="mx-auto justify-center p-2 flex items-center">
        <Image
          width={70}
          height={70}
          className="rounded-full "
          src={
            job?.user?.image ||
            "https://xsgames.co/randomusers/avatar.php?g=male"
          }
          alt="no image"
        />
        <div className="flex flex-col mx-2 px-2">
          <h1 className="text-xl md:text-2xl font-semibold">
            {job?.user?.name}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-800">
            {job?.company}
          </p>
        </div>
      </div>
      <div className="mb-4 flex min-w-fit items-start justify-center py-2 flex-col">
        <div className="flex px-2 py-2 items-center justify-center ">
          <BsDot className="text-4xl font-extrabold text-sky-700" />
          <h1 className="text-lg text-gray-900 w-20">Salary :</h1>
          <p className="text-base font-semibold">
            &nbsp;&nbsp;&nbsp;₹{job?.salary}/ month
          </p>
        </div>
        <div className="flex px-2 py-2 items-center justify-center">
          <BsDot className="text-4xl font-extrabold text-sky-700" />
          <h1 className="text-lg text-gray-900 w-20">Deadline {":"}</h1>
          <p className="text-base  font-semibold">
            &nbsp;&nbsp;&nbsp;
            {new Date(`${job?.job_deadline}`).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-center min-w-max mx-auto px-6 rounded-2xl py-1 bg-indigo-200 text-indigo-900 capitalize">
          <p>{job?.title} </p>
        </div>
        {posted ? (
          <button
            onClick={() => router.push(`/frontend/detailPostedJob/${job?._id}`)}
            className="my-2 py-2 px-4  border border-sky-700   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-sky-700 font-semibold"
          >
            View Applications <AiOutlineArrowRight className="mx-2 text-xl" />
          </button>
        ) : (
          <button
            onClick={() => router.push(`/frontend/jobDetails/${job?._id}`)}
            className="my-2 py-2 px-4 cursor-pointer border border-sky-700 rounded-md flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-sky-700 font-semibold"
          >
            View Detail <AiOutlineArrowRight className="mx-2 text-xl" />
          </button>
        )}
      </div>
    </div>
  );
}
