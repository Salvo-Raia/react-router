import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  return <h2>Ti mostro la scheda del prodotto {id}</h2>;
}
