import { useContext, useEffect, useState } from "react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { PurchaseInfoContext } from "../../context/PurchaseInfoContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export const ModalComponent = ({
  formvalues,
  initialform,
  setformvalues,
  confirmation,
  confirm,
}) => {
  const [showModal, setShowModal] = useState(true);
  const {purchaseInfo, setPurchaseInfo, setPurchaseID, purchaseID} = useContext(PurchaseInfoContext);
  const {shoppingCart} = useContext(ShoppingCartContext);
 

  const onClickOne = async () => {
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
  };
  const onClickTwo = () => {
    setShowModal(!showModal);
    confirmation(false);
  };

  return (
    <>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="center"
      >
        <Modal.Header>Do you confirm this information?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              Veracity of the information must be precise so we can send the information about your purchase.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickOne}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
