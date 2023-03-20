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

        const [item, setItem] = useState([])

        useEffect(() => {

            const getData = async () => {
                const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/item/`);
                setItem(respuesta.item);
                console.log(item);
            }
        });

        getData();

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
            let data = item;
            if (data) {
                setCarro(JSON.parse(item))
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