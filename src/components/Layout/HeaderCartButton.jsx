import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon.jsx";
import CartContext from "../../store/cart-context.jsx";
import "./HeaderCartButton.css";

function HeaderCartButton(props) {
    useContext(CartContext)
   const cartCtx = useContext(CartContext)

//    0 is a startting value in array reducer method

   const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber +item.amount;
   },0);
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">
        {numberOfCartItems}
        </span>
    </button>
  );
}

export default HeaderCartButton;
