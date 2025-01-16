import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white-400 via-navy-500 to-red-500 animate-gradient text-white py-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Image src="/Saviour.png" alt="SAVIOUR Logo" width={180} height={40} className="mb-2" />
            <p className="text-xs font-semibold text-cyan-800">Empowering communities through disaster preparedness and response.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyan-800 hover:text-yellow-300 transition-colors">
                <Facebook size={16} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-cyan-800 hover:text-yellow-300 transition-colors">
                <Twitter size={16} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-cyan-800 hover:text-yellow-300 transition-colors">
                <Instagram size={16} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-2 text-yellow-300">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/donate" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-2 text-yellow-300">Contact Us</h4>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Mail size={14} className="mr-2 text-yellow-300" />
                <a href="mailto:info@saviour.org" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">info@saviour.org</a>
              </li>
              <li className="flex items-center">
                <Phone size={14} className="mr-2 text-yellow-300" />
                <a href="tel:+918306721779" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">+91 8306721779</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/100 flex justify-between items-center">
          <p className="text-xs font-semibold text-cyan-800">&copy; 2024 SAVIOUR. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link href="/privacy" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs font-semibold text-cyan-800 hover:text-white transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

