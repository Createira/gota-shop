function GoodsItem(props) {
  const { id, title, price, img_1, addToBasket = Function.prototype } = props;

  return (
    <div className="catalogue__card">
      <div className="catalogue__img">
        <img src={img_1} alt={title} />
      </div>
      <span className="catalogue__card-title">{title}</span>
      <div className="catalogue__desc">
        <button
          className="btn-buy"
          onClick={() =>
            addToBasket({
              id,
              title,
              price,
            })
          }
        >
          Add to cart
        </button>
        <span className="catalogue__price">${price}</span>
      </div>
    </div>
  );
}

export default GoodsItem;
