import React, { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "@/hoc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Type definitions
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  businessWebsite: string;
  businessSocial: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ErrorState {
  firstName: string;
  email: string;
  businessName: string;
  budget: string;
  timeline: string;
}

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Form state
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    businessWebsite: "",
    businessSocial: "",
    budget: "",
    timeline: "",
    message: "",
  });

  // Error state - only required fields
  const [errors, setErrors] = useState<ErrorState>({
    firstName: "",
    email: "",
    businessName: "",
    budget: "",
    timeline: "",
  });

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string>("");
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  // Budget options
  const budgetOptions = [
    "$200 - $500",
    "$500 - $1000",
    "$1000+",
    "Not sure yet",
  ];

  // Timeline options
  const timelineOptions = [
    "As soon as possible",
    "Within 1-2 months",
    "Within 3-4 months",
    "Just gathering info right now",
  ];

  // Enhanced validation with live feedback
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email";
        return "";
      case "businessName":
        if (!value.trim()) return "Business name is required";
        if (value.trim().length < 2) return "Business name must be at least 2 characters";
        return "";
      case "budget":
        return !value ? "Please select your budget range" : "";
      case "timeline":
        return !value ? "Please select your timeline" : "";
      default:
        return "";
    }
  };

  // Handle field blur - mark as touched
  const handleBlur = (fieldName: string) => {
    setFocusedField("");
    setTouchedFields(prev => new Set(prev).add(fieldName));
    
    // Validate on blur
    if (fieldName in errors) {
      const error = validateField(fieldName, form[fieldName as keyof FormState]);
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  // Handle input changes with live validation
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm(prev => ({ ...prev, [name]: value }));

      // Live validation only for touched fields
      if (touchedFields.has(name) && name in errors) {
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    },
    [touchedFields]
  );

  // Handle radio changes - allow deselection
  const handleRadioChange = (name: string, value: string) => {
    // If clicking the same option, deselect it
    if (form[name as keyof FormState] === value) {
      setForm(prev => ({ ...prev, [name]: "" }));
      // Add error if field is touched and now empty
      if (touchedFields.has(name)) {
        const error = validateField(name, "");
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
      // Clear error when selecting
      if (name in errors) {
        setErrors(prev => ({ ...prev, [name]: "" }));
      }
    }
    setTouchedFields(prev => new Set(prev).add(name));
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: ErrorState = {
      firstName: validateField("firstName", form.firstName),
      email: validateField("email", form.email),
      businessName: validateField("businessName", form.businessName),
      budget: validateField("budget", form.budget),
      timeline: validateField("timeline", form.timeline),
    };

    setErrors(newErrors);
    
    // Mark all required fields as touched
    setTouchedFields(new Set(Object.keys(newErrors)));
    
    return !Object.values(newErrors).some(error => error !== "");
  };

  // Handle form submission
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields", {
        position: "top-right",
        theme: "dark",
        style: {
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(248, 113, 113, 0.3)",
          borderRadius: "16px",
        },
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_8i8yjis",
        "template_jzl1wm7",
        {
          from_name: `${form.firstName} ${form.lastName}`,
          to_name: "Muhammad Hasnain",
          from_email: form.email,
          to_email: "hasnainwebworks@gmail.com",
          business_name: form.businessName,
          business_website: form.businessWebsite || "Not provided",
          business_social: form.businessSocial || "Not provided",
          budget: form.budget,
          timeline: form.timeline,
          message: form.message || "No additional message",
        },
        "LnufNtBlctM0A6DHN"
      );

      toast.success(
        "✨ Your message has been sent! We'll get back to you within 24 hours.",
        {
          position: "top-right",
          theme: "dark",
          style: {
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: "16px",
          },
        }
      );

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        businessName: "",
        businessWebsite: "",
        businessSocial: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setErrors({
        firstName: "",
        email: "",
        businessName: "",
        budget: "",
        timeline: "",
      });
      setTouchedFields(new Set());
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        theme: "dark",
        style: {
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(248, 113, 113, 0.3)",
          borderRadius: "16px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const getFieldStatus = (fieldName: string) => {
    const hasError = errors[fieldName as keyof ErrorState];
    const isTouched = touchedFields.has(fieldName);
    const isFocused = focusedField === fieldName;
    
    if (hasError && isTouched) return "error";
    if (isFocused) return "focused";
    if (isTouched && !hasError) return "valid";
    return "default";
  };

  const getFieldClasses = (fieldName: string) => {
    const status = getFieldStatus(fieldName);
    const baseClasses = "w-full bg-transparent border-0 border-b-2 text-white text-lg py-3 px-0 placeholder-white/30 focus:outline-none transition-all duration-300";
    
    switch (status) {
      case "error":
        return `${baseClasses} border-red-400 focus:border-red-400`;
      case "focused":
        return `${baseClasses} border-indigo-400 focus:border-indigo-400`;
      case "valid":
        return `${baseClasses} border-green-400/30`;
      default:
        return `${baseClasses} border-white/20 hover:border-white/30 focus:border-indigo-400`;
    }
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
        theme="dark"
      />

      <div
        ref={containerRef}
        className="xl:mt-7 flex overflow-hidden flex-col sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
        id="contact"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Header Section */}
        <div className="flex flex-col items-center md:mb-16 mb-12 text-center max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-sm font-medium">Let's Connect</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide mb-8 text-white"
          >
            Ready to give your brand the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 italic font-serif">
              purposeful
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 italic font-serif">
              pretty
            </span>{" "}
            web design it deserves?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            Fill out the enquiry form below and we'll get back to you so we can
            schedule a 30 minute consultation.
          </motion.p>
        </div>

        {/* Form Container */}
        <div className="w-full flex justify-center">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full max-w-4xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-violet-500/[0.03] pointer-events-none" />
            
            <div className="space-y-8 relative">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                    First Name<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => handleBlur("firstName")}
                    className={getFieldClasses("firstName")}
                    placeholder="Enter your first name"
                  />
                  {touchedFields.has("firstName") && errors.firstName && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-2 block flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.firstName}
                    </motion.span>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                    Last Name <span className="text-white/30 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => handleBlur("lastName")}
                    className={getFieldClasses("lastName")}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                  Contact Email<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => handleBlur("email")}
                  className={getFieldClasses("email")}
                  placeholder="Enter your email address"
                />
                {touchedFields.has("email") && errors.email && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 block flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </motion.span>
                )}
              </div>

              {/* Business Name */}
              <div className="relative">
                <label className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                  Business Name<span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("businessName")}
                  onBlur={() => handleBlur("businessName")}
                  className={getFieldClasses("businessName")}
                  placeholder="Enter your business name"
                />
                {touchedFields.has("businessName") && errors.businessName && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 block flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.businessName}
                  </motion.span>
                )}
              </div>

              {/* Business Website */}
              <div className="relative">
                <label className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                  Business Website <span className="text-white/30 text-[10px]">(If you have one already)</span>
                </label>
                <input
                  type="url"
                  name="businessWebsite"
                  value={form.businessWebsite}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("businessWebsite")}
                  onBlur={() => handleBlur("businessWebsite")}
                  className={getFieldClasses("businessWebsite")}
                  placeholder="https://yourwebsite.com"
                />
              </div>

              {/* Business Social */}
              <div className="relative">
                <label className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                  Business Social Media <span className="text-white/30 text-[10px]">(If you have social media)</span>
                </label>
                <input
                  type="text"
                  name="businessSocial"
                  value={form.businessSocial}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("businessSocial")}
                  onBlur={() => handleBlur("businessSocial")}
                  className={getFieldClasses("businessSocial")}
                  placeholder="@yourbusiness"
                />
              </div>

              {/* Budget Section */}
              <div className="space-y-4">
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider">
                  What is your approximate budget for the project?<span className="text-red-400 ml-1">*</span>
                  <span className="text-white/30 text-[10px] normal-case ml-2">(Click again to deselect)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {budgetOptions.map((budget) => (
                    <motion.label
                      key={budget}
                      // whileHover={{ scale: 1.02 }}
                      // whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 cursor-pointer group `}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={budget}
                        checked={form.budget === budget}
                        onChange={(e) => handleRadioChange("budget", e.target.value)}
                        className="hidden"
                      />
                      <div
                        className={`w-5 h-5 border-2 transition-all duration-300 flex items-center justify-center ${
                          form.budget === budget
                            ? "bg-indigo-400 border-indigo-400"
                            : "border-white/30"
                        }`}
                      >
                          {form.budget === budget && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${form.budget === budget ? "text-indigo-300" : "text-white/80"}`}>
                        {budget}
                      </span>
                    </motion.label>
                  ))}
                </div>
                {touchedFields.has("budget") && errors.budget && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 block flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.budget}
                  </motion.span>
                )}
              </div>

              {/* Timeline Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-white/70 uppercase tracking-wider">
                  What's your timeline?<span className="text-red-400 ml-1">*</span>
                  <span className="text-white/30 text-[10px] normal-case ml-2">(Click again to deselect)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {timelineOptions.map((timeline) => (
                    <motion.label
                      key={timeline}
                      // whileHover={{ scale: 1.02 }}
                      // whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 cursor-pointer group`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline}
                        checked={form.timeline === timeline}
                        onChange={(e) => handleRadioChange("timeline", e.target.value)}
                        className="hidden"
                      />
                      <div
                        className={`w-5 h-5 border-2  transition-all duration-300 flex items-center justify-center ${
                          form.timeline === timeline
                            ? "bg-indigo-400 border-indigo-400"
                            : "border-white/30"
                        }`}
                      >
                       {form.timeline === timeline && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${form.timeline === timeline ? "text-indigo-300" : "text-white/80"}`}>
                        {timeline}
                      </span>
                    </motion.label>
                  ))}
                </div>
                {touchedFields.has("timeline") && errors.timeline && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-2 block flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.timeline}
                  </motion.span>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                  Additional Information <span className="text-white/30 text-[10px]">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => handleBlur("message")}
                  className={`${getFieldClasses("message")} resize-none`}
                  placeholder="Tell us about your project, goals, or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8 flex flex-col items-center">
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium text-lg py-4 px-12 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  <span className="relative z-10 flex items-center justify-center">
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>
                
                {/* Form completion indicator */}
                <motion.div 
                  className="mt-6 flex items-center gap-2 text-xs text-white/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex gap-1">
                    {["firstName", "email", "businessName", "budget", "timeline"].map((field) => (
                      <div
                        key={field}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          !errors[field as keyof ErrorState] && form[field as keyof FormState]
                            ? "bg-green-400"
                            : touchedFields.has(field) && errors[field as keyof ErrorState]
                            ? "bg-red-400"
                            : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                  <span>Required fields</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");