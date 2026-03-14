"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef } from "react";
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
  includes: string[];
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = imageRefs.current;
      const totalCards = cardElements.length;

      if (!cardElements[0]) return;

      gsap.set(cardElements[0], { y: "0%", scale: 1, rotation: 0, opacity: 1 });

      for (let i = 1; i < totalCards; i++) {
        if (!cardElements[i]) continue;
        gsap.set(cardElements[i], { y: "100%", scale: 1, rotation: 0, opacity: 1 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];
        const position = i;
        if (!currentCard || !nextCard) continue;

        scrollTimeline.to(
          currentCard,
          {
            // scale: 0.7,
            // rotation: 5,
            duration: 1,
            ease: "none",
            opacity: 1,
          },
          position
        );

        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            opacity: 1,
            ease: "none",
          },
          position
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[90vh] !w-[90vw] overflow-hidden rounded-lg",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="absolute h-full w-full rounded-lg overflow-hidden !opacity-100"
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            >
              {/* Split Layout: Image Left, Content Right */}
              <div className="flex h-full">
                {/* Left Side - Image */}
                <div className="w-1/3 h-full">
                  <img
                    src={card.image}
                    alt={card.alt || card.title}
                    className={cn("h-full w-full object-cover", imageClassName)}
                  />
                </div>

                {/* Right Side - Content */}
                <div className="w-2/3 h-full bg-[#0D1424]  p-8 flex flex-col justify-between rounded-r-lg shadow-lg overflow-hidden">
                  {/* Header Section */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h2 className="text-3xl font-bold leading-tight text-white-100">
                        {card.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="bg-[#0D1424] px-3 py-1 rounded-full shadow-sm">
                          ⏱️ {card.timeline}
                        </span>
                        <span className="bg-[#0D1424] px-3 py-1 rounded-full shadow-sm font-semibold">
                          💰 {card.investment}
                        </span>
                      </div>
                    </div>

                    {/* WIF Section */}
                    <div className="bg-[#0D1424] backdrop-blur-sm rounded-lg p-4 border border-black-100/50">
                      <h3 className="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-2">
                        Who Is This For?
                      </h3>
                      <p className="text-white text-xs leading-relaxed italic">
                        {card.wif}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <p className="text-white leading-relaxed font-medium">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Includes Section */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-white/50 mt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-green-600">✨</span>
                      What's Included
                    </h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                      {card.includes.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-green-500 text-xs mt-1">✓</span>
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Get Started Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage component with default data
const Skiper17 = () => {
  const defaultCards = [
    {
      id: 1,
      image: "/noblecleaningwebsitedesign.png",
      title: "The Foundation Website",
      timeline: "1-2 weeks",
      investment: "$200-$300",
      wif: "Perfect for small businesses and individuals who want a simple yet professional online presence.",
      description:
        "Your digital front door that actually works - a website that loads instantly, looks professional, and turns visitors into customers without the headaches of DIY builders.",
      includes: [
        "90-minute Brand & Customer Journey Strategy Deep Dive",
        "4+ page custom web design (Home, Services, About, Contact)",
        "Copywriting template & support / light editing",
        "Full On-Page SEO Optimization",
        "Mobile-responsive design",
        "Contact form integration",
        "3 Rounds of Design Revisions + 1 Development Round",
        "Complete Training Guide for website management",
        "30-day aftercare with unlimited email Q+As and 2 hours of tweaks",
      ],
    },
    {
      id: 2,
      image: "/telecomwebsite.png",
      title: "The Signature Site",
      timeline: "3-5 weeks",
      investment: "$500-$800",
      wif: "For growing businesses ready to stand out from competitors with a website that commands attention and builds trust.",
      description:
        "Elevate your online presence with a website that commands attention and builds trust - the kind that makes potential customers think 'this business knows what they're doing.'",
      includes: [
        "Everything in Foundation Website",
        "8+ page custom design with advanced layouts",
        "Professional copywriting for all pages",
        "Advanced SEO with competitor analysis",
        "Lead capture forms with email automation setup",
        "60-day aftercare with priority support",
      ],
    },
    {
      id: 3,
      image: "/img15.png",
      title: "The Complete Vision",
      timeline: "5-10 weeks",
      investment: "$1000+",
      wif: "For established businesses, brands, and e-commerce stores ready to automate workflows, scale operations, and deliver premium customer experiences.",
      description:
        "The complete digital solution that handles complex business processes automatically - your website becomes a powerful business tool, not just a brochure.",
      includes: [
        "Everything in Signature Site",
        "12+ page custom design with premium functionality",
        "Full e-commerce integration (unlimited products)",
        "Custom CRM integration and automation",
        "Advanced analytics and conversion tracking",
        "90-day aftercare with priority support",
      ],
    },
  ];

  return (
    <ReactLenis root>
      <div className="h-screen w-full">
        <StickyCard002
          cards={defaultCards}
          containerClassName="rounded-2xl shadow-2xl"
          imageClassName="object-cover"
        />
      </div>
    </ReactLenis>
  );
};

export { Skiper17, StickyCard002 };
