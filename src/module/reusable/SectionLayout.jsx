import React from 'react';

const SectionLayout = ({title, children}) => {
    return (
        <div className='max-w-[1380px] mx-auto px-4 md:flex justify-between my-14'>
            <div className='md:w-[20%]'>
                <h1 className='text-primary text-2xl tracking-tighter capitalize mb-6'>{title}</h1>
            </div>
            <div className='md:w-[80%]'>
                {children}
            </div>
        </div>
    );
};

export default SectionLayout;