import React from "react";
import "./about.css";
import ME from "../../assets/me-about1.jpeg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsFillCollectionFill } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about_icon" />
              <h5>CGPA</h5>
              <small>8.5(*Till 5th)</small>
            </article>
          

          
            <article className="about__card">
              <BsFillCollectionFill className="about_icon" />
              <h5>Degree</h5>
              <small>B.E-(I.T persuing..)</small>
            </article>
          

          
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>

          <p>
            Hi my name is <b>Wasim Zaffar</b>.I am a<b> Full Stack Web Devloper.
           </b> Persuing Bachelor of Engineering in Information Technology 
            from<b> Jadavpur University</b>.I am comfortable in working on the following languages
            <b>HTML,CSS,JS,NODEJS,MONGODB,MySQL</b> etc...
            also i love to solve DSA problems on different platforms
            like Leetcode,Gfg,codestudio etc..
            i am very interested in creating web devlopent Projects
            both Frontend and Backend.I made multiple Full-stack Projects Like
            <b> Ecommerce Website,Pizza shop app</b> etc..
            
          
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
