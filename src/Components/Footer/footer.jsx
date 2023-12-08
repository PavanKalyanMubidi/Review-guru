import React from "react";
import "./footer.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <ul style={{ listStyle: "none" }}>
                            <h3 style={{ fontWeight: "900" }}>About Us</h3>
                            <div className="mt-3">
                                <li>Meet Our Team</li>
                                <li>Our Responsibilities</li>
                                <li>Our Codes</li>
                                <li>Our Values</li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <ul style={{ listStyle: "none" }}>
                            <h3 style={{ fontWeight: "900" }}>Careers</h3>
                            <div className="mt-3">
                                <li>Apply Online</li>
                                <li>Available Positions</li>
                            </div>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4">
                        <ul style={{ listStyle: "none" }}>
                            <h3 style={{ fontWeight: "900" }}>Contact Us</h3>
                            <div className="mt-3">
                                <li>
                                    <i className="fas fa-phone-alt mx-2"></i> +91 9234567890
                                </li>
                                <li>
                                    <i className="far fa-envelope mx-2"></i> perfex@gmail.com
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt mx-2"></i> Kavuri Hills, Masthan Nagar,Hyd,India.
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4"></div>

                    <div className="col-12 col-md-6">
                        <div>
                            <div className="col-12 col-md-6">
                                <h3 className="header1">Connect With Us</h3>
                                <div className="d-flex flex-row mr-2">
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <LinkedInIcon style={{ fontSize: "2.5rem"}} />
                                    </a>
                                    <a href="https://github.com/" target="_blank">
                                        <GitHubIcon style={{ fontSize: "2.5rem" ,color:"white"}} />
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <FacebookIcon style={{ fontSize: "2.5rem" ,color:"white"}} />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <InstagramIcon style={{ fontSize: "2.5rem", color: "purple" }} />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <TwitterIcon style={{ fontSize: "3rem",color:"rgb(53, 104, 245)"}} />
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        <YouTubeIcon style={{ fontSize: "3rem", color: "red" }} />
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