import React, { useContext, useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cartImg from "../images/icon-cart2.svg";
import { Context } from "../App";

function Details() {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(Context);
  const add = () => {
    const newArr = [...cart];
    newArr.push({ id: cart.length + 1, amount: count });
    setCart(newArr);
  };
  return (
    <div className='main_details'>
      <p className='main_start'>Sneaker Company</p>
      <h1 className='main_head'> Fall Limited Edition Sneakers</h1>
      <p className='main_content'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <h2 style={{ display: "inline" }}> $125.00 </h2>
      <span className='badge'>50%</span>
      <div className='formerPrice'>$250.00</div>
      <div className='main_last'>
        <div className='count'>
          <img
            onClick={() => setCount(count - 1)}
            className='count_icon'
            src={minus}
            alt=''
          />
          {count}
          <img
            onClick={() => setCount(count + 1)}
            className='count_icon'
            src={plus}
            alt=''
          />
        </div>
        <div className='btn_container'>
          <button onClick={() => add()} className='add_btn'>
            {" "}
            <img className='cart_icon' src={cartImg} alt='' /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
