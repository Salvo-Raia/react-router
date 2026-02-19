import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [productCard, setProductCard] = useState([]);

  const fetchProducts = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setProductCard(res.data);
    });
  };

  useEffect(fetchProducts, []);

  return;
}
