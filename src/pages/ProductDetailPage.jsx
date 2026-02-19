import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetailPage() {
  const { id } = useParams();
  const currentPageId = parseInt(id);

  const [productCard, setProductCard] = useState([]);
  const redirect = useNavigate();

  const fetchProducts = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setProductCard(res.data);
    });
  };

  useEffect(fetchProducts, [id]);

  //   if (!productCard) {
  //     redirect("/products");
  //   }

  return (
    <div className="detail-card row g-4 border rounded bg-light p-4 my-5">
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
        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-warning"
            className="btn btn-warning"
            onClick={() => redirect("/products/" + (currentPageId - 1))}
            disabled={currentPageId <= 1}
          >
            Articolo Precedente
          </button>
          <button className="btn btn-primary">Add to Cart</button>
          <button
            className="btn btn-warning"
            onClick={() => redirect("/products/" + (currentPageId + 1))}
            disabled={currentPageId >= 20}
          >
            Prossimo articolo
          </button>
        </div>
      </div>
    </div>
  );
}
