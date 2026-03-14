// import { workExperience } from "@/data"
// import { Button } from "./ui/MovingBorder"
// import Image from "next/image"

// const Experience = () => {
//     return (
//         <>
//             <div className='py-20' id='Experience'>
//                 <h1 className="heading">
//                     My 
//                     <span className='dark:text-purple text-violet-700'> Work Experience</span>
//                 </h1>
//                 <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ' >
//                     {workExperience.map((card)=>(
//                         <Button key={card.id} duration={Math.floor(Math.random() * 10000 + 10000)} borderRadius="1.75rem" className="flex-1 dark:text-white border-[#9c9b9b] dark:border-slate-800 text-black-100 !z-50">
//                             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
//                                 <Image src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" width={100} height={100}/>
//                                 <div className="lg:ms-5">
//                                     <h1 className="text-start text-xl md:text-2xl font-bold">
//                                         {card.title}
//                                     </h1>
//                                     <p className="text-start mt-3 font-semibold text-black-100 dark:text-white-100 ">{card.desc}</p>
//                                 </div>
//                             </div>
//                         </Button>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Experience
