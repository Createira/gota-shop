import closeIcon from "../images/close-icon.png";
import plusIcon from "../images/plus.png";
import minusIcon from "../images/minus.png";

function CartItem(props) {
  const {
    id,
    title,
    price,
    quantity,
    removeFromCart = Function.prototype,
    increaseQuantity = Function.prototype,
    decreaseQuantity = Function.prototype,
  } = props;
  return (
    <li className="cart-item">
      <div className="cart-counter">
        <img
          className="cart__btn--plus"
          src={plusIcon}
          alt="plus"
          onClick={() => increaseQuantity(id)}
        />
        {quantity}
        <img
          className="cart__btn--minus"
          src={minusIcon}
          alt="minus"
          onClick={() => decreaseQuantity(id)}
        />{" "}
      </div>
      x {title} = ${price * quantity}
      <span onClick={() => removeFromCart(id)}>
        <img src={closeIcon} className="cart-delete" alt="close icon"></img>
      </span>
    </li>
  );
}

export default CartItem;
