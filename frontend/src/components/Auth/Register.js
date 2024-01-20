import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: '',
        c_password: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleRegisterChange = (e) => {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
    };

    const handleUserRegisterSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://127.0.0.1:8000/api/register', userRegister)
        .then(function (response) {
            console.log(response);

            // Redirect the user or show a success message

        })
        .catch(function (error) {
            console.error(error);

            // Provide user-friendly error feedback

        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleUserRegisterSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="text"
                                    value={userRegister.name}
                                    onChange={handleRegisterChange}
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    value={userRegister.email}
                                    onChange={handleRegisterChange}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={userRegister.password}
                                    onChange={handleRegisterChange}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={userRegister.c_password}
                                    onChange={handleRegisterChange}
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
