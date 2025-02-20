import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#39565c] px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-16 pt-14 pb-8 gap-y-6 lg:gap-y-0">
          <div className="flex flex-col">
            <h5 className="pb-4 text-xl text-white">Contact Us</h5>
            <div className="flex items-center space-x-2 text-white">
              <CiLocationOn className="text-2xl" />
              <p>Arjundhara-5, Jhapa Nepal</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <HiOutlineMail className="text-md" />
              <p>shambhavibeversges@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <FaPhone className="text-sm" />
              <p>9801444928</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="pb-4 text-xl text-white">Opening Time</h5>
            <div className="text-white">
              <p>Mon to Sat: 7am - 8pm</p>
              <p>Sunday: 8am - 5pm</p>
              <p>Enjoy discount baked 6am - 8pm daily</p>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="pb-4 text-xl text-white">Shop</h5>
            <div className="text-white">
              <p>Juices</p>
              <p>Milkshakes</p>
              <p>Supplements</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="pb-4 text-xl text-white">Useful Links</h5>
            <div className="text-white">
              <p>Support</p>
              <p>Login</p>
              <p>Faq</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2d2b33] py-6 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-4 text-white">
          <div className="flex md:justify-start justify-center lg:space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100057281387354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </Link>
          </div>
          <div className="flex justify-center md:justify-start">
            <p>&copy; 2024 Sambhavi. All rights reserved.</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
