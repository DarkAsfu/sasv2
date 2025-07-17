import Image from 'next/image';
import React from 'react';

const Management = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <Image className='w-full h-[400px] object-cover object-center' src={'/md.jpg'} width={500} height={300} alt='md' />
                    <p className='font-inter mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate exercitationem odit, illum laborum praesentium nisi quis quos corporis ad consequatur, eum similique optio asperiores ipsam fuga. Accusantium, error impedit.</p>
                </div>
                <div>
                    <Image className='w-full h-[400px] object-cover object-center' src={'/jahura.jpg'} width={500} height={300} alt='jahura' />
                    <p className='font-inter mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate exercitationem odit, illum laborum praesentium nisi quis quos corporis ad consequatur, eum similique optio asperiores ipsam fuga. Accusantium, error impedit.</p>
                </div>
            </div>
        </div>
    );
};

export default Management;