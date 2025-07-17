import Image from 'next/image';
import React from 'react';
import Cbutton from '../reusable/Cbutton';

const Dysection2 = ({title, desc, img, url, label}) => {
    return (
        <div>
            <h1 className='text-primary text-4xl tracking-tighter'>{title}</h1>
            <Image src={img} height={500} width={500} className='w-full border mt-8' alt='parent-company' />

            <p className='mt-4'>{desc}</p>
            <Cbutton className="px-10 py-4 mt-4 text-primary border-primary hover:bg-primary hover:text-white transition-all font-semibold" label={label} url={url}/>
        </div>
    );
};

export default Dysection2;