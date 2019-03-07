import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";


import falcon1 from "../../images/falcon1.jpg";
import falcon9 from "../../images/falcon9.jpg";
import falconHeavy from "../../images/falconHeavy.jpg";
import falconBig from "../../images/bigFrocket.jpg";

class Shop extends React.Component {
  render() {
    return (
      <div>
        Setting the shop
        <Container>
          <ul className="list-unstyled">
            <Media as="li">
              <img
                width={164}
                height={164}
                className="mr-3"
                src={falcon1}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>List-based media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>

            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src=""
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>List-based media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>

            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>List-based media object</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </ul>
          ;
        </Container>
      </div>
    );
  }
}

export default Shop;
