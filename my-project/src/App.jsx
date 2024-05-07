import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./LayOut";
import Contacts from "./pages/Contacts";
import MyOrders from "./pages/MyOrders";
import NoPage from "./pages/NoPage";

function App() {

  return (
   
     <BrowserRouter >
    <Routes>
      <Route path='/' element={<Layout />}> 
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/Myoders' element={<MyOrders />} />
      <Route path="*" element={<NoPage />} /></Route>
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App