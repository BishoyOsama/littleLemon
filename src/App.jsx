import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Booking from "./components/Booking"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="booking" element={<Booking/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
