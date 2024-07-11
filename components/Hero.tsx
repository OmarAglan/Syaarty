"use client";
import images from "next/image";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

const Hero = () =>{
    const handleMoving = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    الوسيط الرقمي الأول
                    لتمويل السيارات بالمملكة العربية السعودية
                </h1>

                <p className="hero__subtitle">
                    منصتك الأولى للوساطة الرقمية في تمويل السيارات داخل المملكة احصل على سيارتك بنقرة لباب بيتك
                </p>

                <CustomButton
                    title={"طلب تمويل"}
                    containerStyles={"bg-primary-blue rounded-full mt-10 text-white"}
                    handleClick={handleMoving}
                />
            </div>
            <div className="hero__image-csontainer">
                <div className="hero__image">
                    <Image
                    src="/2020_Altima_Big.png"
                    alt={"Hero"}
                    fill
                    className="object-cover"
                    />
                    <div className="hero__image-overlay" />
                <div/>
            </div>
        </div>
        </div>
    )
}

export default Hero;