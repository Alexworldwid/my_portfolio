"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="z-10 flex items-center justify-center transition-all ease-in md:hidden"
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-current text-color-10"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-current text-color-10"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        )}
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-20 bg-color-3 bg-opacity-50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div
            className={`fixed right-0 top-0 z-30 h-full w-[80%] transform bg-default shadow-lg transition-all duration-300 ease-in ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex w-full items-center justify-between border-b border-color-3 p-4 py-4">
              <div className="relative z-10" aria-label="logo">
                <Link href="/" className="text-xl font-extrabold text-color-10">
                  &lt;OBA/&gt;
                </Link>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-color-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-current"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4 border-b border-color-3 p-4">
              <a
                href="#about"
                className="text-color-7 transition-all ease-in hover:text-color-10"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#work"
                className="text-color-7 transition-all ease-in hover:text-color-10"
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#testimonials"
                className="text-color-7 transition-all ease-in hover:text-color-10"
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-color-7 transition-all ease-in hover:text-color-10"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </nav>

            <div className="flex flex-col gap-4 p-4">
              <div className="flex cursor-pointer items-center justify-between text-color-7 transition-all ease-in hover:text-color-10">
                <p>Switch Theme</p>
                <ModeToggle />
              </div>
              <a
                href="/Obadun_Adewale_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-color-10 px-4 py-1.5 text-base leading-normal text-color-1 hover:bg-color-7"
              >
                Download CV
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
