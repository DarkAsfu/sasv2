'use client'

import useFetch from "@/hooks/useFetch";
import Link from "next/link"

export default function CompanyLocations() {
  const { data: locations, loading, error } = useFetch(
    'https://api.sascorporationbd.com/api/addresses/'
);

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
console.log(locations);

  return (
    <div id="office-locations" className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations?.map((address, index) => (
          <div key={index} className="bg-white rounded-lg">
            <h2 className="text-xl font-bold text-[#0000FF] mb-2 leading-tight">{address.name}</h2>
            <p className="text-gray-700 mb-4">{address.location}</p>
            {/* <div className="text-sm text-gray-800 space-y-1 mb-4">
              {address.details.map((detail, detailIndex) => (
                <p key={detailIndex}>
                  {detail.label && <span className="font-bold">{detail.label} </span>}
                  {detail.value}
                </p>
              ))}
            </div> */}
            {address.mailing_address && (
              <p className="text-sm text-gray-800 mb-2">
                Email: <span className="text-[#0000FF]">{address.mailing_address}</span>
              </p>
            )}
            {address.telephone && (
              <p className="text-sm text-gray-800 mb-2">
                Tel: <span className="text-[#0000FF]">{address.telephone}</span>
              </p>
            )}
            {address.map_url && (
              <Link href={address.map_url} className="text-[#0000FF] underline text-sm hover:no-underline">
                Map it
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
