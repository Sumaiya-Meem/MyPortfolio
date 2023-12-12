import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Img from "../../../public/MyProfile.jpeg"
import { Button } from "flowbite-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className=" w-[80%] mx-auto ">
            <h1 className="text-white text-2xl font-bold ">About Me</h1>
            <div className='h-[3px] w-8 bg-[#c9f31d] mt-1'></div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 ">
                 <img src={Img} alt="" className="h-[70%] w-[60%] mx-auto mt-12 rounded-lg"/>
                </div>
                <motion.div
          className="flex-1 mt-10"
        >
                  <p className="px-2 text-white text-lg">
                  Hello, I'm Sumaiya Meem, a Font End developer specializing in web application development. My experience extends to developing dynamic applications within the React Js.
                  I like keeping up with new and developing technologies and am open to exploring job opportunities that align with my skill set.
                  I am good at problem solving.
                  </p>

                  <div className="mt-6 flex gap-3 px-2"> 
                  <a href="https://github.com/Sumaiya-Meem"><FaGithub className="text-white text-2xl" /></a>
                  <a href="https://www.linkedin.com/in/sumaiya-meem-28534b2a4/"><FaLinkedin className="text-white text-2xl"/></a>
                  <MdOutlineEmail className="text-white text-2xl"/>
                  </div>
                  
                </motion.div>
            </div>
        </div>
    );
};

export default About;