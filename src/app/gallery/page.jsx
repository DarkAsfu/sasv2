"use client"

import useFetch from "@/hooks/useFetch"
import SectionLayout from "@/module/reusable/SectionLayout"
import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)
  const { data: gallery, loading, error } = useFetch("https://api.sascorporationbd.com/api/sas_gallery/")

  // Update currentIndex when selectedImage changes
  useEffect(() => {
    if (selectedImage && gallery) {
      const index = gallery.findIndex((item) => item.id === selectedImage.id)
      setCurrentIndex(index !== -1 ? index : null)
    } else {
      setCurrentIndex(null)
    }
  }, [selectedImage, gallery])

  // Navigation functions
  const handleNextImage = useCallback(() => {
    if (gallery && currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % gallery.length
      setSelectedImage(gallery[nextIndex])
    }
  }, [gallery, currentIndex])

  const handlePrevImage = useCallback(() => {
    if (gallery && currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length
      setSelectedImage(gallery[prevIndex])
    }
  }, [gallery, currentIndex])

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        if (event.key === "ArrowRight") {
          handleNextImage()
        } else if (event.key === "ArrowLeft") {
          handlePrevImage()
        } else if (event.key === "Escape") {
          setSelectedImage(null)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage, handleNextImage, handlePrevImage])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <SectionLayout title={"Gallery"}>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallery?.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid cursor-pointer relative group"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.picture || "/placeholder.svg"}
                alt={item.title || "Gallery image"}
                width={500}
                height={500}
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* The Dialog for displaying the selected image */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 border-none">
          {selectedImage && (
            <>
              

              <div className="relative flex justify-center items-center w-full h-full p-4">
                <Image
                  src={selectedImage.picture || "/placeholder.svg"}
                  alt={selectedImage.title || "Gallery image"}
                  width={1600}
                  height={900}
                  className="object-cover max-w-full h-[80vh] rounded-lg"
                />
              </div>

              {selectedImage.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                  <h3 className="text-white text-lg font-medium">{selectedImage.title}</h3>
                </div>
              )}

              {/* Navigation Buttons */}
              {gallery && gallery.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Page
