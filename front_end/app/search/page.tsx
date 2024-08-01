import CustomFilter from '@/components/CustomFilter';
import SearchBar from '@/components/SearchBar';
import React from 'react';

const Page = () => {
    return (
        <div className='mt-12 padding-x padding-y max-width'>
            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>
                    ابحث عن سيارتك
                </h1>
                <p className='text-lg mt-1'>
                    ابحث عن سيارتك المفضلة بأسهل الطرق وأسرعها
                </p>


                <div className='home__filters'>
                    <SearchBar />

                    <div className='home__filter-container'>
                        <CustomFilter title="نوع الوقود" />
                        <CustomFilter title="سنة الانتاج" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;