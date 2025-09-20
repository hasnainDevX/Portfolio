import { projects } from "@/data";
import dynamic from "next/dynamic";
import Image from "next/image";
const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="min-h-screen bg-slate-950" id="projects">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-10 text-white">
          Captivating and Converting
          <br />
          <span className="text-indigo-400"> Portfolio</span>
        </h1>
         <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-loose font-light">
             Websites Built For Visionaries, Risk-Takers & Difference-Makers
          </p>
      </div>
      <div className="flex flex-wrap p-4 mt-8 justify-center items-center gap-x-20">
        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link} target={"_blank"}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-4">
                <div className="w-full h-full relative lg:rounded-3xl overflow-hidden bg-[#13162d]">
                  <Image
                    layout="responsive"
                    width={100}
                    height={100}
                    src="/bg.png"
                    alt="bg-img"
                    className={`w-full h-full`}
                  />
                </div>
                <Image
                  layout="fill" // Changed from "responsive" to "fill"
                  src={img}
                  alt={title}
                  className={`z-10 absolute top-0 ${
                    index === 0 ? "w-full h-full" : " object-cover object-top "
                  }`}
                />
              </div>
              <h1 className="font-bold lg:text-2xl text-base md:text-xl line-clamp-1 ">
                {title}{" "}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {" "}
                {des}{" "}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center ">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center 
                                        items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src={icon}
                        alt={icon}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center ">
                  <p className="flex lg:text-xl md:text-xs text-sm  font-semibold  text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
