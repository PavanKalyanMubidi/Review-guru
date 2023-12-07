import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12  col-md-4">
                        <ul style={{ listStyle: "none" }}>
                            <h3>About Us</h3>
                            <li>Meet Our Team</li>
                            <li>Our Responsibilities</li>
                            <li>Our Codes</li>
                            <li>Our Values</li>
                        </ul>
                    </div>
                    <div className="col-12  col-md-4 ">
                        <ul style={{ listStyle: "none" }}>
                            <h3>Careers</h3>
                            <li>Apply Online</li>
                            <li>Available Positions</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4">
                        <ul style={{ listStyle: "none" }}>
                            <h3>Contact Us</h3>
                            <li>
                                <i className="fas fa-phone-alt"></i> +91 9234567890
                            </li>
                            <li>
                                <i className="far fa-envelope"></i> perfex@gmail.com
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i> Kavuri Hills, Masthan Nagar,Hyd,India.
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4"></div>

                    <div class="col-12 col-md-6">
                        <div>
                            <div class="col-12 col-md-6">
                                <h3 class="header1">Connect With Us</h3>
                                <div class="d-flex flex-row">
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i class="fab fa-linkedin icons1"></i>
                                    </a>
                                    <a href="https://github.com/" target="_blank">
                                        <i class="fab fa-github icons2"></i>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fab fa-facebook icons1"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="fab fa-instagram icons4"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i class="fab fa-twitter icons5"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        <i class="fab fa-youtube icons6"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3"></div>
                            <div className="col-12 col-md-6">
                                <p>
                                    Terms & Conditions |Privacy Policy |2023 Copyright &copy; SeanB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;