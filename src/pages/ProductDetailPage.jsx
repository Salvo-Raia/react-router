import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const fakeStoreProducts = "https://fakestoreapi.com/products";

export default function ProductDetailPage() {
  const { id } = useParams();

  const fetchProducts = () => {
    axios.get(fakeStoreProducts).then((res) => {
      console.log(res.data[id - 1]);
    });
  };

  useEffect(() => fetchProducts);

  return <h2>Ti mostro la scheda del prodotto </h2>;
}
