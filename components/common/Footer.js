import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-white p-6 mt-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-16 mb-8">
        <div className="flex flex-col">
          <h5 className="pb-4 text-xl">Contact Us</h5>
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLocationOn className="text-xl" />
            </Link>
            <p>Kathmandu, Nepal</p>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail className="text-xl" />
            </Link>
            <p>shambhavibeversges@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaPhone className="text-xl" />
            </Link>
            <p>9801444928</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="pb-4 text-xl">Opening Time</h5>
          <div>
            <p>Mon to Sat: 7am - 8pm</p>
            <p>Sunday: 8am - 5pm</p>
            <p>Enjoy discount baked.</p>
            <p>6am - 8pm daily</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="pb-4 text-xl">Shop</h5>
          <div>
            <p>Juices</p>
            <p>Milkshakes</p>
            <p>Supplements</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="pb-4 text-xl">Useful Links</h5>
          <div>
            <p>Support</p>
            <p>Login</p>
            <p>Faq</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex justify-center md:justify-start space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl" />
          </Link>
        </div>
        <div className="flex justify-center">
          <p>&copy; 2024 Sambhavi. All rights reserved.</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
