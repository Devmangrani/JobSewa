import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

export default function NgosCard({ data }) {
  return (
    <div className="w-full cursor-pointer  transition-all duration-1000  md:w-5/12 m-4 border hover:shadow-xl rounded px-4 md:flex md:flex-wrap">
      <div className="mb-4 flex  items-center justify-center py-2 ">
        <Image
          width={70}
          height={70}
          className="flex rounded-full "
          src={data.image}
          alt="no image"
        />
        <div className="flex flex-col mx-2 px-2">
          <h1 className="text-xl md:text-2xl font-semibold">{data.name}</h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-800 ">
            {data.description}
          </p>
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
      <div className="mb-4 flex flex-col md:flex-wrap md:flex-row w-full justify-between  items-center ">
        <div className="mb-4 flex  items-start justify-center py-2 flex-col">
          <div className="flex px-6 rounded-2xl py-1 items-center justify-center bg-indigo-200 text-indigo-900  ">
            <p>{data.category}</p>
          </div>
        </div>
        <a
          href={data.link}
          target="_blank"
          className="my-2 py-2 px-4  border border-sky-700   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-sky-700 font-semibold"
        >
          More details <AiOutlineArrowRight className="mx-2 text-xl" />
        </a>
      </div>
    </div>
  );
}
