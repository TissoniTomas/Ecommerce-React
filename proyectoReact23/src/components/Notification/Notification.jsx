
// Hooks
import { useState } from 'react'
// Components
import { Button, Notification } from 'keep-react'



export const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  setTimeout(()=> setIsOpen(false),3000)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Agregar al Carrito</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <Notification.Body>
          <Notification.Content>
            <Notification.Title>Producto Agregado con Exito</Notification.Title>
           
          </Notification.Content>
         
        </Notification.Body>
      </Notification>
    </div>
  )
}