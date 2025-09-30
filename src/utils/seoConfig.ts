// SEO Configuration for PrimeDesk Solutions BPO
export const seoConfig = {
  defaultTitle: "PrimeDesk Solutions BPO - Virtual Assistant, Call & Chat Support Services",
  defaultDescription: "Expert virtual assistance, call, and chat support services. Get a 7-day free trial with our dedicated professionals. Focus on your vision while we handle the rest.",
  defaultKeywords: "virtual assistant, call support, chat support, BPO services, administrative support, customer service, outsourcing, business process outsourcing",
  siteUrl: "https://primedesk.netlify.app",
  defaultImage: "https://primedesk.netlify.app/og-image.jpg",
  twitterHandle: "@primedesksolutions",
  
  // Page-specific SEO configurations
  pages: {
    home: {
      title: "PrimeDesk Solutions BPO - Virtual Assistant, Call & Chat Support Services",
      description: "Expert virtual assistance, call, and chat support services. Get a 7-day free trial with our dedicated professionals. Focus on your vision while we handle the rest.",
      keywords: "virtual assistant, call support, chat support, BPO services, administrative support, customer service, outsourcing, business process outsourcing, 7-day free trial",
      path: "/"
    },
    services: {
      title: "Our Services - Virtual Assistant, Call & Chat Support | PrimeDesk Solutions BPO",
      description: "Comprehensive BPO services including virtual assistance, call support, 24/7 chat support, and administrative services. Tailored solutions for every business need.",
      keywords: "virtual assistant services, call support services, chat support, administrative support, BPO services, customer service outsourcing, data entry services",
      path: "/services"
    },
    about: {
      title: "About Us - PrimeDesk Solutions BPO | Virtual Assistant Company",
      description: "Learn about PrimeDesk Solutions BPO - your growth partner in virtual assistance, call support, and administrative services. Discover our mission, values, and commitment to your success.",
      keywords: "about primedesk solutions, BPO company, virtual assistant company, business process outsourcing, company mission, core values",
      path: "/about"
    },
    whyUs: {
      title: "Why Choose Us - Risk-Free 7-Day Trial | PrimeDesk Solutions BPO",
      description: "Discover why PrimeDesk Solutions BPO is the safest way to scale your support team. Get pre-vetted professionals with our unique 7-day risk-free trial process.",
      keywords: "why choose primedesk solutions, 7-day free trial, risk-free BPO, pre-vetted virtual assistants, transparent process, quality assurance",
      path: "/why-us"
    },
    contact: {
      title: "Contact Us - Get Your Free 7-Day Trial | PrimeDesk Solutions BPO",
      description: "Contact PrimeDesk Solutions BPO for virtual assistant, call support, and administrative services. Schedule your free discovery call and start your 7-day trial today.",
      keywords: "contact primedesk solutions, free trial, virtual assistant consultation, BPO contact, schedule discovery call, customer support contact",
      path: "/contact"
    }
  },
  
  // Organization structured data
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PrimeDesk Solutions BPO",
    "alternateName": "PrimeDesk Solutions",
    "url": "https://primedesk.netlify.app/",
    "logo": "https://primedesk.netlify.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/primedesk-solutions",
      "https://twitter.com/primedesksolutions"
    ],
    "description": "Expert virtual assistance, call, and chat support services. We provide dedicated professionals to handle your administrative tasks, customer service, and business operations.",
    "service": [
      {
        "@type": "Service",
        "name": "Virtual Assistant Services",
        "description": "Dedicated professionals handling your administrative tasks, emails, and scheduling."
      },
      {
        "@type": "Service",
        "name": "Call Support Services",
        "description": "Friendly, trained agents to handle incoming and outgoing calls for your business."
      },
      {
        "@type": "Service",
        "name": "Chat Support Services",
        "description": "24/7 live chat agents to engage with customers and provide instant assistance."
      },
      {
        "@type": "Service",
        "name": "Administrative Support",
        "description": "Comprehensive back-office support including data entry and research."
      }
    ],
    "offers": {
      "@type": "Offer",
      "name": "7-Day Free Trial",
      "description": "Risk-free 7-day trial to find your perfect agent match",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
};

// Helper function to get page-specific SEO data
export const getPageSEO = (pageName: keyof typeof seoConfig.pages) => {
  const pageConfig = seoConfig.pages[pageName];
  return {
    ...pageConfig,
    url: `${seoConfig.siteUrl}${pageConfig.path}`,
    image: seoConfig.defaultImage
  };
};