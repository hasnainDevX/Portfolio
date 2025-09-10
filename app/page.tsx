"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Contact from "@/components/Contact";
import { StarsCanvas } from "@/components/canvas";

const Home = () => {
  return (
    <main className="relative bg-slate-200 dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip z-0">
      <div className="max-w-7xl w-full z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Experience /> */}
        <Approach />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
};
// testimonial component 
{/* <script src="https://gist.github.com/codebyte0/e2e7016b8db3371c7ee48bcfeaf70c90.js"></script> */}
export default Home;