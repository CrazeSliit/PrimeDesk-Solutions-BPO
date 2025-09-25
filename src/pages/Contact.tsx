import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Mail, Phone, ChevronDown } from 'lucide-react';
export const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };
  const faqs = [{
    question: 'What happens after I book a call?',
    answer: "After booking, you'll receive a confirmation email with all the details. During the call, our consultant will discuss your specific needs, answer any questions, and explain how our services can help your business."
  }, {
    question: 'Is the 7-day trial really free?',
    answer: "Yes, the 7-day trial is completely free with no obligation. It's designed to ensure you're 100% satisfied with your selected agent before making any commitment."
  }, {
    question: 'How quickly can you start working with us?',
    answer: 'After a successful trial and onboarding, we can typically have your agent fully operational within 3-5 business days, depending on the complexity of your requirements.'
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-16">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Booking */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Schedule Your Free Discovery Call
              </h2>
              <p className="text-[#6c757d] mb-8">
                Choose a time that works for you. In this 15-minute call, we'll
                discuss your needs and see how we can help no pressure, no
                obligation.
              </p>
              {/* Calendar Widget Placeholder */}
              <div className="border border-gray-300 rounded-lg p-6 bg-white">
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold mb-4">
                    Select a Date & Time
                  </h3>
                  <p className="text-[#6c757d] mb-6">
                    Our booking calendar would be embedded here. For this demo,
                    please use the button below.
                  </p>
                  <Button variant="primary">View Available Time Slots</Button>
                </div>
              </div>
            </div>
            {/* Right Column: Contact Info & Form */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              {/* Contact Form */}
              <form className="mb-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]" placeholder="Your name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]" placeholder="Your email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    How can we help?
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]" placeholder="Tell us about your needs"></textarea>
                </div>
                <Button variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
              {/* Other Contact Methods */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail size={20} className="text-[#FF6600] mr-3" />
                  <span>Contactus@primedesksolutions.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="text-[#FF6600] mr-3" />
                  <span>+234 912 789 5971</span>
                </div>
              </div>
              {/* Mini FAQ */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-xl mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => <div key={index} className="border-b pb-3">
                      <button className="flex justify-between items-center w-full text-left font-medium" onClick={() => toggleFaq(index)}>
                        {faq.question}
                        <ChevronDown size={20} className={`transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`} />
                      </button>
                      {openFaq === index && <p className="text-[#6c757d] mt-2 pl-2">{faq.answer}</p>}
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};