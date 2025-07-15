export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#Experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] bg-none",
      imgClassName: "w-full h-full op0",
      titleClassName: "justify-end z-50",
      img: "/test1.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-10 bg-none",
      imgClassName: "",
      titleClassName: "justify-start ",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-10",
      imgClassName: "opacity-80",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    // use this data directly in the grid component 
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "z-1",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Full stack E-commerce store",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 !max-w-[60%]",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 flex justify-center items-center",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Blitz-AI - Advance AI APP",
      des: "Blitz-AI is a modern web app MODERN UI. This project showcases an intuitive and sleek user interface that enhances user experience",
      img: "/blitz.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
      link: "https://hasnaindevx.github.io/Blitz-AI/",
    },
    {
      id: 2,
      title: "Maple Leaf Cleaners Plus",
      des: "Maple Leaf Cleaners Plus is a fully responsive and modern cleaning services website. Utilizing cutting-edge technologies, this project showcases a clean, professional design and intuitive navigation, enabling customers to seamlessly explore services, pricing, and contact information.",
      img: "/cleaningwebsite.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg",],
      link: "https://mapleleafcleanersplus.vercel.app",
    },
    {
      id: 3,
      title: "Meta Verse - VR Games and Movies",
      des: "This project is a sleek and modern frontend user interface for a virtual reality (VR) games and movies platform. It showcases a fully responsive design with engaging visual elements and animations.",
      img: "/metaverse.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/fm.svg", "/c.svg", ],
      link: "https://hasnaindevx.github.io/meta-verse-website/",
    },
    {
      id: 4,
      title: "Noble Cleaning Solutions",
      des: "Noble Cleaning Solutions is a fully responsive and modern cleaning services website. Utilizing cutting-edge technologies, this project showcases a clean, professional design and intuitive navigation, enabling customers to seamlessly explore services, pricing, and contact information.",
      img: "/noblecleaningwebsitedesign.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
      link: "https://noble-cleaning-solutions.vercel.app/",
    },
    {
      id: 5,
      title: "<PassCB /> - Password Manager",
      des: "A sleek and efficient password manager built with React, utilizing local storage for secure password management. This project provides a user-friendly interface to store and manage passwords, offering features such as adding, editing, and deleting entries.",
      img: "/pass2.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
      link: "https://hasnaindevx.github.io/Password_Manager-React/",
    },
    {
      id: 6,
      title: "GET-ME-A-CHAI",
      des: " A crowdfunding platform for creators with dynamic user profiles, secure authentication, and seamless user experience. Features Dynamic Routing Secure Authentication Profile Customization View Supporters Data Error Handling Payment Integration Technologies Next.js, Database: MongoDB, Authentication: Next-auth/Authjs, Payment Gateway: Stripe",
      img: "/fundprojects.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg",],
      link: "https://github.com/hasnaindevx/get-me-a-chai",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Personal Web Development Projects",
      desc: "Built and maintained several personal websites and projects, focusing on responsive design, accessibility, and performance optimization.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href:"https://github.com/codebyte0"
    },
    {
      id: 2,
      img: "/twit.svg",
      href:"https://github.com/codebyte0"
    },
    {
      id: 3,
      img: "/link.svg",
      href:"https://www.instagram.com/_code_byte"
    },
  ];