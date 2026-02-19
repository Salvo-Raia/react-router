import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="products-showcase">
        <h2 className="h3 my-4">Give a look to our brand new products!</h2>

        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
