<<<<<<< HEAD
import { socialMedia } from "@/data";
import Image from "next/image";
=======
import { socialMedia } from "@/data"
import Image from "next/image"
>>>>>>> 5bb81ed (removed vercel analytics)

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Custom Website Development",
    "Foundation Website",
    "Signature Site",
    "The Complete vision",
    "Wordpress Website Development", 
    "Shopify Webite Development",
  ];

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

<<<<<<< HEAD
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
=======
      {/* Main CTA Section */}
      <div className="flex flex-col items-center translate-y-11">
        <p className="text-gray-400 text-center mb-8 max-w-md">
          Let's collaborate and bring your ideas to life with cutting-edge web solutions.
        </p>
      </div>

      {/* Additional Content Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-white">Hasnain</h3>
          <p className="text-gray-400 text-sm text-center md:text-left mb-4">
            Full-stack developer passionate about creating modern, responsive web applications 
            that deliver exceptional user experiences.
          </p>
          {/* <div className="text-gray-400 text-sm">
            <p>📍 Based in Pakistan</p>
            <p>Available for freelance work</p>
            <p>Current Time: {new Date().toLocaleTimeString()}</p>
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 block"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service} className="text-gray-400 text-sm flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Badge */}
      <div className="mt-16 flex justify-center">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl px-6 py-4">
          <p className="text-sm text-gray-400 text-center mb-2">Built with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"].map((tech) => (
              <span key={tech} className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Original Footer Bottom */}
      <div className="flex mt-20 md:flex-row flex-col justify-between items-center ">
        <p className="md:text-base text-sm md:font-normal font-light">© {new Date().getFullYear()} hasnainwebworks. All rights reserved</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((item)=>(
                <div key={item.id} className="flex mt-2 md:mt-0 w-10 h-10 cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 dark:bg-opacity-75 bg-violet-600 dark:bg-black-200 rounded-e-lg border border-black-300 dark:hover:bg-black-100 hover:bg-violet-700">
                  <a target="_blank" href={item.href}>
                    <Image src={item.img} alt={item.img} width={20} height={20} />
>>>>>>> 5bb81ed (removed vercel analytics)
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
<<<<<<< HEAD
  );
};

export default Footer;
=======
  )
}

export default Footer
>>>>>>> 5bb81ed (removed vercel analytics)
