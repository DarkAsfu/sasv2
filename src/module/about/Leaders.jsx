'use client'
import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import React from 'react';

const Leaders = () => {
    const { data: leaders, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/our_leaderships/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    console.log(leaders);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>
                {
                    leaders?.map((leader, idx) => (
                        <div key={idx}>
                            <Image className='w-[400px] h-[400px] object-cover' src={leader.image} width={400} height={400} alt={leader.name} />
                            <h1 className='font-inter text-[22px] text-primary mt-4'>{leader.name}</h1>
                            <p  className='font-inter text-[#020b5b] whitespace-pre-wrap'>{leader.designation}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Leaders;