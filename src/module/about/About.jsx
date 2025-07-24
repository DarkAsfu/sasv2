"use client"
import React from 'react';
import DySection from '../home/DySection';
import useFetch from '@/hooks/useFetch';

const About = () => {
    const { data: about, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/about_sas/2/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
            <DySection img={about?.image} desc={about?.description} url={'/about/our-story/company'} label={"Learn More"} title={about?.title} />
        </div>
    );
};

export default About;