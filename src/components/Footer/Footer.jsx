import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import "./Footer.css";
import logo from "../../assets/img/final logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail(""); // Clear input after submission
      setTimeout(() => setSubscribed(false), 3000); // Hide message after 3 sec
    }
  };

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        {/* Above HR tag */}
        <Row className="align-items-center text-center text-md-start">
          {/* Left side */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <div className="logo">
              <img src={logo} width={100} alt="Logo" className="rounded-3" />
            </div>
          </Col>

          {/* Right side - Subscribe Section */}
          <Col xs={12} md={8}>
            <div className="subscribe rounded-4 p-4 d-flex flex-column justify-content-center align-items-center text-center bg-light text-dark">
              <h2 className="mb-3">Subscribe</h2>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="form-control my-2 w-75"
              />
              <button className="btn btn-primary mt-2" onClick={handleSubscribe}>
                Subscribe
              </button>
              {subscribed && <p className="text-success mt-2">You have successfully subscribed!</p>}
              <p className="mb-0">Get the latest updates on Front-End Tech</p>
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-light" />

        {/* Bottom section */}
        <Row className="align-items-center text-center text-md-start">
          {/* Left Side - Social Links */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start align-items-center">
              <p className="me-2 mb-0">Follow me</p>
              <IoArrowForward />
              <div className="social-icons ms-3">
                <a href="#" className="text-light me-3">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-light">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </Col>

          {/* Right Side - Copyright */}
          <Col xs={12} md={8}>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
