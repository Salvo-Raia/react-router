import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="products-showcase">
        <h2 className="h3 my-4">Give a look to our brand new products!</h2>

        <NavLink to="/products" className="text-decoration-none">
          <div className="card">
            <img
              src="src\assets\img\Shop.jpg"
              className="card-img-top"
              alt="FakeStore Shop"
            />
            <div className="card-body bg-success text-center">
              <h5 className="card-title">Find out our product gallery</h5>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}
