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
      <Card className="h-full min-h-[300px] transition-all duration-400 hover:shadow-xl flex flex-col justify-between bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-2xl border border-white border-opacity-20 shadow-lg">
        <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-xl rounded-t-2xl">
          <CardHeader className="flex flex-col items-center space-y-4 pb-2">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white border-opacity-50">
              <img
                src={data.image}
                alt={data.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-center w-full">
              <h3 className="font-bold text-xl leading-tight min-h-[3rem] flex items-center justify-center text-gray-800">
                {data.name}
              </h3>
              <Badge variant="secondary" className="text-xs bg-white bg-opacity-70 text-gray-700">
                {data.category}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pb-4 bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl">
            <div className="text-md text-gray-700 leading-relaxed">
              {isExpanded ? data.description : `${data.description.substring(0, 200)}`}
              {data.description.length > 150 && (
                <>
                  {!isExpanded && "..."}
                  <button
                    onClick={toggleReadMore}
                    className="ml-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                </>
              )}
            </div>
          </CardContent>
        </div>
       
        <CardFooter className="mt-auto bg-white bg-opacity-60 backdrop-filter backdrop-blur-xl rounded-b-2xl">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full group transition-all duration-200 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 border border-white border-opacity-50 rounded-xl"
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
