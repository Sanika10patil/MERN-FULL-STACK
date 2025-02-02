import React from 'react'
import logo from "./../images/footer-img.png";
import locationIcon from "./../images/Location-icon.png";
import emailIcon from "./../images/email-icon.png";
import callIcon from "./../images/call-icon.png";
import facebookIcon from "./../images/footer-facebook.png";
import twiterIcon from "./../images/footer-twiter.png";
import instagramIcon from "./../images/footer-instagram.png";
const MainFooter = () => {
  return (
    <div>
       <footer>
        <div className="container">
          {/* 12 Col in one row */}
          <div className="row py-5">
            <div className="col-md-4">
              <img src={logo} />
              <p className="my-3">
                Innovation is the driving force behind progress, transforming
                ideas into impactful solutions that address modern challenges.
                Innovation is the driving force behind progress, transforming
                ideas into impactful solutions that address.
              </p>

              <ul>
                <li>
                  <img src={locationIcon} className="footer-icons" /> 1234 Elm
                  Street, Springfield, IL 62704, New York
                </li>
                <li>
                  <img src={emailIcon} className="footer-icons" />
                  supporthariom@gmail.com
                </li>
                <li>
                  <img src={callIcon} className="footer-icons" />
                  (212) 555-7890
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Company</h5>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
              </ul>
              <h5>Industry</h5>
              <ul>
                <li>Education & Learning</li>
                <li>Food & Hospitality</li>
                <li>Health & Fitness</li>
                <li>Finance & Marketing</li>
                <li>Real Estate</li>
                <li>Retail & Ecommerce</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ul>
                <li> Al Enabled Application </li>
                <li>ERP Consulting and</li>
                <li>Development</li>
                <li>Frontend Development</li>
                <li>Web Development</li>
                <li>Microsoft Technologies</li>
                <li>Mobile Development</li>
                <li>Data Visualizaton</li>
                <li>Devops Development</li>
                <li>Enterprise Portals</li>
                <li>Dedicated Development Team</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Technology </h5>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>Bootstrap</li>
                <li>ReactJS</li>
                <li>Angular</li>
                <li>Azure AI</li>
                <li>Open AI</li>
                <li>NodeJS</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="pb-3 copy-right-div">
            <span className="">Copyright: © 2024 By Hariom Innovations</span>

            <div>
              <img src={facebookIcon} className="social-icon-footer" />
              <img src={twiterIcon} className="social-icon-footer" />
              <img src={instagramIcon} className="social-icon-footer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainFooter
