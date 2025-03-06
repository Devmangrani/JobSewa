import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar.jsx";
import HomePageVideo from "./../assets/videos/pkv3.mp4";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <section className="h-screen relative">
        <Navbar />
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-30 -z-50"
          src={HomePageVideo}
          muted
          autoPlay
          loop
          playsInline
        ></video>

        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl tracking-wide text-white font-bold animate-fade-in">
                rodella
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-white mt-3 sm:mt-4 lg:mt-5 font-semibold">
                AEROSPACE LABS
              </h2>

              <p className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl lg:text-2xl text-white max-w-2xl sm:max-w-3xl lg:max-w-4xl px-4">
                DELIVERING SUPREME BEYOND THE CALL OF DUTY
              </p>

              <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm mt-8 sm:mt-10 space-y-4">
                <a
                  href="/aircrafts"
                  className="text-white bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300 px-6 py-3 rounded-md text-lg sm:text-xl w-full text-center opacity-90 hover:opacity-100"
                >
                  Aircrafts
                </a>

                <a
                  href="/engineering"
                  className="text-white bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300 px-6 py-3 rounded-md text-lg sm:text-xl w-full text-center opacity-90 hover:opacity-100"
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
