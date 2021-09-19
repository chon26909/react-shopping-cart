import React from "react";
import { MyCartContext } from "../management/context";

const HeaderCart = () => {
  const {amount} = MyCartContext();
  return (
    <div className="btn-cart">
      <span>ตะกร้าสินค้า</span>
      <span className="badge">{amount}</span>
    </div>
  );
};

export default HeaderCart;
