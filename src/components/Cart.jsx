import CartImage from "../images/cart.png"

function Cart(props) {
  const { quantity = 0, handleCartShow = Function.prototype } = props;
  return (
    <div className="cart" onClick={handleCartShow}>
      <img className="cart-img" src={CartImage} alt="shopping cart" />
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
