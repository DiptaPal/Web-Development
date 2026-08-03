const FormAction = () => {

    const handleAction = (formData) => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
    }

    return (
        <div>
            <form action={handleAction} className="space-y-4 border rounded p-6">
                <input type="text" placeholder="Your Name" className="input" name="name" id="name" /><br />
                <input type="email" placeholder="Your Email" className="input" name="email" id="email" />
                <div className="flex justify-center items-center">
                    <input className="cursor-pointer btn" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default FormAction;