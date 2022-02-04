import { useContext } from "react";
import { Context } from "../App";
import trash from "../images/icon-delete.svg";
import img from "../images/image-product-1-thumbnail.jpg";

function CartList({ item }) {
  const { cart, setCart } = useContext(Context);
  const total = 120 * item.amount;
  const deleteItem = (id) => {
    const newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };
  return (
    <div className='cartList'>
      <div className='list_img_container'>
        <img className='list_img' src={img} alt='' />
      </div>
      <div className='details_container'>
        <div className='productName'> Fall Limited Edition Sneakers</div>
        <div className='productPrice'>
          $120 X {item.amount} <span className='total'>{`$${total}`}</span>{" "}
        </div>
      </div>
      <div className='delete_icon_container'>
        <img
          onClick={() => {
            deleteItem(item.id);
          }}
          src={trash}
          alt=''
          className='delete_icon'
        />
      </div>
    </div>
  );
}

export default CartList;
