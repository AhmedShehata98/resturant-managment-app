import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

// components
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import LogoComponent from "./SC/Logo";

// 3rd party components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Header = () => {
  const ContainerClassesRef = useRef(
    "justify-content-between align-items-center border-xsm border-bottom-2"
  );
  const NavbarCollapseClassesRef = useRef(
    "justify-content-center align-items-center"
  );
  const NavLinkClassesRef = useRef("text-text text-decoration-none");
  const ButtonClassesRef = useRef(
    "d-flex me-lg-2 rounded-pill w-100 btn btn-primary btn-sm"
  );
  const [Logo, setLogo] = useState("");

  useEffect(() => {
    try {
      import("../../assets/icons/cutlery.png").then((logo) =>
        setLogo(logo.default)
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <SectionWrapper
      Type="header"
      Direction="row"
      ItemsCenter="center"
      Background="var(--bs-gray-200)"
    >
      <Navbar
        className="py-0"
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Container
          className={ContainerClassesRef.current}
          style={{ backgroundColor: "var(--bs-gray-200)" }}
        >
          <LogoComponent>
            <img src={Logo} alt="logo" />
            <h4>Gustoso</h4>
          </LogoComponent>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={NavbarCollapseClassesRef.current}
          >
            <Nav>
              <Nav.Link>
                <NavLink className={NavLinkClassesRef.current} to="/">
                  home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={NavLinkClassesRef.current} to="/Our-Team">
                  Our Team
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={NavLinkClassesRef.current} to="/Reserviton">
                  Reserviton
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Row>
            <Col>
              <Link
                to="/login"
                variant="primary"
                className={ButtonClassesRef.current}
                size="sm"
              >
                <LoginIcon className="me-2" />
                <b>Login</b>
              </Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </SectionWrapper>
  );
};

export default Header;
