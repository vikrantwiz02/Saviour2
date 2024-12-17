import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative bg-blue-600 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-700 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/hero-texture.svg')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-75"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">Empowering Communities in Times of Crisis</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">SAVIOUR provides cutting-edge disaster management solutions to help communities prepare, respond, and recover from emergencies.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="w-full sm:w-auto animate-pop-out hover:scale-105 transition-transform">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto animate-pop-out delay-100 hover:scale-105 transition-transform">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="animate-wave">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}
