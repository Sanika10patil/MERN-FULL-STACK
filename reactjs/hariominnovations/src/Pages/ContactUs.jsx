import MainNavBar from "../Commponents/MainNavBar";
import bgheroimg from "./../images/hero-img-contactus.png";
import calliconform from "./../images/call-icon-form.png";
import emailiconform from "./../images/email-icon-form.png";
import locationiconform from "./../images/location-icon-form.png";
import line from "./../images/Line.png";
import MainFooter from "../Commponents/MainFooter";
const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <MainNavBar/>
      </div>
      <div className="hero-img-div">
        <img src={bgheroimg} className="hero-img" />
        <div className="hero-im-text-div">
          <h1 className="text-white">
            <b> Contact Us </b>
          </h1>
        </div>
      </div>

      <div className="container  py-5 ">
        <div className="row text-center py-5">
          <div className="col-md-12">
            <img src={line} />{" "}
            <span className="sub-title-section">Get In Touch </span>
            <h3 className="title-section">Hey! Let’s Talk</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              placeholder="name"
              className="contact-form-input"
            />
            <br />
            <input
              type="email"
              placeholder="email"
              className="contact-form-input"
            />
            <br />

            <input
              type="mobile"
              placeholder="mobile"
              className="contact-form-input"
            />
            <br />

            <textarea
              placeholder="Your Message"
              className="contact-form-input"
            ></textarea>
          </div>
          <div className="col-md-4">
            <div className="row box-row-icon-text my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-5">
                  <img src={calliconform} />
                </div>
              </div>
              <div className="col-md-8">
                <p>Call Anytime</p>
                <span>+ 91 23678 27867 + 91 67678 92878</span>
              </div>
            </div>
            <div className="row box-row-icon-text  my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-5">
                  <img src={emailiconform} />
                </div>
              </div>
              <div className="col-md-8">
                <p>Send Email</p>
                <span>connect@itfirms.com hello@itfirms.com</span>
              </div>
            </div>
            <div className="row box-row-icon-text  my-3">
              <div className="col-md-4 text-center m-auto">
                <div className="icon-form-box p-5">
                  <img src={locationiconform} />
                </div>
              </div>
              <div className="col-md-8">
                <p>Visit Us</p>
                <span>20 Island Park Road, New Jearsy, New York, USA</span>
              </div>
            </div>

            {/* <div className="row">
                    <div className="col-md-12">
                      <h3>Follow us</h3>
                      <h3>img</h3>
                    </div>
                </div> */}
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

     <MainFooter/>
    </div>
  );
};

export default ContactUs;