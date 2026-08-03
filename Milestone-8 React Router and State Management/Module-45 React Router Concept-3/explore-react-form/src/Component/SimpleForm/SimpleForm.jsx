const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 border rounded p-6">
                <input type="text" placeholder="Your Name" className="input" name="name" id="name" required /><br />
                <input type="email" placeholder="Your Email" className="input" name="email" id="email" required />
                <div className="flex justify-center items-center">
                    <input className="cursor-pointer btn" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default SimpleForm;