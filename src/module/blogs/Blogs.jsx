"use client"
import useFetch from '@/hooks/useFetch';
import DySection3 from '@/module/reusable/DySection3';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const Blogs = () => {
    const { data: blogs, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/blogs/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    console.log(blogs);
    return (
        <div>
            <SectionLayout title={"All Blogs"}>
                <DySection3 data={blogs} url={'blogs'} label={"Read Blog"} />
            </SectionLayout>
        </div>
    );
};

export default Blogs;