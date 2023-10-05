"use client"
import { CallToAction } from '@/components/CallToAction'
import Faqs from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Integrations } from '@/components/Integrations'
import { Solution } from '@/components/Solution'
import Testimonials from '@/components/Testimonials'
import Features from '@/components/Features'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solution />
        <Features />
        <Integrations />
        <Testimonials />
        {/* <CallToAction /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
