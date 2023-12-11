import Header from "../components/Header";
import About from "./About/About";
import Banner from "./Banner/Banner";
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
        </div>
    );
};

export default Home;