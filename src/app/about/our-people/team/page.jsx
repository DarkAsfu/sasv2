"use client"

import useFetch from '@/hooks/useFetch';
import Dysection2 from '@/module/about/Dysection2';
import Management from '@/module/about/Management';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const page = () => {
    const { data: leader, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/meet_leaders/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    console.log(leader);
    return (
        <div>
            <SectionLayout title={"Meet Our Leaders"}>
                <Dysection2 img={leader[0]?.image} title={"Who we are"} desc={leader[0].short_description} label={"Get to know use"} url={"/about/our-people/leadership"} />
            </SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <SectionLayout title={"Our key Management"} >
                <Management />
            </SectionLayout>
        </div>
    );
};

export default page;