import logo from "../images/logo.svg";
import cartimg from "../images/icon-cart.svg";
import DP from "../images/image-avatar.png";
import bars from "../images/icon-menu.svg";
import CartList from "./CartList";
import { useContext, useState } from "react";
import { Context } from "../App";
function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cart, setOpenMenu } = useContext(Context);
  const total = cart.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <header className='header'>
      <div className='header_container'>
        <img
          onClick={() => {
            setOpenMenu(true);
          }}
          className='bars'
          src={bars}
          alt=''
        />

        <div className='first'>
          <div className='logo_container'>
            <img className='logo' src={logo} alt='' />
          </div>

          <nav className='nav'>
            <ul className='nav_links_container'>
              <li className='nav_link_container'>
                <p className='nav_link'>Collections</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>Men</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>Women</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>About</p>
              </li>
              <li className='nav_link_container'>
                <p className='nav_link'>Contact</p>
              </li>
            </ul>
          </nav>
        </div>

        <div className='second'>
          <div
            onClick={() => setShowCart(!showCart)}
            className='cart_container'
          >
            <div className='cart_count'>{total}</div>
            <img className='cart' src={cartimg} alt='' />
          </div>

          <div className='avatar_container'>
            <img className='avatar' src={DP} alt='' />
          </div>
        </div>
      </div>
      <div
        style={{ display: showCart ? "block" : "none" }}
        className='show_cart'
      >
        <div className='show_cart_head'>
          <h3>Cart</h3>
        </div>
        {cart.length <= 0 ? (
          <div className='no_item'>Your cart is empty</div>
        ) : (
          <>
            {cart.map((item) => (
              <CartList key={item.id} item={item} />
            ))}
            <div className='show_Cart_btn_container'>
              <button className='cart_btn'>Checkout</button>
            </div>{" "}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
