import { IoMdCloudDownload } from "react-icons/io";
import Img from "../../../public/MyProfile.jpeg"
import { Button } from "flowbite-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className=" w-[80%] mx-auto h-[500px]">
            <h1 className="text-white text-2xl font-bold ">About Me</h1>
            <div className='h-[3px] w-8 bg-[#c9f31d] mt-1'></div>
            <div className="flex ">
                <div className="flex-1 ">
                 <img src={Img} alt="" className="h-[80%] w-[60%] mx-auto mt-5 rounded-lg mt-5D"/>
                </div>
                <motion.div
          className="flex-1 mt-10"
        >
                  <p className="px-2 text-white text-lg">
                  Hello, I'm Sumaiya Meem, a MERN stack developer specializing in web application development. My experience extends to developing dynamic applications within the MERN stack.
                  I like keeping up with new and developing technologies and am open to exploring job opportunities that align with my skill set.
                  I am good at problem solving.
                  </p>
                  <Button className="mt-6 ml-2 bg-[#95ac3a] "><IoMdCloudDownload className="mr-2"/><span className="text-[16px]">Download CV</span></Button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;