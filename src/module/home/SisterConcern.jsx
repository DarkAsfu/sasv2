'use client';

import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DySection3 from '../reusable/DySection3';

const SisterConcern = () => {
    const { data: sisterConcern, loading, error } = useFetch(
        'https://api.sascorporationbd.com/api/business_partners/'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    
    return (
       <DySection3 data={sisterConcern} url={'sister-concern'} />
    );
};

export default SisterConcern;