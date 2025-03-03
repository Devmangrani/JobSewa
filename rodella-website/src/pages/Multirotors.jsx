import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import MQ650LVpic1 from "./../assets/images/MQ650LV.jpg";
import MQ650LVpic2 from "./../assets/images/achievment.jpg"
import MQ650LVpic3 from "./../assets/images/2.png";
import MultirotorProducts from "../constants/MultirotorProducts";

const Multirotor = () => {

    const { id } = useParams();
    const product = MultirotorProducts.find((p) => p.id === parseInt(id))

    if(!product){
        return <div>Eror:404 Product Not Found</div>
    }

    return (
        <div className="pt-2">
            <Navbar />
            <section>
                <div className="px-50 py-30">
                {/* <h1 className="text-6xl font-bold text-white text-center underline">Multirotors</h1> */}
                    {/* <p className="text-neutral-400 text-xl text-center mt-2">COMPACT | SWIFT | UTILITARIAN</p> */}
                    <div>
                        <h1 className="text-4xl font-bold text-white text-center">{product.name}</h1>
                        <p className="text-neutral-400 text-xl mt-2 underline text-center">COMPACT | SWIFT | UTILITARIAN</p>
                        <p className="text-xl mt-10 text-neutral-200 ">MQ650LV is a light weight micro-category variant
                            borrowing its structural toughness ffrom MQ750+
                            Developed for quick deployment and versatile
                            operations in the coldest and the windiest of the weathers,
                            the MQ650LV delivers 40 mins of operational endurance with a
                            10x optical zoom equipped HD electro-optic sensor. Swappable
                            battery options make re-deployment swift enhancing the system's
                            efficiency in real time survielance missions. Rapid survielance
                            and reconnaisance in the tactile levels of warfare are most easily
                            and effectively achieved with MQ650LV.
                        </p>
                        <h2 className="text-neutral-400 text-xl mt-5 underline">KEY HIGHLIGHTS</h2>
                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-neutral-300 rounded-full w-3 h-3"></div>
                            <p className="text-xl text-neutral-100 font-bold ml-2">Quick Deplyment</p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-neutral-300 rounded-full w-3 h-3"></div>
                            <p className="text-xl text-neutral-100 font-bold ml-2">Tool-Less Assembly</p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-neutral-300 rounded-full w-3 h-3"></div>
                            <p className="text-xl text-neutral-100 font-bold ml-2">Swappable Battery</p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-neutral-300 rounded-full w-3 h-3"></div>
                            <p className="text-xl text-neutral-100 font-bold ml-2">Hot Swappable Payloads</p>
                        </div>
                        <div className="mt-5">
                            <img src={product.img} className="object-cover h-180 w-full rounded-xl"></img>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                        <h3 className=" pt-30 text-white text-5xl ml-15">Technical Details</h3>
                        <div className="w-110 h-[2px] bg-neutral-400 ml-15 mt-2"></div>
                        <div className="flex flex-row pr-15 pl-15 pb-15 pt-10">
                            <div className="flex flex-col">
                            {/* <h3 className="text-neutral-400 text-4xl underline">Technical Details</h3> */}
                                <div className="flex flex-row items-center">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Advanced Hybrid Composite Material</p>
                                </div>


                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">650mm wheel base</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Empty Weight - 1KG</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Wind Resistance Index - 30Knots</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Communication Links - 2.4Ghz,900Mhz(encrypted)</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Range Control&Telemetry - 10kms LOS</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Cruise Speed - 8ms</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Dash Speed - 10m/s</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Service Ceiling - 4000m AMSL</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Operational Altitude - 500mAGL</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Propulsion - Brushless Electric</p>
                                </div>
                            </div>
                            <img src={MQ650LVpic2} className="h-120 w-170 rounded-2xl"></img>
                        </div>

                        <h3 className=" pt-30 text-white text-5xl ml-15">Features</h3>
                        <div className="w-55 h-[2px] bg-neutral-400 ml-15 mt-2"></div>
                        <div className="flex flex-row p-10">
                            <img src={MQ650LVpic3} className="h-120 w-170 rounded-2xl"></img>
                            <div className="flex flex-col">

                                <div className="flex flex-row items-center ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">HD Resolution Cam - 4K, 10x Optical Zoom</p>
                                </div>


                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Active Obstacle Avoidance - Upto 10m</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Gimbal Stabilization - 3 axis stabilized</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Aural Signature - 40dB@300m AGL</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Portability - Back Packable</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Operational Temperature - -10 to 50c</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">Operating Environment - Multi Terrain</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="pt-30 flex flex-col ml-15">
                            <h1 className="text-4xl text-white">Use Cases</h1>
                            <div className="w-55 h-[2px] bg-neutral-400 mt-2"></div>
                            <div className="flex flex-row items-center mt-10">
                                <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                <p className="text-neutral-300 text-xl">For rapid surveillance, MQ650lv drone is the ideal solution</p>
                            </div>
                            <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">The MQ650lv drone is ideally suited for rapid mapping use cases, 
                                        delivering precise and efficient geospatial data</p>
                                </div>
                                <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">The MQ650lv drone's capabilities make it a vital asset for tactical-level reconnaissance, 
                                        enabling commanders to make informed decisions with timely and accurate intelligence</p>
                                </div>
                                <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">For tactical law enforcement, the MQ650lv drone offers invaluable aerial perspective 
                                        during high-risk operations,
                                         aiding in suspect apprehension and ensuring officer safety.</p>
                                </div>
                                <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">
                                    The MQ650lv drone is exceptionally well-suited for the use case of tactical traffic monitoring
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>

                
            </section>
            
        </div>
    )
}

export default Multirotor;