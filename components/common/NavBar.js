'use client'
import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button/SecondaryButton";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${isScrolled ? "fixed w-full bg-[#5a9c4bda] backdrop-filter backdrop-blur-lg bg:opacity-80 border-b border-[#5f9953fe] shadow-xl top-0 z-50" : "" } py-2`}>
      <nav className="w-[1200px] mx-auto flex flex-row items-center justify-between text-white relative z-30">
        <div className="flex flex-row items-center space-x-24">
          <Image
            src="/media/images/logo.jpg"
            alt="hero-banner"
            width={80}
            height={80}
            className="w-20 h-auto  rounded-full"
          />
          <div className="flex flex-row justify-center items-center space-x-10 text-xl">
            <Link href="/">Home</Link>
            <Link href="/community">Collection</Link>
            <Link href="/community">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <Button name="Order" />
      </nav>
    </div>
  );
};

export default NavBar;
