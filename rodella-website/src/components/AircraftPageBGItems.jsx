import { useParams } from "react-router-dom";
import AircraftData from "../constants/AircraftData";
import Navbar from "./Navbar";

const AircraftPageBGItem = () => {

    const { id } = useParams();
    const product = AircraftData.find((p) => p.id === parseInt(id))

    if(!product){
        return <div className="text-white">Error:404-Product Not found</div>
    }

    return(

        <div className="pt-2">
        <Navbar />
        <section>
            <div className="lg:px-50 py-30 px-3">
                <div>
                    <h1 className="lg:text-4xl font-bold text-white text-center text-2xl">{product.name}</h1>
                    <p className="text-neutral-400 lg:text-xl mt-2 underline text-center md:text-xl text-sm">{product.tagline}</p>
                    <p className="lg:text-xl md:text-xl text-lg mt-10 text-neutral-200 ">{product.description}</p>
                    <h2 className="text-neutral-400 lg:text-xl text-lg mt-5 underline mb-2">KEY HIGHLIGHTS</h2>
                    <ul className="list-disc lg:text-xl md:text-xl font-bold text-neutral-200 space-y-3 ml-4">
                        {product.keyHighlights.map((highlights, index) => (
                            <li key={index}>{highlights}</li>
                        )
                        )}
                    </ul>
                    <div className="mt-5">
                        <img src={product.img1} className="object-cover lg:h-200 w-full rounded-xl" alt={product.name}></img>
                    </div>

                    <div className="flex lg:flex-col flex-col lg:px-20">
                        <h3 className=" lg:pt-30 pt-10 text-white lg:text-5xl text-2xl underline px-3">Technical Details</h3>
                        <div className="flex lg:flex-row md:flex-col flex-col py-5 lg:gap-x-8 justify-between">
                            <ul className="list-disc lg:text-xl text-neutral-200 space-y-3 px-3">
                                {product.TechnicalDetails.map((technicalDetails, index) => (
                                    <li key={index}>{technicalDetails}</li>
                                ))}
                            </ul>

                            <img src={product.img2} className="lg:h-120 object-cover lg:max-w-1/2 rounded-xl lg:mt-0 mt-5" alt={product.name}></img>
                        </div>

                        <h3 className=" lg:pt-30 pt-10 text-white lg:text-5xl text-2xl underline px-3">Features</h3>
                        <div className="flex lg:flex-row md:flex-col flex-col py-5 lg:gap-x-8 justify-between">
                            <ul className="list-disc lg:text-xl text-neutral-200 space-y-3 px-3">
                                {product.Features.map((features, index) => (
                                    <li key={index}>{features}</li>
                                ))}
                            </ul>
                            <img src={product.img3} className="lg:h-120 object-cover lg:max-w-1/2 rounded-xl lg:mt-0 mt-5" alt={product.name}></img>
                        </div>
                    </div>

                    <div className="lg:pt-30 pt-10 flex flex-col lg:ml-15">
                        <h1 className="text-4xl text-white px-3 py-5 underline">Use Cases</h1>
                        <ul className="list-disc lg:text-xl text-neutral-200 space-y-3 px-3">
                            {product.UseCases.map((uses, index) => (
                                <li key={index}>{uses}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </div>
    )
}

export default AircraftPageBGItem;