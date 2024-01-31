import  {  useState, useContext } from "react";
import { ModeContext } from "../../context/modeContext";

import { Label, TextInput } from "keep-react";
import { Button } from "keep-react";

import { Envelope } from "phosphor-react";
import { Dropdown } from "keep-react";
import { Textarea } from "keep-react";



const ContactPage = () => {

  const [option, setOption] = useState("Pick a option");
  const {mode, setMode} = useContext(ModeContext)
  

  const SubmitForm = () =>{

  }

  return (
    <div className={`flex flex-col items-center ${mode === "light" ? "bg-white" : "bg-gray-900"} mt-48`}>
      <h1 className={`font-Montserrat text-5xl my-10 ${mode === "light" ? "text-gray-900" : "text-white" }`}>Contact Us</h1>
      <p className={`text-center font-Inter my-10 w-72 ${mode === "light" ? "text-gray-900" : "text-gray-400"}`}>
        Your messages through our contact form are vital! They allow us to
        swiftly address your needs, ensuring a seamless and satisfying
        experience. Your direct input shapes our services, emphasizing our
        commitment to your satisfaction. We value your engagement, as it
        strengthens our relationship and helps us serve you better.
      </p>
      <form action="contact" method="post">
        <div>
          <Label htmlFor="#id-2" value="Your Name" className="text-sky-400"/>
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
          <Label htmlFor="#id-2" value="Your Surname" className="text-sky-400" />
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
          <Label htmlFor="#id-2" value="Reason of your contact" className="text-sky-400"/>
          <Dropdown
            label={option}
            size="sm"
            type="primary"
            dismissOnClick={true}
          >
            <Dropdown.Item onClick={() => setOption("Client Attention")}>
              Client Attention
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("Refund")}>
              Refund
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("Delivery")}>
              Delivery
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOption("Other")}>
              Other
            </Dropdown.Item>
          </Dropdown>
        </div>
        <Label htmlFor="#id-2" value="Leave your comment" className="text-sky-400"/>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          withBg={true}
          color="info"
          border={true}
          rows={4}
        />
        <div className="flex mt-5 justify-around w-72">

        <Button size="md" type="primary" onSubmit={SubmitForm}>Send Form</Button>
        <Button type="reset" size="md" color="error">Reset Form</Button>
      
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
