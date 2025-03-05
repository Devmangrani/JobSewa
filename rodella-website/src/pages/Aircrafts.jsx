import CheckMarkIcon from "./../assets/images/check-mark.png";
import FixedWingDrone1 from "./../assets/images/fixed-wing1.png";
import Navbar from "../components/Navbar";
import AirCraftData from "../constants/AircraftData";
import MultirotorProducts from "../constants/MultirotorProducts";
import FixedWingProducts from "../constants/FixedWingProducts";
import React, { useState, useEffect } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/solid'; // or /outline
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Aircrafts = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % AirCraftData.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clean up the interval
    }, [AirCraftData.length]);

    return (
        <div>
            <section className="lg:h-screen relative pt-2">
            <Navbar />
                <img src={AirCraftData[currentImageIndex].url} className="absolute top-0 left-0 w-full h-full -z-50 object-cover brightness-30"></img>
                <div className="flex flex-col lg:h-full pr-50 pl-50 justify-between pb-30">
                    <h1 className="text-9xl bg-gradient-to-b text-white bg-clip-text text-center lg:mt-20 font-bold lg:h-1/2">
                        Let's fly higher</h1>
                   
                    <Link to={`/aircrafts/${AirCraftData[currentImageIndex].id}`} 
                    className="flex justify-center">
                    <p className="text-3xl text-center text-black bg-neutral-400 px-8 py-3 rounded-full opacity-70 flex flex-row items-center">
                        {AirCraftData[currentImageIndex].title}
                        <ArrowRightIcon className="h-8 w-8 ml-2" />
                        </p>
                    </Link>
                    <p className="text-xl text-center text-neutral-300 text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam fugiat est maiores!
                    </p>
                    <div className="grid grid-cols-4 gap-4 divide-x divide-neutral-300">
                        <div className="text-center flex flex-col">
                            <p className="text-white font-bold text-center text-2xl mb-5">{AirCraftData[currentImageIndex].flightTime}</p>
                            <p className="text-neutral-300 text-xl text-center">Longer Flight Time</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="text-white font-bold text-center text-2xl mb-5">{AirCraftData[currentImageIndex].TransmissionRange}</p>
                            <p className="text-neutral-300 text-xl text-center">Video Transmission Range</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="text-white font-bold text-center text-2xl mb-5">{AirCraftData[currentImageIndex].LiveFeed}</p>
                            <p className="text-neutral-300 text-xl text-center">High-res Live Feed</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="text-white font-bold text-center text-2xl mb-5">{AirCraftData[currentImageIndex].Positioning}</p>
                            <p className="text-neutral-300 text-xl text-center">Positioning Technology</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pl-50 pr-50 pt-50 bg-black">
                <div>
                    <h1 className="text-bold text-6xl text-white">We have a wide range of custom based drone solutions</h1>
                    <h2 className="text-xl text-neutral-300 mt-4">As of now we excel at 2 categories of drones</h2>
                    <div className="text-xs text-neutral-300 mt-4 border-2 rounded-full p-4 flex flex-row items-center w-fit">
                        <p>
                            Go ahead and took a look for yourslef
                        </p>
                        <ArrowDownIcon className="h-5 w-5 ml-2" />
                    </div>
                </div>
            </section>
            <section className="px-50 bg-black py-30">
                <h1 className="text-white text-5xl lg:mb-2 underline text-center">Multirotors</h1>
                <h2 className="text-neutral-400 text-center mt-5">We specialize in crafting custom-based multirotor drone solutions, tailored precisely to your unique needs.</h2>
                {/* <h3 className="text-xl text-neutral-400 mt-2 text-center">We specialize in crafting custom-based multirotor drone solutions, tailored precisely to your unique needs.
                </h3> */}

                <div className="grid grid-cols-3 gap-x-5 gap-y-5 mt-15">
                    {MultirotorProducts.map((item) => {
                        return(
                        <div key={item.id} className="flex flex-col items-center shadow-lg bg-neutral-900 rounded-sm">
                            <Link to={`/multirotor/${item.id}`}> {/* linked to Multirotor component page for product details rendering dynamically */}
                             <img src={item.img} alt={item.name} className="object-cover rounded-sm h-100"></img>
                             <h1 className="text-white text-xl text-center mt-4">{item.name}</h1>
                             </Link>
                             <p className="text-white text-sm text-center my-4">{item.price}</p>
                        </div>
                        )
                    })}
                </div>

            </section>
            

            <section className="px-50 bg-black py-30">
                <h1 className="text-white text-5xl lg:mb-2 underline text-center">Fixed Wings</h1>
                <h2 className="text-neutral-400 text-center mt-5">We specialize in crafting custom-based multirotor drone solutions, tailored precisely to your unique needs.</h2>
                {/* <h3 className="text-xl text-neutral-400 mt-2 text-center">We specialize in crafting custom-based multirotor drone solutions, tailored precisely to your unique needs.
                </h3> */}
               <div className="grid grid-cols-3 gap-x-5 gap-y-5 mt-15">
                {FixedWingProducts.map((item) => {
                    return(
                        <div key={item.id} className="flex flex-col items-center bg-neutral-900">
                            <Link to={`/fixedwing/${item.id}`}> {/* linked to FixedWiing component page for product details rendering dynamically */}
                            <img src={item.img} className="object-cover rounded-sm h-100"></img>
                            <h1 className="text-white text-xl text-center mt-4">{item.name}</h1>
                            </Link>
                            <p className="text-white text-sm text-center my-4">{item.price}</p>
                        </div>
                    )
                })}
               </div>
            </section>
        </div>
    )
}

export default Aircrafts;