import {
    FaArrowRight,
    FaBullseye,
    FaCheckCircle,
    FaGlobe,
    FaNewspaper,
    FaShieldAlt,
    FaUsers,
} from "react-icons/fa";
import { Link } from 'react-router';
import Navbar from "../../components/Navbar/Navbar";




const About = () => {
    const categories = [
        {
            icon: <FaNewspaper />,
            title: "Breaking News",
            description:
                "Stay updated with the latest and most important events as they happen.",
        },
        {
            icon: <FaGlobe />,
            title: "International News",
            description:
                "Follow major events, developments, and stories from around the world.",
        },
        {
            icon: <FaBullseye />,
            title: "National News",
            description:
                "Discover important stories and developments happening across the country.",
        },
        {
            icon: <FaUsers />,
            title: "Sports",
            description:
                "Get the latest updates, results, and stories from the world of sports.",
        },
        {
            icon: <FaGlobe />,
            title: "Technology",
            description:
                "Explore the latest innovations, technology trends, and digital developments.",
        },
        {
            icon: <FaNewspaper />,
            title: "Entertainment",
            description:
                "Keep up with interesting stories from the world of entertainment and culture.",
        },
    ];

    return (
        <main className="bg-base-100 text-[#403F3F] max-w-300 mx-auto px-0 md:px-0">

            <div className="my-8">
                <Navbar></Navbar>
            </div>

            {/* ================= HERO ================= */}
            <section className="bg-[#F3F3F3] border-b border-[#E7E7E7]">
                <div className="py-16 md:py-24 text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E7E7E7] text-[#D72050] mb-6">
                        <FaNewspaper />
                        <span className="font-semibold">
                            About The Dragon News
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Stay Informed.
                        <span className="text-[#D72050]"> Stay Connected.</span>
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-[#706F6F] text-base md:text-lg leading-8">
                        The Dragon News is your destination for discovering
                        the latest stories, important events, and interesting news from around the world.
                    </p>

                </div>
            </section>


            {/* ================= WHO WE ARE ================= */}
            <section className="py-16 md:py-20">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text */}
                    <div>

                        <span className="text-[#D72050] font-bold uppercase tracking-widest text-sm">
                            Who We Are
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                            Your Daily Source of News
                        </h2>

                        <p className="text-[#706F6F] leading-8 mb-5">
                            Welcome to{" "}
                            <span className="font-semibold text-[#403F3F]">
                                The Dragon News
                            </span>
                            , a modern news platform created to make
                            discovering and reading news simple, convenient,
                            and enjoyable.
                        </p>

                        <p className="text-[#706F6F] leading-8">
                            We bring together stories from different areas
                            including breaking news, national news,
                            international news, sports, technology,
                            entertainment, and lifestyle.
                        </p>

                    </div>


                    {/* Information Card */}
                    <div className="bg-[#F3F3F3] rounded-2xl p-6 md:p-8">

                        <div className="grid grid-cols-2 gap-4">

                            {/* Card 1 */}
                            <div className="bg-white rounded-xl p-5 border border-[#E7E7E7]">
                                <FaGlobe className="text-3xl text-[#D72050] mb-4" />

                                <h3 className="font-bold text-lg">
                                    Global
                                </h3>

                                <p className="text-sm text-[#9F9F9F] mt-2">
                                    Stories from around the world
                                </p>
                            </div>


                            {/* Card 2 */}
                            <div className="bg-white rounded-xl p-5 border border-[#E7E7E7]">
                                <FaNewspaper className="text-3xl text-[#D72050] mb-4" />

                                <h3 className="font-bold text-lg">
                                    Latest
                                </h3>

                                <p className="text-sm text-[#9F9F9F] mt-2">
                                    Stay updated with current stories
                                </p>
                            </div>


                            {/* Card 3 */}
                            <div className="bg-white rounded-xl p-5 border border-[#E7E7E7]">
                                <FaShieldAlt className="text-3xl text-[#D72050] mb-4" />

                                <h3 className="font-bold text-lg">
                                    Reliable
                                </h3>

                                <p className="text-sm text-[#9F9F9F] mt-2">
                                    Information that matters
                                </p>
                            </div>


                            {/* Card 4 */}
                            <div className="bg-white rounded-xl p-5 border border-[#E7E7E7]">
                                <FaUsers className="text-3xl text-[#D72050] mb-4" />

                                <h3 className="font-bold text-lg">
                                    Community
                                </h3>

                                <p className="text-sm text-[#9F9F9F] mt-2">
                                    Built for our readers
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= WHAT WE COVER ================= */}
            <section className="bg-[#F3F3F3] border-y border-[#E7E7E7]">

                <div className="py-16 md:py-20">

                    <div className="text-center mb-12">

                        <span className="text-[#D72050] font-bold uppercase tracking-widest text-sm">
                            What We Cover
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            News That Matters
                        </h2>

                        <p className="max-w-2xl mx-auto mt-4 text-[#706F6F]">
                            Explore different categories and discover stories
                            that keep you informed about the world around you.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#E7E7E7] rounded-xl p-6
                                hover:-translate-y-1 hover:shadow-lg
                                transition-all duration-300"
                            >

                                <div className="w-12 h-12 rounded-lg bg-[#D72050]/10 flex items-center justify-center text-[#D72050] text-2xl mb-5">
                                    {category.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {category.title}
                                </h3>

                                <p className="text-[#706F6F] leading-7">
                                    {category.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= OUR MISSION ================= */}
            <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">

                <div className="bg-[#403F3F] rounded-2xl p-8 md:p-14 text-center text-white">

                    <div className="w-16 h-16 mx-auto rounded-full bg-[#D72050] flex items-center justify-center mb-6">
                        <FaBullseye className="text-3xl" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        Our Mission
                    </h2>

                    <p className="max-w-3xl mx-auto text-white/70 text-base md:text-lg leading-8">
                        Our mission is simple — to make staying informed
                        easier. We aim to present news in a clean and
                        user-friendly way, helping readers discover the
                        stories that matter to them.
                    </p>

                </div>

            </section>


            {/* ================= WHY US ================= */}
            <section className="bg-[#F3F3F3] border-y border-[#E7E7E7]">

                <div className="px-4 py-16 md:py-20">

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div>

                            <span className="text-[#D72050] font-bold uppercase tracking-widest text-sm">
                                Why The Dragon News?
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                                Simple. Clear. Informative.
                            </h2>

                            <p className="text-[#706F6F] leading-8">
                                We believe that following the news shouldn't
                                be complicated. The Dragon News is designed
                                with a clean interface so readers can quickly
                                find and explore the stories they care about.
                            </p>

                        </div>


                        <div className="space-y-4">

                            {[
                                "Easy-to-read news stories",
                                "Multiple news categories",
                                "Clean and user-friendly interface",
                                "News from different areas of interest",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-white border border-[#E7E7E7] rounded-xl p-4"
                                >
                                    <FaCheckCircle className="text-[#D72050] text-xl shrink-0" />

                                    <span className="font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">

                <h2 className="text-3xl md:text-4xl font-bold">
                    Stay Connected With The News
                </h2>

                <p className="text-[#706F6F] max-w-2xl mx-auto mt-4 mb-7 leading-7">
                    Explore the latest stories and discover what's happening
                    around the world with The Dragon News.
                </p>

                <Link to="/" className="btn bg-[#403F3F] hover:bg-[#D72050] text-white border-none px-7 gap-2">
                    Explore Latest News
                    <FaArrowRight />
                </Link>

            </section>

        </main>
    );
};

export default About;