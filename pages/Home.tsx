import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Layers, HardHat, Mountain, Zap } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ImageSlider } from '../components/ImageSlider';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Home" 
        description="SLEM MULTI SERVICE NIG. LTD. - Top quality granite supply, stone base, and haulage services in Osogbo, Nigeria." 
      />
      
      {/* Hero Section */}
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <ImageSlider 
            images={[
              'https://i.ibb.co/1tv0kTbX/Slem-1.jpg',
              'https://i.ibb.co/35GSsxpS/Slem-3-1.jpg',
              'https://i.ibb.co/Hpppd5C2/Slem-Multi-Service-Nig-Ltd-2-1.jpg',
            ]}
            interval={5000}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[600px]">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white mb-6">
            Building the Foundation of <br />
            <span className="text-accent">Tomorrow's Structures</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mb-8">
            Premium granite supply, reliable haulage, and expert construction logistics. We deliver quality materials straight to your site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-yellow-400 md:text-lg transition shadow-lg">
              Request Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary md:text-lg transition">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Preview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-base text-accent font-semibold tracking-wide uppercase">About SLEM</h2>
                <p className="mt-2 text-3xl md:text-4xl font-heading font-bold tracking-tight text-primary">
                  Building Nigeria's Infrastructure
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                SLEM MULTI SERVICE NIG. LTD. is a premier construction logistics and supply company based in Osun State. With years of expertise, we deliver high-quality granite, stone dust, and haulage services to contractors, engineers, and construction enthusiasts across Nigeria.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-primary font-bold">✓</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Premium Materials</h3>
                    <p className="mt-1 text-gray-600">Sourced directly from certified quarries for quality assurance.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-primary font-bold">✓</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Reliable Logistics</h3>
                    <p className="mt-1 text-gray-600">Our fleet ensures timely delivery to any location in Osogbo and beyond.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-primary font-bold">✓</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Expert Support</h3>
                    <p className="mt-1 text-gray-600">Professional guidance on material selection and project requirements.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-900 transition shadow-md"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://i.ibb.co/ZzJsZvXn/Slem-Multi-Service-Nig-Ltd-1.jpg"
                alt="Construction materials"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quality & Reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-surface rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                We source only the best granite (3/4, 1/2, etc.) ensuring your building stands the test of time.
              </p>
            </div>
            
            <div className="p-6 bg-surface rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Haulage</h3>
              <p className="text-gray-600">
                Our fleet of trucks ensures timely delivery to any location in Osogbo and surrounding states.
              </p>
            </div>

            <div className="p-6 bg-surface rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <HardHat size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Service</h3>
              <p className="text-gray-600">
                With years of experience, we provide professional advice on material selection and quantity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Our Offerings</h2>
            <p className="mt-2 text-3xl md:text-4xl font-heading font-bold tracking-tight text-primary mb-4">
              Core Services
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction materials and logistics solutions tailored to your project needs.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Granite Service Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="relative h-56 overflow-hidden bg-blue-300">
                <img
                  src="https://i.ibb.co/Hpppd5C2/Slem-Multi-Service-Nig-Ltd-2-1.jpg"
                  alt="Granite Supply"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    Granite Supply
                  </h3>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white flex-shrink-0">
                    <Mountain size={28} />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Premium-grade granite in various sizes for all your construction needs.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    3/4 Inch Granite
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    3/8 Inch Granite
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    1/2 Inch & Mixed
                  </li>
                </ul>
              </div>
            </div>

            {/* Base Materials Service Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="relative h-56 overflow-hidden bg-amber-300">
                <img
                  src="https://i.ibb.co/35GSsxpS/Slem-3-1.jpg"
                  alt="Base Materials"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500 to-orange-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    Base Materials
                  </h3>
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-lg text-white flex-shrink-0">
                    <Layers size={28} />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  High-quality stone dust and base for sturdy foundations.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    Fine Stone Dust
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    Compact Stone Base
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    Foundation Grade
                  </li>
                </ul>
              </div>
            </div>

            {/* Hardcore Service Card */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="relative h-56 overflow-hidden bg-slate-300">
                <img
                  src="https://i.ibb.co/84PfhbVH/Slem-Multi-Service-Nig-Ltd-3-1.jpg"
                  alt="Hardcore"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-600 to-slate-700 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    Hardcore & Filling
                  </h3>
                  <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-3 rounded-lg text-white flex-shrink-0">
                    <Zap size={28} />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Durable stones for site preparation and heavy-duty work.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    Hardcore Stones
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    Site Preparation
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <span className="text-accent mr-3 font-bold">•</span>
                    Load Bearing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-900 transition shadow-lg transform hover:scale-105 duration-300"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Service Booking CTA Section */}
      <div className="relative py-24 bg-gradient-to-r from-primary via-blue-800 to-primary overflow-hidden">
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
                    Need granite delivery, haulage, or construction materials? Our simple booking system connects you with our team in minutes. Get a quote and schedule your delivery.
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
                          <p className="text-sm text-gray-600">Truck Hiring</p>
                          <p className="text-2xl font-bold text-primary">In Stock</p>
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
                          <span className="text-gray-700 font-medium">Asphalt Supply</span>
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

    </>
  );
};