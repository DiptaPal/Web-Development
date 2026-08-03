import useInputField from "../../hooks/useInputField";

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }

    return (
        <div className="border rounded p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" onChange={nameOnChange} defaultValue={name} placeholder="Your Name" className="input" name="name" id="name" required /><br />
                <input type="email" onChange={emailOnChange} defaultValue={email} placeholder="Your Email" className="input" name="email" id="email" required /><br />
                <input type="password" onChange={passwordOnChange} defaultValue={password} placeholder="Your Password" className="input" name="password" id="password" required />
                <div className="flex justify-center items-center">
                    <input className="cursor-pointer btn" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default HookForm;