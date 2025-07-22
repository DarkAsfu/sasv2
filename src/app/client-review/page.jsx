"use client"
import useFetch from "@/hooks/useFetch"
import SectionLayout from "@/module/reusable/SectionLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TestimonialsPage = () => {
  const { data: testimonials, loading, error } = useFetch("https://api.sascorporationbd.com/api/testimonials/")

  if (loading) {
    return <p className="text-center py-8">Loading testimonials...</p>
  }

  if (error) {
    return <p className="text-center py-8 text-red-500">Error: {error}</p>
  }

  return (
    <div>
      <SectionLayout title={"Client Reviews"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={testimonial.image || "/placeholder.svg?height=64&width=64&query=testimonial avatar"}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-bold">{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.designation}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                {/*
                  WARNING: Using dangerouslySetInnerHTML can expose your application to cross-site scripting (XSS) attacks
                  if the HTML content is not sanitized. Ensure that the 'message' content from your API is trusted
                  or properly sanitized on the server-side before rendering it this way.
                */}
                <div
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: testimonial.message }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>
    </div>
  )
}

export default TestimonialsPage
