import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#1A1A1A] text-white pt-12 pb-6">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Prime<span className="text-[#FF6600]">Desk</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Focus on your vision. We'll handle the rest.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://www.linkedin.com/company/prime-desk-solutions/" className="text-gray-300 hover:text-[#FF6600]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6600]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6600]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FF6600]">
                  Virtual Assistance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FF6600]">
                  Call Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FF6600]">
                  Chat Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FF6600]">
                  Administrative Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FF6600]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-gray-300 hover:text-[#FF6600]">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FF6600]">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF6600]">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#FF6600]" />
                <a href="mailto:contactus@primedesksolutionsbpo.com" className="text-gray-300 hover:text-[#FF6600] transition-colors">
                  contactus@primedesksolutionsbpo.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-[#FF6600]" />
                <span className="text-gray-300">+234 912 789 5971</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-[#FF6600]" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Prime Desk Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};