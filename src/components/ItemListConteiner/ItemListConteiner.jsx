import "./ItemListConteiner.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"



const ItemListConteiner = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() =>{

        const functionProducto = idCategoria ? getCategoria : getProductos;
        functionProducto(idCategoria)
        .then(respuesta=> setProductos(respuesta))
        .catch(error => console.log(error))
    }, [idCategoria] )

    return (
        <div className='aviso'>
            <h2>Relojes</h2>
            <ItemList productos={productos}/>
        </div>
            
    )
}

export default ItemListConteiner