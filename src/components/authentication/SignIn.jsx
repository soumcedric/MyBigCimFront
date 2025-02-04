import React, { PureComponent, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Navigate, useNavigate, Link } from 'react-router-dom';

var SignIn = () => {

    const [data, setData] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

    });

    const handleSubmit = (e) => {
        debugger
        navigate("/fonction");
    }

    return (
                <section className="auth bg-base d-flex flex-wrap">
                    <div className="auth-left d-lg-block d-none">
                        <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                            <img src="./src/assets/new/images/auth/auth-img.png"  />
                           
                        </div>
                    </div>
                    <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                        <div className="max-w-464-px mx-auto w-100">
                            <div>
                                <a href="index.html" className="mb-40 max-w-290-px">
                                    <img src="./src/assets/new/images/logo.png" alt />
                                </a>
                                <h4 className="mb-12">Se connecter</h4>
                                <p className="mb-32 text-secondary-light text-lg">Bienvenu(e)! Veuillez saisir vos informations</p>
                            </div>
                            <form action="#">
                                <div className="icon-field mb-16">
                                    <span className="icon top-50 translate-middle-y">
                                        <Icon icon="mage:email" />
                                    </span>
                                    <input type="email" className="form-control h-56-px bg-neutral-50 radius-12" placeholder="Email" />
                                </div>
                                <div className="position-relative mb-20">
                                    <div className="icon-field">
                                        <span className="icon top-50 translate-middle-y">
                                            <Icon icon="solar:lock-password-outline" />
                                        </span>
                                        <input type="password" className="form-control h-56-px bg-neutral-50 radius-12" id="your-password" placeholder="Mot de passe" />
                                    </div>
                                    <span className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light" data-toggle="#your-password" />
                                </div>
                                <div className>
                                    <div className="d-flex justify-content-between gap-2">
                                        <div className="form-check style-check d-flex align-items-center">
                                            <input className="form-check-input border border-neutral-300" type="checkbox" defaultValue id="remeber" />
                                            <label className="form-check-label" htmlFor="remeber">Remember me </label>
                                        </div>
                                        <a href="javascript:void(0)" className="text-primary-600 fw-medium">Forgot Password?</a>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32" onClick={(e) => handleSubmit()}>Se connecter</button>
                                <div className="mt-32 center-border-horizontal text-center">
                                    <span className="bg-base z-1 px-4">Or sign in with</span>
                                </div>
                                <div className="mt-32 d-flex align-items-center gap-3">
                                    <button type="button" className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50">
                                        <Icon icon="ic:baseline-facebook" className="text-primary-600 text-xl line-height-1" />
                                        Google
                                    </button>
                                    <button type="button" className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50">
                                        <Icon icon="logos:google-icon" className="text-primary-600 text-xl line-height-1" />
                                        Google
                                    </button>
                                </div>
                                <div className="mt-32 text-center text-sm">
                                    <p className="mb-0">Don’t have an account? <a href="sign-up.html" className="text-primary-600 fw-semibold">Sign Up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

    )
}

export default SignIn;