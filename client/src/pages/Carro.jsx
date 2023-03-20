import React from 'react'
import Carrito from '../components/Carrito/Carrito';
import "../assets/css/carrito.css"

const Carro = () => {
  return (
    <div className='container lista-compra'>
        <h1>Lista de Compra</h1>
        <Carrito/>
    </div>
  )
}
export default Carro;