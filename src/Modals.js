import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function Modals(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <div>
        <center>
          <Button color="dark" onClick={toggle}>
            Ürün Ekle
          </Button>
        </center>

        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Ürün Ekleme</ModalHeader>
          <ModalBody>
            Ürün Adını Giriniz:
            <Input placeholder="Ürünün Adını Giriniz" />
            Ürün Fiyatını Giriniz:
            <Input placeholder="Ürünün Fiyatını Giriniz" />
            Resim Ekleyiniz
            <Input id="exampleFile" name="file" type="file" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Ekle
            </Button>
            <Button color="secondary" onClick={toggle}>
              Kapat
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Modals;
