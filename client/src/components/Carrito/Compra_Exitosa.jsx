import React from 'react'
import { useNavigate } from 'react-router-dom'

const Compra_Exitosa = () => {
  const navigate = useNavigate()
  const Volver = () =>{
    navigate("/home")
  }
  const Detalles = () => {
    window.history.back();
  }
  return (
    <div>
        <h2>Muchas gracias por su compra</h2>
        <h5>Detalles del pedido</h5>
        <button className='btn btn-primary' onClick={(e) => Detalles()}>Ver detalles</button>
        <button className='btn btn-primary' onClick={(e) => Volver()}>Volver al inicio</button>
    </div>

  )
}

export default Compra_Exitosa