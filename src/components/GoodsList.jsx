import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="catalogue">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
