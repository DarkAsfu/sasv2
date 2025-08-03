import Leaders from '@/module/about/Leaders';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const page = () => {
    return (
        <div>
            <SectionLayout title={"Our Team"}>
                <Leaders/>
            </SectionLayout>
        </div>
    );
};

export default page;