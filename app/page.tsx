"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Testimonials from "../components/Testimonials";
import Contact from "@/components/Contact";
import { StarsCanvas } from "@/components/canvas";
import Services from "@/components/Services";

const Home = () => {
  return (
    <main className="relative bg-slate-200 dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip z-0">
      <div className="max-w-7xl w-full z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Services />
        <RecentProjects />
        {/* <Approach /> */}
        <Testimonials />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default Home;