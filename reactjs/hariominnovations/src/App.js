import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'

import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from "./Pages/ContactUs";
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='Aboutus' element={<AboutUsPage/>}/>
        <Route path='Contactus' element={<ContactUs/>}/>
        <Route path='ProductPage' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
