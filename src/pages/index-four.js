import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";
import AboutImage from "../assets/images/about/600x800.png";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

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
 * Index four 
 */
export default function IndexFour() {
    const [isOpen, setMenu] = useState(true);
    const [videoModal, setModal] = useState(false);

    window.addEventListener("scroll", windowScroll);

    const toggleMenu = () => {
        setMenu(!isOpen)
    }

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


    return (
        <>
            <div>
                <nav className="navbar" id="navbar">
                    <div className="container flex flex-wrap items-center justify-end">
                        <a className="navbar-brand" href="index.html">
                            <span>
                                <img src={LogoDark} className="inline-block dark:hidden" alt="" />
                                <img src={LogoLight} className="hidden dark:inline-block" alt="" />
                            </span>

                        </a>

                        <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                            <ul className="list-none menu-social mb-0">
                                <li className="inline ms-1">
                                    <Link2 to="#" className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                        <i className="uil uil-github"></i>
                                    </Link2>
                                </li>
                                <li className="inline ms-1">
                                    <Link2 to="#" className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                        <i className="uil uil-twitter"></i>
                                    </Link2>
                                </li>
                                <li className="inline ms-1">
                                    <Link2 to="#" className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                        <i className="uil uil-instagram"></i>
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
                            <ul className="navbar-nav" id="navbar-navlist">
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
                <section className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-gradient-to-b from-orange-600/20 dark:from-orange-600/40 via-orange-600/10 dark:via-orange-600/20 to-gray-50 dark:bg-slate-800" id="home">
                    <div className="container">
                        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                            <div className="lg:col-span-7">

                                <div className="md:me-6 md:mb-20">
                                    <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">Business Growth <br /> Makes Your Company</h4>

                                    <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                                    <div className="relative mt-10">
                                        <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1">Get Started</Link2>
                                        <Link2 to="#" onClick={() => setModal(true)} data-type="youtube" data-id="yba7hPeTSjk" className="btn btn-icon btn-lg bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link2><small className="font-medium text-sm uppercase align-middle ms-2 dark:text-white/70">Watch Now</small>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 mt-8 md:mt-0">
                                <img src={AboutImage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <ModalVideo
                    channel="youtube"
                    isOpen={videoModal}
                    videoId="yba7hPeTSjk"
                    onClose={() => setModal(false)}
                />
                <div className="relative">
                    <div className="shape overflow-hidden text-gray-50 dark:text-slate-800">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

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
