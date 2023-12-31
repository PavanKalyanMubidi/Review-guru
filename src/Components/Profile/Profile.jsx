import React from 'react';
import "./Profile.css"
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
const Profile = () => {
  const userData = {
    username: 'PavanKalyan',
    email: 'pavankalyan@gmail.com',
    bio: 'A passionate individual interested in web development and technology.',
    
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title">Profile</h2>
              <hr />

              <div>
                <h4>Username: {userData.username}</h4>
                <p>Email: {userData.email}</p>
                <p>Bio: {userData.bio}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
