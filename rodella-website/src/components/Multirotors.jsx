import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
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
                            <p className="text-xl text-neutral-100 font-bold ml-2">{product.keyHighlights1}</p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-neutral-300 rounded-full w-3 h-3"></div>
                            <p className="text-xl text-neutral-100 font-bold ml-2">{product.keyHighlights2}</p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-neutral-300 rounded-full w-3 h-3"></div>
                            <p className="text-xl text-neutral-100 font-bold ml-2">{product.keyHighlights3}</p>
                        </div>
                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-neutral-300 rounded-full w-3 h-3"></div>
                            <p className="text-xl text-neutral-100 font-bold ml-2">{product.keyHighlights4}</p>
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
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails1}</p>
                                </div>


                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails2}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails3}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails4}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails5}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails6}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails7}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails8}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails9}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails10}</p>
                                </div>

                                <div className="flex flex-row items-center mt-3">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.TechnicalDetails11}</p>
                                </div>
                            </div>
                            <img src={product.img} className="h-120 w-170 rounded-2xl"></img>
                        </div>

                        <h3 className=" pt-30 text-white text-5xl ml-15">Features</h3>
                        <div className="w-55 h-[2px] bg-neutral-400 ml-15 mt-2"></div>
                        <div className="flex flex-row p-10">
                            <img src={product.img} className="h-120 w-170 rounded-2xl"></img>
                            <div className="flex flex-col">

                                <div className="flex flex-row items-center ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">{product.Feature1}</p>
                                </div>


                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.Feature2}</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.Feature3}</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.Feature4}</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.Feature5}</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.Feature6}</p>
                                </div>

                                <div className="flex flex-row items-center mt-5 ml-30">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl mr-30">{product.Feature7}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="pt-30 flex flex-col ml-15">
                            <h1 className="text-4xl text-white">Use Cases</h1>
                            <div className="w-55 h-[2px] bg-neutral-400 mt-2"></div>
                            <div className="flex flex-row items-center mt-10">
                                <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                <p className="text-neutral-300 text-xl">{product.UseCases1}</p>
                            </div>
                            <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">{product.UseCases2}</p>
                                </div>
                                <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">{product.UseCases3}</p>
                                </div>
                                <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">{product.UseCases4}</p>
                                </div>
                                <div className="flex flex-row items-center mt-7">
                                    <div className="bg-neutral-300 rounded-full w-4 h-4 mr-2"></div>
                                    <p className="text-neutral-300 text-xl">{product.UseCases5}</p>
                                </div>
                        </div>
                    </div>
                </div>

                
            </section>
            
        </div>
    )
}

export default Multirotor;