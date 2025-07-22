import Link from 'next/link';
import React from 'react';

const Cbutton = ({ label, url, className, target }) => {
    if (url && label) {
        return (
            <Link href={url} target={target ? target : ""}>
                <button className={`cursor-pointer border border-blue-400 w-fit p-2 px-4 rounded-md  backdrop-blur-2xl mx-auto  ${className}`}>
                    {label}
                </button>
            </Link>
        );
    }

};

export default Cbutton;