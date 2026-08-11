import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const [user, setUser] = useState(null);
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).then((error) => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const loggedInUser = result.user;
                if (!loggedInUser.email) {
                    if (loggedInUser.providerData) {
                        const gitProvider = loggedInUser.providerData.find(p => p.providerId === 'github.com')
                        if (gitProvider && gitProvider.email) {
                            loggedInUser.email = gitProvider.email;
                        }
                    }
                }
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign Out Successful");
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h3>Please Login</h3>
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <div>
                        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                        <button onClick={handleGithubSignIn}>Sign in with Github</button>
                    </div>

            }
            {
                user && <div>
                    <h3>{user?.displayName}</h3>
                    <h5>Email: {user?.email}</h5>
                    <img src={user?.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;