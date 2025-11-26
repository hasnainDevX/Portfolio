export const clientReviews = [
  {
    id: 1,
    name: "Macey",
    position: "Macey's Method - Virtual Assistant",
    img: "/clientimg6.jpg",
    review:
      "I had a great experience working with hasnainwebworks on my website (maceysmethod.co.uk) for my virtual assistant business. They were professional, creative, and really listened to my ideas. The final site is easy to navigate and perfectly represents my brand. I highly recommend them to anyone looking for a talented and reliable website designer!.",
  },
  {
    id: 2,
    name: "Hannah",
    position: "All In Good Hans - Virtual Assistant",
    img: "/image.png",
    review:
      "I had a great experience working with hasnainwebworks on my website for my virtual assistant business. They were professional, creative, and really listened to my ideas. The final site is easy to navigate and perfectly represents my brand. I highly recommend them to anyone looking for a talented and reliable website designer!.",
  },
  {
    id: 3,
    name: "Jason Malik",
    position: "Op. Manager at Go Quality Networks",
    img: "/image.png",
    review:
      "Hasnain did an incredible job on our website. We needed something clean, professional, and easy to navigate — and he delivered exactly that. His communication was clear throughout the process, and the final result represents our brand perfectly. Highly recommend him if you want a website that actually works for your business.",
  },
  {
    id: 4,
    name: "Samantha Reyes",
    position: "Founder of Noble Cleaning Solutions",
    img: "/review1.png",
    review:
      "I had a vision for a sleek, modern website that could clearly explain our services and help us book clients — and Hasnain nailed it. He was responsive, detail-oriented, and honestly cared about getting it right. Our site looks great and functions perfectly. I’m so glad we chose his services.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="c-space my-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-12 text-white">
          HEAR FROM MY
          <span className="text-indigo-400"> CLIENTS</span>
        </h1>
      </div>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
