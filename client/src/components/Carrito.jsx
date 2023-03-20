import React, { useContext, useEffect, useState } from "react"
import { dataContext } from "../Context/DataContext"
import carrito from "../../assets/img/cart.svg"
import img from "../../assets/img/celular.jpg"
import eliminar from "../../assets/img/delete.svg"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
const Carrito = () => {
  const { carro, setCarro, cantidad, setCantidad } = useContext(dataContext)
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  let precio_total = 0;

  useEffect(() => {
    (carro.map(product => {
      precio_total = (product.price * product.quantity) + precio_total
      setTotal(precio_total)
    }))
  }, [carro])

  const eliminarElemento = (product) => {
    const results = carro.filter(
      item => item.id !== product.id
    )
    alert("Eliminado")
    setCarro(results);
  }
  const cambiarCantidad = (e, product) => {
    if (e === "sumar") {
      let sumar = 1
      let valor = product.quantity
      const actualizar = carro.findIndex(
        item => item.id === product.id
      )
      let newTodos = [...carro]
      newTodos[actualizar] = { ...newTodos[actualizar], quantity: Number(valor + sumar) }
      setCarro(newTodos)

    } else if (e === "restar") {
      let restar = 1
      let valor = product.quantity
      const actualizar = carro.findIndex(
        item => item.id === product.id
      )
      if (valor !== 1) {
        let newTodos = [...carro]
        newTodos[actualizar] = { ...newTodos[actualizar], quantity: Number(valor - restar) }
        setCarro(newTodos)
      }
    } else {
      const actualizar = carro.findIndex(
        item => item.id === product.id
      )
      if (Number(e.target.value) === 0) {
        let newTodos = [...carro]
        newTodos[actualizar] = { ...newTodos[actualizar], quantity: 1 }
        setCarro(newTodos)
      } else {
        let newTodos = [...carro]
        newTodos[actualizar] = { ...newTodos[actualizar], quantity: Number(e.target.value) }
        setCarro(newTodos)
      }
    }
  }
  let local_price = {
    amount: total,
    currency: 'PYG'
  }
  const pagarCompra = () => {
    axios.post('http://localhost:8000/create-charge', {
      local_price
    })
      .then(res => {
        const url = res.data.hosted_url
        setCarro([])
        location.href = url
      })
    // .catch(err => console.log(err.data))
  }
  return (
    carro[0] !== undefined ? <div className="row">
      <table className="col-md-12">
        <thead>
          <tr>
            <td className="col-md-2"><strong>Producto</strong></td>
            <td className="col-md-2"><strong>Descripcion</strong></td>
            <td className="col-md-2"><strong>Precio</strong></td>
            <td className="col-md-2"><strong>Cantidad</strong></td>
            <td className="col-md-2"><strong>Total</strong></td>
            <td className="col-md-2"></td>
          </tr>
        </thead>
        {
          carro.map(product => (
            <tbody key={product.id}>
              <tr>
                <td className="col-md-2">
                  <img className="img-cart" src={img} alt={product.nameProduct} />
                  {product.nameProduct}
                </td>
                <td className="col-md-2">
                  {product.descripcion}
                </td>
                <td className="col-md-2">
                  GS. {product.price.toLocaleString("es-ES")}
                </td>
                <td className="col-md-2">
                  <div className="cambiarCantidad">
                    <button className="res" onClick={(e) => cambiarCantidad("restar", product)}>-</button>
                    <input type="text" min="1" minLength="1" max="10" onChange={(e) => cambiarCantidad(e, product)} value={product.quantity} />
                    <button className="sum" onClick={(e) => cambiarCantidad("sumar", product)}>+</button>
                  </div>
                </td>
                <td className="col-md-2">
                  GS. {(product.price * product.quantity).toLocaleString("es-ES")}
                </td>
                <td className="col-md-2">
                  <img src={eliminar} className="eliminar" onClick={(e) => eliminarElemento(product)} />
                </td>
              </tr>
            </tbody>
          ))
        }
      </table>
      <hr />
      <div className="total col-md-6">
        <h4>Total: {total.toLocaleString("es-ES")} de Guaraníes</h4>
        <button className="btn btn-primary" onClick={(e) => pagarCompra()}>Finalizar compra</button>
        <Link to="/home" className="btn-comprar"><button className="btn btn-primary">Seguir comprando</button></Link>
      </div>
    </div> :
      <div>
        <p className='div-cart'>
          <Link className='link-carrito'><img className='carrito' src={carrito} />El carrito está vacío</Link>
        </p>
        <br />
        <button className="btn btn-primary"><Link to="/home" className="btn-comprar">Ir a la tienda</Link></button>
      </div>
  )
}
export default Carrito