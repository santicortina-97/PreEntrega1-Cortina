import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="" />
            <strong className='cantidad'> 10 </strong>
        </div>
    )
}

export default CartWidget