export const clientReviews = [
  {
    id: 1,
    name: 'Jason Malik',
    position: 'Op. Manager at Go Quality Networks',
    img: '/review2.png',
    review:
      "Hasnain did an incredible job on our website. We needed something clean, professional, and easy to navigate — and he delivered exactly that. His communication was clear throughout the process, and the final result represents our brand perfectly. Highly recommend him if you want a website that actually works for your business.",
  },
  {
    id: 2,
    name: 'Samantha Reyes',
    position: 'Founder of Noble Cleaning Solutions',
    img: '/review1.png',
    review:
      "I had a vision for a sleek, modern website that could clearly explain our services and help us book clients — and Hasnain nailed it. He was responsive, detail-oriented, and honestly cared about getting it right. Our site looks great and functions perfectly. I’m so glad we chose his services.",
  },
  {
    id: 3,
    name: 'Michael Trent',
    position: 'Product Manager at Skyline Logistics',
    img: '/review3.png',
    review:
      "Working with Hasnain was smooth from start to finish. We had a few complex needs on the backend, and he handled them like a pro. He delivered a fast, secure, and professional website that has improved how we present ourselves online. He’s someone who truly understands both the tech and business side.",
  },
  {
    id: 4,
    name: 'Alisha Grant',
    position: 'Co-Founder of Vida Wellness Co.',
    img: '/review4.png',
    review:
      "HasnainWebWorks brought our website vision to life in a way that felt effortless on our end. Hasnain took time to understand our goals, made smart suggestions, and delivered a final product that’s not just beautiful — it’s built to convert. Couldn’t be happier with the result.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="c-space my-20">
       <h1 className="heading">
                Hear From My {" "}
                <span className='dark:text-purple text-violet-700'>Clients</span>
            </h1>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/star.png" alt="star" className="w-5 h-5" />
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