import Image from 'next/image';
import bike from "../../assets/images/black_bmw.jpg";

const AboutPage = () => {
    return (
        <div>
            <h2>This is About Page</h2>
            <Image
                src="/bugatti.jpg"
                alt="picture of car"
                width={500}
                height={300}
            ></Image>
            <Image
                src={bike}
                alt="picture of bike"
                width={500}
                height={300}
            />
            <Image
                src="https://images.unsplash.com/photo-1616410011236-7a42121dd981"
                alt='picture of iphone'
                width={500}
                height={300}
            />
            <Image
                src="https://i.ibb.co/rfzkRpJ3/Garmin-Fitness-Smartwatch.jpg"
                alt='picture of iphone'
                width={500}
                height={300}
            />
        </div>
    );
};

export default AboutPage;