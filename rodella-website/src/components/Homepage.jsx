import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="flex flex-col h-[95vh] justify-between items-center">
      <div className="flex flex-col items-center mt-25 lg:mt-35">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
          Crafting avionics for
          <span className="block text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            next generations
          </span>
        </h1>
        <p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius atque
          beatae quaerat nobis commodi illum autem corrupti nisi iure animi. Id
          voluptas ipsam non sint beatae impedit quas vel deleniti nihil quidem.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-4 rounded-md"
          >
            Explore our products
          </a>
        </div>
      </div>
      <footer className="bg-transparent text-white py-4 px-4 mb-4">
        <div className="flex md:flex-row lg:flex-row justify-between items-center">
          <ul className="flex space-x-15">
            <li>
              <a href="#">
                <FaPhone className="inline-block mr-2"></FaPhone>
                (+91)628163817
              </a>
            </li>
            <li>
              <a href="#">
                <FaEnvelope className="inline-block mr-2"></FaEnvelope>
                Rodella@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram className="inline-block mr-2"></FaInstagram>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/roedlla-aerospace-labs/">
                <FaLinkedin className="inline-block mr-2"></FaLinkedin>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className="inline-block mr-2"> </FaYoutube>
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
