import React, { Suspense, lazy, useState, useRef, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "../lib/motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load EarthCanvas
const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const mode = localStorage.getItem("theme") || "dark"; // Default to dark mode
      setDark(mode === "dark");
    };

    updateTheme();
    window.addEventListener("themeChange", updateTheme);

    return () => {
      window.removeEventListener("themeChange", updateTheme);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_apqg0lh',
      'template_schdtr6',
      {
        from_name: form.name,
        to_name: "Muhammad Hasnain",
        from_email: form.email,
        to_email: "hasnaindev01@gmail.com",
        message: form.message,
      },
      'tuediucx9IlJwaGRK' // Use the public key here
    )
      .then(() => {
        setLoading(false);
        toast('Your message has been sent', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: dark ? "dark" : "light",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, (err) => {
        setLoading(false);
        console.error(err); // Changed from console.log to console.error for better error visibility
        toast.error("Something went wrong.");
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={dark ? "dark" : "light"} // Ensures the ToastContainer reflects the current theme
        style={{ zIndex: 9999, position: 'fixed' }}
      />
      <div className="xl:mt-7 flex overflow-hidden flex-col" id="contact">
        <div className="flex flex-col items-center md:mb-11 mb-7">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-violet-700 dark:text-purple">your </span>Digital presence to the next level?
          </h1>
          <p className="dark:text-white-200 md:mt-10 my-5 text-center text-black-200">
            Reach out to me today and let’s discuss how I can help you to reach your goals
          </p>
        </div>
        <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className={`flex-[0.75] p-6 rounded-2xl z-20 ${dark ? 'contact-dark' : 'contact-light'}`}
          >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-slate-400">
              Get in touch
            </p>
            <h3 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${dark ? 'text-white-200' : 'text-violet-600 h3-light'}`}>
              Contact
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="dark:text-white text-black font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name"
                  className="bg-violet-200 dark:bg-black-200 py-4 px-6 placeholder:text-[#555] text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="dark:text-white text-black font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email"
                  className="bg-violet-200 dark:bg-black-200 py-4 px-6 placeholder:text-[#555] text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="dark:text-white text-black font-medium mb-4">Your Message</span>
                <textarea
                  name="message"
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say"
                  className="dark:bg-black-200 bg-violet-200 py-4 px-6 placeholder:text-[#555] text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-[#141e30bf] bg-violet-700 py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl"
              >
                {loading ? 'Sending' : 'Send'}
              </button>
            </form>
          </motion.div>

          <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[450px]">
            <Suspense fallback={<div>Loading...</div>}>
              <EarthCanvas />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
