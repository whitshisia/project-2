import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./LayOut";
import Contacts from "./pages/Contacts";
import MyOrders from "./pages/MyOrders";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Menu from "./pages/Menu";
// import More from "./pages/More";
import OnlineOrders from "./pages/OnlineOrders";
// import MyComponent from "./components/MyComponent";

function App() {

  return (
   
     <BrowserRouter >
    <Routes>
      <Route path='/' element={<Layout />}> 
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='Myorders' element={<MyOrders />} />
      <Route path="*" element={<NoPage />} /></Route>
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      {/* <Route path='/more' element={<More />} /> */}
      <Route path='/onlineorders' element={<OnlineOrders />} />
      {/* <Route path='/mycomponent' element={<MyComponent />} /> */}
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App