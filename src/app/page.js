import DySection from '@/module/home/DySection';
import Banner from '@/module/home/Banner';
import Banner2 from '@/module/home/Banner2';
import Services from '@/module/home/Services';
import SisterConcern from '@/module/home/SisterConcern';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';
import About from '@/module/about/About';

const page = () => {
  return (
    <div>
      {/* <Banner2/> */}
      <Banner />
      <SectionLayout title={'About Us_'}>
        <About/>
      </SectionLayout>
      <hr className='max-w-[1348px] mx-auto px-4' />
      <div className=''>
        <SectionLayout title={'Our Services_'}>
          <Services />
        </SectionLayout>
      </div>
      <hr className='max-w-[1348px] mx-auto px-4' />
      <SectionLayout title={'Our Sister concern_'}>
        <SisterConcern />
      </SectionLayout>
      <hr className='max-w-[1348px] mx-auto px-4' />
      <SectionLayout title={'Our Vision_'}>
        <DySection img="/vision.avif" desc={"We uncover ways for the world’s institutional investors to adapt, grow and prepare for tomorrow. By leveraging our expertise and leading-edge tech, our clients are better equipped to deliver optimal performance."} url={'/our-company'} label={'Our Company'} title={"Reimagining finance with resilience and insight"} />
      </SectionLayout>
      <hr className='max-w-[1348px] mx-auto px-4' />
      <SectionLayout title={'Our Mission_'}>
        <DySection img="/mission.jpg" desc={"We uncover ways for the world’s institutional investors to adapt, grow and prepare for tomorrow. By leveraging our expertise and leading-edge tech, our clients are better equipped to deliver optimal performance."} url={'/our-company'} label={'Our Company'} title={"Reimagining finance with resilience and insight"} />
      </SectionLayout>
    </div>
  );
};

export default page;