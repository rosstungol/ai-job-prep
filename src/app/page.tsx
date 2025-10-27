import DetailedFeatures from '@/features/landing/components/DetailedFeatures'
import Features from '@/features/landing/components/Features'
import Footer from '@/features/landing/components/Footer'
import Hero from '@/features/landing/components/Hero'
import Navbar from '@/features/landing/components/Navbar'
import Pricing from '@/features/landing/components/Pricing'
import Stats from '@/features/landing/components/Stats'
import Testimonials from '@/features/landing/components/Testimonials'

export default function LandingPage() {
  return (
    <div className='bg-gradient-to-b from-background to-muted/20'>
      <Navbar />
      <Hero />
      <Features />
      <DetailedFeatures />
      <Stats />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}
