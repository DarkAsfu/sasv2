"use client"

import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import React from 'react';

const Management = () => {
    const { data: keyMembers, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/key_members/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    console.log(keyMembers);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    keyMembers?.map((member, idx) => (
                        <div key={idx}>
                            <Image className='w-full h-[400px] object-cover object-center' src={member.image} width={500} height={300} alt='md' />
                            {/* <h1 className='font-inter text-[22px] text-primary mt-4'>{member.name}</h1>
                            <p  className='font-inter text-[#020b5b] whitespace-pre-wrap'>{member.designation}</p> */}
                            <div 
                            className="my-4 text-[#020b5b] font-inter font-[300] text-[1rem]" 
                            dangerouslySetInnerHTML={{ __html: member.biography}} 
                        />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Management;