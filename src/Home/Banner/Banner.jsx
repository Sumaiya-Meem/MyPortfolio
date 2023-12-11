
import { Button, Card } from 'flowbite-react';

const Banner = () => {
    return (
        <div className='w-[80%] mx-auto min-h-screen'>
            <h3 className='text-[#c9f31d] text-2xl mt-16'>Hello! I am</h3>
            <h1 className='text-white text-[65px] font-bold'>Sumaiya Meem</h1>
            <h3 className='text-[#c9f31d] text-2xl mt-6'>MERN Stack  Developer</h3>
            <div className='flex items-center'>
            <h4 className='text-white text-lg mr-3'>Web Developer</h4>
            <div className='h-4 w-[2px] bg-[#c9f31d] mt-1'></div>
            <div className='h-4 w-[2px] bg-[#c9f31d] mt-1 ml-1'></div>
            <h4 className='text-white text-lg ml-2'>Competitive Programmer</h4>

          
            </div>
            <Button className='bg-[#95ac3a] mt-5 text-lg'>About Me</Button>
        </div>
    );
};

export default Banner;