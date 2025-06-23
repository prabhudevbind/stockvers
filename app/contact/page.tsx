"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, TrendingUp, Mail, MessageSquare, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StockVerses</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about StockVerses? We'd love to hear from you. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="w-5 h-5 mr-2 text-green-600" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Get help with your account or technical issues</p>
                  <a href="mailto:support@stockverses.com" className="text-green-600 hover:text-green-700 font-medium">
                    support@stockverses.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                    General Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Questions about our platform or partnerships</p>
                  <a href="mailto:hello@stockverses.com" className="text-blue-600 hover:text-blue-700 font-medium">
                    hello@stockverses.com
                  </a>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Is StockVerses completely free to use?",
                answer:
                  "StockVerses offers both free practice modes and paid contests. You can start practicing for free and join contests with entry fees to win real cash prizes.",
              },
              {
                question: "Do I need any trading experience?",
                answer:
                  "No! StockVerses is designed for beginners and experts alike. Our platform provides real-time market data to help you learn as you trade.",
              },
              {
                question: "Are the stock prices real?",
                answer:
                  "Yes, we use real-time market data from NSE and BSE to provide the most realistic trading simulation experience possible.",
              },
              {
                question: "How do I withdraw my winnings?",
                answer:
                  "Contest winnings can be withdrawn to your bank account. The process typically takes 3-5 business days to complete after verification.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
