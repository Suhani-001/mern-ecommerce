import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterCard.css';

const RegisterCard = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {

        e.preventDefault();

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
            alert("Please fill all the fields.");
            return;
        }

        try {

            const fullName = `${firstName.trim()} ${lastName.trim()}`;

            const res = await axios.post(
                "http://localhost:5000/api/user/register",
                {
                    name: fullName,
                    email: email.trim(),
                    password
                }
            );

            alert("Account created successfully!");

            console.log("REGISTER RESPONSE:", res.data);

            // Go to login page
            navigate("/account/login");

        } catch (error) {

            console.log("REGISTER ERROR:", error);
            console.log("RESPONSE:", error.response);

            alert(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );
        }
    };

    return (
        <div className="register__card">

            <div className="register__header">
                <span className="register__small__text">
                    WELCOME TO VASTRA
                </span>

                <h1>Create Account</h1>

                <p>
                    Create your account to continue shopping with us.
                </p>
            </div>

            <form
                className="register__form"
                onSubmit={handleRegister}
            >

                <div className="register__name__row">

                    <div className="register__input__group">
                        <label>First name</label>

                        <input
                            type="text"
                            placeholder="Suhani"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="register__input__group">
                        <label>Last name</label>

                        <input
                            type="text"
                            placeholder="Jain"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                </div>

                <div className="register__input__group">
                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="register__input__group">
                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="register__button"
                >
                    CREATE ACCOUNT
                </button>

            </form>

            <div className="register__login">
                <span>Already have an account?</span>

                <Link to="/account/login">
                    Login
                </Link>
            </div>

        </div>
    );
};

export default RegisterCard;