import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-screen bg-slate-950 border-t border-slate-800/50 -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 mt-20" id="footer">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                Hasnain <span className="text-indigo-400">Webworks</span>
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-md">
                Crafting exceptional digital experiences with custom-coded websites that load fast, look professional, and convert visitors into customers.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm font-light tracking-wider uppercase">
                Follow
              </span>
              <div className="flex items-center gap-3">
                {socialMedia.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-10 h-10 items-center justify-center bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-indigo-400/10 hover:border-indigo-400/50 transition-all duration-300"
                  >
                    <Image 
                      src={item.img} 
                      alt={`Follow us on ${item.img}`} 
                      width={18} 
                      height={18}
                      className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-light text-white mb-8 tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-4">
              {[
                { href: "#services", label: "Services" },
                { href: "#pricing", label: "Pricing" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-indigo-400 transition-colors duration-300 font-light text-sm md:text-base tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-light text-white mb-8 tracking-wide">
              Get In Touch
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm font-light mb-2 tracking-wider uppercase">
                  Ready to start?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 font-light text-sm md:text-base tracking-wide"
                >
                  Schedule a consultation
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
              
              <div className="pt-4 border-t border-slate-800/50">
                <p className="text-gray-500 text-xs font-light leading-relaxed">
                  Custom websites that work as hard as you do. No templates, no compromises.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Hasnain Webworks. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 font-light">
              <a href="#privacy" className="hover:text-gray-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-gray-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
    </footer>
  );
};

export default Footer;