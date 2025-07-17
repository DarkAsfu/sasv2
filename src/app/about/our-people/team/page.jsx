import Dysection2 from '@/module/about/Dysection2';
import Management from '@/module/about/Management';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const page = () => {
    return (
        <div>
            <SectionLayout title={"Meet Our Leaders"}>
                <Dysection2 img={"/about.jpg"} title={"Who we are"} desc={"Our leadership team is among the industry’s most knowledgeable and experienced, working together to set the company’s vision and strategy while helping to keep markets moving forward. Grounding themselves in what’s achievable today empowers them to build a united vision for tomorrow. Led by Chairman and CEO Ron O’Hanley, our organization’s unwavering commitment to innovation and continuous improvement makes it possible to create better outcomes for the world’s investors and the people they serve."} label={"Get to know use"} url={"/leadership"} />
            </SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <SectionLayout title={"Our key Management"} >
                <Management />
            </SectionLayout>
        </div>
    );
};

export default page;