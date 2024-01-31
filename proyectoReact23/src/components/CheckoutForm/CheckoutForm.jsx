
import {  useState } from "react";
import {collection, addDoc} from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"

export const CheckoutForm = () => {
  const initialForm = {
    name: "",
    surname: "",
    email: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialForm);
  
  const onChange = (e) => {
    const { value, name } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const docRef = await addDoc(collection(db, "purchaseCollection"), {
      formValues
    });
    console.log("Document written with ID: ", docRef.id);
    setFormValues(initialForm);

  };

  return (
    <form className="my-10 flex flex-col" onSubmit={onSubmit}>
      <div className="mb-10 w-96 text-center">
        <label htmlFor="name">Name</label>
        <input
          value={formValues.name}
          onChange={onChange}
          type="text"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="mb-10 w-96 text-center">
        <label htmlFor="surname">surname</label>
        <input
          value={formValues.surname}
          onChange={onChange}
          type="text"
          name="surname"
          id="surname"
          required
        />
      </div>

      <div className="mb-10 w-96 text-center">
        <label htmlFor="email">email</label>
        <input
          value={formValues.email}
          onChange={onChange}
          type="text"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="mb-10 w-96 text-center">
        <label htmlFor="address">address</label>
        <input
          value={formValues.address}
          onChange={onChange}
          type="text"
          name="address"
          id="address"
          required
        />
      </div>
      <button className="bg-red-200" type="submit">Enviar Info brother</button>
    </form>
  );
};
