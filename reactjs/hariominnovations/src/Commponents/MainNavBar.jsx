import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../images/logohariom.png";
import arrow from "./../images/arrow-contact-us.png";
import { Link } from "react-router-dom";

const MainNavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Navbar.Brand href="#">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-bar"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="nav-link"> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link className="nav-link"> <Link to="/aboutus">About Us</Link> </Nav.Link>
            <Nav.Link className="nav-link"> <Link to="/productpage">ProducPage</Link> </Nav.Link>
            <Nav.Link className="nav-link">Services</Nav.Link>
            <Nav.Link className="nav-link">Careers</Nav.Link>
            <Nav.Link className="nav-link">Case Studies</Nav.Link>
            <Nav.Link className="nav-link">Testimonial</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button className="button"> <Link to="/contactus">Contact Us</Link> </Button>
          </div>
          <img src={arrow} className="img-arrow"/>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavBar;