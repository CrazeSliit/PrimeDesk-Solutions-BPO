import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';
export const Services = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tailored Support for Every Business Need
            </h1>
            <p className="text-xl text-[#6c757d]">
              From day-to-day administrative tasks to 24/7 customer support, our
              services are designed to integrate seamlessly into your workflow.
            </p>
          </div>
        </div>
      </section>
      {/* Virtual Assistance Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Professional virtual assistant with headset managing tasks" className="rounded-lg shadow-md w-full h-80 object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Virtual Assistance</h2>
              <p className="text-[#6c757d] mb-6">
                Our virtual assistants handle the administrative load so you can
                focus on strategic growth. Perfect for entrepreneurs, small
                business owners, and executives who need to reclaim their time.
              </p>
              <ul className="space-y-3 mb-6">
                {['Inbox Management', 'Calendar Scheduling', 'Travel Arrangements', 'Data Entry & Research', 'Document Preparation'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-[#FF6600] mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
              <Button href="/contact" variant="primary">
                Get Virtual Assistance
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Call Support Service */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://plus.unsplash.com/premium_photo-1661629388008-452d528d9932?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Call center agents providing customer support with headsets" className="rounded-lg shadow-md w-full h-80 object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Call Support</h2>
              <p className="text-[#6c757d] mb-6">
                Never miss an opportunity with our professional call support
                services. Our agents are trained to represent your brand with
                the highest level of professionalism and care.
              </p>
              <ul className="space-y-3 mb-6">
                {['Inbound And Outbound Customer Service', 'Appointment Scheduling', 'Order Processing', 'Product Information', 'After-Hours Support'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-[#FF6600] mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
              <Button href="/contact" variant="primary">
                Get Call Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Chat Support Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1709715357479-591f9971fb05?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer service representative providing live chat support" className="rounded-lg shadow-md w-full h-80 object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Chat and Email  Support</h2>
              <p className="text-[#6c757d] mb-6">
                Provide instant assistance to your website visitors with our
                24/7 live chat and Email support. Convert more visitors into customers and
                improve satisfaction with prompt, helpful responses.
              </p>
              <ul className="space-y-3 mb-6">
                {['24/7 Live Chat Coverage', 'Quick Response Times', 'Lead Qualification', 'Customer Issue Resolution', 'Multi-language Support'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-[#FF6600] mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
              <Button href="/contact" variant="primary">
                Get Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Administrative Support Service */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1675270548942-b03f0672e708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Administrative professional managing data and office tasks" className="rounded-lg shadow-md w-full h-80 object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Administrative Support
              </h2>
              <p className="text-[#6c757d] mb-6">
                From data entry to complex research projects, our administrative
                support services handle the behind-the-scenes work that keeps
                your business running smoothly.
              </p>
              <ul className="space-y-3 mb-6">
                {['Data Entry & Management', 'Research & Analysis', 'Report Generation', 'Process Documentation', 'Project Coordination'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-[#FF6600] mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
              <Button href="/contact" variant="primary">
                Get Administrative Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Not Sure Section */}
      <section className="bg-[#FF6600] py-16">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Find the Perfect Solution for You
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Not sure which service is right for your business? Our team can help
            you identify the perfect solution based on your unique needs and
            goals.
          </p>
            <Button href="/contact" variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Book a Free Consultation
            </Button>
        </div>
      </section>
      <Footer />
    </div>;
};