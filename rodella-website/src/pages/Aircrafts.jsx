import MainBgImg from "./../assets/images/aircraftsBG.jpg";
import CheckMarkIcon from "./../assets/images/check-mark.png";
import MultirotorDrone1 from "./../assets/images/homepagedrone.png";
import MultirotorDrone2 from "./../assets/images/2.png";
import FixedWingDrone1 from "./../assets/images/fixed-wing1.png";
import FixedWingDrone2 from "./../assets/images/fixed-wing2.jpg";
import RovDrone1 from "./../assets/images/rov1.jpeg";
import RovDrone2 from "./../assets/images/rov2.jpeg";



const Aircrafts = () => {

    return (
        <div>
            <section className="lg:h-screen relative">
                <img src={MainBgImg} className="absolute top-0 left-0 w-full h-full -z-50 object-cover brightness-80"></img>
                <div className="flex flex-col lg:h-full pr-30 pl-30 justify-between pb-30">
                    <h1 className="text-9xl bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-center lg:mt-30 font-bold text-transparent lg:h-1/2">
                        Let's fly higher</h1>
                    <p className="text-xl text-center text-neutral-300 text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam fugiat est maiores! Aut molestiae amet nisi omnis, accusantium placeat blanditiis sunt perferendis adipisci temporibus,
                        aliquam a ipsam ducimus voluptatem quibusdam esse laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, unde officiis, sint sit libero excepturi
                        aliquam esse doloribus maiores accusantium natus vel adipisci officia quas!
                        Distinctio magnam unde nemo debitis</p>
                    <div className="grid grid-cols-4 gap-4 divide-x divide-neutral-300">
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-t from-purple-200 to-purple-700 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">45 Minutes</p>
                            <p className="text-neutral-300 text-xl text-center">Longer Flight Time</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-t from-purple-200 to-purple-700 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">15 KM</p>
                            <p className="text-neutral-300 text-xl text-center">Video Transmission Range</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-t from-purple-200 to-purple-700 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">4k/60fps</p>
                            <p className="text-neutral-300 text-xl text-center">High-res Live Feed</p>
                        </div>
                        <div className="text-center flex flex-col">
                            <p className="bg-gradient-to-r from-purple-400 to-purple-900 bg-clip-text font-bold text-transparent text-center text-2xl mb-5">Extreme Precision</p>
                            <p className="text-neutral-300 text-xl text-center">Positioning Technology</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray-300 pt-10 pb-10">
                <div className="flex flex-row justify-between lg:mt-30">
                    <div className="mr-30 ml-30">
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
                    <div className="flex flex-col lg:mr-50">
                        <img src={MultirotorDrone1} className="w-150 h-100 object-cover"></img>
                    </div>
                </div>
                <div className="flex flex-row lg:mt-30 ">
                    <img src={MultirotorDrone2} className="w-150 h-100 object-cover mr-30 ml-30 rounded-2xl"></img>
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

            <section className="bg-neutral-300 pt-10 pb-10">
                <div className="flex flex-row justify-between lg:mt-30">
                    <div className="mr-30 ml-30">
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
                    <div className="flex flex-col lg:mr-50">
                        <img src={FixedWingDrone1} className="w-150 h-100 object-cover rounded-2xl"></img>
                    </div>
                </div>
                <div className="flex flex-row lg:mt-30 ">
                    <img src={FixedWingDrone2} className="w-150 h-100 object-cover mr-30 ml-30 rounded-2xl"></img>
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

            <section className="bg-gray-300 pt-10 pb-30">
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
        </div>
    )
}

export default Aircrafts;