import BackgroundImage from "./../assets/images/homepage-bg1.jpg";
import ChooseUsImage from "./../assets/images/homepage-bg2.jpeg";
import { Link } from "react-router-dom";
import AchivementImage from "./../assets/images/achievment.jpg"
import cards from "./../constants/Cards.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./footer";
import Navbar from "./Navbar";


const Homepage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: false
  };

  return (
    <div>
      <section className="h-screen relative pt-2">
        <Navbar />
        <img className="absolute top-0 left-0 w-full h-full object-cover brightness-60 -z-50" src={BackgroundImage} ></img>
        <div className="flex flex-col h-full">
          <div className="flex flex-row items-center ml-30 h-full">
            <div className="flex flex-col w-fit lg:mb-30">
              <h1 className="text-4xl sm:text-6xl lg:text-9xl tracking-wide text-neutral-100 opacity-10 font-bold">
                CRAFTING FOR
              </h1>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-white font-semibold">
                NEXT GENERATIONS
              </h2>

              <p className="mt-25 text-lg text-neutral-100 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius atque
              </p>
              <p className="mt-1 text-lg text-neutral-100 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing elit. Eius atque
              </p>
              <p className="mt-1 text-lg text-neutral-100 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur,
              </p>
              <div className="flex my-10 flex-row">
                <a
                  href="#"
                  className="text-black bg-gradient-to-r from-purple-50 to-purple-200 px-4 py-4 rounded-md mr-4"
                >
                  Get in touch
                </a>
                <a
                  href="#"
                  className="text-black bg-gradient-to-r from-purple-300 to-purple-700 px-4 py-4 rounded-md"
                >
                  Explore our products
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-300 pt-10 pb-10">
        <div className="flex flex-col mt-30">
          <div className="flex flex-row justify-between lg:ml-30 lg:mr-60">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Why choose us?</h1>
              <p className="text-sm mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <img src={ChooseUsImage} className="w-150 h-100 mt-10 rounded-2xl ml-10"></img>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="text-xl text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p className="text-xl text-wrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h1 className="text-3xl mt-12">Technology IP</h1>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h1 className="text-3xl mt-12">Technology IP</h1>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h1 className="text-3xl mt-12">Technology IP</h1>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

              </div>
              <div className="flex space-x-6 justify-center">
                <Link
                  to="/about"
                  className="bg-gradient-to-r from-purple-200 to-purple-700 py-2 px-3 rounded-md"
                  onClick="#" // Close mobile menu on click
                >
                  Know more
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:mt-50 lg:mr-30 lg:ml-30">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <h1 className="text-4xl font-bold">Our achivments</h1>
                  <p className="text-sm mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit.</p>
                  <div className="flex flex-row justify-between mt-12">
                    <h1 className="text-xl">Happy partners</h1>
                    <p className="bg-gradient-to-t from-purple-400 to-purple-900 bg-clip-text text-xl text-transparent">25k+</p>
                  </div>
                  <div className="flex flex-row justify-between mt-12">
                    <h1 className="text-xl">Quality Control</h1>
                    <p className="bg-gradient-to-t from-purple-400 to-purple-900 bg-clip-text text-xl text-transparent">200+</p>
                  </div>
                  <div className="flex flex-row justify-between mt-12">
                    <h1 className="text-xl">Long term support</h1>
                    <p className="bg-gradient-to-t from-purple-400 to-purple-900 bg-clip-text text-xl text-transparent">150+</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <img src={AchivementImage} className="w-150 h-100 mt-10 rounded-2xl"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-300 pt-10 pb-10">
        <div className="lg:mr-30 lg:ml-30 lg:mt-20 flex flex-col items-center">
          <h1 className="text-5xl font-semibold">Services we provide</h1>
          <p className="lg:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-20 mr-30 ml-30 mb-30">
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="bg-white h-[300px] text-black rounded-2xl">
                <div className="h-full flex justify-center items-center">
                  <img src={card.url} alt={card.title} className="object-cover h-full w-full rounded-2xl" />
                </div>
                <p className="text-center mt-5 text-wrap">{card.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
