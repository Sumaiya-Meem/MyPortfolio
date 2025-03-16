import { Card } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
const Experinece = () => {
    return (
        <div className="w-[80%] mx-auto mt-16">
            <h1 className="text-white text-2xl font-bold ">Experinece</h1>
            <div className='h-[3px] w-16 bg-[#c9f31d] mt-1'></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
                <Card className=" bg-[#1b3f65] text-white">
                    <h5 className="text-2xl">
                      
                      Academia
                    </h5>
                    <p className="">
                        An online education website where user buy a course using payment system.The website has dynamic analytic dashboard.
                    </p>



                    <div className="mt-6 flex items-center gap-3 px-2">
                        <a href="https://github.com/Sumaiya-Meem/Academia"><FaGithub className="text-2xl" /></a>
                        <a href="https://academia-bd85b.web.app/"><FaExternalLinkAlt className="text-xl" /></a>
                    </div>

                    <div className="mt-6 flex items-center gap-3 px-2">
                       <p>React</p>
                       <p>Express</p>
                       <p>MongoDB</p>
                       <p>Stripe</p>
                    </div>

                </Card>
                <Card className=" bg-[#1b3f65] text-white">
                    <h5 className="text-2xl">
                     Apartment Hub
                    </h5>
                    <p className="">
                        Apartment management website where admin,member & user has separate dashboard.
                    </p>
                    <div className="mt-6 flex items-center gap-3 px-2">
                        <a href="https://github.com/Sumaiya-Meem/ApartmentHub"><FaGithub className="text-2xl" /></a>
                        <a href="https://apartmenthub-fb481.web.app/"><FaExternalLinkAlt className="text-xl" /></a>
                    </div>

                    <div className="mt-6 flex items-center gap-3 px-2">
                       <p>React</p>
                       <p>Express</p>
                       <p>MongoDB</p>
                    </div>

                </Card>
                <Card className=" bg-[#1b3f65] text-white">
                    <h5 className="text-2xl">
                     TastePact
                    </h5>
                    <p className="">
                        A interactive , beautiful and small full stack website , where a user manage their food request.
                    </p>
                    <div className="mt-6 flex items-center gap-3 px-2">
                        <a href="https://github.com/Sumaiya-Meem/TastePact-Client-Side"><FaGithub className="text-2xl" /></a>
                        <a href="https://food-share-73f23.web.app/"><FaExternalLinkAlt className="text-xl" /></a>
                    </div>

                    <div className="mt-6 flex items-center gap-3 px-2">
                       <p>React</p>
                       <p>Express</p>
                       <p>MongoDB</p>
                    </div>

                </Card>
                
            </div>

        </div>
    );
};

export default Experinece;