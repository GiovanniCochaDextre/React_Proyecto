import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Category, Checkout, Home, Item } from '../pages';
import { NavBar } from '../components';


//rafc iniciará un componente funcional con arrow function y export
//rafce iniciara un componente funcional con arrow function y  export default

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item/:id' element={<Item />} />
            <Route path='/category/:categoryId' element={<Category />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </BrowserRouter>
  );
};
