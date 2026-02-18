import { NavLink } from "react-router-dom"

export default function Header () {
    return <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="/">FakeStore</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about-us" className="nav-link">Products</NavLink>
        <NavLink to="/products" className="nav-link">About us</NavLink>
      </div>
    </div>
  </div>
</nav>
    </header>
}