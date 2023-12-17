import React from 'react'
import Header from "./components/navBar/navBar"
import MainCardProducts from './components/itemListContainer/itemListContainer'
import bocaTitular from "./assets/Remeras/boca.png"
import riverTitular from "./assets/Remeras/River-tit.jpg"
import independienteTitular from "./assets/Remeras/Independiente.png"
import velezItaliana from "./assets/Remeras/Velez-italiana.jpg"
import newellsTitular from "./assets/Remeras/Newells.jpg"
import racingTitular from "./assets/Remeras/Racing.jpg"
import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <main className='flex flex-col justify-center items-center'>
    <h1 className='text-5xl text-red-800 font-bold m-20'>PRODUCTOS DESTACADOS</h1>

    <div className="grid grid-cols-3 grid-rows-2 gap-6 ">


    <MainCardProducts  imgCard={bocaTitular} titleCard="Boca Juniors Titular 22/23" textCard = "Abraza la mística azul y oro con la remera titular de los Xeneises 22/23. Más que una camiseta, es tu bandera en la Bombonera. Sentí la pasión, dejá la vida en cada pelota y celebrá el coraje de ser parte de la Mitad mas Uno."/>
    <MainCardProducts  imgCard={riverTitular} titleCard="River Plate Titular 22/23" textCard = "Conquistá la cancha con la remera titular de River Plate 22/23. Inspirada en la victoria y el orgullo, es tu armadura para dejar todo por la banda. Vestí los colores que representan la grandeza y el espíritu indomable de los hinchas Millonarios."/>
    <MainCardProducts  imgCard={independienteTitular} titleCard="C.A Independiente Titular 22/23" textCard = "Abrazá el rojo pasión con la remera titular del Rey de Copas. Un homenaje a la historia de triunfos, es tu símbolo para dejar la vida en cada partido. Unite a la familia del Rojo y llevá a los diablos a donde sea que vayas."/>
    <MainCardProducts  imgCard={velezItaliana} titleCard="Velez Sarsfield Edicion Italiana 22/23" textCard = "Deslumbrate con la elegancia de El Fortín con la tercera remera edicion Italiana. Un diseño que combina estilo y elegancia, esta camiseta honra los inicios del club de Liniers. No te la pierdas, es edicion limitada."/>
    <MainCardProducts  imgCard={newellsTitular} titleCard="C.A Newell's Old Boys Titular 22/23" textCard = "Rendí homenaje a la nobleza leprosa con la remera titular de La Lepra. Con detalles emblemáticos y un diseño atemporal, esta camiseta te conecta con las raíces del club. Unite a la tradición y llevá el legado de Newell's con orgullo y pasión, dejando la vida en cada rincón del campo."/>
    <MainCardProducts  imgCard={racingTitular} titleCard="Racing Club Titular 22/23" textCard = "Acelerá con la remera titular de La Academia. Diseñada para reflejar la audacia y la garra del equipo, es tu escudo para dejar la vida en cada partido. Llevá el aguante de Racing con estilo y devoción."/>
    </div>
    </main>

    </>
    
      
  )
}

export default App