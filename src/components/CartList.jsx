import CartItem from "./CartItem";
import closeIcon from "../images/close-icon.png";

function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    increaseQuantity,
    decreaseQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="cart-list">
      <img
        src={closeIcon}
        className="cart-close"
        alt="close icon"
        onClick={handleCartShow}
      ></img>
      <li className="cart-title">Cart</li>
      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))
      ) : (
        <li className="cart-item">Cart is empty...</li>
      )}
      <li className="cart-price">Total: {totalPrice} $</li>
    </ul>
  );
}

export default CartList;
