import React from "react";
import NavBar from "@/components/NavBar";
import NgosCard from "@/components/NgoCard";
import { SeedData } from "@/Utils/NgoData";

const NGOs = () => {
  return (
    <>
      <NavBar />
      <div className="w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col">
        <h1 className="text-xl mt-20 text-center text-indigo-800 leading-snug font-semibold mb-2 md:text-2xl lg:text-4xl">
          Available Organizations
        </h1>

        <div className="w-full h-full py-2 flex  overflow-y-auto  items-center justify-center flex-wrap">
          {SeedData.map((data, index) => (
            <NgosCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NGOs;
