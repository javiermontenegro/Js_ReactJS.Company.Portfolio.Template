import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";

import BackgroundImage from "../assets/images/bg/1920x1080.png";

import Services from "../components/Services";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Review from "../components/Testimonial";
import Switcher from "../components/Switcher";

/**
 * Index seven 
 */
export default function IndexSeven() {
    const [isOpen, setMenu] = useState(true);

    window.addEventListener("scroll", windowScroll);

    /**
     * Window scroll
     */
    function windowScroll() {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("is-sticky");
        } else {
            navbar.classList.remove("is-sticky");
        }
    }
    const toggleMenu = () => {
        setMenu(!isOpen)
    }


    return (
        <>
            <div>
                <nav className="navbar" id="navbar">
                    <div className="container flex flex-wrap items-center justify-end">
                        <a className="navbar-brand" href="index.html">
                            <span className="inline-block dark:hidden">
                                <img src={LogoDark} className="l-dark" alt="" />
                                <img src={LogoLight} className="l-light" alt="" />
                            </span>
                            <img
                                src={LogoLight}
                                className="hidden dark:inline-block"
                                alt=""
                            />
                        </a>

                        <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                            <ul className="list-none menu-social mb-0">
                                <li className="inline ms-1">
                                    <Link2 to="#">
                                        <span className="login-btn-primary">
                                            <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                                <i className="uil uil-github"></i>
                                            </span>
                                        </span>
                                        <span className="login-btn-light">
                                            <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                                <i className="uil uil-github"></i>
                                            </span>
                                        </span>
                                    </Link2>
                                </li>
                                <li className="inline ms-1">
                                    <Link2 to="#">
                                        <span className="login-btn-primary">
                                            <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                                <i className="uil uil-twitter"></i>
                                            </span>
                                        </span>
                                        <span className="login-btn-light">
                                            <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                                <i className="uil uil-twitter"></i>
                                            </span>
                                        </span>
                                    </Link2>
                                </li>
                                <li className="inline ms-1">
                                    <Link2 to="#">
                                        <span className="login-btn-primary">
                                            <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                                <i className="uil uil-instagram"></i>
                                            </span>
                                        </span>
                                        <span className="login-btn-light">
                                            <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                                <i className="uil uil-instagram"></i>
                                            </span>
                                        </span>
                                    </Link2>
                                </li>
                            </ul>
                            <button
                                data-collapse="menu-collapse"
                                type="button"
                                className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Navigation Menu</span>
                                <i className="mdi mdi-menu mdi-24px"></i>
                            </button>
                        </div>

                        <div
                            className={`${isOpen === true ? 'hidden' : 'block'} navigation lg_992:order-1 lg_992:flex`}
                            id="menu-collapse"
                        >
                            <ul className="navbar-nav nav-light" id="navbar-navlist">
                                <Link
                                    className="nav-item"
                                    to="home"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Home</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="about"
                                >
                                    <span className="nav-link">About us</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="features"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Services</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="portfolio"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Portfolio</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="testi"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Review</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="pricing"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Pricing</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="blog"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Blog</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="contact"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Contact us</span>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                    className="py-36 lg:py-64 w-full table relative bg-no-repeat bg-center bg-cover" id="home">
                    <div className="container relative z-1">
                        <div className="grid grid-cols-1 mt-12">
                            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Everything you need to build <br /> a great company</h4>

                            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                            <div className="relative mt-10">
                                <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Get Started</Link2>
                            </div>
                        </div>
                    </div>
                    <div className="absolute lg:w-1/2 md:w-4/6 w-full h-full bg-gradient-to-t to-orange-600 from-orange-400 md:opacity-100 opacity-80 top-0"></div>
                </section>
                {/* About section */}
                <About />

                {/* Service section */}
                <Services />

                {/* Portfolio section */}
                <Portfolio />

                {/* Review section */}
                <Review />

                {/* Pricing section */}
                <Pricing />

                {/* Blog section */}
                <Blog />

                {/* Contact section */}
                <Contact />

                {/* Footer section */}
                <Footer />

                {/* Switcher section */}
                <Switcher />
            </div>

        </>
    );

}
