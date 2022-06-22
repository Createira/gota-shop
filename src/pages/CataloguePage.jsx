import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";

const CataloguePage = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch("https://629cb8983798759975da4487.mockapi.io/sneakers")
      .then((response) => response.json())
      .then((data) => {
        setGoods(data);
        setLoading(false);
      });
  }, []);
  return <main className="main">{loading ? <Preloader /> : <GoodsList goods={goods} />}</main>;
};

export default CataloguePage;
