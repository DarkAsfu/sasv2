"use client"
import useFetch from '@/hooks/useFetch';
import Dysection2 from '@/module/about/Dysection2';
import Cbutton from '@/module/reusable/Cbutton';
import SectionLayout from '@/module/reusable/SectionLayout';
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const { id } = useParams()
    const { data: concern, loading, error } = useFetch(
        `https://api.sascorporationbd.com/api/business_partners/${id}/`
    )
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    console.log(concern);
    return (
        <div>
            <SectionLayout title={"Sister Conern_"}>
                <Dysection2 title={concern?.name} img={concern?.image} desc={concern?.description} url={concern?.website_link} label={"Explore Now"} />
            </SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <SectionLayout title={"Summary_"}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-light text-blue-600 mb-4">{concern.experience}</div>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-xs mx-auto">Experience</p>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-light text-blue-600 mb-4">{concern.branches}</div>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-xs mx-auto">Branches</p>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-light text-blue-600 mb-4">{concern.employees}</div>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-xs mx-auto">Employees</p>
                    </div>
                    <div className="text-center">
                        <div className="text-6xl md:text-7xl font-light text-blue-600 mb-4">{(concern.revenue / 1000000).toFixed(1)}M</div>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-xs mx-auto">Yearly Revenue</p>
                    </div>
                </div>
                <Cbutton className="px-10 py-4 mt-4 text-primary border-primary hover:bg-primary hover:text-white transition-all font-semibold" label={"Annual Report"} url={concern.annual_report} target={"_blank"} />
            </SectionLayout>
        </div>
    );
};

export default page;