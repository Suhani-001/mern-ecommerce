import './Help.css';

const FAQ = () => {
    return (
        <div className="help__page">

            <div className="help__content">

                <p className="help__label">VASTRA HELP</p>

                <h1>Frequently Asked Questions</h1>

                <div className="faq__item">
                    <h2>How can I place an order?</h2>
                    <p>
                        Select a product, choose the required size and
                        quantity, add it to your bag and proceed to checkout.
                    </p>
                </div>

                <div className="faq__item">
                    <h2>Can I change my order?</h2>
                    <p>
                        Contact our support team as soon as possible if you
                        need to make changes to your order.
                    </p>
                </div>

                <div className="faq__item">
                    <h2>How can I return a product?</h2>
                    <p>
                        You can contact Vastra support with your order details
                        to request a return.
                    </p>
                </div>

                <div className="faq__item">
                    <h2>How can I contact Vastra?</h2>
                    <p>
                        You can reach us through the Contact Us section or
                        email us at support@vastra.com.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default FAQ;