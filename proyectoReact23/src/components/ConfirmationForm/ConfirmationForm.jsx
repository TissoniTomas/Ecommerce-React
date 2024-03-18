
// React Hooks

import { useContext, useEffect, useState } from "react";

// Componentes

import { Modal, Button, Typography } from "keep-react";
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
      
      <Modal isOpen={showModal} >
        <Modal.Body className="space-y-3">
          <Modal.Icon>
            <CloudArrowUp size={28} color="#1B4DFF" />
          </Modal.Icon>
          <Modal.Content>
            <Typography variant="div" className="!mb-6">
              <Typography variant="h3" className="mb-2 text-body-1 font-medium text-metal-900">
                ¿Confirmar Compra?
              </Typography>
              <Typography variant="p" className="text-body-4 font-normal text-metal-600">
                Es extremadamente importante la veracidad de los datos ingresados a fin de enviarle la informacion de su compra por mail
              </Typography>
            </Typography>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={onClickDecline} size="sm" variant="outline" color="secondary">
              Cancel
            </Button>
            <Button onClick={onClickConfirm} size="sm" color="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};
