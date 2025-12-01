import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle, ArrowRight, Mail, Phone, Clock } from 'lucide-react';

export const ThankYou: React.FC = () => {
  const location = useLocation();
  const customerName = location.state?.customerName || 'Valued Customer';

  return (
    <>
      <SEOHead 
        title="Booking Confirmed" 
        description="Thank you for booking with SLEM MULTI SERVICE. We'll contact you shortly." 
      />
      
      <div className="bg-gradient-to-b from-green-50 to-surface min-h-screen flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-6">
                <CheckCircle size={80} className="text-white" />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-5xl font-heading font-bold text-primary mb-4">
            Booking Confirmed!
          </h1>

          <p className="text-2xl text-gray-700 mb-2">
            Thank you, <span className="font-bold text-primary">{customerName}</span>!
          </p>

          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Your service booking has been received successfully. We've sent a confirmation email and will contact you shortly to confirm details and provide your quote.
          </p>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6">What Happens Next?</h2>

            <div className="space-y-6 text-left">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Check Your Email</h3>
                  <p className="text-gray-600 text-sm">Look for our confirmation email with your booking reference number.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">We'll Call You</h3>
                  <p className="text-gray-600 text-sm">Our team will contact you within 2-4 hours to confirm details and discuss your requirements.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Get Your Quote</h3>
                  <p className="text-gray-600 text-sm">Receive a detailed, transparent quote with pricing and delivery timeline.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600 font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Schedule Delivery</h3>
                  <p className="text-gray-600 text-sm">Once confirmed, we'll coordinate the delivery at your preferred date and time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <Clock size={24} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">Within 2-4 hours</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <Phone size={24} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">08072263264</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <Mail size={24} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600">slemmultiservice555@gmail.com</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Back to Home
              <ArrowRight className="ml-2" size={20} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
          </div>

          {/* Footer Note */}
          <p className="mt-12 text-gray-600 text-sm max-w-lg mx-auto">
            If you don't receive an email confirmation within the next few minutes, please check your spam folder or contact us directly.
          </p>
        </div>
      </div>
    </>
  );
};
