import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Pagination from "../components/Pagination";
import Cart from "../components/Cart";
import CartList from "../components/CartList";

const CataloguePage = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [curretPage, setCurrentPage] = useState(1);
  const [goodsPerPage] = useState(10);
  const [order, setOrder] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const increaseQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQauntity = el.quantity + 1;
        return {
          ...el,
          quantity: newQauntity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decreaseQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQauntity = el.quantity - 1;
        return {
          ...el,
          quantity: newQauntity >= 0 ? newQauntity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartOpen(!isCartOpen);
  };

  useEffect(function getGoods() {
    fetch("https://629cb8983798759975da4487.mockapi.io/sneakers")
      .then((response) => response.json())
      .then((data) => {
        setGoods(data);
        setLoading(false);
      });
  }, []);

  const lastGoodIndex = curretPage * goodsPerPage;
  const firstCountryIndex = lastGoodIndex - goodsPerPage;
  const currentGood = goods.slice(firstCountryIndex, lastGoodIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="main container">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={currentGood} addToCart={addToCart} />
      )}
      <Pagination
        goodsPerPage={goodsPerPage}
        totalGoods={goods.length}
        paginate={paginate}
      />
      {isCartOpen && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
    </main>
  );
};

export default CataloguePage;
