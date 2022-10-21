import React from "react";
import "../HeroSection/HeroSection.css";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Pagination from "react-bootstrap/Pagination";

function HeroSection() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container>
      <Row>
        <Col md={1}></Col>
        <Col md={10} xs={12}>
          <div className="HeroSectionDiv">
            <h1 className="HeroSectionHeaderTxt">What Is Career Planning?</h1>
            <p className="HeroSectionParaTxt">
              Careers / By Rachel Pelta / July 14, 2022
            </p>
            <p className="HeroSectionPara1Txt">
              You may think that a successful career is equal parts hard work
              and being in the right place at the right time. And while hard
              work often plays a role, having the career you want is less about
              luck and more about career planning. Crafting a career plan allows
              you to set the course you …
            </p>
            <p className="HeroSectionReadMoreTxt">
              Read More <AiOutlineDoubleRight />
            </p>
          </div>
          <div className="HeroSectionDiv">
            <h1 className="HeroSectionHeaderTxt">What Is Career Planning?</h1>
            <p className="HeroSectionParaTxt">
              Careers / By Rachel Pelta / July 14, 2022
            </p>
            <p className="HeroSectionPara1Txt">
              You may think that a successful career is equal parts hard work
              and being in the right place at the right time. And while hard
              work often plays a role, having the career you want is less about
              luck and more about career planning. Crafting a career plan allows
              you to set the course you …
            </p>
            <p className="HeroSectionReadMoreTxt">
              Read More <AiOutlineDoubleRight />
            </p>
          </div>
          <div className="HeroSectionDiv">
            <h1 className="HeroSectionHeaderTxt">What Is Career Planning?</h1>
            <p className="HeroSectionParaTxt">
              Careers / By Rachel Pelta / July 14, 2022
            </p>
            <p className="HeroSectionPara1Txt">
              You may think that a successful career is equal parts hard work
              and being in the right place at the right time. And while hard
              work often plays a role, having the career you want is less about
              luck and more about career planning. Crafting a career plan allows
              you to set the course you …
            </p>
            <p className="HeroSectionReadMoreTxt">
              Read More <AiOutlineDoubleRight />
            </p>
          </div>
          <div className="HeroSectionDiv">
            <h1 className="HeroSectionHeaderTxt">What Is Career Planning?</h1>
            <p className="HeroSectionParaTxt">
              Careers / By Rachel Pelta / July 14, 2022
            </p>
            <p className="HeroSectionPara1Txt">
              You may think that a successful career is equal parts hard work
              and being in the right place at the right time. And while hard
              work often plays a role, having the career you want is less about
              luck and more about career planning. Crafting a career plan allows
              you to set the course you …
            </p>
            <p className="HeroSectionReadMoreTxt">
              Read More <AiOutlineDoubleRight />
            </p>
          </div>
          <div className="HeroSectionDiv">
            <h1 className="HeroSectionHeaderTxt">What Is Career Planning?</h1>
            <p className="HeroSectionParaTxt">
              Careers / By Rachel Pelta / July 14, 2022
            </p>
            <p className="HeroSectionPara1Txt">
              You may think that a successful career is equal parts hard work
              and being in the right place at the right time. And while hard
              work often plays a role, having the career you want is less about
              luck and more about career planning. Crafting a career plan allows
              you to set the course you …
            </p>
            <p className="HeroSectionReadMoreTxt">
              Read More <AiOutlineDoubleRight />
            </p>
          </div>
        </Col>
        <Col md={1}></Col>
        <Row>
          <Col md={4}></Col>
          <Col md={4} xs={12}>
            <div>
              <Pagination>
                {items}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "3rem",
                  }}
                >
                  Next page{" "}
                  <div>
                    <AiOutlineDoubleRight />
                  </div>
                </span>
              </Pagination>
              <br />
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Row>
    </Container>
  );
}

export default HeroSection;
