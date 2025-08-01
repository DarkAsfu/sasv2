import React from 'react';
import Image from 'next/image';
import { Sparkles } from '@/components/ui/sparkles';
import Cbutton from '../reusable/Cbutton';

function Banner2() {
  return (
    <>
      <main className=" h-[90vh]  w-full  overflow-hidden bg-black text-white ">
        <section className="container mx-auto relative h-[90vh] mt-4  w-full overflow-hidden">
          {/* <Image
            src="https://res.cloudinary.com/dzl9yxixg/image/upload/bg-image_inxjdx.png"
            width={1000}
            height={1000}
            className="w-full h-full absolute top-0 left-0"
            alt="bg-image"
          /> */}
          <article className="grid gap-4 text-center relative z-10 pt-10 max-w-3xl mx-auto px-4">
            <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
              Early Access
            </span>
            <h1 className="2xl:text-6xl  xl:text-5xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              Become an Animation Expert Easily at Our Academy
            </h1>
            <span>
              Our expert-led courses are perfect for all skill levels. Gain hands-on experience and create stunning animations effortlessly. Join us today!
            </span>
            <Cbutton className="bg-blue-900/40 hover:bg-blue-900/60 text-white" url={'/about'} label={'Learn More'} />
          </article>

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
        </section>
      </main>
    </>
  );
}
export default Banner2;
