"use client"

import usePartnersInfo from '@/hooks/usePartnersInfo';
import DySection3 from '@/module/reusable/DySection3';
import SectionLayout from '@/module/reusable/SectionLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    const { partners } = usePartnersInfo();
    console.log(partners);
    return (
        <div>
            <SectionLayout title={'All Partners'}>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10'>
                        {partners?.map((d) => (
                            <Link href={d.url} target='_blank' key={d.id} className='group'>
                                <Image
                                    className='w-[100%] h-[180px] object-contain border rounded-md'
                                    src={d?.image}
                                    width={300}
                                    height={250}
                                    alt={"image"}
                                />
                                <h1 className='font-serif text-primary text-[18px] mt-2'>{d.name}</h1>
                                <p className='text-primary font-normal font-inter group-hover:underline' href={d.url}>
                                       See Here
                                    </p>
                                
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionLayout>
        </div>
    );
};

export default page;