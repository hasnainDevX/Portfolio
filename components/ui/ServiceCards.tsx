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
  features: string[];
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
        gsap.set(cardElements[i], {
          y: "100%",
          scale: 1,
          rotation: 0,
          opacity: 1,
        });
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
      <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden">
        <div
          className={cn(
            "relative h-[95vh] sm:h-[90vh] w-[95vw] sm:w-[90vw] overflow-hidden rounded-lg sm:rounded-2xl",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="absolute h-full w-full rounded-lg sm:rounded-2xl overflow-hidden !opacity-100 bg-gray-900"
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            >
              <div className="flex h-full flex-col lg:flex-row">
                {/* Left Side - Image (hidden on mobile, visible on lg+) */}
                <div className="hidden lg:block lg:w-2/5 h-full">
                  <img
                    src={card.image}
                    alt={card.alt || card.title}
                    className={cn(
                      "h-full w-full object-cover rounded-l-lg lg:rounded-l-2xl",
                      imageClassName
                    )}
                  />
                </div>

                {/* Right Side - Content (full width on mobile, 3/5 on lg+) */}
                <div className="w-full lg:w-3/5 h-full bg-gray-900 rounded-lg lg:rounded-r-2xl p-4 sm:p-6 lg:p-10 flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      {/* Title */}
                      <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight text-center md:text-left">
                        {card.title}
                      </h1>

                      <div className="learnmore text-center bg-gray-800 p-1 sm:p-2 rounded-lg hover:bg-gray-700 transition cursor-pointer shrink-0">
                        <button>
                          <span className="text-white text-center text-xs sm:text-sm font-medium">
                            <span className="text-sm sm:text-lg"> &#123; </span>LEARN MORE{" "}
                            <span className="text-sm sm:text-lg"> &#125; </span>
                          </span>
                        </button>
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
                            <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                              {feature}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time and Price badges */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <div className="bg-gray-800 px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2">
                      <span className="text-gray-400 text-xs sm:text-sm">Timeline:</span>
                      <span className="text-white text-xs sm:text-sm font-medium">
                        {card.timeline}
                      </span>
                    </div>
                    <div className="bg-slate-800 px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2">
                      <span className="text-gray-400 text-xs sm:text-sm">Investment:</span>
                      <span className="text-white text-xs sm:text-sm font-semibold">
                        {card.investment}
                      </span>
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div className="mt-3 sm:mt-5 lg:mt-6">
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
    </div>
  );
};

// Example usage component with default data
const Skiper17 = () => {
const defaultCards = [
  {
    id: 1,
    image: "/foundationsite.png",
    title: "The Foundation Website",
    timeline: "1-2 weeks",
    investment: "$200-$300",
    wif: "Perfect for small businesses and individuals who want a simple yet professional online presence.",
    description: "Your digital front door that actually works - a website that loads instantly, looks professional, and turns visitors into customers without the headaches of DIY builders.",
    features: [
      "Get found online by customers searching for your services",
      "Professional credibility when people look you up",
      "Own your website completely - no monthly platform fees",
      "Works 24/7 to showcase your expertise while you sleep",
    ],
  },
  {
    id: 2,
    image: "/signaturesitee.png",
    title: "The Signature Site",
    timeline: "3-5 weeks",
    investment: "$500-$800",
    wif: "For growing businesses ready to stand out from competitors with a website that commands attention and builds trust.",
    description: "Elevate your online presence with a website that commands attention and builds trust - the kind that makes potential customers think 'this business knows what they're doing.'",
    features: [
      "Professional presence that pre-sells your services",
      "Attract higher-quality, ready-to-pay customers",
      "Stand out from competitors with basic websites",
      "Builds trust before prospects even contact you",
    ],
  },
  {
    id: 3,
    image: "/completevision.png",
    title: "The Complete Vision",
    timeline: "5-10 weeks",
    investment: "$1000+",
    wif: "For established businesses, brands, and e-commerce stores ready to automate workflows, scale operations, and deliver premium customer experiences.",
    description: "The complete digital solution that handles complex business processes automatically - your website becomes a powerful business tool, not just a brochure.",
    features: [
      "Capture and nurture leads automatically",
      "Scale your business without working more hours",
      "Premium presence that justifies higher prices",
      "Turns visitors into customers through smart workflows",
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