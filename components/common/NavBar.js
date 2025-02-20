"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button/SecondaryButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { montserrat } from '../../lib/utils';

const NavBar = () => {
  const currentPath = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`
          fixed w-full transition-colors duration-300
          ${isMenuOpen ? "bg-black bg-opacity-75" : isScrolled ? "bg-white shadow-xl" : "bg-white shadow-sm"}
          py-2 top-0 z-30
        `}
      >
        <nav className="max-w-[1250px] mx-auto flex flex-row items-center justify-between text-gray-900 relative z-30 px-2 lg:px-4">
          <div className="w-fit flex flex-row justify-between items-center lg:space-x-4">
            <Link href="/">
              <Image
                src="/media/images/logo.jpg"
                alt="logo"
                width={80}
                height={80}
                className="w-12 md:w-16 h-auto rounded-full"
              />
            </Link>
            <div className={`${montserrat.className} hidden lg:flex flex-row justify-center items-center ps-4 space-x-10 text-xl`}>
              <Link href="/" className={`${currentPath === "/" ? "text-green-500 font-semibold" : "text-gray-900"}`}>Home</Link>
              <Link href="/collection" className={`${currentPath === "/collection" ? "text-green-500" : "text-gray-900"}`}>Collection</Link>
              <Link href="/about" className={`${currentPath === "/about" ? "text-green-500" : "text-gray-900"}`}>About</Link>
              <Link href="/contact" className={`${currentPath === "/contact" ? "text-green-500" : "text-gray-900"}`}>Contact</Link>
            </div>
          </div>
          {!isMenuOpen && (
            <button className="lg:hidden text-2xl" onClick={toggleMenu}>
              <FaBars />
            </button>
          )}
          <div className="hidden lg:block">
            <Button name="Order" />
          </div>
        </nav>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex flex-col items-end">
            <button className="text-4xl p-4 text-white" onClick={toggleMenu}>
              <FaTimes className="text-xl" />
            </button>
            <div className="flex flex-col items-center space-y-6 pe-10 mt-20 text-2xl text-white">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/collection" onClick={toggleMenu}>
                Collection
              </Link>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
      <div style={{ height: navHeight }} />
    </>
  );
};

export default NavBar;
