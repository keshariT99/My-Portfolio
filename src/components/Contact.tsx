//import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="bg-[#0f0f0f] p-6 rounded-lg">
            <Mail className="w-8 h-8 text-[#00E7FF] mb-4" />
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <p className="text-gray-400">keshariit@gmail.com</p>
          </div>
          
          <div className="bg-[#0f0f0f] p-6 rounded-lg">
            <Phone className="w-8 h-8 text-[#00E7FF] mb-4" />
            <h3 className="text-lg font-medium mb-2">Phone Number</h3>
            <p className="text-gray-400">+94 77 2084 626</p>
          </div>
          
          <div className="bg-[#0f0f0f] p-6 rounded-lg">
            <MapPin className="w-8 h-8 text-[#00E7FF] mb-4" />
            <h3 className="text-lg font-medium mb-2">Address</h3>
            <p className="text-gray-400">Rajagiriya, Sri Lanka</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#00E7FF]">Let's Collaborate!</h2>
          <p className="text-gray-400 mb-8">
            Always open to new opportunities and collaborations, I invite you to connect 
            with me for any inquiries or project discussions.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First name"
                className="bg-[#0f0f0f] text-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="bg-[#0f0f0f] text-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#0f0f0f] text-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="bg-[#0f0f0f] text-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-[#0f0f0f] text-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#00E7FF] text-black py-3 rounded-lg font-medium hover:bg-[#4ADEDC] transition-colors"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;