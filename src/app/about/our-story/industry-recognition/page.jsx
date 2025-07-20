"use client"

import useFetch from '@/hooks/useFetch';
import Dysection2 from '@/module/about/Dysection2';
import Management from '@/module/about/Management';
import DySection3 from '@/module/reusable/DySection3';
import SectionLayout from '@/module/reusable/SectionLayout';
import React from 'react';

const page = () => {
  const { data: awards, loading, error } = useFetch(
    'https://api.sascorporationbd.com/api/awards/'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Group awards by category
  const groupedByCategory = awards?.reduce((acc, award) => {
    const category = award.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(award);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {/* Main Section */}
      <SectionLayout title={"Awards"}>
        <Dysection2
          img={awards[0]?.image}
          title={"Industry recognition"}
          desc={awards[0]?.description}
        />
      </SectionLayout>

      <hr className='max-w-[1348px] mx-auto px-4' />

      {/* Category-wise Sections */}
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <SectionLayout key={category} title={category}>
          <DySection3 data={items} />
        </SectionLayout>
      ))}
    </div>
  );
};

export default page;
