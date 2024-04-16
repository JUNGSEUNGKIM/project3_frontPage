import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";



function Borader(props) {
    return (
        <div className="main-page-content">




            {/* <!-- ============================================== SERVICE ===================================================== --> */}

            <div id="service">
                <div className="service-content">
                    <div className="service-grid text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title text-center wow fadeIn">
                                        <h3>Service List</h3>
                                        <div className="underline1"></div>
                                        <div className="underline2"></div>
                                        <p>
                                            I always want to make things that make a difference.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row love-row wow fadeIn">
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s">
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/design-development.jpg"
                                                alt="design-development"
                                            />
                                        </div>
                                        <div className="service-bottom">
                                            <i
                                                className="fa fa-edit service-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>Design + Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                Clean, modern designs - optimized for performance,
                                                search engines, and converting users to customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s">
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/e-commarce.jpg"
                                                alt="e-commarce"
                                            />
                                        </div>
                                        <div className="service-bottom">
                                            <i
                                                className="fa fa-cart-plus exp-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>eCommerce</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                Integration of eCommerce platforms, payment gateways,
                                                custom product templates, and more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s">
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/analytics.jpg"
                                                alt="analytics"
                                            />
                                        </div>
                                        <div className="service-bottom">
                                            <i
                                                className="fa fa-tachometer service-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>Analytics</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                Get insights into who is browsing your site so that
                                                you can make smarter business decisions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s">
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/mobile-friendly.jpg"
                                                alt="mobile-friendly"
                                            />
                                        </div>
                                        <div className="service-bottom">
                                            <i
                                                className="fa fa-desktop exp-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>Mobile-friendly</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                A responsive design makes your website accessible to
                                                all users, regardless of their device.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s">
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/website-audit.jpg"
                                                alt="website-audit"
                                            />
                                        </div>
                                        <div className="service-bottom">
                                            <i
                                                className="fa fa-search exp-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>Website Rank</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                Looking to improve your page performance, SEO, or user
                                                experience? Request a free site audit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service-details" data-wow-delay=".1s">
                                        <div className="service-head">
                                            <img
                                                src="assets/img/service/content-management.jpg"
                                                alt="content-management"
                                            />
                                        </div>
                                        <div className="service-bottom">
                                            <i
                                                className="fa fa-file exp-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>Content Management</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                Custom theme and plugin development. Easily update
                                                site content with knowledge of powerful code.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-grid">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="main-title text-center wow fadeIn">
                                                <h3>Testimonials</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    People I've worked with have said some nice things
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-details">
                                    <section id="carousel">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-8 col-md-offset-2">
                                                    <div className="quote">
                                                        <i className="fa fa-quote-left fa-4x"></i>
                                                    </div>
                                                    <div
                                                        className="carousel slide"
                                                        id="fade-quote-carousel"
                                                        data-ride="carousel"
                                                        data-interval="3000"
                                                    >
                                                        <ol className="carousel-indicators">
                                                            <li
                                                                data-target="#fade-quote-carousel"
                                                                data-slide-to="0"
                                                                className="active"
                                                            ></li>
                                                            <li
                                                                data-target="#fade-quote-carousel"
                                                                data-slide-to="1"
                                                            ></li>
                                                            <li
                                                                data-target="#fade-quote-carousel"
                                                                data-slide-to="2"
                                                            ></li>
                                                        </ol>
                                                        <div className="carousel-inner">
                                                            <div className="active item">
                                                                <blockquote>
                                                                    <p>
                                                                        “Sanajit was a real pleasure to work with
                                                                        and we look forward to working with him
                                                                        again. He’s definitely the kind of
                                                                        developer you can trust with a project
                                                                        from start to finish.”
                                                                        <br/>
                                                                        <span>Ishrak Chaudhury</span>
                                                                    </p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="item">
                                                                <blockquote>
                                                                    <p>
                                                                        “Sanajit's a clear communicator with the
                                                                        tenacity and confidence to really dig in
                                                                        to tricky design scenarios and the
                                                                        collaborative friction that's needed to
                                                                        produce excellent work.”
                                                                        <br/>
                                                                        <span>Kamrul Roy</span>
                                                                    </p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="item">
                                                                <blockquote>
                                                                    <p>
                                                                        “Sanajit has done a fantastic job overall.
                                                                        Not only the site is to design, but the
                                                                        code is also very clean and slick. Love
                                                                        the way he achieved the translations
                                                                        portion of the site.”
                                                                        <br/>
                                                                        <span>Shahadat Mahapatra</span>
                                                                    </p>
                                                                </blockquote>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ================================ BLOG ========================== --> */}


            {/* <!-- ================================ CONTACT ========================== --> */}


        </div>
    )
}

export default Borader;