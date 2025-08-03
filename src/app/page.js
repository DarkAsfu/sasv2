import DySection from '@/module/home/DySection';
import Banner from '@/module/home/Banner';
import Banner2 from '@/module/home/Banner2';
import Services from '@/module/home/Services';
import SisterConcern from '@/module/home/SisterConcern';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';
import About from '@/module/about/About';
import MissionVission from '@/module/home/MissionVission';

const page = () => {
  return (
    <div>
      {/* <Banner2/> */}
      <Banner />
      <SectionLayout title={'About Us'}>
        <About/>
      </SectionLayout>
      <hr className='max-w-[1348px] mx-auto px-4' />
      <div className=''>
        <SectionLayout title={'Our Product & Services'}>
          <Services />
        </SectionLayout>
      </div>
      <hr className='max-w-[1348px] mx-auto px-4' />
      <SectionLayout title={'Our Sister concern'}>
        <SisterConcern />
      </SectionLayout>
      <hr className='max-w-[1348px] mx-auto px-4' />
      <MissionVission/>
    </div>
  );
};

export default page;