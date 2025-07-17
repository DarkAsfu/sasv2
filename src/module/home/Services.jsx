'use client';

import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
    const { data: services, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/projects/'
    );

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <p className="text-lg text-gray-600">Loading services...</p>
        </div>
    );

    if (error) return (
        <div className="bg-red-50 p-4 rounded-md text-center">
            <p className="text-red-600">Error loading services: {error}</p>
        </div>
    );

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
                {services?.map(service => (
                    <div key={service.id}>
                        <Image 
                            className='w-[100%] h-[180px] object-cover' 
                            src={service.project_image} 
                            width={300} 
                            height={250} 
                            alt={service.project_name} 
                        />
                        <h1 className='font-serif text-primary text-[18px] mt-2'>{service.name}</h1>
                        <div 
                            className="my-4 text-[#020b5b] font-inter font-[300] text-[1rem]" 
                            dangerouslySetInnerHTML={{ __html: service.description.substring(0, 150) + '...' }} 
                        />
                        <Link className='text-primary font-normal font-inter' href={`/services/${service.id}`}>
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;