
// React Hooks

import { useContext, useEffect, useState } from "react";

// Componentes

import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

//Firestore

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// Contextos

import { PurchaseInfoContext } from "../../context/PurchaseInfoContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export const ModalComponent = ({
  formvalues,
  initialform,
  setformvalues,
  confirmation,
  confirm,
}) => {

  // Context & Hooks
  const [showModal, setShowModal] = useState(true);
  const {setPurchaseInfo, setPurchaseID} = useContext(PurchaseInfoContext);
  const {shoppingCart} = useContext(ShoppingCartContext);
 
// Funciones


  const onClickConfirm = async () => {
    const docRef = await addDoc(collection(db, "purchaseCollection"), {
      ...shoppingCart,
      ...formvalues,
    });

    setShowModal(!showModal);
    confirm(true);
    setPurchaseInfo(formvalues,);
    setPurchaseID(docRef.id)
    setformvalues(initialform);
    console.log(shoppingCart);
    irAlPrincipio();
  };
  const onClickDecline = () => {
    setShowModal(!showModal);
    confirmation(false);
  };

  const irAlPrincipio = () => {
    window.scrollTo(0, 0);
  };
  

  return (
    <>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="center"
      >
        <Modal.Header>¿Quieres confirmar la informacion ingresada??</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
             La informacion brindada debe ser correcta y precisa para poder enviar la factura e informacion de los juegos via email.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickDecline}>
            Cancelar
          </Button>
          <Button type="primary" onClick={onClickConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
