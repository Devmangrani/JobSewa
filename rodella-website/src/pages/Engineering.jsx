import Navbar from "../components/Navbar";
import ManufacturingVideo from "../assets/videos/demo1.mp4";
import DesignImg1 from "./../assets/images/services.jpg";
import DesignImg2 from "./../assets/images/fixed-wing1.png";
import PrototypeImg1 from "./../assets/images/design.jpg";
import PrototypeImg2 from "./../assets/images/MQ650LV.jpg";
import PrototypeImg3 from "./../assets/images/fixed-wing2.jpg";
import React, { useRef } from "react";
import HorizontalScrollCarousel from "../components/HorizontalScrollCarousel";
import { ArrowUp } from "lucide-react";


const Engineering = () => {

    const section0Ref = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const scrollToSection = (elementRef) => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="bg-black pt-2">
            <Navbar />
            <main className="lg:px-50 lg:py-30">
                <section ref={section0Ref} id="section0" className="py-10">
                    <h1 className="text-white lg:text-5xl text-center text-3xl">Want Some Engineering Wizardry For Yourself?</h1>
                    <p className="text-neutral-400 text-center mt-5 lg:text-xl text-lg text-wrap">All our Drones are designed and developed in house.</p>


                    <div className="text-white mt-10 lg:flex lg:flex-row justify-center items-center lg:gap-10 flex flex-col">
                        {/* <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white cursor-pointer"
                        onClick={() => scrollToSection(section1Ref)}
                    >
                        Design</div> */}
                        <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white cursor-pointer inline-block"
                            onClick={() => scrollToSection(section2Ref)}
                        >
                            Prototyping</div>
                        <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white cursor-pointer inline-block"
                            onClick={() => scrollToSection(section3Ref)}
                        >
                            Simulation</div>
                        <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white cursor-pointer inline-block"
                            onClick={() => scrollToSection(section4Ref)}
                        >
                            Airframe Integration</div>
                    </div>


                    {/* <div className="flex justify-center items-center">
                    <video
                        src={ManufacturingVideo}
                        className="h-160 object-cover mt-4 rounded-sm w-full"
                        autoPlay
                        muted
                        
                    >
                    </video>
                </div> */}
                </section>
                <section ref={section1Ref} id="section1" className="lg:pt-30 py-10">
                    {/* <h1 className="text-white text-5xl text-center underline">Design</h1>
                <p className="text-neutral-400 lg:text-xl text-center mt-3 sm:text-lg px-2">Write to us so that we can provide the custom design as per your requirements.</p>
                <div className="lg:px-30 lg:flex lg:flex-col mt-10 px-3">
                    <h2 className="text-3xl text-neutral-300 my-5">3D Modeling</h2>
                    <div className="lg:flex lg:flex-row">
                        <p className="lg:text-2xl text-neutral-400 lg:mr-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                            Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                            Asperiores ut eius soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <img src={DesignImg1} className="lg:h-100"></img>
                    </div>
                </div> */}

                    <h1 className="text-3xl text-center text-white underline lg:text-5xl">Design</h1>
                    <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">Write to us so that we can provide the custom design as per your requirements.</p>
                    
                    <div className="mt-10 px-3 lg:px-30">
                        <h2 className="my-3 lg:text-3xl text-xl text-neutral-200">3D Modeling</h2>
                        <div className="flex flex-col lg:flex-row">
                            <p className="mr-0 text-lg text-neutral-400 lg:mr-5 lg:text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat esse pariatur porro, 
                                quidem necessitatibus veniam at aspernatur! 
                                Eaque rem non iusto et id! Facere molestiae laudantium dolorum. 
                                Asperiores ut eius soluta. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <img src={DesignImg1} className="mt-4 lg:mt-0 lg:h-100 max-w-full rounded-lg" alt="Design Image 1" />
                        </div>
                    </div>

                    <div className="mt-10 px-3 lg:px-30">
                        <h2 className="lg:text-3xl text-xl text-neutral-200 my-5">Aerodynamic Analysis</h2>
                        <div className="flex lg:flex-row flex-col">
                            <img src={DesignImg2} className="lg:h-100 max-w-full mb-4 rounded-lg" alt="Design Image 2"></img>
                            <p className="lg:text-2xl text-neutral-400 lg:ml-5 mr-0 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                                Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                                Asperiores ut eius soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 px-3 lg:px-30">
                        <h2 className="lg:text-3xl text-xl text-neutral-200 my-3">Material Selection</h2>
                        <div className="flex flex-col lg:flex-row">
                            <p className="lg:text-2xl text-neutral-400 lg:mr-5 text-lg mr-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                                Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                                Asperiores ut eius soluta.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <img src={DesignImg1} className="lg:h-100 mt-4 lg:mt-0 max-w-full rounded-lg" alt="Design Image 3"></img>
                        </div>
                    </div>
                </section>

                <section ref={section2Ref} id="section2" className="lg:pt-30 py-10">
                    <h1 className="text-3xl text-center text-white underline lg:text-5xl">Prototyping</h1>
                    {/* <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">With the facility of advanced composites, plastic and metal fabrication, See your design come to life</p> */}
                    <p className="text-neutral-400 lg:text-2xl text-lg mt-10 px-3">
                        During the Prototyping phase our drones go through multiple stages of testing and quality checks to enusre 
                        long-lasting reliable performance across all the conditions.
                        All the maximum performance parameters are checked during this test. 
                        The products are pushed to extreme tests to determine the maximum operational abilities of each drone 
                        </p>
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-30 md:grid-cols-2 px-3">
                        <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg"> 
                            <img src={PrototypeImg1} className="h-130 object-cover rounded-lg" alt="Prototype Image 1"></img>
                            <h1 className="text-2xl text-neutral-300 mt-5">Prototype Construction</h1>
                            {/* <p className="text-xl text-neutral-300 mt-5 text-center">Various ground testing are performed in order to determine the functionality of all the control systems and sensors </p> */}
                        </div>
                        <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg">
                            <img src={PrototypeImg1} className="h-130 object-cover rounded-lg" alt="Prototype Image 2"></img>
                            <h1 className="text-2xl text-neutral-300 mt-5">Component testing</h1>
                            {/* <p className="text-xl text-neutral-300 mt-5 text-center">Each individual components (motors, ESCs, batteries) are tested vigorously for performance and reliability.</p> */}
                        </div>
                        <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg">
                            <img src={PrototypeImg2} className="h-130 object-cover rounded-lg" alt="Prototype Image 3"></img>
                            <h1 className="text-2xl text-neutral-300 mt-5">Ground testing</h1>
                            {/* <p className="text-xl text-neutral-300 mt-5 text-center">Various ground testing are performed in order to determine the functionality of all the control systems and sensors </p> */}
                        </div>
                        <div className="bg-neutral-900 flex flex-col items-center pb-4 opacity-80 rounded-lg">
                            <img src={PrototypeImg3} className="h-130 object-cover rounded-lg" alt="Prototype Image 4"></img>
                            <h1 className="text-2xl text-neutral-300 mt-5">Flight testing</h1>
                            {/* <p className="text-xl text-neutral-300 mt-5 text-center">Multiple flight tests are conducted in controlled environment to evaluate stability, performance and control of the aircraft</p> */}
                        </div>
                    </div>
                </section>

                <section ref={section3Ref} id="section3" className="lg:pt-30 py-10">
                    <h1 className="text-3xl text-center text-white underline lg:text-5xl">Simulation</h1>
                    <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">From static testing to CFD, to model analysis, we do it for ourselves, We will do it for you</p>
                    <div className="mt-10">
                        <HorizontalScrollCarousel />
                    </div>
                </section>

                <section ref={section4Ref} id="section4" className="lg:pt-30 py-10">
                    <h1 className="text-3xl text-center text-white underline lg:text-5xl">Airframe Integration</h1>
                    <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="lg:px-20 max-w-full mt-10 px-3">
                        <img src={DesignImg2} className="lg:h-150 w-full object-cover rounded-lg" alt="Airframe Integration Image"></img>
                    </div>
                    <div className="lg:px-20 my-10 px-3">

                        <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg">Component Placement & Mounting</h2>
                                <ul className="list-disc ml-5 lg:text-2xl text-neutral-400 mt-5">
                                    <li>Strategic Placement:</li>
                                    <li>Secure Mounting:</li>
                                    <li>Vibration Isolation:</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg lg:mt-0 md:mt-0 mt-5">Wiring and Connections</h2>
                                <ul className="list-disc ml-5 lg:text-2xl text-neutral-400 mt-5">
                                    <li>Clean Wiring</li>
                                    <li>Secure Connections</li>
                                    <li>Cable Management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row md:flex-row justify-between mt-10">
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg">Payload Integration</h2>
                                <ul className="list-disc ml-5 lg:text-2xl text-neutral-400 mt-5">
                                    <li>Payload Mounting</li>
                                    <li>Payload Power and Data Connections</li>
                                    <li>Payload Integration with Flight Controller</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="lg:text-3xl text-white text-lg lg:mt-0 md:mt-0 mt-5">Testing and Validation</h2>
                                <ul className="list-disc ml-5 lg:text-2xl text-neutral-400 mt-5">
                                    <li>Ground Testing</li>
                                    <li>Vibration Testing</li>
                                    <li>Flight Testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center cursor-pointer" onClick={() => scrollToSection(section0Ref)}>
                        <h2 className="text-white lg:text-3xl text-lg text-center mt-30 border-[2px] inline-flex px-6 py-3 rounded-full items-center justify-center">
                            Go Back
                            <ArrowUp size={30} color="white" />
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Engineering;