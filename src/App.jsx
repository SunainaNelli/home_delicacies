import React, { useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { PicklesProvider, PicklesContext } from './context/PicklesContext';


import Header from './components/header/header';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import ProductDetail from './components/productdetail/ProductDetail';
import Payment from './components/Payments/payment';
import CategorySection from './components/categorysection/categorysection';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/footer';



const PicklesCategory = React.memo(() => {
  const { pickles } = useContext(PicklesContext);
  return <CategorySection title='Pickles' items={pickles} />;
});

const PodiCategory = React.memo(() => {
  const { podi } = useContext(PicklesContext);
  return <CategorySection title='Podi' items={podi} />;
});

const SnacksCategory = React.memo(() => {
  const { snacks } = useContext(PicklesContext);
  return <CategorySection title='Evening snacks' items={snacks} />;
});


function App() {
  return (
    <PicklesProvider>
      <CartProvider>
        <Router>
          <Header/>
          
          <Navbar/>
          <Routes>
            <Route path='/home_delicacies' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/home/pickles' element={<PicklesCategory/>}/>
            <Route path='/home/podi' element={<PodiCategory/>}/>
            <Route path='/home/snacks' element={<SnacksCategory/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='product/:product'element={<ProductDetail />}/>
            <Route path='/payment' element={<Payment/>}/>
          </Routes>
          <Footer/>
        </Router>
        </CartProvider>
    </PicklesProvider>
    
     
     
    
  );
}






export default App;
