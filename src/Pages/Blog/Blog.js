import React from "react";
import "./Blog.css";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../Assets/image 21.png";

export default function Blog() {
  return (
    <>
      <Container>
        <Row>
          <Col id="item1">What is career planning</Col>
        </Row>
        <Row>
          <Col id="item2">Careers / By Rachel Pelta / July 14, 2022</Col>
        </Row>
        <Row>
          <div>
            <img id="item3" src={Img} />
          </div>
        </Row>
        <Row>
          <Col id="item4">
            You may think that a successful career is equal parts hard work and
            being in the right place at the right time. And while hard work
            often plays a role, having the career you want is less about luck
            and more about career planning.{" "}
          </Col>
        </Row>
        <Row>
          <Col id="item5">
            Crafting a career plan allows you to set the course you want, then
            take the steps to make it happen. What’s more, a career plan lets
            you take control over where you take your career, not the other way
            around.
          </Col>
        </Row>
        <Row>
          <Col id="item6">What Is Career Planning?</Col>
        </Row>
        <Row>
          <Col id="item7">
            The career planning process is when you figure out what you want
            your career path to look like and what you have to do to make it
            happen. You set short, medium, and long-term career goals, then
            determine the steps you need to take to accomplish those goals.
          </Col>
        </Row>
        <Row>
          <Col id="item8">When to Start the Career Planning Process ?</Col>
        </Row>
        <Row>
          <Col id="item9">
            The best time to engage in the career planning process is long
            before you start your job search. Your senior year of high school
            and the first year or two of college are great times to start
            thinking about what kinds of jobs and careers you’re interested in.
            You can then test-drive them through classes, internships,
            certification programs and virtual work experiences to gain a fuller
            understanding of what they’re really like, discard the jobs you
            dislike, and further explore the ones you connect with.
          </Col>
        </Row>
        <Row>
          <Col id="item10">
            While most career planning happens at the beginning of your career,
            it’s not a one-and-done deal. Career planning should happen
            throughout your entire career. Periodically assessing where you are
            and where you’re going allows you to adjust your plans to help you
            accomplish your career goals or even pivot to new ones.
          </Col>
        </Row>
        <Row>
          <Col id="item11">How to Plan Your Career ?</Col>
        </Row>
        <Row>
          <Col id="item12">
            The thought of planning out your entire career may seem
            overwhelming. But by breaking it down into smaller, more manageable
            steps, you’ll soon develop a clear idea of what your career could
            look like.
          </Col>
        </Row>
      </Container>
    </>
  );
}
