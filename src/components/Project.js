import React from "react";
import AI from "../images/AI.jpg";
import portfolio from "../images/portfolio.jpg";
import snake from "../images/snake.jpg";
import "../styles/Projectstyles.css";

const Project = () => {
  return (
    <div className="Project" id="Project">
      <div className="yo_container">
        <div className="test_heading">Projects</div>
        <div className="card_container">
          <div className="card1">
            <img src={AI} alt="user1" />
            <p className="project_card">
              <a
                className="project_link"
                href="https://github.com/prabash19/recommendationsystem"
              >
                E-commerce site with Machine Learning
              </a>
            </p>
            <p className="project_details">
              <a
                className="project_dee"
                href="https://github.com/prabash19/recommendationsystem"
              >
                A fully functional online bookstore that uses React on the
                Frontend and Flask on the Backend. The site also, features a
                Recommendation system.
              </a>
            </p>
          </div>
          <div className="card2">
            <img src={portfolio} alt="user1" />
            <p className="project_card">
              <a className="project_link" href="https://github.com">
                Personal Portfolio Site
              </a>
            </p>
            <p className="project_details">
              <a className="project_dee" href="https://github.com">
                A personal project for a portfolio site. Features React
                frontend. A personal landing page with intention to start blog
                in the same site.
              </a>
            </p>
          </div>
          <div className="card3">
            <img src={snake} alt="user1" />
            <p className="project_card">
              <a className="project_link" href="https://github.com">
                Snake Game with Python
              </a>
            </p>
            <p className="project_details">
              <a className="project_dee" href="https://github.com">
                Snake game without using any library or packages. A simple app
                to brush up and polish python skills.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
