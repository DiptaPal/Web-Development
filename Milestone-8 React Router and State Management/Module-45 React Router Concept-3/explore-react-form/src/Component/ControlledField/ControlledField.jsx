import { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if (password.length < 6) {
            setError("Password must be 6 characters or longer.")
        } else {
            setError("");
        }
    }

    const handleNameOnChange = e => {
        setName(e.target.value);
    }

    const handleEmailOnChange = e => {
        setEmail(e.target.value)
    }


    const handlePasswordOnChange = e => {
        setPassword(e.target.value);
        if (password.length < 6) {
            setError("Password must be 6 characters or longer.")
        } else {
            setError("");
        }
    }

    return (
        <div className="border rounded p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" onChange={handleNameOnChange} defaultValue={name} placeholder="Your Name" className="input" name="name" id="name" required /><br />
                <input type="email" onChange={handleEmailOnChange} defaultValue={email} placeholder="Your Email" className="input" name="email" id="email" required /><br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} placeholder="Your Password" className="input" name="password" id="password" required />
                <div className="flex justify-center items-center">
                    <input className="cursor-pointer btn" type="submit" value="Submit" />
                </div>
            </form>
            <p>
                <small className="text-red-600">{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;