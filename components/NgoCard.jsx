import React, { useState } from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { motion } from 'framer-motion';

export default function NgosCard({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      type: "spring",
      stiffness: 90,
      delay: 0,
    }}
    className={`w-full cursor-pointer md:w-5/12 m-4 border hover:shadow-xl rounded px-4 flex flex-col justify-between transition-all duration-300 ${
      isExpanded ? "min-h-[350px]" : "min-h-[300px] h-[300px] overflow-hidden"
    }`}
  >
      <div className="mb-4 flex  items-center justify-center py-2 ">
      <div className="flex items-start justify-center py-2" style={{ minHeight: '70px', minWidth: '70px' }}>
          <Image
            width={200}
            height={200}
            className="flex rounded-full"
            src={data.image}
            alt="no image"
          />
        </div>
        <div className="flex flex-col mx-2 px-2">
          <h1 className="text-lg md:text-2xl mt-4 font-semibold">{data.name}</h1>
          <div className="text-sm sm:text-base text-gray-800">
            {isExpanded ? data.description : `${data.description.substring(0, 200)}...`}
            {data.description.length > 200 && (
              <button
                onClick={toggleReadMore}
                className="text-blue-500 hover:underline text-sm ml-1"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <div className="mb-4 flex   items-start justify-center py-2 flex-col">
        <div className="flex  px-2 py-2 items-center justify-center ">
          <BsDot className="text-4xl font-extrabold text-sky-700" />
          <h1 className="text-lg text-gray-900">Salary :</h1>
          <p className="text-base  font-semibold">10$ / month</p>
        </div>
        <div className="flex px-2 py-2 items-center  justify-center">
          <BsDot className="text-4xl font-extrabold text-sky-700" />
          <h1 className="text-lg text-gray-900">Deadline :</h1>
          <p className="text-base  font-semibold">
            {new Date(Date.now()).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div> */}
      <div className="mb-4 flex md:flex-wrap md:flex-row w-full justify-between  items-center flex-col">
        <div className="flex items-start justify-center py-2 flex-col">
          <div className="flex px-3 md:px-6 rounded-2xl py-1 items-center justify-center bg-indigo-200 text-indigo-900  ">
            <p>{data.category}</p>
          </div>
        </div>
        <a
          href={data.link}
          target="_blank"
          className="my-2 py-2 px-2 md:px-4  border border-sky-700   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-sky-700 font-semibold"
        >
          More details <AiOutlineArrowRight className="mx-1 md:mx-2 text-xl" />
        </a>
      </div>
    </motion.div>
  );
}
