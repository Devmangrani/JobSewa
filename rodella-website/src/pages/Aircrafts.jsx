import CheckMarkIcon from "./../assets/images/check-mark.png";
import MultirotorDrone2 from "./../assets/images/2.png";
import FixedWingDrone2 from "./../assets/images/fixed-wing2.jpg";
import FixedWingDrone1 from "./../assets/images/fixed-wing1.png";
import Navbar from "../components/Navbar";
import AirCraftData from "../constants/AircraftData";
import React, { useState, useEffect } from 'react';
import MultirotorDrone3 from "./../assets/images/services.jpg"
import { ArrowDownIcon } from '@heroicons/react/24/solid'; // or /outline
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Aircrafts = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % AirCraftData.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval
    }, [AirCraftData.length]);

    return (
        <div >
            <section className="lg:h-screen relative pt-2">
            <Navbar /> 
                <img src={AirCraftData[currentImageIndex].url} className="absolute top-0 left-0 w-full h-full -z-50 object-cover brightness-50 "></img>
                <div className="flex flex-col lg:h-full pr-50 pl-50 justify-between pb-30">
                    <h1 className="text-9xl bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-center lg:mt-30 font-bold text-transparent lg:h-1/2">
                        Let's fly higher</h1>
                    <p className="text-xl text-center text-neutral-300 text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam fugiat est maiores! Aut molestiae amet nisi omnis, accusantium placeat blanditiis sunt perferendis adipisci temporibus,
                    </p>
                    <p className="text-4xl bg-gradient-to-t from-purple-200 to-purple-700 bg-clip-text font-bold text-center text-transparent">{AirCraftData[currentImageIndex].title}</p>
                    <div className="grid grid-cols-4 gap-4 divide-x divide-neutral-300">
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-t from-purple-200 to-purple-700 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">{AirCraftData[currentImageIndex].flightTime}</p>
                            <p className="text-neutral-300 text-xl text-center">Longer Flight Time</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-t from-purple-200 to-purple-700 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">{AirCraftData[currentImageIndex].TransmissionRange}</p>
                            <p className="text-neutral-300 text-xl text-center">Video Transmission Range</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-t from-purple-200 to-purple-700 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">{AirCraftData[currentImageIndex].LiveFeed}</p>
                            <p className="text-neutral-300 text-xl text-center">High-res Live Feed</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-r from-purple-200 to-purple-700 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">{AirCraftData[currentImageIndex].Positioning}</p>
                            <p className="text-neutral-300 text-xl text-center">Positioning Technology</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pl-50 pr-50 pt-50 pb-50 bg-black">
            <div>
                <h1 className="text-bold text-6xl text-white">We have a wide range of custom based drone solutions</h1>
                <h2 className="text-xl text-neutral-300 mt-4">As of now we excels at 2 categories of drones</h2>
                <div className="text-xs text-neutral-300 mt-4 border-2 rounded-full p-4 flex flex-row items-center w-fit">
                        <p>
                        Go ahead and took a look for yourslef
                        </p>
                        <ArrowDownIcon className="h-5 w-5 ml-2" />
                    </div>
            </div>
            </section>
            <section className="pl-50 pr-50 bg-black pb-50">
                <h1 className="text-white text-5xl lg:mb-2 text-center">Multirotors</h1>
                <h2 className="text-neutral-400 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                <div className="flex flex-col border-gray-500 border-5 rounded-2xl p-10 shadow-gray-600 shadow-2xl lg:mt-15 ">
                    <div className="flex flex:row">
                        <img src={MultirotorDrone2} className="w-180 h-120 object-cover rounded-2xl"></img>


                        <div className="flex flex-col">
                            <p className="text-sm text-neutral-200 lg:ml-30 lg:mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="flex flex-col w-full justify-center lg:ml-30">

                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    <p>Vertical Takeoff and Landing</p>
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Improved Flight Controllers
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5 ">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Better Improved Batteries
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5 ">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Enhanced Cameras & Sensors
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Cost-Effective Solutions
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Cost-Effective Solutions
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Cost-Effective Solutions
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <h3 className="text-xl text-neutral-400 mt-25">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Consectetur aspernatur temporibus unde quasi modi alias consequatur dolorem? 
                        Corrupti nemo laborum saepe officiis ut adipisci, 
                        </h3>
                    <div className="flex flex-row lg:mt-15 justify-between">
                        <div className="flex lg:flex-col justify-between items-center">
                            <div className="flex flex-col">
                            <h3 className="text-xl text-neutral-400 mr-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Est rem quibusdam numquam quis voluptates accusantium tenetur in.
                                </h3>
                                <h3 className="text-xl text-white mr-8 mt-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            </div>
                            
                            <div className="flex flex-row text-black bg-gradient-to-r from-purple-200 to-purple-700 px-5 py-4 rounded-full mr-4 items-center">
                                <a href="/multirotor">
                                    Know more
                                </a>
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </div>
                        </div>

                        <img src={MultirotorDrone3} className="w-180 h-120 object-cover rounded-2xl"></img>

                    </div>
                </div>


            </section>


            <section className="pl-50 pr-50 bg-black pb-50">
                <h1 className="text-white text-5xl lg:mb-2 text-center">Fixed Wing Drones</h1>
                <h2 className="text-neutral-400 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                <div className="flex flex-col border-gray-500 border-5 rounded-2xl p-10 shadow-gray-600 shadow-2xl lg:mt-15 ">
                    <div className="flex flex:row">
                        <img src={FixedWingDrone2} className="w-180 h-120 object-cover rounded-2xl"></img>


                        <div className="flex flex-col">
                            <p className="text-sm text-neutral-200 lg:ml-30 lg:mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="flex flex-col w-full justify-center lg:ml-30">

                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    <p>Vertical Takeoff and Landing</p>
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Improved Flight Controllers
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5 ">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Better Improved Batteries
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5 ">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Enhanced Cameras & Sensors
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Cost-Effective Solutions
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Cost-Effective Solutions
                                </div>
                                <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                    <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                    Cost-Effective Solutions
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <h3 className="text-xl text-neutral-400 mt-25">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Consectetur aspernatur temporibus unde quasi modi alias consequatur dolorem? 
                        Corrupti nemo laborum saepe officiis ut adipisci, 
                        </h3>
                    <div className="flex flex-row lg:mt-15 justify-between">
                        <div className="flex lg:flex-col justify-between items-center">
                            <div className="flex flex-col">
                            <h3 className="text-xl text-neutral-400 mr-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Est rem quibusdam numquam quis voluptates accusantium tenetur in.
                                </h3>
                                <h3 className="text-xl text-white mr-8 mt-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                <h3 className="text-xl text-white mr-8 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            </div>
                            
                            <div className="flex flex-row text-black bg-gradient-to-r from-purple-200 to-purple-700 px-5 py-4 rounded-full mr-4 items-center">
                                <a href="/fixedwing">
                                    Know more
                                </a>
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </div>
                        </div>

                        <img src={FixedWingDrone1} className="w-180 h-120 object-cover rounded-2xl"></img>

                    </div>
                </div>


            </section>

            {/* <section className="pl-50 pr-50 bg-black pt-50 pb-50">
                <h1 className="text-white text-5xl lg:mb-2 text-center">Fixed Wing Drones</h1>
                <h2 className="text-neutral-400 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                <div className="flex flex:row border-gray-500 border-5 rounded-2xl p-10 shadow-gray-600 shadow-2xl lg:mt-15">
                    <img src={FixedWingDrone2} className="w-180 h-120 object-cover rounded-2xl"></img>

                    <div className="flex flex-col">
                        <p className="text-sm text-neutral-200 lg:ml-30 lg:mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex flex-col w-full justify-center lg:ml-30">

                            <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl">
                                <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                <p>Vertical Takeoff and Landing</p>
                            </div>
                            <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                Improved Flight Controllers
                            </div>
                            <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5 ">
                                <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                Better Improved Batteries
                            </div>
                            <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5 ">
                                <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                Enhanced Cameras & Sensors
                            </div>
                            <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                Cost-Effective Solutions
                            </div>
                            <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                Cost-Effective Solutions
                            </div>
                            <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                                <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6 self-center"></img>
                                Cost-Effective Solutions
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row lg:mt-8 items-center">
                    <h3 className="text-xl text-white mr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div className="flex flex-row">
                        <a
                            href="#"
                            className="text-black bg-gradient-to-r from-purple-200 to-purple-700 px-4 py-4 rounded-full mr-4"
                        >
                            Know more
                        </a>
                    </div>
                </div>

            </section> */}

            {/* 
            <section className="bg-black pt-10 pb-10 pl-50 pr-50">
                <div className="flex flex-row justify-between lg:mt-30">
                    <div className="text-white">
                        <h1 className="text-5xl font-semibold">Multirotors</h1>
                        <p className="lg:mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-8">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Vertical Takeoff and Landing
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Improved Flight Controllers
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Better Batteries
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Enhanced Cameras and Sensors
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Cost-Effectiveness
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={MultirotorDrone1} className="w-150 h-100 object-cover"></img>
                    </div>
                </div>
                <div className="flex flex-row lg:mt-30 justify-between">
                    <img src={MultirotorDrone2} className="w-150 h-100 object-cover rounded-2xl"></img>
                    <div className="flex flex-col justify-between items-center">
                        <p className="text-xl text-white text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
                            sunt eligendi! Ipsa id minus aperiam repellat, magnam odit esse consectetur qui labore cum eius? Reiciendis perspiciatis
                            aspernatur corrupti. Possimus consectetur accusamus aut suscipit error magni rerum eos alias!
                        </p>
                        {/* <p className="text-xl text-gray text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
                            sunt eligendi! Ipsa id minus aperiam repellat, magnam odit esse consectetur qui labore cum eius? Reiciendis perspiciatis
                            aspernatur corrupti. Possimus consectetur accusamus aut suscipit error magni rerum eos alias!
                        </p> 
                        <div className="flex flex-row">
                            <a
                                href="#"
                                className="text-black bg-gradient-to-r from-purple-200 to-purple-700 px-4 py-4 rounded-md mr-4"
                            >
                                Know more
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black pt-10 pb-10 pr-50 pl-50">
                <div className="flex flex-row justify-between lg:mt-30">
                    <div className="text-white">
                        <h1 className="text-5xl font-semibold">Fixed Wing Drones</h1>
                        <p className="lg:mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-8">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Longer Flight Times
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Stable Flight in Wind
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Greater Payload Flexibility
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Glide Capability
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Higher Speed
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={FixedWingDrone1} className="w-150 h-100 object-cover rounded-2xl"></img>
                    </div>
                </div>
                <div className="flex flex-row lg:mt-30 ">
                    <img src={FixedWingDrone2} className="w-150 h-100 object-cover rounded-2xl"></img>
                    <div className="flex flex-col justify-between items-center">
                        <p className="text-xl text-white text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
                            sunt eligendi! Ipsa id minus aperiam repellat, magnam odit esse consectetur qui labore cum eius? Reiciendis perspiciatis
                            aspernatur corrupti. Possimus consectetur accusamus aut suscipit error magni rerum eos alias!
                        </p>
                        {/* <p className="text-xl text-gray text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
                            sunt eligendi! Ipsa id minus aperiam repellat, magnam odit esse consectetur qui labore cum eius? Reiciendis perspiciatis
                            aspernatur corrupti. Possimus consectetur accusamus aut suscipit error magni rerum eos alias!
                        </p> *
                        <div className="flex flex-row">
                            <a
                                href="#"
                                className="text-black bg-gradient-to-r from-purple-200 to-purple-700 px-4 py-4 rounded-md mr-4"
                            >
                                Know more
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* This option will be added later on */}
            {/* <section className="bg-gray-300 pt-10 pb-30">
                <div className="flex flex-row justify-between lg:mt-30">
                    <div className="mr-30 ml-30">
                        <h1 className="text-5xl font-semibold">Underwater Rov's</h1>
                        <p className="lg:mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-8">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Access to Extreme Depths 
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Real-Time Observation and Control
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Enhanced Safety Systems
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Extended Operational Time
                        </div>
                        <div className="flex flex-row bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-xl mt-5">
                            <img src={CheckMarkIcon} className="h-[22px] w-[22px] bg-gradient-to-b from-purple-200 to-purple-700 rounded-full mr-6"></img>
                            Repeatability and Consistency
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:mr-50">
                        <img src={RovDrone1} className="w-150 h-100 object-cover rounded-2xl"></img>
                     </div>
             
                </div>
                <div className="flex flex-row lg:mt-30 ">
                    <img src={RovDrone2} className="w-150 h-100 object-cover mr-30 ml-30 rounded-2xl"></img>
                    <div className="mr-30 ml-30 flex flex-col justify-between items-center pl-30">
                        <p className="text-xl text-gray-900 text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
                            sunt eligendi! Ipsa id minus aperiam repellat, magnam odit esse consectetur qui labore cum eius? Reiciendis perspiciatis
                            aspernatur corrupti. Possimus consectetur accusamus aut suscipit error magni rerum eos alias!
                        </p>
                        <p className="text-xl text-gray text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
                            sunt eligendi! Ipsa id minus aperiam repellat, magnam odit esse consectetur qui labore cum eius? Reiciendis perspiciatis
                            aspernatur corrupti. Possimus consectetur accusamus aut suscipit error magni rerum eos alias!
                        </p>
                        <div className="flex flex-row">
                            <a
                                href="#"
                                className="text-black bg-gradient-to-r from-purple-200 to-purple-700 px-4 py-4 rounded-md mr-4"
                            >
                                Know more
                            </a>
                        </div>
                    </div>
                </div>
            </section>  
                 */}
                
        </div>
    )
}

export default Aircrafts;




















