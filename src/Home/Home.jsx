import Footers from "../components/Footer";
import Header from "../components/Header";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Edu from "./Edu/Edu";
import Experinece from "./Experinece/Experinece";
import Skill from "./Skills/Skill";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <section id="about">
                <About></About>
            </section>
            <section id="skill">
                <Skill></Skill>
            </section>
            <section id="experience">
                <Experinece></Experinece>
            </section>
            <section id="contact">
                <Contact></Contact>
            </section>
           
            <Edu></Edu>
            <Footers></Footers>
        </div>
    );
};

export default Home;