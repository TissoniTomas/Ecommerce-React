
// Hooks
import { useState } from 'react'
// Components
import { Button, Notification } from 'keep-react'

export const NotificationComponent = () => {
  //Hooks
  const [showNotification, setShowNotification] = useState(true)
//Funciones
  const onDismiss = () => {
    setShowNotification(false)
    
 setTimeout(()=>{
     setShowNotification(true)
 },1500)
  }
  return (
    <div>
      <Button onClick={onDismiss} className='bg-sky-500 text-white hover:text-blue-600' >
        Add To Cart
      </Button>
      <Notification dismiss={showNotification} >
        <Notification.Body>
          <Notification.Title>Producto Agregado con Exito</Notification.Title>
       
          <Notification.Container className="!mt-6 flex gap-3">
           
          
          </Notification.Container>
        </Notification.Body>
      </Notification>
    </div>
  )
}
