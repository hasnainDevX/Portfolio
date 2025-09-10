import { Spotlight } from "./ui/Spotlight";
import "../app/globals.css";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import dynamic from 'next/dynamic';
const ComputerCanvas = dynamic(() => import('@/components/canvas/Computer'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
});

const Hero = () => {
    return (
        <div className={`relative mb-[5rem] md:pb-20 pt-36 md:h-screen h-[30rem] z-10`}>
            <div>
                <Spotlight className="top-10 right-0 h-[80vh] w-[50vw]" fill="purple" />
            </div>

            <div className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex flex-col !items-center md:flex-row md:items-center justify-between w-full h-[106%]">
                <div className="content-part flex-[0_0_36%] md:px-5 px-4 h-full justify-start">
                    <div className="max-w-7xl text-white-100 flex flex-row items-start gap-5">
                        <div className="flex flex-col justify-center items-center mt-5">
                            <div className="w-5 h-5 rounded-full bg-[#5b21b6] text-clip bg-gradient-to-t from-cyan-600 to-[#5b21b6]" />
                            <div className="w-1 sm:h-64 md:h-[23rem] h-[18rem] bg-[#6828f1] violet-gradient" />
                        </div>
                        <div>
                            <h1 className="md:text-5xl text-4xl font-bold mt-11 flex flex-wrap z-[999] dark:text-white text-black-100">
                                <span className="mr-3 font-extrabold my-1">Hi there, I am</span>
                                <span className="text-[#8349e0] font-extrabold font"> Hasnain</span>
                            </h1>
                            <p className="mt-2 text-black-100 dark:text-white-100 sm:w-[60%] w-[95%] pr-2">
                                I develop modern websites, web-applications, and landing pages
                            </p>
                            <div className="md:-my-4 my-3">
                                <a href="#projects">
                                    <MagicButton
                                        title="Show my work"
                                        icon={<FaLocationArrow />}
                                        position="right"
                                        otherClasses="w-[97.6%] btn relative left-[2px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden image-part -translate-x-1 md:flex-[0_0_67%] md:flex items-center border-white md:h-[130%] md:-translate-y-16">
                    <ComputerCanvas />
                </div>
            </div>

        </div>
    );
};

export default Hero;
