import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Empowering communities in times of crisis
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Saviour is dedicated to providing innovative solutions for disaster preparedness and response.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-500">
                At Saviour, our mission is to leverage technology to save lives and minimize the impact of natural disasters. We believe that by providing timely information, facilitating communication, and fostering community support, we can make a significant difference in how people prepare for, respond to, and recover from catastrophic events.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-500">
                We envision a world where communities are resilient in the face of natural disasters. Through our platform, we aim to create a global network of mutual aid and support, ensuring that no one faces a crisis alone. We strive to be at the forefront of disaster response technology, continually innovating to meet the evolving challenges posed by climate change and other environmental factors.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-extrabold text-gray-900 text-center">Our Team</h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">
            Saviour is built by a dedicated team of technologists, disaster management experts, and community organizers. We're passionate about using our skills to make a positive impact on the world.
          </p>
        </div>
        <div className="mt-20 text-center">
          <Button asChild className="px-8 py-3 md:py-4 md:text-lg md:px-10">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}