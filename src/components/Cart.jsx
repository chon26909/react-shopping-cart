import React from "react";
import { MyCartContext } from "../management/context";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart, total,formatNumber } = MyCartContext();
  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="shopping-cart">
          <div className="text-center">ไม่มีสินค้าในตะกร้า</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="shopping-cart">
          <div className="title">สินค้าในตระกร้า</div>
          {cart.map((item, i) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <hr />
          <div className="footer">
            ยอดชำระทั้งสิ้น <strong>{formatNumber(total)}</strong> บาท
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
