import { Footer } from 'flowbite-react';
import {BsFacebook, BsGithub, BsInstagram} from 'react-icons/bs';
import { FaLinkedinIn } from "react-icons/fa";
const Footers = () => {
    return (
        <div>
            <Footer container className='bg-[#0c3866] mt-6'>

                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Meem™" year={2023} className='text-white' />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/sumaiya.meem.391" icon={BsFacebook} className='text-white'/>
                        <Footer.Icon href="#" icon={BsInstagram} className='text-white'/>
                        <Footer.Icon href="https://github.com/Sumaiya-Meem" icon={BsGithub} className='text-white'/>
                        <Footer.Icon href="https://www.linkedin.com/in/sumaiya-meem-28534b2a4/" icon={FaLinkedinIn } className='text-white'/>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Footers;