import { FiTwitter } from 'react-icons/fi';
import { GrLinkedin } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-full px-7 py-5 bg-gradient-to-r from-[#1B263B] to-[#3A7CA5] text-[#D3D3D3]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="left mb-5 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul>
            <li><a href="/about" className="hover:text-[#FFD700]">About Us</a></li>
            <li><a href="/services" className="hover:text-[#FFD700]">Services</a></li>
            <li><a href="/contact" className="hover:text-[#FFD700]">Contact</a></li>
            <li><a href="/privacy" className="hover:text-[#FFD700]">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="middle mb-5 md:mb-0">
          <h2 className="text-lg font-bold mb-1">Newsletter</h2>
          <form className="flex flex-col">
            <input type="email" placeholder="Your email" className="p-2 mb-1 rounded" />
            <button type="submit" className="p-2 bg-[#FFD700] text-[#1B263B] rounded hover:bg-[#FFC107]">Subscribe</button>
          </form>
        </div>
        <div className="right flex flex-col items-start">
          <h2 className="text-lg font-bold mb-1">Follow Us</h2>
          <div className="flex gap-3 mb-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transform hover:scale-110 transition-transform duration-300 ease-in-out">
              <FiTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transform hover:scale-110 transition-transform duration-300 ease-in-out">
              <GrLinkedin size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transform hover:scale-110 transition-transform duration-300 ease-in-out">
              <BsFacebook size={24} />
            </a>
          </div>
          <div className="contact-info">
            <p className="mb-1">Email: info@jobsewa.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        &copy; {new Date().getFullYear()} JobSewa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;