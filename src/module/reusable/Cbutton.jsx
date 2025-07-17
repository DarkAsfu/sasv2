import Link from 'next/link';
import React from 'react';

const Cbutton = ({ label, url, className }) => {
    return (
        <Link href={url}>
            <button className={`cursor-pointer border border-blue-400 w-fit p-2 px-4 rounded-md  backdrop-blur-2xl mx-auto  ${className}`}>
                {label}
            </button>
        </Link>
    );
};

export default Cbutton;