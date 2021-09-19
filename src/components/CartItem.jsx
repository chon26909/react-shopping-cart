import React from 'react';
import minus from "../assets/icons/minus.svg";
import plus from "../assets/icons/plus.svg";
import remove from "../assets/icons/delete.svg";
import { MyCartContext } from '../management/context';

const CartItem = ({name,image_url,price,quantity,id}) => {

    const {removeItem, toggleQuantity} = MyCartContext();

    return (
        <div className="product">
            <div className="product-image">
                <img src={image_url} alt="" />
            </div>
            <div className="product-desc">
                <div>{name}</div>
                <div>ราคา {price} บาท</div>
            </div>
            <div className="quantity">
                <button onClick={() => toggleQuantity(id,"increment")}>
                    <img src={plus} alt="" />
                </button>
                <input type="text" value={quantity} disabled/>
                <button onClick={() => toggleQuantity(id, "decrement")}>
                    <img src={minus} alt="" />
                </button>
            </div>
            <div className="total-price">
                {price * quantity} 
            </div>
            <button className="remove" onClick={() => removeItem(id)}>
                <img src={remove} alt="" />
            </button>
        </div>
    )
}
export default CartItem
