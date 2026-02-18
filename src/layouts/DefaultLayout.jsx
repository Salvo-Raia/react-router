import { Outlet } from "react-router-dom"
import Header from "../assets/components/Header"

export default function DefaultLayout () {
    return ( <>
                <Header />
                <main className="container">
                <Outlet />
                </main>
             </>
        )
}