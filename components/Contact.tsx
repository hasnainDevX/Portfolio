import React, {
  Suspense,
  lazy,
  useState,
  useRef,
  FormEvent,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import { SectionWrapper } from "@/hoc";
import { slideIn } from "../lib/motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load EarthCanvas
const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Validate name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  useEffect(() => {
    const updateTheme = () => {
      const mode = localStorage.getItem("theme") || "dark";
      setDark(mode === "dark");
    };

    // Check if device is desktop (screen width >= 1024px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateTheme();
    checkDesktop(); // Initial check

    window.addEventListener("themeChange", updateTheme);
    window.addEventListener("resize", checkDesktop); // Listen for screen size changes

    return () => {
      window.removeEventListener("themeChange", updateTheme);
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: dark ? "dark" : "light",
      });
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_8i8yjis",
        "template_jzl1wm7",
        {
          from_name: form.name,
          to_name: "Muhammad Hasnain",
          from_email: form.email,
          to_email: "hasnainwebworks@gmail.com",
          message: form.message,
        },
        "LnufNtBlctM0A6DHN" // Use the public key here
      )
      .then(
        () => {
          setLoading(false);
          toast("Your message has been sent", {
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
          setErrors({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          console.error(err);
          toast.error("Something went wrong. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: dark ? "dark" : "light",
          });
        }
      );
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
        style={{ zIndex: 9999, position: "fixed" }}
      />
      <div className="xl:mt-7 flex overflow-hidden flex-col sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id="contact">
        <div className="flex flex-col items-center md:mb-11 mb-7 text-center max-w-5xl mx-auto p-4">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-12 text-white">
            READY TO TAKE{" "}
            <span className="text-violet-700 dark:text-purple">YOUR </span>
            DIGITAL PRESENCE TO THE NEXT LEVEL?
          </h1>
          <p className="dark:text-white-200 md:mt-4 my-5 text-center text-black-200">
            Reach out to me today and let’s discuss how I can help you to reach
            your goals
          </p>
        </div>
        <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className={`flex-[0.75] p-6 rounded-2xl z-20 ${
              dark ? "contact-dark" : "contact-light"
            }`}
          >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-slate-400">
              Get in touch
            </p>
            <h3
              className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ${
                dark ? "text-white-200" : "text-violet-600 h3-light"
              }`}
            >
              Contact
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="dark:text-white text-black font-medium mb-4">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name"
                  required
                  className={`py-4 px-6 placeholder:text-[#555] text-white rounded-lg outline-none border-none font-medium ${
                    errors.name
                      ? "bg-red-100 dark:bg-red-900/30 border-2 border-red-500"
                      : "bg-violet-200 dark:bg-black-200"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="flex flex-col">
                <span className="dark:text-white text-black font-medium mb-4">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email"
                  required
                  className={`py-4 px-6 placeholder:text-[#555] text-white rounded-lg outline-none border-none font-medium ${
                    errors.email
                      ? "bg-red-100 dark:bg-red-900/30 border-2 border-red-500"
                      : "bg-violet-200 dark:bg-black-200"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="flex flex-col">
                <span className="dark:text-white text-black font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  name="message"
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say"
                  required
                  className={`py-4 px-6 placeholder:text-[#555] text-white rounded-lg outline-none border-none font-medium ${
                    errors.message
                      ? "bg-red-100 dark:bg-red-900/30 border-2 border-red-500"
                      : "dark:bg-black-200 bg-violet-200"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </span>
                )}
              </label>
              <button
                type="submit"
                className="bg-[#141e30bf] bg-violet-700 py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl z-[9999] hover:bg-violet-800 transition-all duration-300 ease-in-out"
              >
                {loading ? "Sending" : "Send"}
              </button>
            </form>
          </motion.div>

          {isDesktop && (
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="xl:flex-1 xl:h-auto md:h-[550px] h-[450px]"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <EarthCanvas />
              </Suspense>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;