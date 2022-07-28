import React, { useEffect, useRef, useState } from "react";

//3rd party components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";

//components
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import LoginWrapper from "./SC/LoginWrapper";
import LogoComponent from "../../components/Header/SC/Logo";

//icons
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const ContainerClassesRef = useRef(
    " w-75 h-75  d-flex justify-content-center align-items-center flex-column"
  );
  const HeaderClassesRef = useRef(
    "d-flex justify-content-center align-items-center flex-column text-capitalize"
  );
  const spinnerClassesRef = useRef(
    "d-flex justify-content-center align-items-center flex-row text-capitalize"
  );
  const [Logo, setLogo] = useState("");
  const [IsLoading, setIsLoading] = useState(true);

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
      Type="Login"
      Direction="col"
      ItemsCenter
      ContentCenter
      Background="var(--bs-primary)"
    >
      <Container className={ContainerClassesRef.current}>
        <LogoComponent className="my-3">
          <img src={Logo} alt="logo" />
          <h4 className="text-white">Gustoso</h4>
        </LogoComponent>
        <LoginWrapper className="shadow border border-dark rounded">
          <header className={HeaderClassesRef.current}>
            <h5 className="mb-0">welcome back</h5>
            <small
              className="opacity-50 fw-bold"
              style={{ fontSize: "0.7rem" }}
            >
              enter manager username and password to enter dashboard
            </small>
          </header>
          <Form className="w-100" validated={false}>
            <FloatingLabel
              className="mb-2"
              controlId="login-form-username"
              label={
                <>
                  <EmailIcon
                    className="me-2"
                    fontSize="small"
                    color="secondary"
                  />
                  <small>username</small>
                </>
              }
            >
              <Form.Control
                type="text"
                placeholder="Enter username"
                size="sm"
                style={{ backgroundColor: "var(--bs-gray-200)" }}
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-2"
              controlId="login-form-passowrd"
              label={
                <>
                  <LockIcon
                    className="me-2"
                    color="secondary"
                    fontSize="small"
                  />
                  <small>password</small>
                </>
              }
            >
              <Form.Control
                type="password"
                placeholder="Enter password"
                size="sm"
                style={{ backgroundColor: "var(--bs-gray-200)" }}
              />
            </FloatingLabel>
            <Button
              className="w-100 mt-1"
              type="submit"
              variant="primary"
              size="sm"
              disabled={IsLoading}
            >
              {IsLoading ? (
                <span className={spinnerClassesRef.current}>
                  <small className="me-3">Signing in ...</small>
                  <Spinner
                    as="svg"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </span>
              ) : (
                "Login"
              )}
            </Button>
          </Form>
        </LoginWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Login;
