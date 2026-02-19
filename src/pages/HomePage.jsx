import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="welcome text-center my-4 alert alert-success">
        <h1>Welcome to FakeStore!</h1>
        <p>
          Where ideas turn into products you can trust. <br />
          We focus on simplicity, quality, and a seamless shopping experience.
          Browse freely, explore our collection, and discover items designed to
          make everyday life better. <br />
          Your next favorite product might be just one click away.
        </p>
      </div>
      <div className="products-showcase">
        <h2 className="h3 my-4">Give a look to our brand new products!</h2>
      </div>
    </>
  );
}
