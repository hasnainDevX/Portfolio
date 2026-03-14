"use client";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import Approach from "@/components/Approach";
=======
// import Approach from "@/components/Approach";
>>>>>>> 5bb81ed (removed vercel analytics)
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Testimonials from "../components/Testimonials";
import Contact from "@/components/Contact";
import { StarsCanvas } from "@/components/canvas";
<<<<<<< HEAD
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
=======
import TestHero from "@/components/TestHero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
>>>>>>> 5bb81ed (removed vercel analytics)

const Home = () => {
  return (
    <main className="relative bg-slate-200 dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip z-0">
      <div className="max-w-7xl xl:max-w-[90rem] w-full z-10">
        <FloatingNav navItems={navItems} />
<<<<<<< HEAD
        <Hero />
        <Grid />
        <Services />
        <Pricing />
        <RecentProjects />
        <div className="lg:block hidden">
          <Approach />
        </div>
        <Testimonials />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
=======
        <TestHero />
        <About />
        <Services />
        <RecentProjects />
        <Testimonials />
        {/* <Approach /> */}
        {/* <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div> */}
        <Footer />
>>>>>>> 5bb81ed (removed vercel analytics)
      </div>
      <Footer />
    </main>
  );
};
<<<<<<< HEAD
=======
// testimonial component
{
  /* <script src="https://gist.github.com/codebyte0/e2e7016b8db3371c7ee48bcfeaf70c90.js"></script> */
}
>>>>>>> 5bb81ed (removed vercel analytics)
export default Home;
