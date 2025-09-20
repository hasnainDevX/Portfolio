import React from "react";

interface Package {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  investment: string;
  timeline: string;
  paymentPlan: string;
  buttonText: string;
  colorScheme: "indigo" | "violet" | "rose";
}

const Pricing: React.FC = () => {
  const packages: Package[] = [
    {
      name: "The Foundation Website",
      subtitle: "(start-up)",
      tagline:
        "CUSTOM-CODED, LIGHTNING-FAST WEBSITE THAT\nLAUNCHES YOUR BUSINESS",
      description:
        "Your digital front door that actually works - a website that loads instantly, looks professional, and turns visitors into customers without the headaches of DIY builders.",
      features: [
        "Custom-coded responsive website (no templates or page builders)",
        "Lightning-fast loading speeds (under 2 seconds)",
        "Professional SEO setup for Google visibility",
        "Mobile-first design that works on all devices",
        "Contact forms and essential integrations",
        "Free hosting setup and domain guidance",
        "30 days of post-launch support",
        "5 revisions and updates",
        "Self-managed content system - no developer needed for updates",
      ],
      investment: "$200 - $300",
      timeline: "1 – 2 weeks",
      paymentPlan: "Full payment or 2 installments available",
      buttonText: "Book Your Foundation Website",
      colorScheme: "indigo",
    },
    {
      name: "The Signature Site",
      subtitle: "(growth)",
      tagline: "ELEVATED CUSTOM DEVELOPMENT WITH\nADVANCED FUNCTIONALITY",
      description:
        "Elevate your online presence with a website that commands attention and builds trust - the kind that makes potential customers think 'this business knows what they're doing'.",
      features: [
        "Multi-page custom-coded website with advanced features",
        "Optimized for speed and search engines (Core Web Vitals)",
        "Professional copywriting consultation session",
        "Advanced SEO implementation with schema markup",
        "Custom animations and interactive elements",
        "Analytics setup and conversion tracking",
        "Email marketing integration and lead capture forms",
        "60 days of post-launch support and updates",
        "Self-managed content system - no developer needed for updates",
      ],
      investment: "$500 - $800",
      timeline: "2 – 3 weeks",
      paymentPlan: "2 month payment plans available",
      buttonText: "Book The Signature Site",
      colorScheme: "violet",
    },
    {
      name: "The Complete Vision",
      subtitle: "(full)",
      tagline: "ENTERPRISE-LEVEL CUSTOM SOLUTION\nFULLY STRATEGIC & SCALABLE",
      description:
        "A from-scratch, comprehensive web solution built with cutting-edge code and written to reflect your future, not your starting point. The complete digital transformation that converts browsers into loyal customers.",
      features: [
        "Fully custom web application with advanced functionality",
        "Performance-optimized code (99+ PageSpeed scores)",
        "Comprehensive SEO strategy with content optimization",
        "Custom CMS or e-commerce integration",
        "Advanced analytics, tracking, and conversion optimization",
        "Multi-platform compatibility and PWA features",
        "Ongoing maintenance and security updates included",
        "Priority support and unlimited revisions for 90 days",
        "Custom admin panel for easy content and image updates",
      ],
      investment: "$1000+",
      timeline: "4 – 6 weeks",
      paymentPlan: "3 month payment plans available",
      buttonText: "Book The Complete Vision",
      colorScheme: "rose",
    },
  ];

  const getColorClasses = (scheme: "indigo" | "violet" | "rose") => {
    const colors = {
      indigo: {
        bg: "bg-indigo-100/5",
        border: "border-indigo-400/30",
        tagline: "text-indigo-400",
        accent: "text-indigo-400",
        button: "border-indigo-400/50 hover:bg-indigo-400/10 text-indigo-400",
      },
      violet: {
        bg: "bg-violet-100/5",
        border: "border-violet-700/30",
        tagline: "text-violet-700",
        accent: "text-violet-700",
        button: "border-violet-700/50 hover:bg-violet-700/10 text-violet-700",
      },
      rose: {
        bg: "bg-rose-100/5",
        border: "border-rose-400/30",
        tagline: "text-rose-400",
        accent: "text-rose-400",
        button: "border-rose-400/50 hover:bg-rose-400/10 text-rose-400",
      },
    };
    return colors[scheme];
  };

  return (
    <div
      id="pricing"
      className="min-h-screen bg-slate-950 py-24 px-6 c-space my-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-12 text-white">
            WHAT'S
            <span className="text-indigo-400"> INCLUDED</span>?
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200 tracking-wide">
            Introducing The Best Web Design For Ambitious Businesses Like Yours
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-loose font-light">
            There are three ways to work with me on. All are firmly established
            in driving extraordinary results – without overstretching your
            budget or confusing dream clients.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
          {packages.map((pkg, index: number) => {
            const colors = getColorClasses(pkg.colorScheme);

            return (
              <div
                key={index}
                className={`${colors.bg} backdrop-blur-sm rounded-none p-8 xl:p-12 border-l-2 ${colors.border}`}
              >
                <div className="mb-12">
                  <h3 className="text-2xl xl:text-3xl font-light text-white mb-6 tracking-wide">
                    {pkg.name}{" "}
                    <span className="text-sm text-gray-500">
                      {pkg.subtitle}
                    </span>
                  </h3>
                  <div
                    className={`text-xs font-medium ${colors.tagline} uppercase tracking-widest mb-8 leading-relaxed`}
                  >
                    {pkg.tagline.split("\n").map((line, i: number) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <p className="text-gray-300 leading-loose font-light text-sm xl:text-base">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-12">
                  <h4 className="text-lg font-medium text-white mb-8 tracking-wide">
                    Includes:
                  </h4>
                  <div className="space-y-3 xl:space-y-5">
                    {pkg.features.map((feature, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-start text-gray-300 font-light text-sm xl:text-base"
                      >
                        <span
                          className={`${colors.accent} mr-4 text-sm font-normal`}
                        >
                          +
                        </span>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12 pt-8 border-t border-gray-700/50">
                  <div className="mb-6">
                    <span className="text-xl xl:text-2xl font-light text-white">
                      Investment:{" "}
                    </span>
                    <span
                      className={`text-xl xl:text-2xl font-light ${colors.accent}`}
                    >
                      {pkg.investment}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-lg xl:text-xl font-light text-white">
                      Timeline:{" "}
                    </span>
                    <span className="text-lg xl:text-xl font-light text-gray-300">
                      {pkg.timeline}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 italic font-light">
                    {pkg.paymentPlan}
                  </div>
                </div>
                <a href="#contact">
                  <button
                    className={`w-full bg-transparent border ${colors.button} font-light py-4 px-6 xl:px-8 tracking-widest text-xs xl:text-sm transition-all duration-500 uppercase`}
                  >
                    {pkg.buttonText}
                  </button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Not Sure Which Suits You Section */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
              Not sure which suits you best?
            </h3>
            <p className="text-lg text-gray-400 mb-10 font-light leading-loose">
              Every business is unique. Let's have a quick chat about your
              goals, timeline, and budget. I'll recommend the perfect package to
              get you the results you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact">
                <button className="bg-transparent border border-indigo-400/50 hover:bg-indigo-400/10 text-indigo-400 font-light py-4 px-8 tracking-widest text-sm transition-all duration-500 uppercase">
                  Schedule Free Consultation
                </button>
              </a>
              <span className="text-gray-500 font-light">or</span>
              <a href="#contact">
                <button className="bg-indigo-400/10 border border-indigo-400/30 hover:bg-indigo-400/20 text-white font-light py-4 px-8 tracking-widest text-sm transition-all duration-500 uppercase">
                  Get Custom Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
