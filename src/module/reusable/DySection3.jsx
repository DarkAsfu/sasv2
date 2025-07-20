import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DySection3 = ({ data, url }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
                {data?.map((d, idx) => (
                    <div key={idx}>
                        <Image
                            className='w-[100%] h-[180px] object-cover'
                            src={d?.image}
                            width={300}
                            height={250}
                            alt={"image"}
                        />
                        <h1 className='font-serif text-primary text-[18px] mt-2'>{d.name}</h1>
                        <div
                            className="my-4 text-[#020b5b] font-inter font-[300] text-[1rem]"
                            dangerouslySetInnerHTML={{ __html: d.description.substring(0, 150) + '...' }}
                        />
                        {
                            url && <Link className='text-primary font-normal font-inter' href={`/${url}/${d.id}`}>
                                Learn More
                            </Link>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DySection3;