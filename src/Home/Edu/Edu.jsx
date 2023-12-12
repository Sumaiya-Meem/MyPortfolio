import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
const Edu = () => {
    return (
        <div className=" w-[80%] mx-auto mt-10">
            <h1 className="text-white text-2xl font-bold ">Education</h1>
            <div className='h-[3px] w-8 bg-[#c9f31d] mt-1'></div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2019 - 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">BSc in CSE</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Barishal</h4>
                    <p>
                       
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 50, 150)', color: '#fff'}}
                    date="2016-2018"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">HSC</h3>
                    <h4 className="vertical-timeline-element-subtitle">BN Khan College</h4>
                    <p>
                        
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
};

export default Edu;