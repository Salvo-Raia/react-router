import axios from "axios"
import { useState, useEffect } from "react"
const fakeStoreProducts = "https://fakestoreapi.com/products"

export default function ProductsPage () {
    const [fakeProducts, setFakeProducts] = useState ([""]);
    const fetchProducts = () => {
        axios.get(fakeStoreProducts)
             .then((res) => {
                console.log(res.data);
                setFakeProducts(res.data)
             })
    }

    useEffect(fetchProducts, []);

    return <>
           <p>Varie card prodotti Coming soon</p>
           </>
}