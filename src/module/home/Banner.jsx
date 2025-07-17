import { Button } from '@/components/ui/button';
import React from 'react';

const Banner = () => {
    return (
        <div className='mt-4'>
            <div className='max-w-[1380px] mx-auto px-4'>
                <div
                    className=' h-[70vh] md:h-[70vh] bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: "url('/hero.webp')",
                        "@media (prefersColorScheme: dark)": {
                            backgroundImage: "url('/hero.webp')",
                        }
                    }}
                >
                 
                    {/* Content goes here */}
                    <div className="relative z-10 h-full flex items-center">
                        {/* Your content */}
                        <div className='bg-white max-w-[600px] m-4 px-4 py-10 md:mx-10 md:p-10'>
                            <h4 className='text-primary text-[36px] md:text-[52px] md:leading-16 tracking-tighter font-normal'>Agility when it matters most.</h4>
                            <p className="mt-4">In a world that’s only getting bigger, we help you adapt, evolve, and lead with confidence and clarity.</p>
                            <Button className="rounded-none mt-24">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;