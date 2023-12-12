import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProgressBar from '@ramonak/react-progress-bar';
import { color } from 'framer-motion';
import { Button } from 'flowbite-react';

const Skill = () => {
    return (
        <div className=" w-[80%] mx-auto mt-10">


            <h1 className="text-white text-2xl font-bold ">My Skills</h1>
            <div className='h-[3px] w-10 bg-[#c9f31d] mt-1'></div>

            <div className='mt-4'>
                <Tabs>
                    <TabList className="flex items-center gap-4">
                        <Tab className="w-20 ">
                            <Button className="text-[#c3e248] " color="">Web</Button>
                        </Tab>
                        <Tab className="w-32 ">
                        <Button className="text-[#c3e248] " color="">Programming</Button>
                       </Tab>
                        <Tab className="w-20">
                        <Button className="text-[#c3e248] " color="">Others</Button>
                             </Tab>
                    </TabList>

                    <TabPanel>
                        <p>
                         <div className='mt-8 flex  flex-col md:flex-row gap-0 md:gap-8 lg:gap-16'>
                            <div className='space-y-2'>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>React</p>
                                    <ProgressBar
                                        completed={70}
                                        bgColor='#95ac3a'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                <p className='text-white'>Node</p>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <ProgressBar
                                        completed={45}
                                        bgColor='#00a8e0'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                <p className='text-white'>Javascript</p>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <ProgressBar
                                        completed={70}
                                        bgColor='#db3552'
                                        animateOnRender={true}
                                        height='15px'
                                    ></ProgressBar>
                                </div>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>Next</p>
                                    <ProgressBar
                                        completed={30}
                                        bgColor='#6639b7'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>Firebase</p>
                                    <ProgressBar
                                        completed={60}
                                        bgColor='#00a8e0'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>MongoDB</p>
                                    <ProgressBar
                                        completed={40}
                                        bgColor='#95ac3a'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>MySQL</p>
                                    <ProgressBar
                                        completed={80}
                                        bgColor='#6639b7'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>CSS</p>
                                    <ProgressBar
                                        completed={90}
                                        bgColor='#95ac3a'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                            </div>
                         </div>
                         </p>
                    </TabPanel>
                    <TabPanel>
                    <div className='mt-8'>
                            <div className='space-y-2'>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>C++</p>
                                    <ProgressBar
                                        completed={90}
                                        bgColor='#db3552'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                <p className='text-white'>C</p>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <ProgressBar
                                        completed={95}
                                        bgColor='#00a8e0'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                <p className='text-white'>Java</p>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <ProgressBar
                                        completed={40}
                                        bgColor='#6639b7'
                                        animateOnRender={true}
                                        height='15px'
                                    ></ProgressBar>
                                </div>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>Python</p>
                                    <ProgressBar
                                        completed={30}
                                        bgColor='#95ac3a'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                            </div>
                           
                         </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='mt-8'>
                            <div className='space-y-2'>
                                <div className='w-80 md:w-340px lg:w-96'>
                                    <p className='text-white'>Machine Learning</p>
                                    <ProgressBar
                                        completed={50}
                                        bgColor='#db3552'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                
                                <div className='w-80 md:w-340px lg:w-96'>
                                <p className='text-white'>React Native </p>
                                    <ProgressBar
                                        completed={30}
                                        bgColor='#00a8e0'
                                        animateOnRender={true}
                                        height='15px'

                                    ></ProgressBar>
                                </div>
                                
                                
                            </div>
                           
                         </div>
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default Skill;