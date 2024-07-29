"use client";
import CustomButton from "@/components/CustomButton";
import { default as Image, default as images } from "next/image";

const Hero = () =>{
    const handleMoving = () => {

    }
    return (
        <main className=" bg-white relative overflow-hidden">
            <div className="bg-white  flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-gray-800">
                Syaarty
                    <span className="text-5xl sm:text-7xl">
                        سيارتي
                    </span>
                </h1>
                <br />
                <span className="w-20 h-2 bg-primary-blue mt-8"></span>
                <p className="text-base sm:text-base text-gray-700">
                الوسيط الرقمي الأول لتمويل السيارات بالمملكة العربية السعودية.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-primary-blue border-2 border-transparent text-white text-md mr-4 hover:bg-slate-900">
                        أطلب تمويل
                    </a>
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 bg-primary-blue text-blacksection  hover:bg-slate-900 hover:text-white text-md">
                        ابحث عن السيارات
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/2020_Altima_Big.png" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
        </main>
    )
}

export default Hero;