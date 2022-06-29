import React from "react";
import "./portfolio.css";
import IMG1 from'../../assets/portfolio1.jpeg'
import IMG2 from'../../assets/portfolio2.png'
import IMG3 from'../../assets/portfolio3.jpg'
import IMG4 from'../../assets/portfolio4.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="i1"/>
          </div>
          <h3>Mern PIZZA shop</h3>
          <div className="portfolio_item-cta">
          <a
            href="https://github.com/erwasim1/wz-pizza-shop-mern-stack-app"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://wzpizzashop-mern.herokuapp.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG2} alt="i2"/>
          </div>
          <h3>Ecommerce Website</h3>
          <div className="portfolio_item-cta">
          <a
            href="https://github.com/erwasim1/shopping-wcart-mern-tack-app"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://shopping-wcart.herokuapp.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
            </div>
        
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG3} alt="i2"/>
          </div>
          <h3>covid Tracker</h3>
          <div className="portfolio_item-cta">
          <a
            href="https://github.com/erwasim1/shopping-wcart-mern-tack-app"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.google.com/search?q=covid+tracker+world&rlz=1C1UEAD_enIN983IN983&sxsrf=ALiCzsaWXyB2-wq-XXZdn0YBL4wWDzmxIw%3A1656533792780&ei=ILO8Yo-gL6v1juMPoqW3yA4&oq=covid+tracker+&gs_lcp=Cgdnd3Mtd2l6EAEYAjIECCMQJzIECCMQJzIFCAAQgAQyCggAEIAEEIcCEBQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjELADECc6BwgAEEcQsAM6CwgAEIAEELEDEIMBSgQIQRgASgQIRhgAUOkCWNoYYIgnaARwAXgAgAHwAYgB6wqSAQMyLTaYAQCgAQHIAQnAAQE&sclient=gws-wiz"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>

        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG4} alt="i2"/>
          </div>
          <h3>Blog_web</h3>
          <div className="potfoilo_item-cta">
          <a
            href="https://github.com/erwasim1/shopping-wcart-mern-tack-app"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://shopping-wcart.herokuapp.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
          </div>
        
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
