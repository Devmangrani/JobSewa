"use client"
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const NgosCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = (e) => {
    e.stopPropagation();
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
        delay: 0.1, 
      }}
      className="w-full md:w-[420px] m-2"
    >
      <Card className="h-full min-h-[300px] transition-all duration-400 hover:shadow-xl flex flex-col justify-between">
        <div>
          <CardHeader className="flex flex-col items-center space-y-4 pb-2">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
              <img
                src={data.image}
                alt={data.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-center w-full">
              <h3 className="font-semibold text-xl leading-tight min-h-[3rem] flex items-center justify-center">
                {data.name}
              </h3>
              <Badge variant="secondary" className="text-xs bg-[#C9D3FA]">
                {data.category}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pb-4">
            <div className="text-md text-gray-600 leading-relaxed">
              {isExpanded ? data.description : `${data.description.substring(0, 200)}`}
              {data.description.length > 150 && (
                <>
                  {!isExpanded && "..."}
                  <button
                    onClick={toggleReadMore}
                    className="ml-1 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                </>
              )}
            </div>
          </CardContent>
        </div>
        {/* <div className="mb-4 flex   items-start justify-center py-2 flex-col">
//         <div className="flex  px-2 py-2 items-center justify-center ">
//           <BsDot className="text-4xl font-extrabold text-sky-700" />
//           <h1 className="text-lg text-gray-900">Salary :</h1>
//           <p className="text-base  font-semibold">10$ / month</p>
//         </div>
//         <div className="flex px-2 py-2 items-center  justify-center">
//           <BsDot className="text-4xl font-extrabold text-sky-700" />
//           <h1 className="text-lg text-gray-900">Deadline :</h1>
//           <p className="text-base  font-semibold">
//             {new Date(Date.now()).toLocaleDateString("en-GB")}
//           </p>
//         </div>
//       </div> */}
        <CardFooter className="mt-auto">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full group transition-all duration-200 hover:bg-[#C9D3FA] hover:text-[#343680]"
            >
              More details
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NgosCard;
