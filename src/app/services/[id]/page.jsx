"use client"
import useFetch from '@/hooks/useFetch';
import Dysection2 from '@/module/about/Dysection2';
import SectionLayout from '@/module/reusable/SectionLayout';
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const {id} = useParams();
    const { data: project, loading, error } = useFetch(
        `https://api.sascorporationbd.com/api/projects/${id}/`
    );

    if (loading) return <p>Loading...</p>
    console.log(project);
    return (
        <div>
            <SectionLayout title={"Service Details"}>
                <Dysection2 title={project?.project_name} desc={project?.description} img={project?.project_image} url={project?.project_link} label={"Explore Now"} />
            </SectionLayout>
        </div>
    );
};

export default page;