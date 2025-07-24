"use client"

import { Briefcase, Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import useFetch from "@/hooks/useFetch"
import SectionLayout from "@/module/reusable/SectionLayout"
import Link from "next/link"



const page = () => {
  const { data: jobs, loading, error } = useFetch("https://api.sascorporationbd.com/api/careers/")

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <p className="text-lg font-medium text-gray-700">Loading job positions...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <p className="text-lg font-medium text-red-600">Error: {error}</p>
      </div>
    )
  }

  return (
    <SectionLayout title={"Open Job Positions"}>
      <div className="">
        
        {/* Job Cards Section */}
        <div className="grid grid-cols-1 gap-6">
          {jobs && jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-sm  gap-6 flex w-full justify-between items-center"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">{job.title}</h2>
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-v0-orange" />
                      <span>Sas Corporation Bd</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-v0-orange" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <Link href={`/careers/${job.id}`} className="cursor-pointer"><Button className="max-w-max">See Details</Button></Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No job positions available.</p>
          )}
        </div>
      </div>
    </SectionLayout>
  )
}


export default page;