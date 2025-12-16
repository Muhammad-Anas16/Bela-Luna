import React from "react";
import { MapPin, Phone, Clock, Pizza } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer
      id="contact"
      className="bg-[#1F251D] border-t border-[#2d372a] pt-20 pb-8"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Pizza className="text-[#6aff3d]" size={28} />
              <h2 className="text-white text-2xl font-semibold">Bella Luna</h2>
            </div>

            <p className="text-[#9aa59a] text-sm leading-relaxed max-w-xs">
              Authentic Italian cuisine crafted with passion and sustainable
              organic ingredients. Experience the taste of Italy in every bite.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2d372a] flex items-center justify-center text-white hover:text-[#6aff3d] hover:border-[#6aff3d] transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2d372a] flex items-center justify-center text-white hover:text-[#6aff3d] hover:border-[#6aff3d] transition"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-semibold">
              Contact &amp; Hours
            </h3>

            <div className="flex flex-col gap-4 text-[#9aa59a] text-sm">
              <div className="flex gap-3">
                <MapPin className="text-[#6aff3d]" size={18} />
                <div>
                  <p>123 Olive Garden Ave,</p>
                  <p>New York, NY 10012</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="text-[#6aff3d]" size={18} />
                <p>(212) 555-0199</p>
              </div>

              <div className="flex gap-3">
                <Clock className="text-[#6aff3d]" size={18} />
                <div>
                  <p>Mon - Sun: 11am - 11pm</p>
                  <p>Happy Hour: 4pm - 7pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-[2rem] overflow-hidden border border-[#2d372a]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0H8MNyVeh7QFyw3uhINetoUf49cAsAhVYAqlnqZq9mDLqFXEKjWTc8iCj_MHXzx79w7v_3FsrEBU6D9vG7KDZU_EOzHvMoqp2B1zpX_adnr7gv-EtpYG4melo9WMs-rApNtidEUZEfTfxFqghfmyzxiyMErNLrOxe3c_mNdS3GBv6Plwm2iip3We0Dpg0g6gftfFkczHd1cWfloGEGqEIB3HCvC0OeWRMkAmog411PqcFwkCEZs4DVBy0p48MCVWtr3Ao6tynn50-"
              alt="Map"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2d372a] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9aa59a]">
          <p>© 2023 Bella Luna Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;