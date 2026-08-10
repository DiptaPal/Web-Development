import Banner from "../../components/Banner/Banner";
import States from "../../components/States/States";
import TopApps from "../../components/TopApps/TopApps";

const Home = () => {
    return (
        <div>
            <title>Hero-IO: Home</title>
            <meta name="description" content="A hero.io website for useful apps" />
            <Banner></Banner>
            <States></States>
            <TopApps></TopApps>
        </div>
    );
};

export default Home;