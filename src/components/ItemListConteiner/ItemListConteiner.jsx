import React from 'react'
import "./ItemListConteiner.css"

const ItemListConteiner = ({greeting}) => {
    return (
        <div className='aviso'>
            <h2 >{greeting}</h2>
        </div>
            
    )
}

export default ItemListConteiner