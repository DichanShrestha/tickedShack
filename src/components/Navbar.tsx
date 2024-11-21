"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    setIsMobile(mediaQuery.matches);

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
};

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <div className="w-full  2xl:px-60 xl:px-40 lg:px-[120px] md:px-20 sm:px-10 px-5 h-[65px] text-[#AC906C] flex justify-between mt-10 tracking-widest font-semibold bg-transparent z-50 fixed 2xl:text-[25px] xl:text-xl lg:text-lg">
      <div>
        <p className="tracking-[0.3em]">HITCHED</p>
      </div>
      {isMobile ? (
        <>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=menu"
          />
          <span className="material-symbols-outlined">menu</span>
        </>
      ) : (
        <div>
          <ul className="hidden md:flex gap-x-6">
            <li>
              <Link href="/about">
                <p>HOME</p>
              </Link>
            </li>
            <li className="text-center">
              <Link href="/services">
                <p className="">ABOUT</p>
                <div className="w-[22px] h-1 bg-[#D8D8D8A6] rounded-[2.5px] flex justify-center mx-auto" />
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>EVENTS</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>MEMBERSHIP</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>GALLERY</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>CONTACT</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
