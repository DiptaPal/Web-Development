import { use } from 'react';
import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from './../../context/AuthContext';

const RightAside = () => {
    const { user } = use(AuthContext);

    return (
        <div>
            {!user && <SocialLogin></SocialLogin>}
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;