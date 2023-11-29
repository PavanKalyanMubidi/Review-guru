import React from "react";
import "./index.css";
import logo from "../bg removed review guru logo.png";
import logo1 from "../reviewguru.jpg";
import { useState } from "react";
import Index1 from "../Cards/index";
import { Link } from "react-router-dom";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const handleMouseEnter = () => {
    setShowAlert(true);
  };

  const handleMouseLeave = () => {
    setShowAlert(false);
  };
  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    console.log("Logged out");
  };

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleDropdownToggle1 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  return (
    <>
      <header>
        <button
          className="hamburger-icon"
          onClick={isNavOpen ? closeNav : openNav}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <a href="">
          <img src={logo} alt="logo-image" className="logo-image" />
        </a>
        <a href="#" className="search-icon">
          <div>
            <ul className="d-flex flex-row" style={{ listStyle: "none" }}>
              <li>
                <div className="btn-group dropleft dropdown-user mt-2">
                  <Link to="/profile">
                    {" "}
                    <i
                      className="fa fa-user-o dropdown-toggle"
                      onClick={handleDropdownToggle}
                      aria-haspopup="true"
                      style={{ fontSize: "25px" }}
                      aria-expanded={isDropdownOpen1 ? "true" : "false"}
                    ></i>
                  </Link>
                </div>
              </li>
              <li>
                <div className="notification-wrapper">
                  <div
                    className="notification-icon mx-5"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <i class="fa-regular fa-bell"></i>
                  </div>
                  {showAlert && (
                    <div className="alert-card">New Notifications</div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </a>
      </header>
      {isNavOpen && (
        <div className={`nav nav-left ${isNavOpen && "show-nav-on-mobile"}`}>
          <div className="nav-content">
            <img src={logo1} alt="logo-image" className="logo-image1" />

            <ul>
              <li>
                <span class="material-symbols-outlined text-white">home</span>{" "}
                <a href="#"> Home </a>
              </li>
              <li>
                <span class="material-symbols-outlined text-white">
                  add_box
                </span>{" "}
                <a href="#"> about us </a>
              </li>
              <li>
                <span class="material-symbols-outlined text-white">
                  production_quantity_limits
                </span>
                <a href="#"> products </a>
              </li>

              <li>
                <span class="material-symbols-outlined text-white">call</span>
                <a href="#"> contact us </a>
              </li>
              <li>
                <span class="material-symbols-outlined text-white">
                  cast_connected
                </span>{" "}
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <span class="material-symbols-outlined text-white">
                  security
                </span>{" "}
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="pavan">
        <div
          className={`content-container ${isNavOpen ? "shifted-content" : ""}`}
        >
          <div className="row">
            <h2 className="text-center heading">Recent Reviews</h2>
            <div className="d-flex flex-wrap">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/17/full/1594960975-2812.jpg"
                    alt="img"
                    className="w-50"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">R</h3>
                    </div>
                    <h6 className="names">
                      Ramya <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">2 weeks ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/intel-logo.png"
                    alt="img"
                    className="companyimag"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">R</h3>
                    </div>
                    <h6 className="names">
                      RajShekar <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">2 weeks ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://brandongaille.com/wp-content/uploads/2014/02/Tata-Motors-Company-Logo.jpg"
                    alt="img"
                    className="companyimag"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">P</h3>
                    </div>
                    <h6 className="names">
                      Pavan <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">2 weeks ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://digest.myhq.in/wp-content/uploads/2023/05/Genpact_Logo-1024x463.jpg"
                    alt="img"
                    className="w-75"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">S</h3>
                    </div>
                    <h6 className="names">
                      Suneel <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">2 weeks ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://www.bestmediainfo.com/uploads/2013/06/jetking.jpg"
                    alt="img"
                    className="jet-king"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">L</h3>
                    </div>
                    <h6 className="names">
                      Lakshmi <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">2 weeks ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg"
                    alt="img"
                    className="w-75"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">U</h3>
                    </div>
                    <h6 className="names">
                      Uday <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">2 weeks ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://logowik.com/content/uploads/images/star-health-and-allied-insurance8138.logowik.com.webp"
                    alt="img"
                    className="w-50"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">S</h3>
                    </div>
                    <h6 className="names">
                      Siva <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">2 weeks ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d9d8d4" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
                    alt="img"
                    className="w-50"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">U</h3>
                    </div>
                    <h6 className="names">
                      Uma Devi <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">1 week ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
                    alt="img"
                    className="w-50"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">L</h3>
                    </div>
                    <h6 className="names">
                      Lakshmi <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">1 week ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
                    alt="img"
                    className="w-50"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">M</h3>
                    </div>
                    <h6 className="names">
                      Madhan <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">1 week ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
                    alt="img"
                    className="w-50"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">S</h3>
                    </div>
                    <h6 className="names">
                      Sravani <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">1 week ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div className="Card4">
                  <img
                    src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
                    alt="img"
                    className="w-50"
                  />
                  <div className="d-flex flex-row">
                    <div class="circle">
                      <h3 className="letter">L</h3>
                    </div>
                    <h6 className="names">
                      Leela <span className="span-names">reviewed</span>
                    </h6>
                  </div>
                  <p className="time">1 week ago</p>
                  <div className="d-flex flex-row">
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#d8be13" }}
                    ></i>
                  </div>
                  <h6 className="post-agatha-cls">
                    Postern of Fate - Agatha Chr
                  </h6>
                  <p className="afailed-mystery-cls">A Failed Christ Mystery</p>
                  <div className="d-flex flex-row">
                    <button className="line">
                      <Link to="/cards" style={{ textDecoration: "none" }}>
                        <a href="" className="read-complete-cls">
                          Read Complete Review
                        </a>
                        <i
                          class="fa-solid fa-greater-than fa-2xs"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
