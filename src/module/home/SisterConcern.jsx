'use client';

import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SisterConcern = () => {
    const { data: sisterConcern, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/business_partners/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
                {sisterConcern.map(sister => (
                    <div key={sister.id}>
                        <Image 
                            className='w-[100%] h-[180px] object-cover' 
                            src={sister.image} 
                            width={300} 
                            height={250} 
                            alt={sister.name} 
                        />
                        <h1 className='font-serif text-primary text-[18px] mt-2'>{sister.name}</h1>
                        <div 
                            className="my-4 text-[#020b5b] font-inter font-[300] text-[1rem]" 
                            dangerouslySetInnerHTML={{ __html: sister.description.substring(0, 150) + '...' }} 
                        />
                        <Link className='text-primary font-normal font-inter' href={`/sister-concern/${sister.id}`}>
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SisterConcern;