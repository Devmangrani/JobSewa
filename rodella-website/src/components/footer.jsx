import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin, FaCopyright, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800">
            <div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-center pb-20 pt-15 pr-30 pl-30">
                        <h1 className="text-3xl text-white mb-4">Ready to partner with us?</h1>
                        <p className="text-sm text-white pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eveniet velit veniam!</p>
                        <p className="text-sm text-white pb-6">Lorem ipsum dolor sit amet consectetur!</p>
                        <div className="flex space-x-6">
                            <Link
                                to="/contact"
                                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-12 rounded-full"
                                onClick="#"
                            >
                                Get in touch with us
                            </Link>
                        </div>
                    </div>
                    <div className="ml-30 pb-5">
                        <p className="text-neutral-500">
                            <FaCopyright className="inline-block mr-2" />{currentYear} Rodella Pvt. Ltd. All rights reserved
                        </p>
                        </div>
                        </div>

                    <div className=" pb-20 pt-15 pr-50 pl-30">
                        <ul className="space-y-5">
                            <li>
                                <a href="#" className="text-white text-xl">
                                    <FaPhone className="inline-block mr-6 text-white text-2xl"></FaPhone>
                                    (+91)628163817
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl">
                                    <FaEnvelope className="inline-block mr-6 text-white text-2xl"></FaEnvelope>
                                    Rodella@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl">
                                    <FaInstagram className="inline-block mr-6 text-white text-2xl"></FaInstagram>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/roedlla-aerospace-labs/" className="text-white text-xl">
                                    <FaLinkedin className="inline-block mr-6 text-white text-2xl"></FaLinkedin>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl">
                                    <FaFacebook className="inline-block mr-6 text-white text-2xl"></FaFacebook>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-xl">
                                    <FaYoutube className="inline-block mr-6 text-white text-2xl"></FaYoutube>
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;