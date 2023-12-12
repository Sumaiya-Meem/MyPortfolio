
import { Avatar, Dropdown, Navbar } from 'flowbite-react';


const Header = () => {
    return (
        <div className='mt-2'>
    <Navbar fluid rounded className='bg-[#0c3866] shadow-xl uppercase '>
      <div className="">
        <Dropdown
          arrowIcon={false}
          inline
        >
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=' mr-24'>
        <Navbar.Link href="#about" className='text-white text-lg'>
          About
        </Navbar.Link>
        <Navbar.Link href="#skill" className='text-white text-lg'>Skill</Navbar.Link>
        <Navbar.Link href="#experience" className='text-white text-lg'>Experience</Navbar.Link>
        <Navbar.Link href="#contact" className='text-white text-lg'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
 

 

        </div>
    );
};

export default Header;