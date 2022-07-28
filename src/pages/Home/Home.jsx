import React, { useEffect, useState } from "react";

//components
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

// icons
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";

//3rd party components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StarIcon from "@mui/icons-material/Star";
import StarsWrapper from "./SC/StarsWrapper";
import Reviewers from "./SC/Reviewers";
import FeaturedFoods from "./SC/FeaturedFoods";
import Card from "react-bootstrap/Card";
import IconContainer from "./SC/IconContainer";
import FeatureWrapper from "./SC/FeatureWrapper";

const Home = () => {
  const [Background, setBackground] = useState("");
  const [IsLoading, setIsLoading] = useState(true);
  //
  useEffect(() => {
    import("../../assets/images/main.png")
      .then((image) => setBackground(image.default))
      .finally(() => setIsLoading(false));
  }, []);
  //

  return (
    <SectionWrapper
      Type="home"
      Direction="col"
      ItemsCenter
      Background="var(--bs-gray-200)"
    >
      <Container className="my-auto">
        <Row>
          <Col lg={6}>
            <h2 className="display-5">
              Delicious food accompanied by excellent service .
            </h2>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nam
              quaerat sunt tempore libero? Maiores dolores ea ducimus
              dignissimos dolore!
            </p>
            <Row style={{ gap: "1rem" }}>
              <Col lg={5}>
                <Button variant="primary" className="rounded-pill w-100">
                  Reserve a table now
                </Button>
              </Col>
              <Col lg={4}>
                <Button
                  variant="outline-primary"
                  className="rounded-pill w-100"
                >
                  rate us
                </Button>
              </Col>
            </Row>
            <Row className="my-3">
              <b>Reviews</b>
              <StarsWrapper>
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarOutlineIcon fontSize="small" color="warning" />
              </StarsWrapper>
              <Reviewers>
                <img src="https://picsum.photos/71" alt="review-user-img" />
                <img src="https://picsum.photos/72" alt="review-user-img" />
                <img src="https://picsum.photos/73" alt="review-user-img" />
                <img src="https://picsum.photos/74" alt="review-user-img" />
                <img src="https://picsum.photos/75" alt="review-user-img" />
              </Reviewers>
            </Row>
          </Col>
          <Col lg={6}>
            <img className="mw-100" src={Background} alt="main background" />
          </Col>
        </Row>
      </Container>
      <Container>
        <FeaturedFoods>
          <Card className="shadow" text="primary" border="primary">
            <Card.Img
              variant="top"
              src={require("../../assets/images/featured-dish/dish-01.jpg")}
              alt="featured dish"
            />
            <Card.Body>
              <Card.Title>awesome dish 1</Card.Title>
              <Card.Text className="lh-1 opacity-75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
                iure voluptatem facere libero quam veniam.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="shadow" text="primary" border="primary">
            <Card.Img
              variant="top"
              src={require("../../assets/images/featured-dish/dish-02.jpg")}
              alt="featured dish"
            />
            <Card.Body>
              <Card.Title>awesome dish 1</Card.Title>
              <Card.Text className="lh-1 opacity-75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
                iure voluptatem facere libero quam veniam.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="shadow" text="primary" border="primary">
            <Card.Img
              variant="top"
              src={require("../../assets/images/featured-dish/dish-03.jpg")}
              alt="featured dish"
            />
            <Card.Body>
              <Card.Title>awesome dish 1</Card.Title>
              <Card.Text className="lh-1 opacity-75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
                iure voluptatem facere libero quam veniam.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="shadow" text="primary" border="primary">
            <Card.Img
              variant="top"
              src={require("../../assets/images/featured-dish/dish-04.jpg")}
              alt="featured dish"
            />
            <Card.Body>
              <Card.Title>awesome dish 1</Card.Title>
              <Card.Text className="lh-1 opacity-75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
                iure voluptatem facere libero quam veniam.
              </Card.Text>
            </Card.Body>
          </Card>
        </FeaturedFoods>
      </Container>
      <Container>
        <FeatureWrapper>
          <Col>
            <img
              className="w-75 rounded-3 shadow"
              src={require("../../assets/images/02.jpg")}
              alt=""
            />
          </Col>
          <Col>
            <h4 className="text-capitalize">professional chefs</h4>
            <p className="mb-5 opacity-75">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <Row className="mb-4">
              <IconContainer className="shadow-sm ">
                <FoodBankIcon fontSize="large" />
              </IconContainer>
              <Col>
                <h5 className="text-capitalize mb-0">delicious food </h5>
                <small className="opacity-75">
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </small>
              </Col>
            </Row>
            <Row className="mb-4">
              <IconContainer className="shadow-sm ">
                <AvTimerIcon fontSize="large" />
              </IconContainer>
              <Col>
                <h5 className="text-capitalize mb-0">less wait time </h5>
                <small className="opacity-75">
                  Lorem ipsum dolor sit amet consectetur.
                </small>
              </Col>
            </Row>
            <Row className="mb-4">
              <IconContainer className="shadow-sm ">
                <TableRestaurantIcon fontSize="large" />
              </IconContainer>
              <Col>
                <h5 className="text-capitalize mb-0">special tables </h5>
                <small className="opacity-75">
                  Lorem ipsum dolor sit amet consectetur.
                </small>
              </Col>
            </Row>
          </Col>
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Home;
