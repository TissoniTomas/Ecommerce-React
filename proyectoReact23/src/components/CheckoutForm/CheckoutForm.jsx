// React Hooks
import { useContext, useState } from "react";

// Componentes

import { Button } from "keep-react";
import { ModalComponent } from "../ConfirmationForm/ConfirmationForm";

// Contextos

import { ModeContext } from "../../context/modeContext";

export const CheckoutForm = ({ confirm }) => {
  // Objetos

  const initialForm = {
    name: "",
    surname: "",
    email: "",
    address: "",
  };

  // Hooks y Contextos
  const { mode } = useContext(ModeContext);
  const [confirmation, setConfirmation] = useState(false);
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});

  // Funciones

  const onChange = (e) => {
    const { value, name } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    const errors = {};
  
    if (formValues.email && !validateEmail(formValues.email)) {
      errors.email = "Por favor ingresa un correo electrónico válido";
    } 

  
    if (Object.keys(errors).length === 0) {
      setErrors({});
      setConfirmation(true);
    
    } else {
      setErrors(errors);
    }
  };

  const resetForm = () => {
    setFormValues(initialForm);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

 

  return (
    <form className="my-10 flex flex-col" onSubmit={onSubmit}>
      <div className="mb-10 w-96 text-center flex flex-col items-center">
        <label
          className={`text-xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          } `}
          htmlFor="name"
        >
          Nombre
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
          Apellido
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
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="mb-10 w-96 text-center flex flex-col items-center">
        <label
          className={`text-xl ${
            mode === "light" ? "text-gray-900" : "text-white"
          } `}
          htmlFor="address"
        >
          Direccion
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
          {errors.address && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="flex items-center justify-center">
        <Button className="mr-2" onClick={onSubmit} size="md" type="primary">
          Finalizar Compra
        </Button>
        <Button onClick={resetForm} size="md" type="outlinePrimary">
          Reiniciar Formulario
        </Button>
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
