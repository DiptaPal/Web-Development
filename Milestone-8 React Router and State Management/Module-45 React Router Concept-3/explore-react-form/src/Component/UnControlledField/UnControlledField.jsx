import { useRef } from 'react';

const UnControlledField = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        console.log(name, email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 border rounded p-6">
                <input ref={nameRef} type="text" placeholder="Your Name" className="input" name="name" id="name" /><br />
                <input ref={emailRef} type="email" placeholder="Your Email" className="input" name="email" id="email" />
                <div className="flex justify-center items-center">
                    <input className="cursor-pointer btn" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UnControlledField;