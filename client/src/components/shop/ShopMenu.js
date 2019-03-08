import React, { useState} from "react";
import "../../css/ShopMenu.css";
import falcon1 from "../../images/falcon1.jpg";
import falcon9 from "../../images/falconHeavy.jpg";

import launches from "../../images/market/launching.jpg";
import dragon from "../../images/market/dragon.jpg";
import dragon2 from "../../images/market/dragon2.jpg";
import drones from "../../images/market/drones.jpg";
import roadster from "../../images/market/roadster.jpg";
import rockets from "../../images/market/rockets.jpg";
import ship from "../../images/market/ship.jpg";

import AnimationTest from '../navigation/animationTest/AnimationTest'

import ShopItem from "./ShopItem";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ShopMenu() {
  // state = {
  //     colors: ["red", "yellow", "blue", "green", "purple", "pink"]
  //   };

  // changeBg() {
  //   const { colors } = this.state;
  //   const color = // func for img changing
  //   document.body.style.backgroundColor = color;
  // }

  
  // render () {

  const [bgColor, setbgColor] = useState(falcon1);

  console.log(bgColor);

  let style = {
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundImage: `url(${bgColor})`
  };


  return (
    <Container className="container2 rocket">
      <article style={style} className="experimentsHolder">
    {/* <AnimationTest>
      
    </AnimationTest>
       */}
        <Row className="menu-ul">
          <ShopItem  change={() => {
            setbgColor(launches);
          }} title="Launches" />

          <ShopItem 
           change={() => {
            setbgColor(dragon);
          }} title="Dragon" />

          <ShopItem
           change={() => {
            setbgColor(falcon9);
          }}
            title="Rockets"
          />
          <ShopItem change={() => {
            setbgColor(ship);
          }} title="Ship" />

          <ShopItem  change={() => {
            setbgColor(drones);
          }} title="Drones" />

          <ShopItem  change={() => {
            setbgColor(roadster);
          }} title="Roadster" />
        </Row>
      </article>
    </Container>
  );
}

export default ShopMenu;
