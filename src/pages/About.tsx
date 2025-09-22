import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
export const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're More Than a Service. We're Your Growth Partner.
            </h1>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Prime Desk Solutions Team" className="w-full h-80 object-cover rounded-lg mt-8" />
          </div>
        </div>
      </section>
      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-[#6c757d]">
                At Prime Desk Solutions, our mission is to empower businesses to
                focus on growth and innovation by providing exceptional
                administrative and customer support services. We believe that
                every business deserves access to professional support without
                the overhead of traditional hiring.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Philosophy
              </h2>
              <p className="text-[#6c757d]">
                We believe in building genuine partnerships with our clients.
                Our philosophy centers on three core principles: trust, quality,
                and growth. We succeed when you succeed, which is why we're
                committed to understanding your business as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: '🎯',
            title: 'Quality',
            description: 'We are committed to excellence in everything we do, from our hiring practices to our daily work.'
          }, {
            icon: '🤝',
            title: 'Partnership',
            description: 'We view ourselves as an extension of your team, fully invested in your success.'
          }, {
            icon: '⚡',
            title: 'Proactivity',
            description: "We don't just respond to needs—we anticipate them, always staying one step ahead."
          }].map((value, index) => <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-[#6c757d]">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Join Our Team */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Want to Join Our Mission?
          </h2>
          <Button href="#" variant="primary">
            View Open Positions
          </Button>
        </div>
      </section>
      <Footer />
    </div>;
};