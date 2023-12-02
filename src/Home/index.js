import React from "react";
import "./index.css";
import logo from "../bg removed review guru logo.png";
import logo1 from "../reviewguru.jpg";
import { useState } from "react";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light navbar-light shadow">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo1} alt="logo-image" className="logo-image" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li class="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <div className="mx-5 d-flex flex-row">
                <li>
                  <div className="btn-group dropleft dropdown-user mt-2">
                    <a href="/profile">
                      <i
                        className="fa fa-user-o dropdown-toggle"
                        onClick={handleDropdownToggle}
                        aria-haspopup="true"
                        style={{ fontSize: "25px", color: "black" }}
                        aria-expanded={isDropdownOpen1 ? "true" : "false"}
                      ></i>
                    </a> 
                  </div>
                </li>
                <li class="nav-item dropdown mx-5">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i
                      class="fa-regular fa-bell"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Notifications
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container d-flex flex-wrap mt-4">
        <div className="row">
          <h1>COMPANIES</h1>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg"
                alt="img"
                className="w-75"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">C</div>
                </div>
                <h6 className="names">
                  Charan <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png"
                alt="img"
                className="microsoft"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">Z</div>
                </div>
                <h6 className="names">
                  Zubair <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src=" https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg"
                alt="img"
                className="w-75"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">C</div>
                </div>
                <h6 className="names">
                  Charan <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png"
                alt="img"
                className="microsoft"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">Z</div>
                </div>
                <h6 className="names">
                  Zubair <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src=" https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg"
                alt="img"
                className="w-75"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">C</div>
                </div>
                <h6 className="names">
                  Charan <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png"
                alt="img"
                className="microsoft"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">Z</div>
                </div>
                <h6 className="names">
                  Zubair <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="container d-flex flex-wrap mt-4">
        <div className="row">
          <h1>DRINKS</h1>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src=" https://brandongaille.com/wp-content/uploads/2014/04/List-of-the-20-Best-Multinational-Company-Logos.jpg"
                alt="img"
                className="cococola"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">G</div>
                </div>
                <h6 className="names">
                  Giri <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src=" https://brandongaille.com/wp-content/uploads/2014/04/List-of-the-20-Best-Multinational-Company-Logos.jpg"
                alt="img"
                className="cococola"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">G</div>
                </div>
                <h6 className="names">
                  Giri <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://theindiasupermart.com/cdn/shop/products/thums-up-indian-soft-drink-can-cool-drinks-prayosha-spices-331959.jpg?v=1651809130"
                alt="img"
                className="w-50"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">C</div>
                </div>
                <h6 className="names">
                  Charan <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://www.luckystore.in/cdn/shop/files/sprite.png?v="
                alt="img"
                className="w-75"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">C</div>
                </div>
                <h6 className="names">
                  Charan <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src=" https://brandongaille.com/wp-content/uploads/2014/04/List-of-the-20-Best-Multinational-Company-Logos.jpg"
                alt="img"
                className="cococola"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">G</div>
                </div>
                <h6 className="names">
                  Giri <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src=" https://brandongaille.com/wp-content/uploads/2014/04/List-of-the-20-Best-Multinational-Company-Logos.jpg"
                alt="img"
                className="cococola"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">G</div>
                </div>
                <h6 className="names">
                  Giri <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address mt-4">Wipro - Bangalore</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
