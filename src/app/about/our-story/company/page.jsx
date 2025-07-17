import Dysection2 from '@/module/about/Dysection2';
import SisterConcern from '@/module/home/SisterConcern';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const page = () => {
    return (
        <>
            <SectionLayout title={"About"}>
                <Dysection2 title={'Meet Our Parent Company'} desc={"Our leadership team is among the industry’s most knowledgeable and experienced, working together to set the company’s vision and strategy while helping to keep markets moving forward. Grounding themselves in what’s achievable today empowers them to build a united vision for tomorrow.Led by Chairman and CEO Ron O’Hanley, our organization’s unwavering commitment to innovation and continuous improvement makes it possible to create better outcomes for the world’s investors and the people they serve."} img={"/parent.png"} />
            </SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <SectionLayout title={'Our Sister concern_'}>
                <SisterConcern />
            </SectionLayout>
        </>

    );
};

export default page;