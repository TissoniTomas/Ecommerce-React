import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(sessionStorage.getItem("theme"));
  return (
    <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>
  );
};

/**
 * 1- CREAMOS EL CONTEXTO UTILIZANDO EL HOOK CREATECONTEXT
 * 2- CREAR EL COMPONENTE PROVIDER
 * 3- RETORNAR NUESTRO CONTEXT CON .PROVIDER
 * 4- PASAR CHILDREN COMO HIJO DE MODECONTEXT.PROVIDER
 * 5- IMPORTAR MODEPROVIDER Y ENVOLVER APP
 * 6- UTILIZAR LA PROP VALUE PARA PASAR DATA ENTRE NUESTROS COMPONENTES
 * 7- PARA RECUPERAR DATA DEL CONTEXTO: USAR USECONTEXT Y LLAMAR AL CONTEXTO EN EL COMPONENTE
 *
 */
