"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PinterestIcon } from "../_utils/Icons";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position
      const offset = window.scrollY;
      setHasScrolled(offset > 10);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 flex h-[100px] w-full items-center justify-between bg-white px-[4vw] transition-shadow duration-300 ${hasScrolled ? "shadow-md" : ""}`}
      >
        <div className="shrink grow basis-1/3">
          <Link href="/" className="ease flex items-center text-dark">
            <span className="ease font-heading text-2xl font-semibold transition-all duration-200 hover:scale-110">
              Elke&apos;s blog
            </span>
          </Link>
        </div>
        <nav className="hidden md:block md:shrink md:grow md:basis-1/3 md:text-center">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "mx-4 underline underline-offset-8"
                : "mx-4 hover:underline hover:underline-offset-8"
            }
          >
            &nbsp;Blog&nbsp;
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "mx-4 underline underline-offset-8"
                : "mx-4 hover:underline hover:underline-offset-8"
            }
          >
            &nbsp;About&nbsp;
          </Link>
        </nav>
        <div className="hidden md:flex md:shrink md:grow md:basis-1/3 md:justify-end">
          <a href="https://pinterest.com" className="mr-4 inline-block size-6">
            <PinterestIcon className="ease transition-all duration-200 hover:scale-125" />
          </a>
        </div>
        <div
          className="flex h-8 w-7 cursor-pointer flex-col justify-between md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="h-0.5 w-full"></div>
          <div className="h-0.5 w-full bg-slate-600"></div>
          <div className="h-0.5 w-full bg-slate-600"></div>
          <div className="h-0.5 w-full"></div>
        </div>
      </header>
      {open && (
        <div
          className={`no-doc-scroll fixed left-0 top-[100px] flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center gap-12 bg-[#f4f4f3] md:hidden`}
        >
          <Link
            onClick={() => setTimeout(() => setOpen(!open), 200)}
            href="/"
            className={`mx-4 text-3xl hover:underline hover:underline-offset-8 ${
              pathname === "/" ? "underline underline-offset-8" : ""
            }`}
          >
            &nbsp;Blog&nbsp;
          </Link>
          <Link
            onClick={() => setTimeout(() => setOpen(!open), 200)}
            href="/about"
            className={`mx-4 text-3xl hover:underline hover:underline-offset-8 ${
              pathname === "/about" ? "underline underline-offset-8" : ""
            }`}
          >
            &nbsp;About&nbsp;
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
