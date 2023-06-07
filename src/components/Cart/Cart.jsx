import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "../Cart/Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartiItem";
function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

const cartItemRemoveHandler =id=>{};
const cartItemAddHandler=item =>{

}

const orderConfirmHandler =()=>{
      alert('Order Confirmed')
}

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler (null,item)}
        />
      ))}
    </ul>
 );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderConfirmHandler}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
