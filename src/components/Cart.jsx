import React from "react";
import data from "../data/data";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="title">สินค้าในตระกร้า</div>
        {data.map((item, i) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className="footer">
          ยอดรวม <strong>3000</strong> บาท
        </div>
      </div>
    </div>
  );
};

export default Cart;
