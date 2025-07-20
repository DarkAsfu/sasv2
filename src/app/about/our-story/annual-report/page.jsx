'use client'
import useFetch from '@/hooks/useFetch';
import Dysection2 from '@/module/about/Dysection2';
import StatsSection from '@/module/annual-report/StatsSection';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const page = () => {
    const { data: sasInfo, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/sas_info/1/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
            <SectionLayout>
                <Dysection2
                    img={"/annual-report-cover.avif"}
                    title={"Annual Report"}
                    label={'Download 2024 Annual Report'}
                    url={sasInfo?.annual_report}
                />
            </SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <SectionLayout title={"Who we are"}>
                <StatsSection title={"Title"} statsData={sasInfo}/>
            </SectionLayout>
        </div>
    );
};

export default page;