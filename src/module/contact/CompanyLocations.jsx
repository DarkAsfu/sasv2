import Link from "next/link"

export default function CompanyLocations() {
  const addresses = [
    {
      title: "State Street Corporation, State Street Markets, LLC",
      location: "Massachusetts",
      details: [
        { label: "Corporate Headquarters", value: "One Congress Street" },
        { value: "Boston, Massachusetts 02114-2016" },
        { label: "Mailing Address:", value: "Box 5501" },
        { value: "Boston, Massachusetts 02206" },
      ],
      tel: "+1 617-786-3000",
      mapLink: "#",
    },
    {
      title: "State Street Corporation, State Street Global Advisors, Inc.",
      location: "Massachusetts",
      details: [
        { value: "1 Iron Street" },
        { value: "Boston, Massachusetts 02210" },
        { label: "Mailing Address:", value: "Box 5501" },
        { value: "Boston, Massachusetts 02206-5501" },
      ],
      tel: "+1 617-786-3000",
      mapLink: "#",
    },
    {
      title: "State Street Associates State Street Bank and Trust Company",
      location: "Massachusetts",
      details: [
        { value: "140 Mount Auburn Street" },
        { value: "Cambridge, Massachusetts 02138" },
        { value: "Box 5501" },
        { value: "Boston, Massachusetts 02206" },
      ],
      tel: "+1 617-786-3000",
      mapLink: null, // No map link for this one based on the image
    },
  ]

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {addresses.map((address, index) => (
          <div key={index} className="bg-white rounded-lg">
            <h2 className="text-xl font-bold text-[#0000FF] mb-2 leading-tight">{address.title}</h2>
            <p className="text-gray-700 mb-4">{address.location}</p>
            <div className="text-sm text-gray-800 space-y-1 mb-4">
              {address.details.map((detail, detailIndex) => (
                <p key={detailIndex}>
                  {detail.label && <span className="font-bold">{detail.label} </span>}
                  {detail.value}
                </p>
              ))}
            </div>
            {address.tel && (
              <p className="text-sm text-gray-800 mb-2">
                Tel: <span className="text-[#0000FF]">{address.tel}</span>
              </p>
            )}
            {address.mapLink && (
              <Link href={address.mapLink} className="text-[#0000FF] underline text-sm hover:no-underline">
                Map it
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
