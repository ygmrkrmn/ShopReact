import React from "react";
import { Button } from "reactstrap";

function Basket({ basket, setBasket }) {
  const handleDelete = (id) => {
    console.log(id);
    setBasket((basket) => basket.filter((ind) => ind.id !== id));
    if (basket.filter((ind) => ind.id !== id)) {
    }
  };

  return (
    <div>
      <center>
        <h3>SEPET🧺</h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Fiyatı</th>
              <th>Adet</th>
              <th>Toplam</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {basket?.map((item, key) => {
              return (
                <tr key={key + 1}>
                  <td>{key + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.price}
                    <span>₺</span>
                  </td>
                  <td>{item.piece}</td>
                  <td>
                    {item.price * item.piece} <span>₺</span>
                  </td>
                  <td>
                    <Button
                      outline
                      color="dark"
                      onClick={() => handleDelete(item.id)}
                    >
                      Sil
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Basket;
