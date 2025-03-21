import { IoMdCloudDownload } from "react-icons/io";
import { Button, Card } from 'flowbite-react';
import resume from "../../../public/Sumaiya Habib Meem-2.pdf"
const Banner = () => {
    const handleDownloadCV = () => {
        const anchor = document.createElement('a');
        anchor.href = resume; 
        anchor.download = 'Sumaiya Habib Meem-2.pdf'; 
        anchor.click(); 
    };
    return (
        <div className='w-[80%] mx-auto min-h-screen'>
            <h3 className='text-[#c9f31d] text-2xl mt-16'>Hello! I am</h3>
            <h1 className='text-white text-[65px] font-bold'>Sumaiya Meem</h1>
            <div className='flex items-center'>
            <h4 className='text-white text-lg mr-3'>Competitive Programmer</h4>
            <div className='h-4 w-[2px] bg-[#c9f31d] mt-1'></div>
            <div className='h-4 w-[2px] bg-[#c9f31d] mt-1 ml-1'></div>
            <h4 className='text-white text-lg ml-2'>Full Stack Web  Developer</h4>

          
            </div>
           <div className="flex gap-4 mt-5">
           <a href="#about">
            <Button className='bg-[#95ac3a]  text-lg'>About Me</Button>
           </a>
           <Button
  className="bg-[#95ac3a]"
  onClick={() => window.open('https://drive.google.com/file/d/1orur5NspCHLR6sWoyhBePJ8OtKsfNrqZ/view?usp=drive_link', '_blank')}
>
  <IoMdCloudDownload className="mr-2" />
  <span className="text-[16px]">Download CV</span>
</Button>

       
           </div>
        </div>
    );
};

export default Banner;