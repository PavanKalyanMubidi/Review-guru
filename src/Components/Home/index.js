import React from "react";
import "./index.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="main-container container fluid mt-3">
        <h1 className="main-heading">The Ultimate Platform For Review's</h1>
        <div className="search-container">
          <input className="user-input" placeholder="Search..." />
          <i
            class="fa-solid fa-magnifying-glass search-icon"
            style={{ color: "gray", fontSize: "18px" }}
          ></i>
        </div>

        <h3 className="sub-heading">
          Helping our customers succeed with social ..!!
        </h3>
        <h5 className="sub2-heading">Better service starts here.....</h5>
      </div>
      <div className="container d-flex flex-wrap mt-4">
        <div className="row">
          <h3 className="blue-text">COMPANIES</h3>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg"
                alt="img"
                className="wipro"
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
                <p className="address m-0">Wipro - Chennai</p>
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
              <p className="time">30 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">MicroSoft - Blr</p>
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
                src="https://www.lerevenu.com/sites/site/files/styles/img_lg/public/field/image/capgemini_entreprise_4_0.jpg?itok=zs_3BfOi"
                alt="img"
                className="capgemini"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">S</div>
                </div>
                <h6 className="names">
                  Surya <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">1 year ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Capgemini - Hyd</p>
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
                src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
                alt="img"
                className="oracle"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">R</div>
                </div>
                <h6 className="names">
                  Ramana <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">2 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Oracle - Hyd</p>
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
                src="data:image/png;base64,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"
                alt="img"
                className="tcs"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">A</div>
                </div>
                <h6 className="names">
                  Ashok <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">6 months ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Tcs - Bangalore</p>
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
                src="data:image/jpeg;base64,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"
                alt="img"
                className="jpmorgan"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">S</div>
                </div>
                <h6 className="names">
                  Suneel <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">2 years ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">JpMorgan - Hyd</p>
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
      <hr />
      <div className="container d-flex flex-wrap mt-4">
        <div className="row">
          <h3 className="blue-text">DRINKS</h3>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src=" https://brandongaille.com/wp-content/uploads/2014/04/List-of-the-20-Best-Multinational-Company-Logos.jpg"
                alt="img"
                className="cococola image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">G</div>
                </div>
                <h6 className="names">
                  Giri <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">7 mins ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">CocoCola - Blr</p>
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
                src="https://static.tnn.in/thumb/msid-89498338,thumbsize-20680,width-1280,height-720,resizemode-75/89498338.jpg"
                alt="img"
                className="w-75 image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">D</div>
                </div>
                <h6 className="names">
                  Deepak <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">2 years ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">ThumpsUp - Hyd</p>
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
                src="https://1000logos.net/wp-content/uploads/2020/09/Sprite-Logo-2019.png"
                alt="img"
                className="w-75 image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">V</div>
                </div>
                <h6 className="names">
                  Vamsi <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">3 months ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Sprite - Chennai</p>
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
                src="https://w7.pngwing.com/pngs/544/883/png-transparent-fanta-fizzy-drinks-coca-cola-logo-cream-soda-coca-cola-food-text-orange.png"
                alt="img"
                className="fanta image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">S</div>
                </div>
                <h6 className="names">
                  Siva <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 months ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Fanta - Bangalore</p>
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
                src="https://mir-s3-cdn-cf.behance.net/projects/404/641e7c76548207.Y3JvcCw1NTYsNDM1LDcwOSwxMjk.png"
                alt="img"
                className="image-fluid w-50"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">R</div>
                </div>
                <h6 className="names">
                  RajShekar <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">1 month ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Fizz - AP</p>
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
                src="https://ik.imagekit.io/wlfr/wellness/images/products/224247-2.png/tr:w-3840,dpr-1,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-webp,q-80,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end"
                alt="img"
                className="orsl image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">U</div>
                </div>
                <h6 className="names">
                  Uma <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">9 months ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">ORSL - Hyd</p>
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
      <hr />
      <div className="container d-flex flex-wrap mt-4">
        <div className="row">
          <h3 className="blue-text">CARS</h3>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="https://www.shutterstock.com/image-vector/chattogram-bangladesh-april-5-2023-600nw-2285175467.jpg"
                alt="img"
                className="bmw image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">R</div>
                </div>
                <h6 className="names">
                  Ramya <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">11 months ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">BMW - Bangalore</p>
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Audi_logo_detail.svg/1426px-Audi_logo_detail.svg.png"
                alt="img"
                className="audi image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">S</div>
                </div>
                <h6 className="names">
                  Sasi <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">2 years ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Audi - Hyd</p>
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
                src="https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png"
                alt="img"
                className="benz image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">R</div>
                </div>
                <h6 className="names">
                  Ram <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">1 year ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">BENZ - kolkata</p>
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
                src="https://cdn.mos.cms.futurecdn.net/WpcTavg99b5XpK6STzSLZ8-1200-80.jpg"
                alt="img"
                className="toyota image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">A</div>
                </div>
                <h6 className="names">
                  Ajay <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">10 months ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Tayota - Mumbai</p>
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
                src="https://i.pinimg.com/originals/29/35/9f/29359f3473ef41bdccb1c079983bdaa1.jpg"
                alt="img"
                className="honda image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">S</div>
                </div>
                <h6 className="names">
                  Sravani <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">4 years ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Honda - Hyd</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon"
                      style={{ color: "green" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="card">
              <img
                src="data:image/png;base64,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"
                alt="img"
                className="mahindra image-fluid"
              />
              <div className="d-flex flex-row">
                <div className="circle">
                  <div className="letter">U</div>
                </div>
                <h6 className="names">
                  Uday <span className="span-names">reviewed</span>
                </h6>
              </div>
              <p className="time">6 years ago</p>
              <div className="d-flex flex-row">
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d8be13" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#d9d8d4" }}></i>
              </div>
              <div className="d-flex flex-row">
                <p className="address m-0">Mahindra - Hyd</p>
              </div>
              <div className="d-flex flex-row">
                <button className="line">
                  <a href="/cards" className="read-complete-cls">
                    Read Complete Review
                    <i
                      class="fa-solid fa-greater-than fa-2xs review-icon p-1"
                      style={{ color: "green" }}
                    ></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
