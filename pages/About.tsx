import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../constants';

export const About: React.FC = () => {
  const galleryImages = [
    { id: 1, src: 'https://i.ibb.co/Hpppd5C2/Slem-Multi-Service-Nig-Ltd-2-1.jpg', alt: 'Granite Supply' },
    { id: 2, src: 'https://i.ibb.co/35GSsxpS/Slem-3-1.jpg', alt: 'Base Materials' },
    { id: 3, src: 'https://i.ibb.co/84PfhbVH/Slem-Multi-Service-Nig-Ltd-3-1.jpg', alt: 'Hardcore & Filling' },
    { id: 4, src: 'https://i.ibb.co/Kc6fd6h4/Slem-Multi-Service-Nig-Ltd-4-1.jpg', alt: 'Asphalt Supply' },
    { id: 5, src: 'https://i.ibb.co/jvw32Q9M/Slem-Multi-Service-Nig-Ltd-6-1.jpg', alt: 'Truck Hiring Services' },
    { id: 6, src: 'https://i.ibb.co/1tv0kTbX/Slem-1.jpg', alt: 'SLEM Operations' },
  ];

  return (
    <>
      <SEOHead 
        title="About Us" 
        description="Learn more about SLEM MULTI SERVICE NIG. LTD., our mission, and our commitment to quality construction logistics." 
      />
      
      <div className="bg-surface min-h-screen">
        {/* Hero Section */}
        <div className="bg-white shadow-md overflow-hidden">
          <div className="h-64 sm:h-80 bg-primary relative">
            <img 
              src="https://i.ibb.co/ZzJsZvXn/Slem-Multi-Service-Nig-Ltd-1.jpg" 
              alt="SLEM Multi Service"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <h1 className="text-4xl font-heading font-bold text-white">About Us</h1>
            </div>
          </div>
        </div>

        {/* 2 Column Section - Text Left, Image Right */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Who We Are</h2>
                  <p className="mt-2 text-3xl font-heading font-bold text-primary">
                    Building Nigeria's Infrastructure
                  </p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {COMPANY_INFO.name} is a premier construction logistics and supply company registered under the Corporate Affairs Commission (RC: {COMPANY_INFO.rcNumber}). 
                  Based in Osun State, we have established ourselves as a reliable partner for construction projects of all sizes, delivering high-quality materials and efficient haulage solutions.
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To build the foundation of Nigeria's infrastructure by providing the highest quality granite, stone base, and asphalt materials with unmatched delivery speed and reliability. We aim to support engineers, contractors, and individuals in realizing their structural dreams.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-primary font-bold">✓</div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Quality Assured</h3>
                      <p className="mt-1 text-gray-600">All materials sourced from certified quarries with strict quality control.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-primary font-bold">✓</div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Timely Delivery</h3>
                      <p className="mt-1 text-gray-600">Our fleet ensures materials reach your site on schedule, every time.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-primary font-bold">✓</div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Professional Support</h3>
                      <p className="mt-1 text-gray-600">Expert guidance on material selection and project requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/1fzNmpLw/Slem-Multi-Service-Nig-Ltd-7-1.jpg"
                  alt="SLEM Operations"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Our Work</h2>
              <p className="mt-2 text-3xl md:text-4xl font-heading font-bold text-primary">
                Gallery
              </p>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our ongoing projects, fleet, and operations across Nigeria
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-primary mb-4">Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We deliver what we promise, when we promise. Our reputation is built on consistent, dependable service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-primary mb-4">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Only the finest materials make it to our customers. Quality is never compromised for cost.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-primary mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparent pricing, honest communication, and ethical practices guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};