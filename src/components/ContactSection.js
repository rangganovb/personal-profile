import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { Icon: Mail, detail: "ranggamum@gmail.com", label: "Email" },
  { Icon: Phone, detail: "+62 877 4465 0477", label: "Phone" },
  { Icon: MapPin, detail: "Jakarta, Indonesia", label: "Location" },
];

function ContactInfoCard({ Icon, detail, label }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-full bg-[#E2EDFF] text-[#2C58E0] flex-shrink-0">
        <Icon size={24} />
      </div>
      <div className="w-full min-w-0">
        <p className="text-sm font-medium text-[#6B7C9F]">{label}</p>
        <p className="text-lg font-semibold text-[#0B2E6F] break-words">
          {detail}
        </p>
      </div>
    </div>
  );
}

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan terkirim!");
  };

  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-16 bg-gradient-to-b from-[#E7F3FF] to-[#F5FAFF]"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-[#0B2E6F] mb-4">
            Let's Talk!
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Have a project idea or just want to say hi? Send me a message!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-[#DCE6F5]">
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="p-4 border border-[#C7D5F0] rounded-lg focus:ring-2 focus:ring-[#3A6FF8] focus:border-[#3A6FF8] transition-all text-[#0B2E6F]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="p-4 border border-[#C7D5F0] rounded-lg focus:ring-2 focus:ring-[#3A6FF8] focus:border-[#3A6FF8] transition-all text-[#0B2E6F]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-4 border border-[#C7D5F0] rounded-lg focus:ring-2 focus:ring-[#3A6FF8] focus:border-[#3A6FF8] transition-all text-[#0B2E6F]"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-4 border border-[#C7D5F0] rounded-lg focus:ring-2 focus:ring-[#3A6FF8] focus:border-[#3A6FF8] transition-all text-[#0B2E6F]"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-[#2C58E0] to-[#3A6FF8] hover:opacity-90 transition-opacity"
                style={{
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col space-y-8 lg:mt-6">
            <h3 className="text-2xl font-bold text-[#0B2E6F] mb-4">
              Contact Details
            </h3>
            <div className="flex flex-col space-y-8">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} {...info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
