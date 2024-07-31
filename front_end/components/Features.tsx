
import { BsShopWindow } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { LiaCarSideSolid } from "react-icons/lia";
import { PiFastForwardFill } from "react-icons/pi";
const Features = () => {
    return (

        // This is the Features component

        <div className="flex flex-col items-center justify-center bg-slate-100">
            <h1 className="text-3xl font-bold mb-4">كيف تحصل على تمويل سيارتك</h1>
            <p className="text-gray-500">بناء على وضعك الائتماني سنقدم لك أفضل عرض تمويلي وأقل سعر سيارة</p>
            <div className="h-full min-h-screen w-full bg-gray-100 pt-12 p-4 shadow-xl">
                <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                        <div
                            className="mx-auto flex h-16 w-16 -translate-y-12 transform items rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                            <LiaCarSideSolid className="h-16 w-16 text-slate-500" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">يمكنك البحث عن سيارتك</h1>
                        <p className="px-4 text-gray-500">يمكنك البحث عن سيارة احلامك الجديدة بسهولة مع خدمة البحث المتقدم</p>

                        {/* Add A Button Here */}

                    </div>
                    <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
                        <div
                            className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                            <BsShopWindow className="h-16 w-16 text-slate-500" />
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">يمكنك الأختيار من المعارض</h1>
                        <p className="px-4 text-gray-500">تستطيع أختيار سيارتك من عدة معارض تتواجد بجميع أنحاء المملكة</p>

                        {/* Add A Button Here */}
                    </div>
                    <div data-aos-delay="300" className="rounded-xl bg-white p-6 text-center shadow-xl">
                        <div
                            className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                            <FaListCheck className="h-16 w-16 text-slate-500" />
                        </div>
                        <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">اكتشف العروض التمويلية</h1>
                        <p className="px-4 text-gray-500">عروضنا التمويلية المختلفة تتوافر بجميع بنوك المملكة، حتما ستناسب ميزانيتك الشهرية</p>
                        {/* Add A Button Here */}
                    </div>
                    <div data-aos-delay="300" className="rounded-xl bg-white p-6 text-center shadow-xl">
                        <div
                            className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                            <PiFastForwardFill className="h-16 w-16 text-slate-500" />
                        </div>
                        <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">إستلام سيارتك بأسرع وقت</h1>
                        <p className="px-4 text-gray-500">لا نتأخر أبدا بتنفيذ طلبات التمويل وستحصل علي سيارتك بأسرع وقت</p>
                        {/* Add A Button Here */}
                    </div>
                </div>
            </div>

            {/* Container */}

            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                {/* Image Column */}
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
                </div>
                {/* Close Image Column */}

                {/* Text Column */}
                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    {/*Text Wrapper */}
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-primary-blue lg:text-4xl">اطلاق موقعنا الجديد</h2>
                        <p className="mt-4">
                            تم اطلاق موقعنا الجديد بحيث يجعل من السهل للغاية الحصول علي سيارة احلامك
                            مع خطط التمويل المتعددة وقائمة سيارات متجددة
                        </p>
                        { /* Button Container */}
                        <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-primary-blue border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">اقرء المزيد</a>
                        </div>
                    </div>
                    { /* Close Text Wrapper */}
                </div>
                {/*Close Text Column */}

            </div>
        </div>
    );
};

export default Features;