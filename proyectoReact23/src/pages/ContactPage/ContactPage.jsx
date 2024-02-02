import { useState, useContext } from "react";
import { ModeContext } from "../../context/modeContext";

import { Label, TextInput } from "keep-react";
import { Button } from "keep-react";

import { Envelope } from "phosphor-react";
import { Dropdown } from "keep-react";
import { Textarea } from "keep-react";

const ContactPage = () => {
  const [option, setOption] = useState("Pick a option");
  const { mode } = useContext(ModeContext);

  const SubmitForm = () => {};

  return (
    <div
      className={`flex flex-col items-center ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } lg:mt-48`}
    >
      <h1
        className={`font-Montserrat text-5xl my-10 ${
          mode === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        Contacta con nuestro equipo
      </h1>
      <p
        className={`text-center font-Inter my-10 w-72 ${
          mode === "light" ? "text-gray-900" : "text-gray-400"
        }`}
      >
        ¡Tus mensajes a través de nuestro formulario de contacto son vitales!
        Nos permiten abordar rápidamente tus necesidades, garantizando una
        experiencia fluida y satisfactoria. Tu aportación directa moldea
        nuestros servicios, resaltando nuestro compromiso con tu satisfacción.
        Valoramos tu participación, ya que fortalece nuestra relación y nos
        ayuda a servirte mejor.
      </p>
      <form action="contact" method="post">
        <div>
          <Label htmlFor="#id-2" value="Your Name" className="text-sky-400" />
          <TextInput
            id="#id-2"
            placeholder="Your Name"
            color="info"
            sizing="md"
            type="text"
            withBg={true}
          />
        </div>
        <div>
          <Label
            htmlFor="#id-2"
            value="Your Surname"
            className="text-sky-400"
          />
          <TextInput
            id="#id-2"
            placeholder="Your Surname"
            color="info"
            sizing="md"
            type="text"
            withBg={true}
          />
        </div>
        <div>
          <Label
            className="font-Inter font-bold text-sky-400"
            htmlFor="#id-2"
            value="Your Email"
          />
          <TextInput
            id="#id-2"
            placeholder="Your Email"
            color="info"
            sizing="md"
            type="text"
            withBg={true}
            addon={<Envelope size={20} color="#5E718D" />}
            addonPosition="left"
          />
        </div>
        <div>
          <Label
            htmlFor="#id-2"
            value="Reason of your contact"
            className="text-sky-400"
          />
          <Dropdown
            label={option}
            size="sm"
            type="primary"
            dismissOnClick={true}
          >
            <Dropdown.Item onClick={() => setOption("Client Attention")}>
              Atencion al Cliente
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("Refund")}>
              Reembolsos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("Delivery")}>
              Entrega de compras y codigos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("Other")}>
              Otras consultas
            </Dropdown.Item>
          </Dropdown>
        </div>
        <Label
          htmlFor="#id-2"
          value="Leave your comment"
          className="text-sky-400"
        />
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          withBg={true}
          color="info"
          border={true}
          rows={4}
        />
        <div className="flex mt-5 justify-around w-72">
          <Button size="md" type="primary" onSubmit={SubmitForm}>
            Enviar Formulario
          </Button>
          <Button type="reset" size="md" color="error">
            Reiniciar formulario
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
