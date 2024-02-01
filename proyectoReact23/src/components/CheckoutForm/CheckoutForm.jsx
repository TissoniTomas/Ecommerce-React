import { useContext, useState } from "react";

import { ModalComponent } from "../ConfirmationForm/ConfirmationForm";
import { ModeContext } from "../../context/modeContext";
import { Button } from "keep-react";

export const CheckoutForm = ({ confirm }) => {
  const { mode } = useContext(ModeContext);
  const initialForm = {
    name: "",
    surname: "",
    email: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialForm);
  const [confirmation, setConfirmation] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setConfirmation(true);
    console.log(formValues);
  };

  const resetForm = ()=>{
    setFormValues(initialForm)
  }

  return (
    <form className="my-10 flex flex-col" onSubmit={onSubmit}>
      <div className="mb-10 w-96 text-center flex flex-col items-center">
        <label
          className={`text-xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          } `}
          htmlFor="name"
        >
          Name
        </label>
        <input
          value={formValues.name}
          onChange={onChange}
          type="text"
          name="name"
          id="name"
          required
          className={`w-full rounded-lg h-8 text-center ${
            mode === "light" ? "border border-black " : "border-white"
          }`}
        />
      </div>

      <div className="mb-10 w-96 text-center flex flex-col items-center">
        <label
          className={`text-xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          } `}
          htmlFor="surname"
        >
          Surname
        </label>
        <input
          value={formValues.surname}
          onChange={onChange}
          type="text"
          name="surname"
          id="surname"
          required
          className={`w-full rounded-lg h-8 text-center ${
            mode === "light" ? "border border-black " : "border-white"
          }`}
        />
      </div>

      <div className="mb-10 w-96 text-center flex flex-col items-center">
        <label
          className={`text-xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          } `}
          htmlFor="email"
        >
          Email
        </label>
        <input
          value={formValues.email}
          onChange={onChange}
          type="text"
          name="email"
          id="email"
          required
          className={`w-full rounded-lg h-8 text-center ${
            mode === "light" ? "border border-black " : "border-white"
          }`}
        />
      </div>
      <div className="mb-10 w-96 text-center flex flex-col items-center">
        <label
          className={`text-xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          } `}
          htmlFor="address"
        >
          Address
        </label>
        <input
          value={formValues.address}
          onChange={onChange}
          type="text"
          name="address"
          id="address"
          required
          className={`w-full rounded-lg h-8 text-center ${
            mode === "light" ? "border border-black " : "border-white"
          }`}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button className="mr-2" onClick={onSubmit} size="md" type="primary">
          Finalizar Compra
        </Button>
        <Button onClick={resetForm} size="md" type="outlinePrimary">Reiniciar Formulario</Button>
      </div>
      {confirmation && (
        <ModalComponent
          confirm={confirm}
          formvalues={formValues}
          setformvalues={setFormValues}
          initialform={initialForm}
          confirmation={setConfirmation}
        />
      )}
    </form>
  );
};
