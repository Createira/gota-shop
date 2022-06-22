function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart">
      <i className="header-icon shopping_cart"></i>
      {quantity ? <span className="cart-icon">{quantity}</span> : null}
    </div>
  );
}

export default Cart;


