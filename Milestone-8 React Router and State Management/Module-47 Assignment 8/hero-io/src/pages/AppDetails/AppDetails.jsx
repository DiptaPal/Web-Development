import { useState } from 'react';
import { useLoaderData } from 'react-router';
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import Graph from '../../components/Graph/Graph';
import { getAppsFromLS, storeAppsToLS } from '../../utility/addToLS';
import { convertDownload } from '../../utility/conversion';

const AppDetails = () => {
    const app = useLoaderData();

    const { id, image, title, companyName, ratingAvg, downloads, reviews, ratings, size } = app;

    const conDownload = convertDownload(downloads);
    const conReview = convertDownload(reviews);

    const [isInstalled, setIsInstalled] = useState(getAppsFromLS().includes(id));


    const handleInstall = (id) => {
        const apps = getAppsFromLS();
        if (!apps.includes(id)) {
            storeAppsToLS(id);
            setIsInstalled(true);
        }
    };


    return (
        <div className="bg-[#F5F5F5] py-5 md:py-10 lg:py-20">
            <div className="max-w-300 mx-auto px-2 lg:px-0">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 text-center md:text-left">
                    <div className="flex items-center">
                        <img src={image} className="max-w-4/5 md:max-w-87.5 h-full mx-auto object-cover" alt="app-image" />
                    </div>
                    <div className="w-full md:w-auto flex-1">
                        <h2 className="text-[#001931] text-xl md:text-3xl font-bold mb-2">{title}</h2>
                        <h4 className="text-[#627382] text-base md:text-xl">Developed by <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">{companyName}</span></h4>
                        <div className="border-b border-[#001931]/9.5 my-4 w-4/5 md:w-auto mx-auto"></div>
                        <div className="flex justify-center md:justify-start items-center gap-4 md:gap-10 mb-7">
                            <div className="text-[#001931] flex flex-col gap-2 items-center md:items-start">
                                <img className="w-10 h-10 mx-auto" src={downloadsIcon} alt="" />
                                <p className="text-xs md:text-base">Downloads</p>
                                <h1 className="text-2xl md:text-4xl font-extrabold">{conDownload}</h1>
                            </div>
                            <div className="text-[#001931] flex flex-col gap-2 items-center md:items-start">
                                <img className="w-10 h-10" src={ratingsIcon} alt="" />
                                <p className="text-xs md:text-base">Average Ratings</p>
                                <h1 className="text-2xl md:text-4xl font-extrabold">{ratingAvg}</h1>
                            </div>
                            <div className="text-[#001931] flex flex-col gap-2 items-center md:items-start">
                                <img className="w-10 h-10" src={reviewsIcon} alt="" />
                                <p className="text-xs md:text-base">Total Reviews</p>
                                <h1 className="text-2xl md:text-4xl font-extrabold">{conReview}</h1>
                            </div>
                        </div>
                        <button disabled={isInstalled} onClick={() => handleInstall(id)} className="text-white font-semibold text-base md:text-xl bg-[#00D390] rounded disabled:bg-gray-400 py-3 px-5 cursor-pointer">
                            {
                                isInstalled ? "Installed" : `Install Now (${size} MB)`
                            }
                        </button>
                    </div>
                </div>
                <div className="border-b border-[#001931]/9.5 my-6 md:my-10"></div>
                <div>
                    <h3 className="text-base md:text-2xl font-semibold">Rating</h3>
                    <div className="my-6">
                        <Graph ratings={ratings}></Graph>
                    </div>
                </div>
                <div className="border-b border-[#001931]/9.5 my-6 md:my-10"></div>
                <div>
                    <h3 className="text-base md:text-2xl font-semibold">Description</h3>
                    <p className="mt-4 text-[#627382]">
                        This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                        <span className="my-5 inline-block">
                            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                        </span>
                        For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;