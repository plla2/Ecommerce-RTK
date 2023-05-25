import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Cart, Home, Category } from "./pages/index"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
