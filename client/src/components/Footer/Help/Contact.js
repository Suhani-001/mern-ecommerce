import './Help.css';

const Contact = () => {
    return (
        <div className="help__page">

            <div className="help__content">

                <p className="help__label">VASTRA HELP</p>

                <h1>Contact Us</h1>

                <p className="help__intro">
                    Have a question? Our support team is here to help.
                </p>

                <div className="contact__details">

                    <div className="contact__box">
                        <span>PHONE</span>
                        <strong>+91 98745 22663</strong>
                    </div>

                    <div className="contact__box">
                        <span>EMAIL</span>
                        <strong>support@vastra.com</strong>
                    </div>

                    <div className="contact__box">
                        <span>LOCATION</span>
                        <strong>Moradabad, India</strong>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;