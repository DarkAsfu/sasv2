'use client'
import useFetch from '@/hooks/useFetch';
import Dysection2 from '@/module/about/Dysection2';
import Blogs from '@/module/blogs/Blogs';
import SectionLayout from '@/module/reusable/SectionLayout';
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const { id } = useParams()
    const { data: blog, loading, error } = useFetch(
        `https://api.sascorporationbd.com/api/blogs/${id}/`
    );

    if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;
    // console.log(blog);
    // const blog =
    // {
    //     "id": 1,
    //     "title": "10 Unspoken NestJS Secrets for Production at Scale",
    //     "description": "<p>Advanced NestJS optimization techniques for production environments handling high traffic volumes. Covers lazy module loading for serverless cold starts, request-scoped caching for multi-tenant security, eBPF tracing for async operations, gRPC health checks for Kubernetes, selective serialization for memory efficiency,&nbsp;</p>",
    //     "image": "https://api.sascorporationbd.com/media/blogs/316c0f407ea234d42aa2dc9b8291c8db.webp",
    //     "is_featured": true,
    //     "created_at": "2025-07-22T09:20:02.792223Z"
    // }

    return (
        <div>
            <SectionLayout title={"Blog Details"}>
                {
                    blog &&
                    <Dysection2 img={blog?.image} title={blog.title} desc={blog.description} />
                }
            </SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <Blogs />
        </div>
    );
};

export default page; 