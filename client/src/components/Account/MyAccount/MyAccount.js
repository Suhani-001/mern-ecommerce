import { useEffect, useState } from 'react';
import Account from '../Account';
import './MyAccount.css';
import { Link, useNavigate } from 'react-router-dom';

const MyAccount = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/account/login");
    };

    return (
        <Account>

            <div className="myaccount__page">

                {/* PAGE HEADER */}
                <div className="myaccount__heading">
                    <p>MY ACCOUNT</p>

                    <h1>
                        Welcome back{user?.name ? `, ${user.name}` : ""}
                    </h1>
                </div>


                {/* TWO COLUMNS */}
                <div className="myaccount__content">

                    {/* ACCOUNT DETAILS - LEFT */}
                    <div className="account__section profile__section">

                        <div className="profile__header">

                            <div>
                                <span className="section__small">
                                    YOUR INFORMATION
                                </span>

                                <h2>Account Details</h2>
                            </div>

                            <button
                                className="logout__button"
                                onClick={handleLogout}
                            >
                                LOGOUT
                            </button>

                        </div>


                        <div className="profile__card">

                            <div className="profile__avatar">
                                {user?.name
                                    ? user.name.charAt(0).toUpperCase()
                                    : "U"
                                }
                            </div>

                            <div className="profile__info">

                                <div className="profile__item">
                                    <span>Name</span>

                                    <strong>
                                        {user?.name || "Loading..."}
                                    </strong>
                                </div>

                                <div className="profile__item">
                                    <span>Email</span>

                                    <strong>
                                        {user?.email || "Loading..."}
                                    </strong>
                                </div>

                            </div>

                        </div>


                        <Link
                            to="/account/manage"
                            className="manage__button"
                        >
                            MANAGE ACCOUNT
                        </Link>

                    </div>


                    {/* ORDER HISTORY - RIGHT */}
                    <div className="account__section order__section">

                        <span className="section__small">
                            YOUR ACTIVITY
                        </span>

                        <h2>
                            Order History
                        </h2>


                        <div className="empty__orders">

                            <div className="empty__icon">
                                🛍
                            </div>

                            <h3>
                                No orders yet
                            </h3>

                            <p>
                                You haven't placed any orders yet.
                                Start exploring our collection.
                            </p>

                            <Link
                                to="/shop"
                                className="shop__button"
                            >
                                SHOP NOW
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </Account>
    );
};

export default MyAccount;