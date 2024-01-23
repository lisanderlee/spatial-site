"use client"
import Hero from "@/components/Hero"
import Brands from "@/components/Brands"
import Stats from "@/components/Stats"
import Ecosystem from "@/components/Ecosystem"
import Features from "@/components/Features"
import { Integrations } from "@/components/Integrations"
import Faqs from "@/components/Faqs"
import CTA from "@/components/CallToAction"
import { Footer } from "@/components/Footer"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <>
  <Hero />
  
  <Stats />

  <Ecosystem />
  <Features />
  <Integrations />
  <CTA />
  <Faqs />

<Contact />
  <Footer />
    </>
  )
}
