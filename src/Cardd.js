import React, { useState } from "react";
import {
  CardBody,
  CardTitle,
  CardText,
  Button,
  Card,
  Row,
  Col,
} from "reactstrap";
export default function Cardd({ product, setProduct, basket, setBasket }) {
  const add = (data, id) => {
    if (basket.some((val) => val.id === id)) {
      basket.find((val) => val.id === id).piece++;
      setBasket((basket) => [...basket]);
    } else {
      console.log(data);
      setBasket([
        ...basket,
        {
          id: id,
          name: data.name,
          price: data.price,
          piece: 1,
        },
      ]);
      console.log(basket);
    }
  };
  return (
    <div>
      <Row>
        {product?.map((item, ind) => {
          return (
            <Col xs={3} key={ind}>
              <Card
                style={{
                  width: "13rem",
                }}
              >
                <img src={item.img} />
                <CardBody>
                  <center>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardText>
                      {item.price} <span>₺</span>
                    </CardText>
                    <Button
                      outline
                      color="dark"
                      onClick={() => add(item, item.id)}
                    >
                      Ekle
                    </Button>
                  </center>
                </CardBody>
              </Card>
              <br />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
