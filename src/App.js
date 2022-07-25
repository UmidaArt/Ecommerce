import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import Cart from "./Pages/Cart/Cart";
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/cart" element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
