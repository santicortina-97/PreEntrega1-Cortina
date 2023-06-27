import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className="detalle">
            <div>
                <img src={img} alt={nombre} />
                <h2>{nombre}</h2>
                <h3>${precio}</h3>
                <h3>ID: {id}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default ItemDetail