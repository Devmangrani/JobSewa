import CheckMarkIcon from "./../assets/images/check-mark.png";
import FixedWingDrone1 from "./../assets/images/fixed-wing1.png";
import Navbar from "../components/Navbar";
import AirCraftData from "../constants/AircraftData";
import MultirotorProducts from "../constants/MultirotorProducts";
import FixedWingProducts from "../constants/FixedWingProducts";
import React, { useState, useEffect } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Aircrafts = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % AirCraftData.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [AirCraftData.length]);

  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-screen relative">
        <Navbar />
        <img
          src={AirCraftData[currentImageIndex].url}
          className="absolute top-0 left-0 w-full h-full -z-50 object-cover brightness-30"
          alt="Aircraft showcase"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col h-full justify-between">
          <h1 className="text-4xl sm:text-6xl lg:text-9xl bg-gradient-to-b text-white bg-clip-text text-center mt-8 sm:mt-12 lg:mt-20 font-bold">
            Let&apos;s fly higher
          </h1>

          <Link
            to={`/aircrafts/${AirCraftData[currentImageIndex].id}`}
            className="flex justify-center mt-8 sm:mt-12"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-black bg-neutral-400 px-6 sm:px-8 py-2 sm:py-3 rounded-full opacity-70 flex items-center hover:opacity-80 transition-opacity">
              {AirCraftData[currentImageIndex].title}
              <ArrowRightIcon className="h-6 w-6 sm:h-8 sm:w-8 ml-2" />
            </p>
          </Link>

          <p className="text-base sm:text-lg lg:text-xl text-center text-neutral-300 max-w-2xl mx-auto mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat est maiores!
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {[
              {
                label: "Longer Flight Time",
                value: AirCraftData[currentImageIndex].flightTime,
              },
              {
                label: "Video Transmission Range",
                value: AirCraftData[currentImageIndex].TransmissionRange,
              },
              {
                label: "High-res Live Feed",
                value: AirCraftData[currentImageIndex].LiveFeed,
              },
              {
                label: "Positioning Technology",
                value: AirCraftData[currentImageIndex].Positioning,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col pt-4 sm:pt-0 sm:border-l sm:border-neutral-300 first:border-l-0"
                // sm:border-l sm:border-neutral-300 first:border-l-0
              >
                <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-4">
                  {item.value}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base lg:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            We have a wide range of custom based drone solutions
          </h1>
          <h2 className="text-base sm:text-lg lg:text-xl text-neutral-300 mt-4">
            As of now we excel at 2 categories of drones
          </h2>
          <div className="text-sm sm:text-base text-neutral-300 mt-6 border-2 rounded-full p-3 sm:p-4 flex items-center w-fit">
            <p>Go ahead and take a look for yourself</p>
            <ArrowDownIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-2 underline text-center">
          Multirotors
        </h1>
        <h2 className="text-neutral-400 text-center mt-4 sm:mt-5 text-base sm:text-lg max-w-3xl mx-auto">
          We specialize in crafting custom-based multirotor drone solutions,
          tailored precisely to your unique needs.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {MultirotorProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center shadow-lg bg-neutral-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Link to={`/multirotor/${item.id}`} className="w-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <h1 className="text-white text-lg sm:text-xl text-center mt-4">
                  {item.name}
                </h1>
              </Link>
              <p className="text-white text-sm sm:text-base text-center my-4">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-2 underline text-center">
          Fixed Wings
        </h1>
        <h2 className="text-neutral-400 text-center mt-4 sm:mt-5 text-base sm:text-lg max-w-3xl mx-auto">
          We specialize in crafting custom-based fixed-wing drone solutions,
          tailored precisely to your unique needs.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {FixedWingProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-neutral-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Link to={`/fixedwing/${item.id}`} className="w-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <h1 className="text-white text-lg sm:text-xl text-center mt-4">
                  {item.name}
                </h1>
              </Link>
              <p className="text-white text-sm sm:text-base text-center my-4">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aircrafts;
