import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 h-[100%] flex flex-col justify-around pl-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between ">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 mr-5">
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-sm text-gray-400">
            We provide high-quality content and services to help you grow. Stay connected with us for updates.
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm text-gray-400">Email: support@example.com</p>
          <p className="text-sm text-gray-400">Phone: +1 (234) 567-890</p>
          <div className="flex space-x-4 mt-4">
            <Link to="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white"><FaFacebookF /></Link>
            <Link to="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white"><FaTwitter /></Link>
            <Link to="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white"><FaInstagram /></Link>
            <Link to="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white"><FaLinkedin /></Link>
          </div>
        </div>

      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
