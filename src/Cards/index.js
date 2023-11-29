import React from "react";
import "./card.css";
import logo from "../bg removed review guru logo.png";
import logo1 from "../reviewguru.jpg";
import { useState } from "react";
const Index1 = () => {
  const [reviews, setReviews] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [following, setFollowing] = useState(false);

  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const submitReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const editReview = (reviewIndex, updatedReview) => {
    const updatedReviews = [...reviews];
    updatedReviews[reviewIndex] = updatedReview;
    setReviews(updatedReviews);
  };

  const deleteReview = (reviewIndex) => {
    const updatedReviews = reviews.filter((_, index) => index !== reviewIndex);
    setReviews(updatedReviews);
  };

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const toggleFollowing = () => {
    setFollowing(!following);
  };

  const [isNavOpen, setIsNavOpen] = useState(true);

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

  const notification = () => {
    alert("notification");
  };
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const handleMouseEnter = () => {
    setShowAlert(true);
  };

  
  const handleMouseLeave = () => {
    setShowAlert(false);
  };

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
        <a href="index.html">
          <img src={logo} alt="logo-image" className="logo-image" />
        </a>
        <a href="#" className="search-icon me-5">
        <div>
            <ul className="d-flex flex-row" style={{ listStyle: "none" }}>
              <li>
                <div className="btn-group dropleft dropdown-user mt-2">
                  <i
                    className="fa fa-user-o dropdown-toggle"
                    onClick={handleDropdownToggle}
                    aria-haspopup="true"
                    style={{fontSize:"25px"}}
                    aria-expanded={isDropdownOpen1 ? "true" : "false"}
                  ></i>
                  <ul
                    className={`dropdown-menu ${isDropdownOpen1 ? "show" : ""}`}
                  >
                    <li>
                      <div className="alert-card">
                        <p>my profile</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                {/* <div class="btn-group dropleft dropdown-alert">
                  <i
                    class="fa fa-bell-o dropdown-toggle"
                    onClick={handleDropdownToggle1} 
                    style={{fontSize:"25px"}}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen2 ? "true" : "false"}
                  ></i>
                  <ul
                    className={`dropdown-menu ${isDropdownOpen2 ? "show" : ""}`}
                  >
                    <li>
                      <div className="alert-card">
                        <p>Notification</p>
                      </div>
                    </li>
                  </ul>
                </div> */}

<div className="notification-wrapper">
      <div
        className="notification-icon mx-5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <i class="fa-regular fa-bell"></i>
      </div>
      {showAlert && (
        <div className="alert-card">
          
          New Notifications
        </div>
      )}
    </div>
              </li>
            </ul>
          </div>
        </a>
      </header>
      {isNavOpen && (
        <div className="nav nav-left">
          <div className="nav-content">
            <img src={logo1} alt="logo-image" className="logo-image1" />
            <ul>
              <li>
                <span class="material-symbols-outlined text-white">home</span>
                <a href="#"> Home </a>
              </li>
              <li>
                <span class="material-symbols-outlined text-white">
                  add_box
                </span>
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
                </span>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <span class="material-symbols-outlined text-white">
                  security
                </span>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isDropdownOpen && (
        <div className="buttonoption">
          <card className="d-flex flex-column">
            <button className="btn btn-success m-2">
              <i class="fa-regular fa-user p-1"></i>Profile
            </button>
            <button className="btn btn-primary m-2">
              <i class="fa-solid fa-arrow-right-from-bracket p-1"></i>Logout
            </button>
          </card>
        </div>
      )}
      <div
        className={`content-container ${isNavOpen ? "shifted-content" : ""}`}
      >
        
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12  mb-4">
          <div class="card11 mx-auto">
        <img
          src="https://www.bestmediainfo.com/uploads/2013/06/jetking.jpg"
          class="image"
          alt="Image"
        />
      </div>
          </div>

          <div className="col-lg-7 col-md-6 col-sm-12 card12">
            <div
              className="d-flex flex-row p-1"
              style={{
                backgroundColor: "gray",
                marginBottom: "30px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <h6 className="heading1">Review Guru</h6>
              <p className="par">3.8K Followers</p>
              <select>
                <option>Year-wise Rating</option>
              </select>
            </div>

            <div className="d-flex flex-row" style={{ marginBottom: "20px" }}>
              <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
              <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>

              <img
                src="https://media.istockphoto.com/id/1439973042/vector/red-heart-flat-icon-the-symbol-of-love-vector-illustration.jpg?s=612x612&w=0&k=20&c=i2vL1DR3XaqPcLAUBiaQzeQOj8uqksXED6wI66MO3h0="
                className="favorite"
              />
              <p className="heading1">98%</p>
              <button className="rating">
                {" "}
                4.4 <span class="material-symbols-outlined">star</span>
              </button>
              <span className="heading1">1,769 Votes</span>
            </div>

            <div className="d-flex flex-row" style={{ marginBottom: "20px" }}>
              <p>Academics:</p>
              <input type="range" className="range" />
              <p>Administration:</p>
              <input type="range" className="range" />
            </div>

            <div className="d-flex flex-column">
              <p>
                <span class="material-symbols-outlined">location_on</span>{" "}
                25,Main Road,Ramamurthy nagar,Bengaluru 5789053
              </p>
              <p>
                <span class="material-symbols-outlined">call</span>{" "}
                +91-80-254355690
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12"></div>
          <div className=" col-lg-10 col-md-6 col-sm-12 d-flex flex-row">
            <div className="reviewbtn d-flex flex-row">
              <span class="material-symbols-outlined">edit_square</span>
              Write Your Review
            </div>
            <button className="ram">Owner? Claim this Business</button>
          </div>
          <div className="col-lg-10 col-md-6 col-sm-12 card123">
            <div>
              <button
                className="comment mb-2"
                onClick={() => submitReview("New review")}
              >
                Submit Review
              </button>
              <button
                className="comment mb-2"
                onClick={() => editReview(0, "Updated review")}
              >
                Edit Review
              </button>
              <button className="comment mb-2" onClick={() => deleteReview(0)}>
                Delete Review
              </button>
              <button
                className="comment btn btn-primary  mb-2"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Add Review
              </button>
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Add Review</h4>
                      <button
                        type="button"
                        className="btn-close mb-2"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body">
                      {/* Input for adding comment */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary mb-2"
                        onClick={() => {
                          addComment();
                          document
                            .getElementById("myModal")
                            .classList.remove("show");
                        }}
                        data-bs-dismiss="modal"
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mb-2"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="comment mb-2" onClick={incrementLikes}>
                Like
              </button>
              <button className="comment mb-2" onClick={toggleFollowing}>
                {following ? "Unfollow" : "Follow"}
              </button>
            </div>
            <div>
              <div className="comments">
                <h3>Reviews</h3>
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              </div>
              <h3>Activities</h3>
              <p>Total Reviews: {reviews.length}</p>
              <p>Total Comments: {comments.length}</p>
              <p>Total Likes: {likes}</p>
              <p>Following: {following ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index1;
