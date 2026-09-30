import './Help.css';

const Refund = () => {
    return (
        <div className="help__page">

            <div className="help__content">

                <p className="help__label">VASTRA HELP</p>

                <h1>Returns & Refunds</h1>

                <p className="help__intro">
                    We want you to be happy with your purchase.
                </p>

                <div className="help__section">
                    <h2>Returns</h2>
                    <p>
                        If you are not satisfied with your purchase, you can
                        request a return according to our return conditions.
                    </p>
                </div>

                <div className="help__section">
                    <h2>Refunds</h2>
                    <p>
                        Once a returned product is received and approved,
                        the applicable refund will be processed.
                    </p>
                </div>

                <div className="help__section">
                    <h2>Important</h2>
                    <p>
                        Products should be returned in their original
                        condition with the required tags and packaging.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Refund;