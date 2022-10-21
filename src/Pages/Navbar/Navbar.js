import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import BulletIcon from "../../Assets/BulletIcon.png";
import "./Navbar.css";
import { Image } from "react-bootstrap";
function Navbar2() {
  return (
    <Navbar expand="lg" variant="light" fixed='top' style={{ backgroundColor: "#DAC199" }}>
      <Container>
        <Navbar.Brand href="#">
          <Image
            alt=""
            src={BulletIcon}
            width="120"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#" className="NavbarText">
              Course Catalog
            </Nav.Link>
            <Nav.Link href="#" className="NavbarText">
              Student Blog
            </Nav.Link>
            <Nav.Link href="#" className="NavbarText">
              For Mentee
            </Nav.Link>
            <Nav.Link href="#" className="NavbarText">
              For Mentor
            </Nav.Link>
            <Nav.Link href="#" className="NavbarText">
              Sign up
            </Nav.Link>
            <Button
              variant="outline-success"
              className="NavbarText"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;