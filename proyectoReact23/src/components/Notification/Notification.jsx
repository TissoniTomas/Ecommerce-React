

import { useState } from 'react'
import { Button, Notification } from 'keep-react'

export const NotificationComponent = () => {
  const [showNotification, setShowNotification] = useState(true)

  const onDismiss = () => {
    setShowNotification(false)
    
 setTimeout(()=>{
     setShowNotification(true)
 },2000)
  }
  return (
    <div>
      <Button onClick={onDismiss} className='bg-sky-500 text-white' >
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
