import React from "react"
import ServicesBgImg from "./../assets/images/services.jpg"
import Footer from "./footer"


const Services = () => {

    return (
        <div>
            <section className="lg:h-screen relative">
                <img src={ServicesBgImg} className="object-cover lg:h-full -z-50 w-full absolute top-0 left-0" alt="main bg image"></img>
                <div className="flex flex-row justify-center items-center lg:h-full pb-50">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col items-center pl-30 pr-30">
                            <h1 className="text-9xl font-bold text-neutral-200 lg:mt-30">Boost Your Work</h1>
                            <h1 className="text-9xl font-bold text-neutral-200 ">Force</h1>
                            <p className="text-xl text-neutral-400 mt-10 text-center text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Amet reprehenderit consectetur vel natus autem doloremque sed expedita at ad
                                Amet reprehenderit consectetur vel natus autem doloremque sed expedita at ad
                                commodi consequatur nulla perferendis in,
                                nihil impedit asperiores reiciendis minima hic eaque esse</p>

                        </div>
                        <div className="flex flex-row mt-10 justify-center">
                            <a
                                href="#"
                                className="text-black bg-gradient-to-r from-purple-200 to-purple-700 px-6 py-4 rounded-4xl mr-8"
                            >
                                Know more about us
                            </a>

                            <a
                                href="#"
                                className="text-black bg-gradient-to-r from-purple-200 to-purple-700 px-6 py-4 rounded-4xl"
                            >
                                Get in touch with us
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="flex flex-row bg-neutral-300 justify-between pb-30 pt-30 pl-30 pr-30 ">
                    <div>
                        <h1 className="text-4xl bg-gradient-to-r from-purple-500 to-purple-900 text-transparent font-bold bg-clip-text">Our Services</h1>
                        <h2 className="text-6xl text-gray-900 mt-5">We provide a wide range of services</h2>
                        {/* <h2 className="text-6xl text-gray-900">of services</h2> */}
                        <p className="text-2xl text-wrap text-gray-700 mt-10 mr-10 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Illum quasi ullam hic numquam labore illo doloremque fugit molestias cupiditate voluptatibus nobis, 
                            facilis debitis ab corporis aliquam omnis veniam itaque commodi velit. Magnam?</p>
                    </div>
                    <div className="flex flex-col">
                    <div className="flex flex-row"> {/* switch to grid layout for this later on*/}
                    <div className="h-[400px] w-[350px] bg-gray-100 mr-10 rounded-2xl flex flex-col items-center p-5">
                        <div className="h-[150px] w-[150px] bg-gray-600 rounded-full mt-5"></div>
                        <h1 className="mt-5">Drone Surveillance</h1>
                        <p className="mt-5 text-sm text-wrap text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Molestiae eveniet recusandae 
                            voluptates autem ad explicabo, aut itaque eum?</p>
                    </div>
                    <div className="h-[400px] w-[350px] bg-gray-100 mr-10 rounded-2xl flex flex-col items-center p-5">
                        <div className="h-[150px] w-[150px] bg-gray-600 rounded-full mt-5"></div>
                        <h1 className="mt-5">Drone Surveillance</h1>
                        <p className="mt-5 text-sm text-wrap text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Molestiae eveniet recusandae 
                            voluptates autem ad explicabo, aut itaque eum?</p>
                    </div>
                    <div className="h-[400px] w-[350px] bg-gray-100 mr-10 rounded-2xl flex flex-col items-center p-5">
                        <div className="h-[150px] w-[150px] bg-gray-600 rounded-full mt-5"></div>
                        <h1 className="mt-5">Drone Surveillance</h1>
                        <p className="mt-5 text-sm text-wrap text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Molestiae eveniet recusandae 
                            voluptates autem ad explicabo, aut itaque eum?</p>
                    </div>
                    </div>
                    <div className="flex flex-row mt-10"> {/* switch to grid layout for this later on*/}
                    <div className="h-[400px] w-[350px] bg-gray-100 mr-10 rounded-2xl flex flex-col items-center p-5">
                        <div className="h-[150px] w-[150px] bg-gray-600 rounded-full mt-5"></div>
                        <h1 className="mt-5">Drone Surveillance</h1>
                        <p className="mt-5 text-sm text-wrap text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Molestiae eveniet recusandae 
                            voluptates autem ad explicabo, aut itaque eum?</p>
                    </div>
                    <div className="h-[400px] w-[350px] bg-gray-100 mr-10 rounded-2xl flex flex-col items-center p-5">
                        <div className="h-[150px] w-[150px] bg-gray-600 rounded-full mt-5"></div>
                        <h1 className="mt-5">Drone Surveillance</h1>
                        <p className="mt-5 text-sm text-wrap text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Molestiae eveniet recusandae 
                            voluptates autem ad explicabo, aut itaque eum?</p>
                    </div>
                    <div className="h-[400px] w-[350px] bg-gray-100 mr-10 rounded-2xl flex flex-col items-center p-5">
                        <div className="h-[150px] w-[150px] bg-gray-600 rounded-full mt-5"></div>
                        <h1 className="mt-5">Drone Surveillance</h1>
                        <p className="mt-5 text-sm text-wrap text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Molestiae eveniet recusandae 
                            voluptates autem ad explicabo, aut itaque eum?</p>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;