import CompanyLocations from '@/module/contact/CompanyLocations';
import ContactForm from '@/module/contact/ContactForm';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const Contact = () => {
    return (
        <>
            <SectionLayout><ContactForm /></SectionLayout>
            <hr className='max-w-[1348px] mx-auto px-4' />
            <SectionLayout title={"Where to find us"}><CompanyLocations/></SectionLayout>

        </>
    );
};

export default Contact;