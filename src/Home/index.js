import React from "react";
import "./index.css";
import logo from "../bg removed review guru logo.png";
import { useState } from "react";
import Index1 from "../Cards/index";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
    // Perform logout action
    // For example: logoutUser();
    console.log("Logged out");
  };
  return (
    <>
      <header>
        <button className="hamburger-icon" onClick={openNav}>
          <span class="material-symbols-outlined">menu</span>
        </button>
        <a href="index.html">
          <img src={logo} alt="logo-image" className="logo-image" />
        </a>
        <a href="#" className="search-icon">
          <span class="material-symbols-outlined notification">
            notifications
          </span>
          <span
            class="material-symbols-outlined account"
            onClick={toggleDropdown}
          >
            account_circle
          </span>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul className="dropdown-content1">
                <li className="profile">my Profile</li>
                <hr />
                <li onClick={handleLogout} className="logout">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </a>
      </header>
      {isNavOpen && (
        <div className="nav nav-left">
          <div className="nav-content">
            <button className="cross-btn" onClick={closeNav}>
              <span class="material-symbols-outlined">close</span>
            </button>
            <ul>
              <li>
                <a href="#"> Home </a>
              </li>
              <li>
                <a href="#"> about us </a>
              </li>
              <li>
                <a href="#"> products </a>
              </li>
              <li>
                <a href="#"> what we offer </a>
              </li>
              <li>
                <a href="#"> contact us </a>
              </li>
            </ul>
            <ul className="terms-links">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="pavan">
  <div className="container">
      
      <div className="row">
    
          <div className="col-md-1 col-lg-1"></div>
          <h2 className="text-start">Recent Reviews</h2>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="card">
            <img
              src="https://www.bestmediainfo.com/uploads/2013/06/jetking.jpg"
              alt="img"
              className="jet-king"
            />
          
           
              <div className="d-flex flex-row">
              <div class="circle">
  <h3 className="letter">U</h3>
</div>
              <h6 className="names">
                Uma <span className="span-names">reviewed</span>
              </h6>
           
            </div>
            <p className="time">5 mins ago</p>
            <div className="d-flex flex-row">
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
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
            <div class="circle">
  <h3 className="letter">C</h3>
</div>
              <h6 className="names">
                Charan <span className="span-names">reviewed</span>
              </h6>
            </div>
            <p className="time">10 mins ago</p>
            <div className="d-flex flex-row">
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="card">
            <img
              src="https://logowik.com/content/uploads/images/star-health-and-allied-insurance8138.logowik.com.webp"
              alt="img"
              className="w-50"
            />
            <div className="d-flex flex-row">
            <div class="circle">
  <h3 className="letter">A</h3>
</div>
              <h6 className="names">
                Anis <span className="span-names">reviewed</span>
              </h6>
            </div>
            <p className="time">0 hrs 20mins ago</p>
            <div className="d-flex flex-row">
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
            </div>
          </div>
          {/* //iva */}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="card">
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
                Sandhya <span className="span-names">reviewed</span>
              </h6>
              {/* jjj */}

            </div>
            <p className="time">1 hour ago</p>
            <div className="d-flex flex-row">
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2">
          <div className="card">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/17/full/1594960975-2812.jpg"
              alt="img"
              className="w-50"
            />
            <div className="d-flex flex-row">
            <div class="circle">
  <h3 className="letter">J</h3>
</div>
              <h6 className="names">
                John <span className="span-names">reviewed</span>
              </h6>
            </div>
            <p className="time">2 weeks ago</p>
            <div className="d-flex flex-row">
              <i class="fa-solid fa-star" style={{color: "#d8be13"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
              <i class="fa-solid fa-star" style={{color: "#d9d8d4"}}></i>
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
