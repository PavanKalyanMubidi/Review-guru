import React from "react";
import "./card.css";
import { useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

function Index1() {
  const [reviews, setReviews] = useState([]);
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

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div className="card11">
              <img
                src="https://www.bestmediainfo.com/uploads/2013/06/jetking.jpg"
                className="image img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8 card12">
            <div className="d-flex flex-row align-items-center reviewguru">
              <div className="col-sm-2 col-md-3 col-lg-3">
                <h6 className="heading1 mb-2 m-2">Review Guru</h6>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-5"></div>
              <div className="col-sm-2 col-md-3 col-lg-3 d-flex flex-row">
                <p className="par mb-2">3.8K Followers</p>
                <select className="mb-2 mt-1 ">
                  <option>Yearly-Rating</option>
                </select>
              </div>
            </div>
            <hr />

            <div className="d-flex flex-row mt-4">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 d-flex flex-row">
                <img
                  src="https://media.istockphoto.com/id/1439973042/vector/red-heart-flat-icon-the-symbol-of-love-vector-illustration.jpg?s=612x612&w=0&k=20&c=i2vL1DR3XaqPcLAUBiaQzeQOj8uqksXED6wI66MO3h0="
                  className="favorite"
                />
                <p class="heading1">98%</p>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <span class="heading1">1,769 Votes</span>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <button class="rating">
                  4.4
                  <span class="material-symbols-outlined">star</span>
                </button>
              </div>
            </div>
            <hr />

            <div class="d-flex flex-row mb-2">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <label for="academics">Academics:</label>
                <input type="range" id="academics" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <label for="administration">Administration:</label>
                <input type="range" id="administration" />
              </div>
            </div>
            <hr />

            <div className="d-flex flex-column mb-0">
              <p>
                <span class="material-symbols-outlined">location_on</span> 25,
                Main Road, Ramamurthy Nagar, Bengaluru 5789053
              </p>
              <p>
                <span class="material-symbols-outlined">call</span>
                +91-80-254355690
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <button className="btn btn-danger reviewbtn " data-bs-toggle="modal"
              data-bs-target="#myModal">
              <span className="material-symbols-outlined mt-1">edit_square</span>
              Write Your Review
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
          </div>
          <div className="col-12 col-md-6">
            <button className="ram">Owner? Claim this Business</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 card123">
            <div>
              <button
                className="comment btn btn-primary mb-2"
                onClick={() => submitReview("New review")}
              >
                Submit Review
              </button>
              <button
                className="comment btn btn-primary mb-2"
                onClick={() => editReview(0, "Updated review")}
              >
                Edit Review
              </button>
              <button className="comment btn btn-primary mb-2" onClick={() => deleteReview(0)}>
                Delete Review
              </button>
              <button
                className="comment btn btn-primary mb-2"
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
              <button className="comment btn btn-primary mb-2" onClick={incrementLikes}>
                Like
              </button>
              <button className="comment  btn btn-primary mb-2" onClick={toggleFollowing}>
                {following ? "Unfollow" : "Follow"}
              </button>
            </div>
            <div className="mb-2">
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
      <Footer />
    </>
  );
};

export default Index1;
