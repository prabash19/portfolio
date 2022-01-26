import React from "react";
import Cardstyle from "../styles/Cardstyle.css";
import userrr from "../images/four.jpg";

function Card() {
  return (
    <div className="main">
      <div class="card-container">
        <div class="upper-container">
          <div class="image-container">
            <img src={userrr} alt="" />
          </div>
        </div>
        <div class="lower-container">
          <div>
            <p className="card_title">Prabash Dangi</p>
          </div>
          <div>
            <a
              href="./Suprabash Dangi Resume.pdf"
              className="hero_btn"
              download
            >
              Resume
            </a>
          </div>
          <div className="icons">
            <a
              href="https://www.facebook.com/prabash.dangi/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="facebookicon">
                <span>
                  <i className="fab fa-facebook"></i>
                </span>
              </div>
            </a>
            <a
              href="https://twitter.com/upsilon75"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <div className="twittericon">
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
            </a>

            <a
              href="https://github.com/prabash19?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <div className="githubicon">
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
