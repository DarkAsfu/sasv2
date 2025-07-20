import Image from 'next/image';
import React from 'react';
import Cbutton from '../reusable/Cbutton';

const Dysection2 = ({ title, desc, img, url, label }) => {
    return (
        <div>
            <h1 className='text-primary text-4xl tracking-tighter'>{title}</h1>
            {img && <Image src={img} height={1000} width={400} className='w-full h-[500px] object-cover border mt-8' alt='parent-company' />}
            <div
                className="my-4 text-[#020b5b] font-inter font-[300] text-[1rem]"
                dangerouslySetInnerHTML={{ __html: desc }}
            />
            {/* <p className='mt-4'>{desc}</p> */}
            {
                (url && label) &&
                <Cbutton className="px-10 py-4 mt-4 text-primary border-primary hover:bg-primary hover:text-white transition-all font-semibold" label={label} url={url} />
            }
        </div>
    );
};

export default Dysection2;