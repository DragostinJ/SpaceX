import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";

function ShopItem(props) {
  let color = "rgba(52, 52, 52, 0.01)";
  const [bgStyle, setbgStyle] = useState(color);

  let bgSt = {
    backgroundColor: `${bgStyle}`
  };
  let cardStyle2 = {
    width: "200px",
    height: "200px",
    backgroundColor: "rgba(52, 52, 52, 0.01)",
    border: "1px solid white",
    margin: "40px"
  };
//   let menuItem = {
//     border: "1px solid red",
//     width: "200px",
//     height: "200px",
//     margin: "40px",
//     padding: "40px"
//   };
  console.log(props);
  return (
    <div>
      <Col
        className="menu-item justify-content-space-between"
        xs={6}
        md={4}
        xl={4}
      >
        <Card
          onMouseOver={() => {
            setbgStyle("rgba(52, 52, 52, 0.8");
          }}
          onMouseLeave={() => {
            setbgStyle(color);
          }}
          style={cardStyle2}
        >
          <Card.Body onMouseOver={props.change} style={bgSt}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default ShopItem;
