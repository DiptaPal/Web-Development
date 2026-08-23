import { format } from "date-fns";
import headerLogo from "../../assets/logo.png";

const Header = () => {

    const date = new Date();

    const day = format(date, "EEEE");
    const restOfDate = format(date, "MMMM d, yyyy")

    return (
        <div className="flex justify-center items-center mt-10 mb-7 text-center">
            <div>
                <img className="max-w-70 md:max-w-87.5 mx-auto" src={headerLogo} alt="" />
                <p className="text-accent text-lg my-2">Journalism Without Fear or Favour</p>
                <div className="text-xl font-medium">
                    <span className="text-primary">{day}, </span>
                    <span className="text-accent">{restOfDate}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;