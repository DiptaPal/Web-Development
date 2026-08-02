
const SignUp = () => {
    return (
        <div className="my-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <label className="label">Conform Password</label>
                        <input type="password" className="input" placeholder="Conform Password" />
                        <button className="btn btn-neutral mt-4">Sign Up</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default SignUp;