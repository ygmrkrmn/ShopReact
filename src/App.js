import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Basket from "./Basket";
import Cardd from "./Cardd";
import Navi from "./Navi";
import Modals from "./Modals";
import Data from "./Data";

function App() {
  const { product } = Data;
  const [basket, setBasket] = useState([]);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navi />

            <Cardd product={product} basket={basket} setBasket={setBasket} />
          </Col>
          <Col xs={4}>
            <Modals />
            <Basket product={product} basket={basket} setBasket={setBasket} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
