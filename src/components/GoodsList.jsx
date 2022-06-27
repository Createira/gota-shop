import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addToCart = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="catalogue">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToCart}/>
      ))}
    </div>
  );
}

export default GoodsList;
