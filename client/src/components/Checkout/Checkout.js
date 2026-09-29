import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartItemsContext } from '../../Context/CartItemsContext';

import './Checkout.css';

const Checkout = () => {

    const cartItems = useContext(CartItemsContext);
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [address, setAddress] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: ""
    });

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    const handlePlaceOrder = (e) => {

        e.preventDefault();

        if (
            !address.name ||
            !address.phone ||
            !address.address ||
            !address.city ||
            !address.pincode
        ) {
            alert("Please fill all delivery details.");
            return;
        }

        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="checkout__page">

                <div className="order__success">

                    <div className="success__icon">
                        ✓
                    </div>

                    <p className="checkout__small">
                        VASTRA
                    </p>

                    <h1>Order placed successfully!</h1>

                    <p>
                        Thank you for shopping with Vastra.
                        Your order has been placed successfully.
                    </p>

                    <button
                        onClick={() => navigate("/shop")}
                        className="continue__shopping"
                    >
                        CONTINUE SHOPPING
                    </button>

                </div>

            </div>
        );
    }

    return (
        <div className="checkout__page">

            <div className="checkout__container">

                {/* LEFT SIDE */}

                <div className="checkout__details">

                    <div className="checkout__heading">
                        <span>VASTRA CHECKOUT</span>
                        <h1>Checkout</h1>
                    </div>

                    <form onSubmit={handlePlaceOrder}>

                        <div className="checkout__section">

                            <h2>Delivery Details</h2>

                            <div className="checkout__row">

                                <div className="checkout__input">
                                    <label>Full Name</label>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={address.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="checkout__input">
                                    <label>Phone Number</label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        value={address.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>

                            <div className="checkout__input">
                                <label>Address</label>

                                <textarea
                                    name="address"
                                    placeholder="House no., street, area"
                                    value={address.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="checkout__row">

                                <div className="checkout__input">
                                    <label>City</label>

                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={address.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="checkout__input">
                                    <label>PIN Code</label>

                                    <input
                                        type="text"
                                        name="pincode"
                                        placeholder="PIN Code"
                                        value={address.pincode}
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>

                        </div>


                        {/* PAYMENT */}

                        <div className="checkout__section">

                            <h2>Payment Method</h2>

                            <div className="payment__options">

                                <label
                                    className={
                                        paymentMethod === "upi"
                                            ? "payment__option selected"
                                            : "payment__option"
                                    }
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="upi"
                                        checked={paymentMethod === "upi"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />

                                    <div>
                                        <strong>UPI</strong>
                                        <span>Google Pay / PhonePe / Paytm</span>
                                    </div>
                                </label>


                                <label
                                    className={
                                        paymentMethod === "card"
                                            ? "payment__option selected"
                                            : "payment__option"
                                    }
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={paymentMethod === "card"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />

                                    <div>
                                        <strong>Card</strong>
                                        <span>Credit / Debit Card</span>
                                    </div>
                                </label>


                                <label
                                    className={
                                        paymentMethod === "cod"
                                            ? "payment__option selected"
                                            : "payment__option"
                                    }
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />

                                    <div>
                                        <strong>Cash on Delivery</strong>
                                        <span>Pay when your order arrives</span>
                                    </div>
                                </label>

                            </div>

                        </div>


                        <button
                            type="submit"
                            className="place__order__button"
                        >
                            PLACE ORDER
                        </button>

                    </form>

                </div>


                {/* RIGHT SIDE - ORDER SUMMARY */}

                <div className="checkout__summary">

                    <div className="summary__header">
                        <span>YOUR ORDER</span>
                        <h2>Order Summary</h2>
                    </div>

                    <div className="summary__items">

                        {cartItems.items.map((item) => (

                            <div
                                className="summary__item"
                                key={item._id}
                            >

                                <div className="summary__item__info">

                                    <span>
                                        {item.name}
                                    </span>

                                    <small>
                                        Qty: {item.quantity || 1}
                                    </small>

                                </div>

                                <strong>
                                    ₹{item.price}
                                </strong>

                            </div>

                        ))}

                    </div>

                    <div className="summary__line"></div>

                    <div className="summary__total">

                        <span>Total</span>

                        <strong>
                            ₹{cartItems.totalAmount}.00
                        </strong>

                    </div>

                    

                </div>

            </div>

        </div>
    );
};

export default Checkout;