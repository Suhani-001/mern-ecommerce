import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginCard.css';

const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/user/login",
                {
                    email,
                    password
                }
            );

            // Save login token
            localStorage.setItem("token", res.data.token);

            // Save logged-in user's details
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("Login successful!");

            navigate("/account/me");

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="login__card__container">
            <div className="login__card">

                <div className="login__header">
                    <p className="login__welcome">
                        WELCOME BACK
                    </p>

                    <h1>Login</h1>

                    <p className="login__subtitle">
                        Sign in to continue to Vastra
                    </p>
                </div>

                <div className="login__inputs">

                    <div className="email__input__container input__container">
                        <label className="email__label input__label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="email__input login__input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="password__input__container input__container">
                        <label className="password__label input__label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="password__input login__input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="login__forgot__top">
                        <span>Forgot password?</span>
                    </div>

                    <div className="login__button__container">
                        <button
                            className="login__button"
                            onClick={handleLogin}
                        >
                            LOGIN
                        </button>
                    </div>

                </div>

                <div className="login__other__actions">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/account/register">
                            Create account
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LoginCard;