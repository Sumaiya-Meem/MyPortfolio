import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    return (
        <div className="w-[80%] mx-auto mt-16">
            <h1 className="text-white text-2xl font-bold ">Connect with Me</h1>
            <div className='h-[3px] w-16 bg-[#c9f31d] mt-1'></div>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 mt-5">
                <div className="text-white w-[100%] lg:w-[40%]">
                    <p className="text-4xl">Let's Talk For your <br />
                        <span className="text-[#95ac3a]">Next Projects</span> </p>
                    <p>
                        I'm actively seeking opportunities to apply my MERN stack development skills and problem-solving mindset.
                        If your company values innovation and is looking for a dedicated developer, I'd love to connect.
                        Feel free to reach out for collaboration or just to say hi!
                    </p>
                    <div className="mt-5 flex gap-3 items-center">
                        <MdOutlineEmail className="text-[#c9f31d] text-xl mt-1" />
                        <p className="text-[#b1b1b1]">sumiayameem@gmail.com</p>
                    </div>
                    <div className="mt-3 flex gap-3 items-center">
                        <IoLocationOutline className="text-[#c9f31d] text-xl mt-1" />
                        <p className="text-[#b1b1b1]">Barishal,Bangladesh</p>
                    </div>
                </div>
                <div className=" w-[100%] lg:w-[40%]">
                    <form className="space-y-2">
                        <Label htmlFor="name" className="text-white text-lg">Name:</Label>
                        <TextInput
                            type="text"
                            id="name"
                            placeholder="your name"
                            required
                            style={{ backgroundColor: "transparent" }}
                        />
                        <Label htmlFor="name" className="text-white text-lg">Email:</Label>
                        <TextInput
                            type="text"
                            id="name"
                            placeholder="yourname@gmail.com"
                            required
                            style={{ backgroundColor: "transparent" }}
                        />
                         <Label htmlFor="name" className="text-white text-lg">Subject:</Label>
                        <TextInput
                            type="text"
                            id="name"
                            placeholder="You would like to discussed"
                            required
                            style={{ backgroundColor: "transparent" }}
                        />

                        <Textarea
                            id="message"
                            placeholder="Message"
                            rows="4"
                            required
                            style={{ backgroundColor: "transparent" }}
                        />

                        <Button type="submit" className="">
                        <IoIosSend className="mr-1"/>
                            Send Message</Button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;