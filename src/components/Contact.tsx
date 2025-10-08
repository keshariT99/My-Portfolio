import { Mail, Phone, MapPin, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "6299692c-a936-4ec1-92e9-5964173f331c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        setShowSuccessModal(true);
        form.reset();
      } else {
        console.error("Error:", data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
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
              <p className="text-gray-400">Matara, Sri Lanka</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#00E7FF]">Let's Collaborate!</h2>
            <p className="text-gray-400 mb-8">
              Always open to new opportunities and collaborations, I invite you to connect
              with me for any inquiries or project discussions.
            </p>

            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                  className="bg-[#0f0f0f] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                  className="bg-[#0f0f0f] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="bg-[#0f0f0f] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="bg-[#0f0f0f] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full bg-[#0f0f0f] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4ADEDC]"
              ></textarea>
              <button
                type="submit"
                disabled={result === "Sending..."}
                className="w-full bg-[#00E7FF] text-black py-3 rounded-lg font-medium hover:bg-[#4ADEDC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {result === "Sending..." ? "Sending..." : "Send Now"}
              </button>
              {result && result !== "Sending..." && (
                <p className="text-red-400 text-center">{result}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
          <div className="bg-[#0f0f0f] rounded-lg p-8 max-w-md w-full relative animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="bg-[#00E7FF] bg-opacity-20 rounded-full p-4 mb-4">
                <CheckCircle className="w-16 h-16 text-[#00E7FF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-400 mb-6">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={closeModal}
                className="bg-[#00E7FF] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#4ADEDC] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
