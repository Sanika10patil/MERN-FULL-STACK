import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import bgheroimg from "./../images/hero-img-contactus.png";
import MainFooter from "./../Commponents/MainFooter"
import group from "./../images/Group.png"
import Application from "./../images/New-Img.png"
import arrow from "./../images/contactus-arrow.png"
import rocket from "./../images/rocket.png"
import lastimage from "./../images/product-page-footer.png"
import readMore from "./../images/contactus-arrow.png"
import frame from "./../images/Frame.png"
import framelast from "./../images/Frame 39.png"
import MainNavBar from '../Commponents/MainNavBar';
import white from "./../images/white.png"
import star from "./../images/star.png"
 
const ProductPage = () => {
  return (
    <div>
      <div className="container">
<MainNavBar />

</div>
    
      {/* Hero Image Section */}
      <div className="hero-img-div">
        <img src={bgheroimg} className="hero-img" alt="Hero Background" />
        <div className="hero-im-text-div">
          <h1 className="text-white"><b>Our Products</b></h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className='col-md-6 align-items-center justify-content-center'>
            <h4>Billing Software in India for
              <br></br> Small Businesses</h4>
            <br />
            <p>No one loves, seeks, or desires pain simply for the sake of pain.
              <br></br> However,there are times when effort and pain can lead to 
              <br></br>significant pleasure.</p>
            <div className="item">
              <img src={group} alt="bullet" className="image"/>
              <div className="description">
                <p>Assess your position relative to your competitors.</p>
              </div>
            </div>
            <div className="item">
              <img src={group} alt="bullet" className="image" />
              <div className="description">
                <p>Gather insights to determine what works.</p>
              </div>
            </div>
            <div className="item">
              <img src={group} alt="bullet" className="image" />
              <div className="description">
                <p>Make changes based on data-driven insights.</p>
              </div>
            </div>
           
            <Button className="button">VIEW ALL CASES</Button>
          <img src={arrow} className="img-arrow"/>
            
          </div>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <img src={Application} width="200%"/> 
          </div>
        </div>
       
      </div>
      <br />
{/* -----------second div--------------------- */}
<div className="container-next">
  <div className="row d-flex justify-content-center">
    {/* First Column */}
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={rocket} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
          <h3>Manage cashflow <br></br>seamlessly</h3>
          <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services to help achieve 
            their business success.</p>
        </div>
      </div>
    </div>
 
    {/* Second Column */}
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={white} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
          <h3>Online/Offline <br></br>billing</h3>
          <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services
           to help achieve their business success.</p>
        </div>
      </div>
    </div>
 
    {/* Third Column */}
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={white} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
          <h3>Keep data safe with<br></br> backups</h3>
          <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital services to help achieve their business success.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* -----------Third div--------------------- */}
<div className="container">
  <div className="row d-flex justify-content-center">
    {/* First Column */}
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={white} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
        <h3>Keep data safe with <br></br>backups</h3>
        <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digital 
        services to help achieve their business success.</p>
        </div>
      </div>
    </div>
 
    {/* Second Column */}
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div className="item-product d-flex">
        <img src={white} alt="bullet" className="image-product img-fluid" />
        <div className="description-product">
        <h3>Keep data safe with <br></br>backups</h3>
        <p>At Hariom, we will act as the client's trusted advisor specializing in areas of digitalservices 
          to help achieve their business success.</p>
        </div>
      </div>
    </div>
 
</div>
</div>
{/* -------------------------------------third div--------------------------- */}
<div className="container">
  <div className="row">
    <div className='col-md-6 d-flex align-items-center justify-content-center'>
    <img src={lastimage} width="500%" height="200%"/> 
    </div>
   
    <div className='col-md-6 align-items-center justify-content-center'>
      <div className="item-product-last">
     
        <img src={frame} alt="bullet" className="image" />
        <div className="description-product-last">
          <h3>Application Development</h3>
          <p>A wise person always adheres to these principles in such matters: those who are similarly at fault are those who fail.</p>
          <p>Read More <span><img src={readMore} className="img-arrow" alt="arrow" /></span></p>
        </div>
      </div>
      <div className="item-product-last">
        <img src={frame}  />
        <div className="description-product-last">
          <h3>Technical Development</h3>
          <p>A wise person always adheres to these principles in such matters: 
           those who are similarly at fault are those who fail.</p>
          <p>Read More <span> <img src={readMore}/> </span></p>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />
{/* --------------------------last div-------------------------------- */}
<div className="container">
  <div className="row">
    <div className='col-md-1 d-flex align-items-center justify-content-center'>
     
    </div>
   
    <div className='col-md-10 d-flex flex-column align-items-center justify-content-between'>
      <div className="testimonial-card">
     
        <img src={framelast} alt="bullet" className="image"/> 
        <p className="testimonial-text">It is a long established fact that a 
          <br></br>reader will be distracted by the
          <br></br> readable content of a page when 
          <br></br>looking at its layout.</p>
        <div className="Stars">
        <img src={star} width="50%"/> 
        <h4>Lora simth</h4></div>
         </div>
      
      <div className="testimonial-card">
        <img src={framelast} alt="bullet" className="image"/>
        <p className="testimonal-text">It is a long established fact that a<br></br> reader will be distracted by the<br>
        </br> readable content of a page when <br>
        </br>looking at its layout.</p>
         
        
        <div className="Star">  
       <img src={star} width="50%"/> 
       <h4>Lora simth</h4>
        </div>
        </div>
        <div className="testimonial-card">
        <img src={framelast} alt="bullet" className="image" />
        <p className="testimonal-text">It is a long established fact that a reader will be distracted by  <br></br> 
        readable content of a page when <br>
        </br>looking at its layout.</p>
        <div className="Star">
        <img src={star} width="50%"/> 
        <h4>Lora simth</h4>
         </div>
  
      </div>
    </div>
    <div className='col-md-1 d-flex align-items-center justify-content-center'>
     
    </div>
  </div>
</div>
 
 
 
 
 
 
 
 <MainFooter/>

    </div>
  )
}
 
export default ProductPage;