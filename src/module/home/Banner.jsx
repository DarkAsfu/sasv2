"use client"
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { Button } from '@/components/ui/button';
import useContactInfo from '@/hooks/useContactInfo';
import React from 'react';

const Banner = () => {
    const { contactinfo } = useContactInfo();
    const bannerImage = contactinfo?.banner_image || '';

    return (
        <div className=''>
            <div className='max-w-[1380px] mx-auto px-4'>
                <div
                    className='h-[70vh] md:h-[70vh] bg-cover bg-center bg-no-repeat relative'
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                    }}
                >
                    {/* Optional: Add overlay for dark mode or better contrast */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Content goes here */}
                    <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between">
                        <div className='bg-white max-w-[600px] m-4 px-4 py-10 md:mx-10 md:p-10'>
                            <h4 className='text-primary text-[36px] md:text-[52px] md:leading-[64px] tracking-tighter font-normal'>
                                {contactinfo?.banner_title}
                            </h4>
                            <p className="mt-4">
                                {contactinfo?.banner_description}
                            </p>
                            <Button className="rounded-none mt-24">Learn More</Button>
                        </div>
                        <div>
                            <div className=" bg-white md:p-16 rounded-full -mt-14 md:mt-0 md:mr-10">
                                <HeroVideoDialog
                                    className="block dark:hidden"
                                    animationStyle="from-center"
                                    videoSrc={contactinfo?.banner_video}
                                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                                    thumbnailAlt="Hero Video"
                                />
                                <HeroVideoDialog
                                    className="hidden dark:block"
                                    animationStyle="from-center"
                                    videoSrc={contactinfo?.banner_video}
                                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                                    thumbnailAlt="Hero Video"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
