import React from "react";
import logo from "../../assets/footer-logo/logo1 1.png";
import footerbgImg from "../../assets/footer-logo/Rectangle 18.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "animate.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerbgImg})`,
      }}
      className="bg-cover bg-center text-[#42210B] py-16 px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row justify-between gap-12 animate__animated animate__fadeInUp">
        {/* Left Side */}
        <div className="flex-1 space-y-4">
          <img src={logo} alt="Logo" className="w-16" />
          <h3 className="text-2xl font-semibold">Espresso Emporium</h3>
          <p className="text-sm max-w-sm">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-4">
            <a href="#" className="hover:text-[#ff7f50] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#ff7f50] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#ff7f50] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#ff7f50] transition">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 animate__animated animate__fadeInUp"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 animate__animated animate__fadeInUp"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 animate__animated animate__fadeInUp"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 border border-[#42210B] text-[#42210B] hover:bg-[#42210B] hover:text-white rounded-full transition-all duration-300 animate__animated animate__fadeInUp"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
