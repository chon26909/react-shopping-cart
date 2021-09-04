import React from 'react'
import data from "../data/data";
import CartItem from './CartItem';
const Cart = () => {
    return (
        <div className="shopping-cart">
            <div className="title">
                สินค้าในตระกร้า
            </div>
            {
                data.map((item,i) => {
                    return (
                        <CartItem key={item.id} {...item}/>
                    )
                })
            }
            <div className="footer">
                ยอดรวม 3000 บาท
            </div>
        </div>
    )
}

export default Cart
