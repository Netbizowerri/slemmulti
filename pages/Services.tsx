import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle, Mountain, Layers, Zap, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
  image: string;
}

export const Services: React.FC = () => {

  const services: ServiceCard[] = [
    {
      id: 'granite',
      title: 'Granite Supply',
      description: 'Premium-grade granite in various sizes for all your construction needs. Each size is carefully selected for quality and consistency.',
      details: ['3/4 Inch Granite', '3/8 Inch Granite', '1/2 Inch Granite', 'Up & Down (Mixed)'],
      icon: <Mountain size={32} />,
      color: 'from-blue-500 to-blue-600',
      image: 'https://i.ibb.co/Hpppd5C2/Slem-Multi-Service-Nig-Ltd-2-1.jpg'
    },
    {
      id: 'base-materials',
      title: 'Base Materials',
      description: 'High-quality stone dust and stone base for creating sturdy, reliable foundations for your construction projects.',
      details: ['Fine Stone Dust', 'Compact Stone Base', 'Foundation Grade', 'Compaction Ready'],
      icon: <Layers size={32} />,
      color: 'from-amber-500 to-orange-600',
      image: 'https://i.ibb.co/35GSsxpS/Slem-3-1.jpg'
    },
    {
      id: 'hardcore',
      title: 'Hardcore & Filling',
      description: 'Durable hardcore stones for site preparation, filling, and heavy-duty foundation work with excellent load-bearing capacity.',
      details: ['Hardcore Stones', 'Site Preparation', 'Fill Material', 'Load Bearing'],
      icon: <Zap size={32} />,
      color: 'from-slate-600 to-slate-700',
      image: 'https://i.ibb.co/84PfhbVH/Slem-Multi-Service-Nig-Ltd-3-1.jpg'
    },
    {
      id: 'asphalt',
      title: 'Asphalt Supply',
      description: 'Quality asphalt materials for road construction, paving projects, and durable surface solutions built to last.',
      details: ['Hot Mix Asphalt', 'Road Grade', 'Premium Blend', 'Weather Resistant'],
      icon: <Mountain size={32} />,
      color: 'from-gray-700 to-gray-800',
      image: 'https://i.ibb.co/Kc6fd6h4/Slem-Multi-Service-Nig-Ltd-4-1.jpg'
    },
    {
      id: 'truck-hiring',
      title: 'Truck Hiring Services',
      description: 'Efficient logistics solutions with our fleet of heavy-duty dump trucks. We ensure timely delivery of materials to your site.',
      details: ['Heavy-Duty Dump Trucks', 'Flexible Schedules', 'Professional Drivers', 'GPS Tracking'],
      icon: <Truck size={32} />,
      color: 'from-red-500 to-red-600',
      image: 'https://i.ibb.co/jvw32Q9M/Slem-Multi-Service-Nig-Ltd-6-1.jpg'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Our Services" 
        description="Granite, Stone Dust, Asphalt, and professional truck hiring services for construction projects." 
      />
      
      <div className="bg-surface min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Core Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in the supply and delivery of high-grade quarry and construction materials, combined with reliable logistics solutions to get everything where it needs to be.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Color Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Content Container */}
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                        {service.title}
                      </h3>
                    </div>
                    <div className={`bg-gradient-to-br ${service.color} p-3 rounded-lg text-white flex-shrink-0`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Services Section */}
          <div className="bg-white rounded-xl p-12 shadow-md border border-gray-200">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent text-primary rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Quality</h3>
                <p className="text-gray-600">
                  All materials sourced from certified quarries and tested for compliance with industry standards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-primary rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">
                  Our professional logistics team ensures your materials arrive when you need them, every time.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-primary rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Best value for money without compromising on quality. Get quotes that fit your budget.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Booking CTA Section */}
          <div className="relative py-24 bg-gradient-to-r from-primary via-blue-800 to-primary overflow-hidden mt-12">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 md:p-16 border border-white border-opacity-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block px-4 py-2 bg-accent bg-opacity-20 text-accent font-semibold rounded-full text-sm mb-4">
                        Quick & Easy Booking
                      </span>
                      <h2 className="text-4xl font-heading font-bold text-primary mb-4">
                        Book Your Service Today
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Ready to get your materials? Our simple booking system connects you with our team in minutes. Get a quote and schedule your delivery.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-primary font-bold text-lg">
                            ✓
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Quick Response</h3>
                          <p className="text-gray-600">Get quotes within hours, not days</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-primary font-bold text-lg">
                            ✓
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Flexible Scheduling</h3>
                          <p className="text-gray-600">Book deliveries at times that work for you</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-primary font-bold text-lg">
                            ✓
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Transparent Pricing</h3>
                          <p className="text-gray-600">No hidden fees, clear cost breakdown</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/booking"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                      >
                        <span>Book Service Now</span>
                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={22} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Visual */}
                  <div className="relative">
                    <div className="relative">
                      {/* Card Stack Effect */}
                      <div className="absolute inset-0 bg-accent opacity-10 rounded-xl transform translate-x-4 translate-y-4"></div>
                      <div className="absolute inset-0 bg-accent opacity-20 rounded-xl transform translate-x-2 translate-y-2"></div>

                      {/* Main Card */}
                      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-primary border-opacity-20 shadow-xl">
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-900 rounded-lg flex items-center justify-center text-white shadow-lg">
                              <Truck size={32} />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Services Available</p>
                              <p className="text-2xl font-bold text-primary">All 5</p>
                            </div>
                          </div>

                          <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 font-medium">Granite Supply</span>
                              <span className="text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full font-semibold">Available</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 font-medium">Stone Dust & Base</span>
                              <span className="text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full font-semibold">Available</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 font-medium">Truck Hiring</span>
                              <span className="text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full font-semibold">Available</span>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-primary to-blue-900 h-1 rounded-full"></div>

                          <div className="text-center pt-4">
                            <p className="text-3xl font-heading font-bold text-primary mb-2">Get Started</p>
                            <p className="text-sm text-gray-600">Fill out the booking form in minutes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};