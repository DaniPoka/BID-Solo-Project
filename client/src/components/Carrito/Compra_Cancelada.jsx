import React from 'react'
import { useNavigate } from 'react-router-dom'

const Compra_Cancelada = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate("/home")
  }, 6000);
  return (
    <div>Has cancelado el pago, serás redirigido al sitio principal</div>
  )
}

export default Compra_Cancelada