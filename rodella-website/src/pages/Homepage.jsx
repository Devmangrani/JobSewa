import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar.jsx";
import HomePageVideo from "./../assets/videos/pkv3.mp4"


const Homepage = () => {

  return (
    <div >
      <section className="h-screen relative pt-2">
      <Navbar />
        <video className="absolute top-0 left-0 w-full h-full object-cover brightness-35 -z-50"
          src={HomePageVideo}
          muted
          autoPlay
          loop
        >
        </video>
        <div className="flex flex-col h-full ">
          <div className="flex flex-row items-center h-full justify-center">
            <div className="flex flex-col w-fit items-center">
              <h1 className="text-4xl sm:text-6xl lg:text-9xl tracking-wide text-white ">
               rodella
              </h1>
              <h2 className="text-4xl sm:text-6xl lg:text-5xl tracking-wide text-white font-semibold mt-5">
              AEROSPACE LABS
              </h2>
              
              <p className="mt-10 text-2xl text-white max-w-4xl ">
                DELIVERING SUPREME  BEYOND THE CALL OF DUTY
                
              </p>
              <div className="flex my-3 flex-col items-center">
                <a
                  href="/aircrafts"
                  className="text-white bg-neutral-600 px-4 py-3 rounded-md text-xl w-140 text-center opacity-70"
                >
                  Aircrafts
                </a>

                <a
                  href="/engineering"
                  className="text-white bg-neutral-600 px-4 py-3 rounded-md mt-5 text-xl w-140 text-center opacity-70"
                >
                  Engineering
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
