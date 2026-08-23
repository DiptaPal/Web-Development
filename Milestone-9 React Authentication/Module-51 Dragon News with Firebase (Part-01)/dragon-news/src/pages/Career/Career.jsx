import {
    FaArrowRight,
    FaBriefcase,
    FaBullseye,
    FaCheckCircle,
    FaCode,
    FaEdit,
    FaLaptop,
    FaUsers,
} from "react-icons/fa";
import Navbar from './../../components/Navbar/Navbar';

const Career = () => {
    const jobs = [
        {
            icon: <FaEdit />,
            title: "News Writer",
            type: "Full Time",
            location: "Remote",
            description:
                "Create engaging and informative news stories while maintaining accuracy, clarity, and a strong editorial standard.",
        },
        {
            icon: <FaCode />,
            title: "Frontend Developer",
            type: "Full Time",
            location: "Remote",
            description:
                "Build modern, responsive, and user-friendly experiences for our readers using the latest web technologies.",
        },
        {
            icon: <FaLaptop />,
            title: "Digital Content Editor",
            type: "Part Time",
            location: "Hybrid",
            description:
                "Manage and improve digital content while ensuring stories are presented clearly and consistently across the platform.",
        },
        {
            icon: <FaUsers />,
            title: "Social Media Executive",
            type: "Full Time",
            location: "Remote",
            description:
                "Help us connect with our audience by creating engaging social media content and promoting our latest stories.",
        },
    ];

    const benefits = [
        "Flexible working environment",
        "Opportunities to learn and grow",
        "Collaborative team culture",
        "Work on meaningful digital products",
        "Remote and hybrid opportunities",
        "Professional development support",
    ];

    return (
        <main className="bg-base-100 text-[#403F3F] max-w-300 mx-auto px-2 md:px-0">

            <div className="my-8">
                <Navbar></Navbar>
            </div>

            {/* ================= HERO ================= */}
            <section className="bg-[#F3F3F3] border-b border-[#E7E7E7]">
                <div className="py-16 md:py-24 text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E7E7E7] text-[#D72050] mb-6">
                        <FaBriefcase />
                        <span className="font-semibold">
                            Careers at The Dragon News
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Build the Future of
                        <span className="text-[#D72050]"> News</span>
                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-[#706F6F] text-base md:text-lg leading-8">
                        We're looking for passionate, creative, and curious
                        people who want to help us build a better way for
                        people to discover and experience news.
                    </p>

                    <button
                        className="btn bg-[#403F3F] hover:bg-[#D72050]
                        text-white border-none mt-8 px-7 gap-2"
                    >
                        View Open Positions
                        <FaArrowRight />
                    </button>

                </div>
            </section>


            {/* ================= INTRODUCTION ================= */}
            <section className="py-16 md:py-20">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>

                        <span className="text-[#D72050] font-bold uppercase tracking-widest text-sm">
                            Join Our Team
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                            Do Work That Matters
                        </h2>

                        <p className="text-[#706F6F] leading-8 mb-5">
                            At The Dragon News, we believe great news starts
                            with great people. We are building a team of
                            writers, developers, designers, editors, and
                            creative thinkers who are passionate about
                            delivering a better news experience.
                        </p>

                        <p className="text-[#706F6F] leading-8">
                            Whether you're an experienced professional or
                            starting your career, we provide an environment
                            where you can learn, contribute, and grow.
                        </p>

                    </div>


                    {/* Mission Card */}
                    <div className="bg-[#F3F3F3] rounded-2xl p-8">

                        <div className="w-14 h-14 rounded-xl bg-[#D72050]/10 flex items-center justify-center mb-6">
                            <FaBullseye className="text-3xl text-[#D72050]" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4">
                            Our Mission
                        </h3>

                        <p className="text-[#706F6F] leading-8">
                            To make news easier to discover, understand, and
                            explore while creating a platform that connects
                            people with the stories that matter.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= OPEN POSITIONS ================= */}
            <section
                id="open-positions"
                className="bg-[#F3F3F3] border-y border-[#E7E7E7]"
            >

                <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">

                    <div className="text-center mb-12">

                        <span className="text-[#D72050] font-bold uppercase tracking-widest text-sm">
                            Opportunities
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Open Positions
                        </h2>

                        <p className="max-w-2xl mx-auto mt-4 text-[#706F6F]">
                            Explore our current opportunities and find a role
                            where you can make an impact.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 gap-6">

                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#E7E7E7]
                                rounded-xl p-6
                                hover:-translate-y-1
                                hover:shadow-lg
                                transition-all duration-300"
                            >

                                {/* Icon */}
                                <div className="flex items-start justify-between">

                                    <div className="w-12 h-12 rounded-lg bg-[#D72050]/10 flex items-center justify-center text-[#D72050] text-xl">
                                        {job.icon}
                                    </div>

                                    <span className="badge bg-[#F3F3F3] border-none text-[#706F6F]">
                                        {job.type}
                                    </span>

                                </div>


                                {/* Job title */}
                                <h3 className="text-xl font-bold mt-5 mb-3">
                                    {job.title}
                                </h3>


                                {/* Location */}
                                <p className="text-sm text-[#9F9F9F] mb-4">
                                    📍 {job.location}
                                </p>


                                {/* Description */}
                                <p className="text-[#706F6F] leading-7">
                                    {job.description}
                                </p>


                                {/* Button */}
                                <button className="btn btn-sm bg-transparent hover:bg-[#D72050] hover:text-white text-[#403F3F] border-[#E7E7E7] hover:border-[#D72050] mt-6 gap-2">
                                    Apply Now
                                    <FaArrowRight />
                                </button>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= BENEFITS ================= */}
            <section className="py-16 md:py-20">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>

                        <span className="text-[#D72050] font-bold uppercase tracking-widest text-sm">
                            Why Join Us
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                            Grow With The Dragon News
                        </h2>

                        <p className="text-[#706F6F] leading-8">
                            We want our team members to feel supported,
                            challenged, and excited about the work they do.
                            That's why we focus on creating a positive and
                            collaborative working environment.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 gap-4">

                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-[#F3F3F3] border border-[#E7E7E7] rounded-xl p-4"
                            >
                                <FaCheckCircle className="text-[#D72050] shrink-0" />

                                <span className="text-sm font-medium">
                                    {benefit}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= CULTURE ================= */}
            <section className="bg-[#403F3F] text-white">

                <div className="py-16 md:py-20">

                    <div className="text-center max-w-3xl mx-auto">

                        <div className="w-16 h-16 mx-auto rounded-full bg-[#D72050] flex items-center justify-center mb-6">
                            <FaUsers className="text-3xl" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-5">
                            A Team That Works Together
                        </h2>

                        <p className="text-white/70 text-base md:text-lg leading-8">
                            Great things happen when people with different
                            ideas, skills, and perspectives work together.
                            We value collaboration, creativity, curiosity,
                            and a willingness to learn.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="py-16 md:py-20 text-center">

                <h2 className="text-3xl md:text-4xl font-bold">
                    Don't See Your Role?
                </h2>

                <p className="text-[#706F6F] max-w-2xl mx-auto mt-4 mb-7 leading-7">
                    We're always interested in meeting talented and
                    enthusiastic people. Send us your details and tell us
                    how you could contribute to The Dragon News.
                </p>

                <button
                    className="btn bg-[#D72050] hover:bg-[#403F3F]
                    text-white border-none px-8 gap-2"
                >
                    Get In Touch
                    <FaArrowRight />
                </button>

            </section>

        </main>
    );
};

export default Career;