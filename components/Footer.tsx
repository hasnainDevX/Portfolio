import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-[45px] pb-10 mt-[9rem] -z-1" id="footer">
      <div className="absolute left-0 -bottom-[35rem] w-full min-h-36 ">
        <Image src="/footer-grid.svg" alt="grid" width={100} height={100} className="w-full h-full opacity-50 "/>
      </div>
      <div className="flex flex-col items-center translate-y-11">
        <a href="mailto:hasnaindev01@gmail.com">
            <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position="right"
                otherClasses="!w-[100%]" 
            />
        </a>
      </div>
      <div className="flex mt-20 md:flex-row flex-col justify-between items-center ">
        <p className="md:text-base text-sm md:font-normal font-light">© {new Date().getFullYear()} Codebyte0. All rights reserved</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((item)=>(
                <div key={item.id} className="flex mt-2 md:mt-0 w-10 h-10 cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 dark:bg-opacity-75 bg-violet-600 dark:bg-black-200 rounded-e-lg border border-black-300 dark:hover:bg-black-100 hover:bg-violet-700">
                  <a href={item.href}>
                    <Image src={item.img} alt={item.img} width={20} height={20} />
                  </a>
                </div>
            ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
