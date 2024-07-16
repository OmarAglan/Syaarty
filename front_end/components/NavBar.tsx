"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

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


                <CustomButton
                title = "طلب تمويل"
                btnType = "button"
                containerStyles = "text-primary-blue rounded-full bg-blue-300 min-w-[130px]"
                handleClick = {() => {}}
                />
            </nav>
        </header>
    )
}

export default NavBar