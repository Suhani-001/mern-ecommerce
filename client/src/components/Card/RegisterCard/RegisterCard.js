import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './RegisterCard.css';

const RegisterCard = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/user/register",
                {
                    name,
                    email,
                    password
                }
            );

            alert("Account created successfully!");
            console.log(res.data);

        } catch (error) {
    console.log("REGISTER ERROR:", error);
    console.log("RESPONSE:", error.response);
    alert(error.message);
}
    };

    return (
        <div className="register__card__container">
            <div className="register__card">

                <div className="register__header">
                    <h1>Create Account</h1>
                </div>

                <div className="register__inputs">

                    <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">
                            First name
                        </label>

                        <input
                            type="text"
                            className="fname__input register__input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">
                            Last name
                        </label>

                        <input
                            type="text"
                            className="lname__input register__input"
                        />
                    </div>

                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="email__input register__input"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="password__input register__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="register__button__container">
                        <button
                            className="register__button"
                            onClick={handleRegister}
                        >
                            Create Account
                        </button>
                    </div>

                </div>

                <div className="register__other__actions">
                    <div className="register__login__account">
                        Already have account?{" "}
                        <Link to="/account/login">
                            Login
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterCard;