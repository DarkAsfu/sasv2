import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Cbutton from '../reusable/Cbutton';

const DySection = ({img, desc, url, label, title}) => {
    return (
        <div className='md:flex items-center gap-4'>
            <Image className='md:w-[60%]' src={img} width={1000} height={300} alt='about-img'/>
            <div className='md:w-[40%]'>
                <h1 className='font-inter font-bold text-primary text-[22px] mt-4'>{title}</h1>
                <div
                className="my-4 text-[#020b5b] font-inter font-[300] text-[1rem]"
                dangerouslySetInnerHTML={{ __html: desc }}
            />
                <Cbutton className="mt-4 text-primary px-16 py-4" url={url} label={label} />
            </div>
        </div>
    );
};

export default DySection;