import { assets } from "@/app/assets";
import { navigation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      <div className="bg-n-8/70 backdrop-blur-xl w-full left-0 fixed top-0 z-50 border-n-6/50 border-b lg:bg-n-8/70 lg:backdrop-blur-xl shadow-lg shadow-n-8/50">
        <div className="flex items-center px-8 lg:px-12 xl:px-20 py-1 lg:py-0">
          <Link href="/" className="w-[4rem] block xl:mr-8">
            <Image src={assets.r1} alt="Trexx Media" width={50} height={13} className="object-contain" />
          </Link>
          <nav className="hidden lg:flex lg:static lg:mx-auto lg:bg-transparent">
            <div className="flex flex-col lg:flex-row m-auto z-2 relative">
              {navigation.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  className={`${
                    item.onlyMobile && "lg:hidden"
                  } cursor-pointer uppercase text-2xl text-n-1 transition-colors hover:text-color-1 relative px-6 py-6 md:py-8 lg:px-4 lg:py-6 lg:text-sm xl:px-6 lg:leading-5 lg:hover:text-n-1 ${
                    item.title === "new account" && "mr-8"
                  }`}
                  style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
          <a href="tel:+919707237225">
            <Button className="hidden lg:flex">Inquiry</Button>
          </a>
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
