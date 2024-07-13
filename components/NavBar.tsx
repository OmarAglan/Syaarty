"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);
    

    const pathname = usePathname();

    //sticky menu
    const handleStickyMenu = () => {
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        }
        else {
            setStickyMenu(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleStickyMenu);
    })
    return (
        
        <header
        className={`fixed left-0 top-0 z-99999 w-full py-7 ${
            stickyMenu
              ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
              : ""
          }`}
          >
            <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
                <div
                className="flex w-full items-center justify-between xl:w-1/4"
                >
                    <Image
              src="/logo.png"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
                </div>

            </div>
        </header>
        /*
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between
             items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                <Image
                 src="/logo.png"
                 alt="سيارتي"
                 width={125}
                 height={20}
                className="object-contain"
                 />
                </Link>
            </nav>
        </header>*/
    )
}

export default NavBar