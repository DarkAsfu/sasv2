import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { HelpCircle } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="mx-auto py-12 max-w-4xl">
      <h1 className="text-5xl font-bold text-[#0000FF] mb-8">Let{"'"}s connect</h1>

      <div className="mb-12 text-gray-700">
        <p className="mb-4">
          We{"'"}ve gathered direct links to our most-often contacted groups in the list below. Whatever your question,
          we{"'"}re here to help.
        </p>
        <h2 className="text-xl font-semibold mb-2">Give us a call</h2>
        <p className="text-lg text-[#0000FF] underline mb-2">+1 (617) 786-3000</p>
        <p className="text-sm">Operator relay calls are welcome.</p>
        <p className="text-sm">Need speech or hearing support? Dial 711.</p>
      </div>

      <div className="border-t border-gray-300 pt-8 mb-8" />

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0000FF] flex items-center mb-2">
          <HelpCircle className="w-5 h-5 mr-2" />
          You can also reach us by submitting the form below.
        </h2>
        <p className="text-sm text-gray-600">All fields marked * are required.</p>
      </div>

      <form className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-gray-700">
            Name*
          </Label>
          <Input id="name" placeholder="Your Name" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700">
            Email Address*
          </Label>
          <Input id="email" type="email" placeholder="Email Address" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="company" className="text-gray-700">
            Company*
          </Label>
          <Input id="company" placeholder="Your Company" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-700">
            Tell us more about why you{"'"}re reaching out, but please avoid including any private information (such as
            your account numbers or SSN).
          </Label>
          <Textarea id="message" placeholder="What can we do for you?" rows={5} className="mt-1" />
        </div>

        <p className="text-xs text-gray-500">
          Please be aware that this is not a secure messaging service and we cannot accept any type of financial
          instruction through this site.
        </p>

        <div className="flex items-center space-x-2">
          <Checkbox id="emailUpdates" />
          <Label htmlFor="emailUpdates" className="text-sm text-gray-700">
            Sign up to receive emails, texts and other updates on the latest from State Street. Don{"'"}t worry, you can
            unsubscribe at any time.
          </Label>
        </div>

        <Button type="submit" className="px-8 py-3 border border-[#0000FF] text-[#0000FF] bg-white hover:bg-gray-50">
          Submit
        </Button>
      </form>
    </div>
  )
}
