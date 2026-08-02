import Accordion from "./Accordion/Accordion";
import Hero from "./Hero/Hero";
import HomeCard from "./HomeCard/HomeCard";
import Timeline from "./Timeline/Timeline";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="max-w-300 mx-auto mt-10">
                <Timeline></Timeline>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-300 mx-auto my-10">
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
            </div>
            <div className="max-w-300 mx-auto mb-10">
                <Accordion></Accordion>
            </div>
        </div>
    );
};

export default Home;