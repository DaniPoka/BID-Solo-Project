import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [carro, setCarro] = useState([]);
    const [cantidad, setCantidad] = useState(0)
    useEffect(() => {
        const cantidad = carro.map(
            item => item.quantity
        )
        let suma = 0;
        cantidad.forEach(function (numero) {
            suma = suma + numero;
        });
        console.log(cantidad)
        console.log(suma)
        setCantidad(suma)
    }, [carro])
    useEffect(() => {
        let cantidadv1 = JSON.parse(localStorage.getItem("cantidad"))
        if (cantidadv1) {
            setCantidad(cantidadv1)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("cantidad", JSON.stringify(cantidad))
    }, [cantidad])
    useEffect(() => {
        let data = localStorage.getItem("producto");
        if (data) {
            setCarro(JSON.parse(data))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("producto", JSON.stringify(carro));
    }, [carro])
    return (
        <dataContext.Provider value={{ carro, setCarro, cantidad, setCantidad }}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider;