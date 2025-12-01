import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle, Truck, MapPin, Calendar, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xbjvrqop");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    quantity: '',
    deliveryDate: '',
    address: '',
    message: '',
  });

  const services = [
    'Granite Supply (3/4 Inch)',
    'Granite Supply (3/8 Inch)',
    'Granite Supply (1/2 Inch)',
    'Stone Dust & Base',
    'Hardcore & Filling',
    'Asphalt Supply',
    'Truck Hiring',
    'Multiple Services',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  React.useEffect(() => {
    if (state.succeeded) {
      navigate('/thank-you', { state: { customerName: formData.fullName } });
    }
  }, [state.succeeded, formData.fullName, navigate]);

  return (
    <>
      <SEOHead 
        title="Book Service" 
        description="Book your granite, stone dust, asphalt delivery or truck hiring service with SLEM MULTI SERVICE." 
      />
      
      <div className="bg-surface min-h-screen py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Book Your Service
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Fill out the form below to get a quote or book your delivery. Our team will respond within hours.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Info Cards */}
            <div className="space-y-6">
              {/* Why Book With Us */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-4">Why Book With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">Quick response within hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">Transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">Premium quality materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">Reliable on-time delivery</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary to-blue-900 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone size={20} className="mr-3 flex-shrink-0 text-accent" />
                    <div>
                      <p className="text-sm text-gray-200">Phone</p>
                      <p className="font-semibold">08072263264</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={20} className="mr-3 flex-shrink-0 text-accent" />
                    <div>
                      <p className="text-sm text-gray-200">Email</p>
                      <p className="font-semibold">slemmultiservice555@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-3 flex-shrink-0 text-accent" />
                    <div>
                      <p className="text-sm text-gray-200">Location</p>
                      <p className="font-semibold text-sm">Km 7, New Ikirun Road, Osogbo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Truck size={24} className="mr-2 text-accent" />
                  Our Services
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Granite Supply
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Stone Dust & Base
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Hardcore & Filling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Asphalt Supply
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Truck Hiring
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-accent">
                <h2 className="text-3xl font-heading font-bold text-primary mb-2">Get Your Quote</h2>
                <p className="text-gray-600 mb-8">Complete the form below and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Your full name"
                    />
                    <ValidationError prefix="Name" field="fullName" errors={state.errors} />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="your@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="+234 (0) 807-226-3264"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      Select Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    >
                      <option value="">-- Choose a service --</option>
                      {services.map(svc => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                    <ValidationError prefix="Service" field="service" errors={state.errors} />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-gray-900 mb-2">
                      Quantity/Volume
                    </label>
                    <input
                      id="quantity"
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="e.g., 5 trucks, 100 bags, etc."
                    />
                  </div>

                  {/* Delivery Date */}
                  <div>
                    <label htmlFor="deliveryDate" className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred Delivery Date
                    </label>
                    <input
                      id="deliveryDate"
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                      Delivery Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Full delivery address"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                      placeholder="Any special requests or requirements..."
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-blue-900 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {state.submitting ? 'Submitting...' : 'Get Your Quote'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll contact you shortly to confirm your booking and provide a detailed quote.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
