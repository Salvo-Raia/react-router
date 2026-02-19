import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [productCard, setProductCard] = useState([null]);

  const fetchProducts = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setProductCard(res.data);
    });
  };

  useEffect(fetchProducts, []);

  return (
    <div className="row g-4 my-5">
      <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
        <img
          src={productCard.image}
          alt={productCard.title}
          className="img-fluid"
        />
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-between">
        <div>
          <h1>{productCard.title}</h1>
          <p className="text-muted my-3">{productCard.description}</p>
          <div className="d-flex justify-content-between align-items-center my-3">
            <p className="fw-bold fs-4">${productCard.price}</p>
            <p>
              <i className="bi bi-star-fill"></i> {productCard.rating?.rate} (
              {productCard.rating?.count} <span>reviews</span>)
            </p>
          </div>
        </div>
        <button className="btn btn-primary btn-lg mt-4">Add to Cart</button>
      </div>
    </div>
  );
}
