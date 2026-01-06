"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function JobPostingForm() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    description: "",
    workersNeeded: 1,
    location: "",
    workType: "",
    startDate: "",
    duration: "",
    paymentType: "",
    budgetMin: "",
    budgetMax: "",
    skills: "",
    experience: "",
    contactName: "",
    contactPhone: "",
    contactMethod: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Job Basic Details */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">1</span>
            Job Basic Details
          </CardTitle>
          <CardDescription>Tell us about the job opportunity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-foreground">
                Job Title
              </Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                placeholder="e.g., Electrician Needed for Home Wiring"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="border-border bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-foreground">
                Job Category
              </Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
              >
                <option value="">Select a category</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="painter">Painter</option>
                <option value="ac-technician">AC Technician</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Job Description
            </Label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe the work in detail..."
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="flex w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workersNeeded" className="text-foreground">
              Number of Workers Needed
            </Label>
            <Input
              id="workersNeeded"
              name="workersNeeded"
              type="number"
              min="1"
              value={formData.workersNeeded}
              onChange={handleChange}
              className="border-border bg-input text-foreground"
            />
          </div>
        </CardContent>
      </Card>

      {/* Work Details */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">2</span>
            Work Details
          </CardTitle>
          <CardDescription>Clarify the work type and location</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="workType" className="text-foreground">
                Type of Work
              </Label>
              <select
                id="workType"
                name="workType"
                value={formData.workType}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
              >
                <option value="">Select work type</option>
                <option value="one-time">One-time Job</option>
                <option value="part-time">Part-time</option>
                <option value="full-time">Full-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-foreground">
                Expected Duration
              </Label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
              >
                <option value="">Select duration</option>
                <option value="few-hours">Few hours</option>
                <option value="1-day">1 day</option>
                <option value="multiple-days">Multiple days</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-foreground">
              Work Location
            </Label>
            <Input
              id="location"
              name="location"
              placeholder="Enter address or area/landmark"
              value={formData.location}
              onChange={handleChange}
              required
              className="border-border bg-input text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-foreground">
              Work Start Date
            </Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="border-border bg-input text-foreground"
            />
          </div>
        </CardContent>
      </Card>

      {/* Payment & Budget */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">3</span>
            Payment & Budget
          </CardTitle>
          <CardDescription>Set your budget and payment terms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="paymentType" className="text-foreground">
                Payment Type
              </Label>
              <select
                id="paymentType"
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
              >
                <option value="">Select payment type</option>
                <option value="fixed">Fixed Price</option>
                <option value="per-day">Per Day</option>
                <option value="per-hour">Per Hour</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="budgetMin" className="text-foreground">
                Minimum Budget
              </Label>
              <Input
                id="budgetMin"
                name="budgetMin"
                type="number"
                placeholder="₹ 0"
                value={formData.budgetMin}
                onChange={handleChange}
                className="border-border bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budgetMax" className="text-foreground">
                Maximum Budget
              </Label>
              <Input
                id="budgetMax"
                name="budgetMax"
                type="number"
                placeholder="₹ 0"
                value={formData.budgetMax}
                onChange={handleChange}
                className="border-border bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills & Experience */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">4</span>
            Skills & Experience
          </CardTitle>
          <CardDescription>Define requirements for qualified workers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="skills" className="text-foreground">
              Required Skills
            </Label>
            <Input
              id="skills"
              name="skills"
              placeholder="e.g., Wiring, Pipe fitting, Bathroom fitting"
              value={formData.skills}
              onChange={handleChange}
              className="border-border bg-input text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience" className="text-foreground">
              Experience Level
            </Label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Visibility */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">5</span>
            Contact & Visibility
          </CardTitle>
          <CardDescription>How workers will reach you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-foreground">
                Contact Person Name
              </Label>
              <Input
                id="contactName"
                name="contactName"
                placeholder="Your name"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="border-border bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone" className="text-foreground">
                Contact Phone Number
              </Label>
              <Input
                id="contactPhone"
                name="contactPhone"
                type="tel"
                placeholder="Your phone number"
                value={formData.contactPhone}
                onChange={handleChange}
                required
                className="border-border bg-input text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactMethod" className="text-foreground">
              Preferred Contact Method
            </Label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground"
            >
              <option value="">Select contact method</option>
              <option value="call">Call</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="in-app">In-app Chat</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex gap-4">
        <Button type="submit" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          Post Job
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" className="border-border text-foreground hover:bg-card bg-transparent">
          Save as Draft
        </Button>
      </div>
    </form>
  )
}
