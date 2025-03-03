import Navbar from "../components/Navbar";
import ManufacturingVideo from "../assets/videos/demo1.mp4";
import DesignImg1 from "./../assets/images/services.jpg";
import DesignImg2 from "./../assets/images/fixed-wing1.png";
import PrototypeImg1 from "./../assets/images/design.jpg";
import PrototypeImg2 from "./../assets/images/MQ650LV.jpg"
import PrototypeImg3 from "./../assets/images/fixed-wing2.jpg";
import React, { useRef } from "react";


const Engineering = () => {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    const scrollToSection = (elementRef) => {
        if(elementRef.current) {
            elementRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="bg-black pt-2">
            <Navbar />
            <section className="px-50 py-30">
                <h1 className="text-white text-5xl text-center">Want Some Engineering Wizardry For Yourself?</h1>
                <p className="text-neutral-400 text-center mt-5 text-xl">All our Drones are designed and developed in house.</p>
                <div className="text-white mt-10 flex flex-row justify-center items-center gap-10">
                    <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white cursor-pointer"
                        onClick={() => scrollToSection(section1Ref)}
                        >
                        Design</div>
                    <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white cursor-pointer"
                        onClick={() => scrollToSection(section2Ref)}
                        >Prototyping</div>
                    <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white">Simulation</div>
                    <div className="text-xl border-2 border-neutral-500 bg-black mb-5 rounded-full px-5 py-2 text-white">Airframe Integration</div>
                </div>
                <div className="flex justify-center items-center">
                    <video
                        src={ManufacturingVideo}
                        className="h-160 object-cover mt-4 rounded-sm w-full"
                        autoPlay
                        muted
                        loop
                    >
                    </video>
                </div>
            </section>
            <section ref={section1Ref} id="section1" className="py-30 px-50 ">
                <h1 className="text-white text-5xl text-center underline">Design</h1>
                <p className="text-neutral-400 text-xl text-center mt-3">Write to us so that we can provide the custom design as per your requirements.</p>
                <div className="px-30 flex flex-col mt-10">
                    <h2 className="text-3xl text-neutral-300">3D Modeling</h2>
                    <div className="flex flex-row">
                        <p className="text-2xl text-neutral-400 mr-5 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                            Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                            Asperiores ut eius soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                        </p>
                        <img src={DesignImg1} className="h-100"></img>
                    </div>
                </div>

                <div className="px-30 flex flex-col mt-10">
                    <h2 className="text-3xl text-neutral-300 mt-5 mb-5">Aerodynamic Analysis</h2>
                    <div className="flex flex-row ">
                        <img src={DesignImg2} className="h-100"></img>
                        <p className="text-2xl text-neutral-400 ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                            Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                            Asperiores ut eius soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                            Asperiores ut eius soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                        </p>
                    </div>
                </div>

                <div className="px-30 flex flex-col mt-10">
                    <h2 className="text-3xl text-neutral-300 mt-5">Material Selection</h2>
                    <div className="flex flex-row">
                        <p className="text-2xl text-neutral-400 mr-5 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                            Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                            Asperiores ut eius soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                        </p>
                        <img src={DesignImg1} className="h-100"></img>
                    </div>
                </div>
            </section>

            <section ref={section2Ref} id="section2" className="px-50 py-30">
                <h1 className="text-white text-5xl text-center underline">Prototyping</h1>
                <p className="text-neutral-400 text-xl text-center mt-3">With the facility of advanced composites, plastic and metal fabrication, See your design come to life</p>
                <p className="text-neutral-400 text-2xl mt-3">During the Prototyping phase our drones go through multiple stages of testing and quality checks to enusre long-lasting reliable performance across all the conditions.
                    All the maximum performance parameters are checked during this test. The products are pushed to extreme tests to determine the maximum operational abilities of each drone </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8 px-30">
                    <div className="px-2 py-2 bg-neutral-950 flex flex-col items-center rounded-2xl">
                        <img src={PrototypeImg1} className="h-120 object-cover"></img>
                        <h1 className="text-2xl text-white mt-5 underline">Prototype Construction</h1>
                        <p className="text-xl text-neutral-300 mt-5 text-center">Various ground testing are performed in order to determine the functionality of all the control systems and sensors </p>
                    </div>
                    <div className="px-2 py-2 bg-neutral-950 flex flex-col items-center rounded-2xl">
                        <img src={PrototypeImg1} className="h-120"></img>
                        <h1 className="text-2xl text-white mt-5 underline">Component testing</h1>
                        <p className="text-xl text-neutral-300 mt-5 text-center">Each individual components (motors, ESCs, batteries) are tested vigorously for performance and reliability.</p>
                    </div>
                    <div className="px-2 py-2 bg-neutral-950 flex flex-col items-center rounded-2xl">
                        <img src={PrototypeImg2} className="h-120"></img>
                        <h1 className="text-2xl text-white mt-5 underline">Ground testing</h1>
                        <p className="text-xl text-neutral-300 mt-5 text-center">Various ground testing are performed in order to determine the functionality of all the control systems and sensors </p>
                    </div>
                    <div className="px-2 py-2 bg-neutral-950 flex flex-col items-center rounded-2xl">
                        <img src={PrototypeImg3} className="h-120"></img>
                        <h1 className="text-2xl text-white mt-5 underline">Flight testing</h1>
                        <p className="text-xl text-neutral-300 mt-5 text-center">Multiple flight tests are conducted in controlled environment to evaluate stability, performance and control of the aircraft</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Engineering;