import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About SAVIOUR',
  description: 'Learn about our mission and vision in disaster management',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/about-texture.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-center text-blue-800">About SAVIOUR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg">
              SAVIOUR is a cutting-edge disaster management platform dedicated to empowering communities and saving lives. Our mission is to provide real-time information, resource management, and community support to help people stay safe and prepared in the face of natural disasters and emergencies.
            </p>
            <p className="text-lg">
              Founded in 2024, our team of experts in technology, emergency management, and community outreach work tirelessly to develop innovative solutions that make a real difference in crisis situations.
            </p>
          </div>
          <div className="relative h-96 animate-fade-in-right">
            <Image src="/about-image.jpg" alt="SAVIOUR team" layout="fill" objectFit="cover" className="rounded-lg shadow-xl" />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">Our Vision</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We envision a world where communities are resilient, prepared, and connected in the face of disasters. Through technology and collaboration, we aim to minimize the impact of crises and foster rapid recovery.
          </p>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">Our Values</h2>
          <ul className="list-none space-y-4 max-w-3xl mx-auto">
            <li className="flex items-center animate-pop-out">
              <span className="bg-blue-500 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </span>
              <span className="text-lg">Innovation in disaster management</span>
            </li>
            <li className="flex items-center animate-pop-out delay-100">
              <span className="bg-green-500 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </span>
              <span className="text-lg">Community empowerment</span>
            </li>
            <li className="flex items-center animate-pop-out delay-200">
              <span className="bg-yellow-500 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </span>
              <span className="text-lg">Accessibility and inclusivity</span>
            </li>
            <li className="flex items-center animate-pop-out delay-300">
              <span className="bg-red-500 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              </span>
              <span className="text-lg">Collaboration with local and global partners</span>
            </li>
            <li className="flex items-center animate-pop-out delay-400">
              <span className="bg-purple-500 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </span>
              <span className="text-lg">Continuous improvement and learning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}