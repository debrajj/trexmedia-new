"use client";
import { useState } from "react";
import { navigation } from "@/constants";
import Link from "next/link";
import Button from "../Button/Button";
import MenuSvg from "@/app/assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const MobileMenu = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <>
      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        } lg:hidden fixed left-0 right-0 bottom-0 z-40`}
        style={{
          top: '5rem',
          backgroundColor: '#1a1a1a !important',
          background: 'linear-gradient(to bottom, #1a1a1a, #000000) !important'
        }}
      >
        <div className="flex flex-col items-center w-full z-10 relative pt-8"
             style={{
               backgroundColor: '#1a1a1a',
               minHeight: '100vh'
             }}>
          <div className="flex flex-col items-center space-y-2">
            {navigation.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                onClick={() => setOpenNavigation(false)}
                className="cursor-pointer uppercase text-lg text-n-1 transition-colors hover:text-color-1 py-3 px-6 text-center"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 w-48">
              <a href="tel:+919707237225">
                <Button className="w-full text-center">Inquiry</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <Button
        className="ml-auto lg:hidden"
        px="px-3"
        onClick={toggleNavigation}
      >
        <MenuSvg openNavigation={openNavigation} />
      </Button>
    </>
  );
};

export default MobileMenu;