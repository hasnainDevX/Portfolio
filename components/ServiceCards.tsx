import React from "react";
import { cn } from "@/lib/utils";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
  title: string;
  timeline: string;
  investment: string;
  wif: string;
  description: string;
  features: string[];
  colorScheme: string;
}

interface MobileServicesProps {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const MobileServices = ({
  cards,
  className,
  imageClassName,
}: MobileServicesProps) => {

  const getColorClasses = (scheme: string) => {
    const colors: { [key: string]: { button: string } } = {
      indigo: {
        button: "border-indigo-400/50 hover:bg-indigo-400/10 text-indigo-400",
      },
      violet: {
        button: "border-violet-700/50 hover:bg-violet-700/10 text-violet-700",
      },
      rose: {
        button: "border-rose-400/50 hover:bg-rose-400/10 text-rose-400",
      },
    };
    return colors[scheme] || colors.indigo;
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-8 p-4">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="w-full bg-gray-900 rounded-lg sm:rounded-2xl overflow-hidden"
          >
            <div className="flex h-full flex-col lg:flex-row">
              {/* Left Side - Image (hidden on mobile, visible on lg+) */}
              <div className="hidden lg:block lg:w-2/5 h-full">
                <img
                  src={card.image}
                  alt={card.alt || card.title}
                  className={cn(
                    "h-full w-full max-h-[30rem] object-cover rounded-l-lg lg:rounded-l-2xl",
                    imageClassName
                  )}
                />
              </div>

              {/* Right Side - Content (full width on mobile, 3/5 on lg+) */}
              <div className="w-full lg:w-3/5 h-full bg-gray-900 rounded-lg lg:rounded-r-2xl p-8 sm:p-6 lg:p-10 flex flex-col justify-between">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight text-center md:text-left">
                      {card.title}
                    </h1>

                    <div className="learnmore text-center shrink-0">
                      <a href="#pricing">
                        <button
                          className={`w-full bg-transparent border ${
                            getColorClasses(card.colorScheme).button
                          } font-light py-2 sm:py-3 px-4 sm:px-6 tracking-widest text-xs sm:text-sm transition-all duration-500 uppercase rounded-lg`}
                        >
                          <span className="text-sm sm:text-lg">{"{"}</span>
                          LEARN MORE{" "}
                          <span className="text-sm sm:text-lg">{"}"}</span>
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Mobile Image - shown only on small screens */}
                  <div className="block lg:hidden w-full h-48 sm:h-64 rounded-lg overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.alt || card.title}
                      className={cn(
                        "h-full w-full object-cover",
                        imageClassName
                      )}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {card.description}
                  </p>

                  {/* Dynamic feature lines with colored borders */}
                  <div className="space-y-3 sm:space-y-4">
                    {card.features.map((feature, index) => {
                      const colors = [
                        "border-purple-500",
                        "border-pink-500",
                        "border-blue-500",
                        "border-green-500",
                      ];
                      return (
                        <div
                          key={index}
                          className={`border-l-4 ${
                            colors[index % colors.length]
                          } pl-3 sm:pl-4`}
                        >
                          <p className="text-white text-sm font-medium tracking-wide">
                            {feature}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom section */}
                <div className="mt-5 sm:mt-6 lg:mt-8">
                  <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
                    <h3 className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                      WHO IS THIS FOR?
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base italic leading-relaxed">
                      {card.wif}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage component
const MobileSkiper17 = () => {
  const defaultCards: CardData[] = [
    {
      id: 1,
      image: "/service1.png",
      title: "The Foundation Website",
      timeline: "1-2 weeks",
      investment: "$200-$300",
      wif: "Perfect for small businesses and individuals who want a simple yet professional online presence.",
      description:
        "Your digital front door that actually works - a website that loads instantly, looks professional, and turns visitors into customers without the headaches of DIY builders.",
      features: [
        "Get found online by customers searching for your services",
        "Professional credibility when people look you up",
        "Own your website completely - no monthly platform fees",
        "Works 24/7 to showcase your expertise while you sleep",
      ],
      colorScheme: "indigo",
    },
    {
      id: 2,
      image: "/service2.png",
      title: "The Signature Site",
      timeline: "3-5 weeks",
      investment: "$500-$800",
      wif: "For growing businesses ready to stand out from competitors with a website that commands attention and builds trust.",
      description:
        "Elevate your online presence with a website that commands attention and builds trust - the kind that makes potential customers think 'this business knows what they're doing.'",
      features: [
        "Professional presence that pre-sells your services",
        "Attract higher-quality, ready-to-pay customers",
        "Stand out from competitors with basic websites",
        "Builds trust before prospects even contact you",
      ],
      colorScheme: "violet",
    },
    {
      id: 3,
      image: "/service3.png",
      title: "The Complete Vision",
      timeline: "5-10 weeks",
      investment: "$1000+",
      wif: "For established businesses, brands, and e-commerce stores ready to automate workflows, scale operations, and deliver premium customer experiences.",
      description:
        "The complete digital solution that handles complex business processes automatically - your website becomes a powerful business tool, not just a brochure.",
      features: [
        "Capture and nurture leads automatically",
        "Scale your business without working more hours",
        "Premium presence that justifies higher prices",
        "Turns visitors into customers through smart workflows",
      ],
      colorScheme: "rose",
    },
  ];

  return (
    <div className="my-20">
      <MobileServices
        cards={defaultCards}
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-cover"
      />
    </div>
  );
};

export { MobileSkiper17, MobileServices };