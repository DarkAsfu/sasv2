'use client'

import React from 'react';
import SectionLayout from '../reusable/SectionLayout';
import DySection from './DySection';
import useFetch from '@/hooks/useFetch';

const MissionVission = () => {
    const { data: about, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/about_sas/2/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    console.log(about);
    return (
        <div>
            <SectionLayout title={'Our Vision'}>
                <DySection img={about?.vision_image} desc={about?.vision_description} url={'/our-company'} label={'Our Company'} title={about?.vision_title} />
            </SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <SectionLayout title={'Our Mission'}>
            <DySection img={about?.mission_image} desc={about?.mission_description} url={'/our-company'} label={'Our Company'} title={about?.mission_title} />
            </SectionLayout>
        </div>
    );
};

export default MissionVission; 