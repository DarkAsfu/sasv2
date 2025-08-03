'use client'

import { useParams, useRouter } from 'next/navigation'
import { Briefcase, MapPin, DollarSign, Calendar, Award, ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import useFetch from '@/hooks/useFetch'
import Link from 'next/link'

const JobDetailsPage = () => {
  const { id } = useParams()
  const router = useRouter()
    // const job = {
    //     "id": 1,
    //     "title": "Content Writer",
    //     "location": "Gulshan-1, Dhaka",
    //     "job_type": "On Site",
    //     "experience": 1,
    //     "is_fresher": true,
    //     "description": "<p>Core Devs Ltd. is a forward-thinking technology company, specializing in innovative software solutions that drive change and create value. We are passionate about creating impactful digital experiences and are looking for a talented&nbsp;<strong>Content Writer</strong>&nbsp;to join our team and help us communicate our vision to the world.&nbsp;</p>",
    //     "responsibility": "<ul>\r\n\t<li>Create engaging content for blogs, social media, websites, and more.&nbsp;</li>\r\n\t<li>Contribute fresh ideas to our content strategy and brainstorm new topics.&nbsp;</li>\r\n\t<li>Maintain consistency in style, quality, and tone across all content.&nbsp;</li>\r\n\t<li>Use SEO techniques and keyword research to boost content visibility.&nbsp;</li>\r\n\t<li>Edit and proofread content for clarity and accuracy.&nbsp;</li>\r\n\t<li>Work with the marketing team to create content that supports campaigns.&nbsp;</li>\r\n</ul>",
    //     "salary_range": "25000-30000"
    // }


  const { data: job, loading, error } = useFetch(`https://api.sascorporationbd.com/api/careers/${id}`)

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-v0-light-gray-bg p-4">
        <p className="text-lg font-medium text-gray-700">Loading job details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-v0-light-gray-bg p-4">
        <p className="text-lg font-medium text-red-600">Error: {error}</p>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-v0-light-gray-bg p-4">
        <p className="text-lg font-medium text-gray-500">Job not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-v0-light-gray-bg p-4 md:p-8">
      <div className="container mx-auto max-w-4xl space-y-6">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="mb-4 bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Back
        </Button>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">{job.title}</CardTitle>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mt-2">
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4 text-v0-orange" />
                <span>Sas Corporation Bd</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-v0-orange" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-v0-orange" />
                <span>{job.job_type}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4 text-v0-orange" />
                <span>{job.experience} Year{job.experience !== 1 ? 's' : ''} Experience</span>
              </div>
              <div className="flex items-center gap-1">
                {/* <DollarSign className="h-4 w-4 text-v0-orange" /> */}
                <span>Salary: {job.salary_range} BDT</span>
              </div>
              {job.is_fresher && (
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Fresher Friendly
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h3>
              <div
                className="prose prose-sm max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h3>
              <div
                className="prose prose-sm max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: job.responsibility }}
              />
            </div>
            <Link href={job?.application_link ? job.application_link : ""} className='cursor-pointer'>
            <Button className="bg-primary max-w-max rounded-lg px-8 py-3 text-[14px] w-full">
              Apply Now
            </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default JobDetailsPage
