import MainNavBar from "../Commponents/mainNavBar";
import logo from "./../images/footer-img.png";
import locationIcon from "./../images/Location-icon.png";
import emailIcon from "./../images/email-icon.png";
import callIcon from "./../images/call-icon.png";
import facebookIcon from "./../images/footer-facebook.png";
import twiterIcon from "./../images/footer-twiter.png";
import instagramIcon from "./../images/footer-instagram.png";
import bgheroimg from "./../images/hero-img-contactus.png";
import Line from "./../images/Line.png";
import calliconform from "./../images/call-icon-form.png";
import emailiconform from "./../images/email-icon-form.png";
import locationiconform from "./../images/location-icon-form.png";
import linkedinicon from "./../images/linkedin-icon.png";
import instragramicon from "./../images/instragram-icon.png";
import facebookicon from "./../images/facebook-icon.png";
import twitericon from "./../images/twiter-icon.png";
import contactusarrow from "./../images/contactus-arrow.png";
const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <MainNavBar />
      </div>
      <div className="hero-img-div">
         <img src={bgheroimg} className="hero-img" /> 
         <div className="hero-im-text-div">
          <h1 className="text-white"><b> Contact Us </b></h1>
        </div> 
        
      </div>

      <div className="continer py-5">
        <div className="row text-center py-5">
          <div className="col-md-12">
          <img src={Line}/><spam className="sub-title-section"> Get In Touch</spam>
          <h3 className="title-Section box-row-subtitle">Hey Let's Talk</h3>
        </div>
        </div>
       <div className="row">
        <div className="col-md-8">
          <input type="text"placeholder="Name" className="contact-form-input"/>
          <br></br>
          <input type="email"placeholder="Email" className="contact-form-input"/>
          <br></br>
          <input type=" phone" placeholder="Phone" className="contact-form-input"/>
          <br></br>
          <textarea placeholder="Your Message" rows="5"className="contact-form-input"></textarea>
          <div>
            <button className="contactus-button text-white">Send Now<img src={contactusarrow}/></button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row box-row-icon-text my-3">
            <div className="col-md-4 text-center m-auto">
              <div className="icon-form-box p-4">
                <img src={calliconform}/>
                </div>
              </div>
              <div className="col-md-8">
                <p className="box-row-title">Call Anytime</p>
                <span className="box-row-sub-title">+ 91 23678 27867
                  <br/>
                + 91 67678 92878</span>
              </div>
            </div>
            <div className="row box-row-icon-text my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-4">
                <img src={emailiconform}/>
                </div>
               </div>
              <div className="col-md-8">
              <p className="box-row-title">Send Email</p>
                <span className="box-row-sub-title">connect@itfirms.com
                  <br/>
                hello@itfirms.com
                </span>
              </div>
              </div>
              <div className="row box-row-icon-text my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-4">
                <img src={locationiconform}/>
                </div>
              </div>
              <div className="col-md-8">
              <p className="box-row-title"> Visit Us</p>
                <span className="box-row-sub-title">20 Island Park Road, 
                  <br/>
                New Jearsy, New York, USA
               </span>
              </div>
              
            <div className="row">
              <div className="col-md-12">
                <div>
                  <br/>
                <h3 className="box-row-sub-title">Follow Us</h3>
                </div>
                <br/>
          <div>
          <img src={linkedinicon} className="last-icon"/>
          <img src={instragramicon} className="last-icon"/>
          <img src={facebookicon} className="last-icon"/>
          <img src={twitericon} className="last-icon"/>
          </div>   
            </div>
          </div>
        </div>
       </div>
       </div>
</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4686.7554608241!2d74.22187720000001!3d17.3194702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17f03509738b1%3A0x576f02648d3bb018!2sHari%20Om%20Innovations!5e1!3m2!1sen!2sin!4v1735697210880!5m2!1sen!2sin"
        style={{
          border: 0,
          width: "100%",
          height: "500px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

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
  );
};

export default ContactUs;