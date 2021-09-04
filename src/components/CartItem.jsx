import React from 'react';
import minus from "../assets/icons/minus.svg";
import plus from "../assets/icons/plus.svg";
import remove from "../assets/icons/delete.svg";

const CartItem = ({name,image_url,price,quantity}) => {
    return (
        <div className="product">
            <div className="product-image">
                <img src={image_url} alt="" />
            </div>
            <div className="product-desc">
                <div>{name}</div>
                <div>ราคา {price}</div>
            </div>
            <div className="quantity">
                <button>
                    <img src={plus} alt="" />
                </button>
                <input type="text" value={quantity} disabled/>
                <button>
                    <img src={minus} alt="" />
                </button>
            </div>
            <div className="total-price">
                {price * quantity}
            </div>
            <div className="remove">
                <img src={remove} alt="" />
            </div>
        </div>
    )
}
export default CartItem
