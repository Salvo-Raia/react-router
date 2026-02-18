import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutPage from "./pages/AboutPage"

export default function App() {
  return <BrowserRouter>
           <Routes>
             <Route Component={DefaultLayout}>
                <Route path="/" Component={HomePage}></Route>
                <Route path="/products" Component={ProductsPage}></Route>
                <Route path="/about-us" Component={AboutPage}></Route>
             </Route>
           </Routes>
         </BrowserRouter>
}
