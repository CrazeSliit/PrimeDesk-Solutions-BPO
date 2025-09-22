import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { CheckCircle, Calendar, Users, MessageSquare, Headphones } from 'lucide-react';
export const Home = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Focus on Your Vision. We'll Handle the Rest.
            </h1>
            <p className="text-lg text-[#FF6600] font-semibold mb-6 uppercase tracking-wide">
              "We Assist Your Growth"
            </p>
            <p className="text-xl text-[#6c757d] mb-8">
              Expert virtual assistance, call, and chat support that frees up
              your time and fuels your growth. Discover your perfect agent with
              our risk-free 7-day trial.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button href="/contact" variant="primary">
                Start Your 7-Day Free Trial
              </Button>
              <Button href="/services" variant="secondary">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Solutions Designed to Scale With You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard icon={<Users size={36} />} title="Virtual Assistance" description="Dedicated professionals handling your administrative tasks, emails, and scheduling." link="/services" />
            <ServiceCard icon={<Headphones size={36} />} title="Call Support" description="Friendly, trained agents to handle incoming and outgoing calls for your business." link="/services" />
            <ServiceCard icon={<MessageSquare size={36} />} title="Chat Support" description="24/7 live chat agents to engage with customers and provide instant assistance." link="/services" />
            <ServiceCard icon={<CheckCircle size={36} />} title="Administrative Support" description="Comprehensive back-office support including data entry and research." link="/services" />
          </div>
        </div>
      </section>
      {/* Key Differentiator Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Right Fit, Guaranteed.
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-md">
                    <Users size={40} className="text-[#FF6600]" />
                  </div>
                  <p className="font-bold">Choose Agent</p>
                </div>
                <div className="hidden md:block">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#FF6600" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-md">
                    <Calendar size={40} className="text-[#FF6600]" />
                  </div>
                  <p className="font-bold">7-Day Trial</p>
                </div>
                <div className="hidden md:block">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#FF6600" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  </div>
                  <p className="font-bold">Perfect Match</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Select Your Agent. Start a Free Trial.
              </h3>
              <p className="text-[#6c757d] mb-6">
                We eliminate the guesswork. We present 2-3 qualified agents for
                your role. You work with your chosen agent for a full 7 days,
                absolutely free, before you decide. It's the perfect match,
                risk-free.
              </p>
              <Button href="/why-us" variant="secondary">
                Learn About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            "We Assist Your Growth"
          </h2>
          <TestimonialSlider />
        </div>
      </section>
      {/* Final CTA */}
      <section className="bg-[#FF6600] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Reclaim Your Time?
          </h2>
            <Button href="/contact" variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Schedule Your Free Discovery Call
            </Button>
        </div>
      </section>
      <Footer />
    </div>;
};