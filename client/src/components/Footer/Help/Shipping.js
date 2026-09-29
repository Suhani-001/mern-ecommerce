import './Help.css';

const Shipping = () => {
    return (
        <div className="help__page">

            <div className="help__content">

                <p className="help__label">VASTRA HELP</p>

                <h1>Shipping & Delivery</h1>

                <p className="help__intro">
                    We want your Vastra order to reach you safely and on time.
                </p>

                <div className="help__section">
                    <h2>Delivery Information</h2>
                    <p>
                        Orders are processed after confirmation and are
                        delivered to the address provided during checkout.
                    </p>
                </div>

                <div className="help__section">
                    <h2>Estimated Delivery</h2>
                    <p>
                        Orders are generally delivered within 3–7 working
                        days, depending on your location.
                    </p>
                </div>

                <div className="help__section">
                    <h2>Order Tracking</h2>
                    <p>
                        Once your order is shipped, tracking information can
                        be provided through your registered contact details.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Shipping;