import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { CheckCircle, Users, Calendar } from 'lucide-react';
export const WhyUs = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Safest Way to Scale Your Support Team.
            </h1>
            <p className="text-xl text-[#6c757d]">
              Our unique trial advantage and transparent process ensure you get
              the perfect agent, fully integrated and ready to perform from day
              one.
            </p>
          </div>
        </div>
      </section>
      {/* Trial Advantage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Find Your Perfect Match. Risk-Free.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#FF6600] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">We Present Top Talent</h3>
              <p className="text-[#6c757d]">
                We handpick 2-3 pre-vetted professionals who match your specific
                requirements.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#FF6600] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                You Start a 7-Day Free Trial
              </h3>
              <p className="text-[#6c757d]">
                Work directly with your chosen agent for a full week to evaluate
                their skills, communication, and fit.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#FF6600] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                You Make the Final Decision
              </h3>
              <p className="text-[#6c757d]">
                Only after a successful trial do we move forward. 100%
                satisfaction, guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Integration Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            A Proven Path to Seamless Integration
          </h2>
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2"></div>
            {/* Timeline Steps */}
            <div className="space-y-12">
              {[{
              number: 1,
              title: 'Requirement Analysis',
              description: 'We begin with a detailed consultation to understand your specific needs, challenges, and expectations.'
            }, {
              number: 2,
              title: 'Candidate Selection',
              description: 'Our recruitment team identifies 2-3 candidates whose skills and experience align perfectly with your requirements.'
            }, {
              number: 3,
              title: 'Introduction & Selection',
              description: "You meet the candidates and select the one you'd like to work with during the trial period."
            }, {
              number: 4,
              title: '7-Day Free Trial',
              description: 'Work with your selected agent for a full week at no cost to ensure they meet your expectations.'
            }, {
              number: 5,
              title: 'Onboarding & Training',
              description: 'We provide comprehensive training on your specific processes, tools, and brand voice.'
            }, {
              number: 6,
              title: 'Ongoing Support & Optimization',
              description: 'Regular check-ins and performance reviews ensure continuous improvement and alignment with your goals.'
            }].map((step, index) => <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                    <div className={`${index % 2 === 1 ? 'md:pl-8 md:pr-0' : ''}`}>
                      {index % 2 === 0 ? <div className="bg-white p-6 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="bg-[#FF6600] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                              {step.number}
                            </div>
                            <h3 className="font-bold text-xl">{step.title}</h3>
                          </div>
                          <p className="text-[#6c757d]">{step.description}</p>
                        </div> : <div className="hidden md:block h-full"></div>}
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center relative">
                    <div className="bg-[#FF6600] rounded-full w-6 h-6 z-10"></div>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8">
                    <div className={`${index % 2 === 0 ? 'md:pl-8 md:pr-0' : ''}`}>
                      {index % 2 === 1 ? <div className="bg-white p-6 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="bg-[#FF6600] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                              {step.number}
                            </div>
                            <h3 className="font-bold text-xl">{step.title}</h3>
                          </div>
                          <p className="text-[#6c757d]">{step.description}</p>
                        </div> : <div className="hidden md:block h-full"></div>}
                    </div>
                  </div>
                  {/* Mobile Version (Only visible on small screens) */}
                  <div className="md:hidden mt-4">
                    {index % 2 === 1 && <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="bg-[#FF6600] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                            {step.number}
                          </div>
                          <h3 className="font-bold text-xl">{step.title}</h3>
                        </div>
                        <p className="text-[#6c757d]">{step.description}</p>
                      </div>}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Businesses Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            title: 'Flexible & Scalable',
            description: 'Easily scale your support up or down based on your business needs without the complexities of traditional hiring.'
          }, {
            title: 'Client-Focused Approach',
            description: 'Our unique trial period and matching process ensures you get the perfect agent for your specific requirements.'
          }, {
            title: 'Quality Assurance',
            description: 'Regular performance monitoring and feedback systems ensure consistently high-quality service delivery.'
          }, {
            title: 'Dedicated Support',
            description: 'Your dedicated account manager is always available to address concerns and optimize your experience.'
          }].map((benefit, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-[#FF6600] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-[#6c757d]">{benefit.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="bg-[#FF6600] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Start with a free 7-day trial and discover how our approach can
            transform your business operations.
          </p>
            <Button href="/contact" variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Start Your Free Trial
            </Button>
        </div>
      </section>
      <Footer />
    </div>;
};