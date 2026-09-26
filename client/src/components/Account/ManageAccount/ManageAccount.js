import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Account from '../Account';
import './ManageAccount.css';

const ManageAccount = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    // Load existing user details
    useEffect(() => {

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            const user = JSON.parse(savedUser);

            const nameParts = user.name ? user.name.split(" ") : [];

            setFirstName(nameParts[0] || "");
            setLastName(nameParts.slice(1).join(" ") || "");
        }

    }, []);

    // SAVE CHANGES
    const handleSaveChanges = async () => {

        try {

            const savedUser = localStorage.getItem("user");

            if (!savedUser) {
                alert("Please login first.");
                navigate("/account/login");
                return;
            }

            const user = JSON.parse(savedUser);

            const fullName = `${firstName} ${lastName}`.trim();

            if (!firstName.trim()) {
                alert("Please enter your first name.");
                return;
            }

            const res = await axios.put(
                "http://localhost:5000/api/user/update",
                {
                    userId: user.id,
                    name: fullName
                }
            );

            // Update localStorage
            const updatedUser = {
                ...user,
                name: fullName
            };

            localStorage.setItem(
                "user",
                JSON.stringify(updatedUser)
            );

            alert("Account details updated successfully!");

        } catch (error) {

            console.log("UPDATE ERROR:", error);

            alert(
                error.response?.data?.message ||
                "Failed to update account."
            );
        }
    };

    // DELETE ACCOUNT
    const handleDeleteAccount = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const savedUser = localStorage.getItem("user");

            if (!savedUser) {
                alert("Please login first.");
                navigate("/account/login");
                return;
            }

            const user = JSON.parse(savedUser);

            await axios.delete(
                "http://localhost:5000/api/user/delete",
                {
                    data: {
                        userId: user.id
                    }
                }
            );

            // Remove login information
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            alert("Account deleted successfully!");

            navigate("/account/login");

        } catch (error) {

            console.log("DELETE ERROR:", error);

            alert(
                error.response?.data?.message ||
                "Failed to delete account."
            );
        }
    };

    return (
        <Account>

            <div className="manage__account__container">

                {/* EDIT ACCOUNT */}

                <div className="edit__account__container">

                    <div className="edit__account">

                        <div className="edit__account__header">
                            Edit account
                        </div>

                        <div className="edit__account__form__container">

                            <div className="edit__account__form">

                                <div className="fname__input__container edit__input__container">

                                    <label className="fname__label input__label">
                                        First name
                                    </label>

                                    <input
                                        type="text"
                                        className="fname__input edit__account__input"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />

                                </div>

                                <div className="lname__input__container edit__input__container">

                                    <label className="lname__label input__label">
                                        Last name
                                    </label>

                                    <input
                                        type="text"
                                        className="lname__input edit__account__input"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />

                                </div>

                                <div className="save__changes__button__container">

                                    <button
                                        className="save__changes__button"
                                        onClick={handleSaveChanges}
                                    >
                                        Save Changes
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* SEPARATOR */}

                <div className="separator__line"></div>


                {/* DELETE ACCOUNT */}

                <div className="delete_account__container">

                    <div className="delete__account">

                        <div className="delete__account__header">
                            Delete account
                        </div>

                        <div className="delete__account__prompt">
                            Do you want to cancel subscription?
                        </div>

                        <div className="delete__account__button__container">

                            <button
                                className="delete__account__button"
                                onClick={handleDeleteAccount}
                            >
                                Delete Account
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </Account>
    );
};

export default ManageAccount;