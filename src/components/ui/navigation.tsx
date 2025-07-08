"use client";

import React, { useEffect, useRef } from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import MobileMenu from "./mobileMenu";

const Navigation = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 0) {
        headerRef.current.classList.remove("bg-none");
        headerRef.current.classList.add("bg-color-1");
        headerRef.current.classList.add("shadow-lg");
      } else {
        headerRef.current.classList.remove("bg-color-1");
        headerRef.current.classList.add("bg-none");
        headerRef.current.classList.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header ref={headerRef} className="fixed z-50 left-0 top-0 flex w-full items-center justify-center bg-none transition-all duration-150 ease-in-out">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8 ">
        <div className="relative z-10" aria-label="logo">
          <Link href="/" className="text-xl font-extrabold text-color-10">
            &lt;OBA/&gt;
          </Link>
        </div>

        {/* desktop nav */}
        <nav className="hidden flex-row items-center gap-4 text-base font-medium text-color-7 md:flex">
          <a
            href="#about"
            className="transition-all ease-in hover:text-color-10"
          >
            About
          </a>
          <a
            href="#work"
            className="transition-all ease-in hover:text-color-10"
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="transition-all ease-in hover:text-color-10"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="transition-all ease-in hover:text-color-10"
          >
            Contact
          </a>
          <div className="h-[24px] w-[1px] bg-color-2"></div>
          <ModeToggle />
          <a
            href="/Obadun_Adewale_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-color-10 px-4 py-1.5 text-base leading-normal text-color-1 hover:bg-color-7"
          >
            Download CV
          </a>
        </nav>

        {/* mobile nav */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navigation;
