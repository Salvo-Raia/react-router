import { BrowserRouter, createBrowserRouter } from "react-router-dom"

export default function App() {
  return <BrowserRouter>
           <Routes>
             <Route path="/" Component={HomePage}></Route>
           </Routes>
         </BrowserRouter>
}
