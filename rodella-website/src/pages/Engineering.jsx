import Navbar from "../components/Navbar";
import ManufacturingVideo from "../assets/videos/demo1.mp4";

const Engineering = () => {

    return(
        <div className="bg-black pt-2">
             <Navbar />
            <section className="px-50 py-30">
                <h1 className="text-white text-5xl text-center">Want Some Engineering Wizardry For Yourself?</h1>
                <p className="text-white text-center mt-5 text-xl">All our Drones are designed and developed in house.</p>
                <div className="flex justify-center items-center">
                <video
                src={ManufacturingVideo}
                className="h-170 object-cover mt-4 rounded-xs"
                autoPlay
                muted
                loop
                >
                </video>
                </div>
            </section>
        </div>
    )
}

export default Engineering;