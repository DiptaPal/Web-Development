
const Accordion = () => {
    return (
        <div>
            <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
                <summary className="collapse-title font-semibold">How do I create an account?</summary>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </details>
            <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold">I forgot my password. What should I do?</summary>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </details>
            <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold">How do I update my profile information?</summary>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </details>
        </div>
    );
};

export default Accordion;